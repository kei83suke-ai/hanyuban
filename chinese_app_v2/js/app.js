// State management
const appState = {
  currentView: 'home',
  currentGenre: null,
  currentCategory: 'All',
  quizMode: null,
  currentPage: 1,
  itemsPerPage: 50,
  searchQuery: null,
  
  navigate(view, genreId = null, quizMode = null, searchQuery = null) {
    this.currentView = view;
    if (genreId && this.currentGenre !== genreId) {
      this.currentGenre = genreId;
      this.currentCategory = 'All'; 
    }
    this.quizMode = quizMode;
    this.currentPage = 1;
    this.searchQuery = searchQuery;
    render();
  }
};

// Utilities
function createPaginationDOM(currentPage, totalPages, renderCallback) {
  const pageNav = document.createElement('div');
  pageNav.className = 'pagination';
  pageNav.innerHTML = `
    <button class="btn btn-sm btn-outline" ${currentPage === 1 ? 'disabled' : ''}>← 前</button>
    <span>ページ ${currentPage} / ${totalPages}</span>
    <button class="btn btn-sm btn-outline" ${currentPage === totalPages ? 'disabled' : ''}>次 →</button>
  `;
  const buttons = pageNav.querySelectorAll('button');
  buttons[0].onclick = () => { appState.currentPage--; renderCallback(); };
  buttons[1].onclick = () => { appState.currentPage++; renderCallback(); };
  return pageNav;
}

window.playAudio = function(text) {
  if (!text) return;
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  
  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    utterance.rate = 0.85;
    utterance.pitch = 1.0;
    const voices = window.speechSynthesis.getVoices();
    const zhVoice = voices.find(v => v.lang.startsWith('zh') && v.name.includes('Google'))
                 || voices.find(v => v.lang === 'zh-CN')
                 || voices.find(v => v.lang.startsWith('zh'));
    if (zhVoice) utterance.voice = zhVoice;
    window.speechSynthesis.speak(utterance);
  };
  
  if (window.speechSynthesis.getVoices().length > 0) {
    speak();
  } else {
    window.speechSynthesis.onvoiceschanged = speak;
  }
};

window.playEffect = function(type) {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const ctx = new AudioContext();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  
  if (type === 'correct') {
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.setValueAtTime(1108.73, ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.3);
  } else if (type === 'wrong') {
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(250, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.2);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.3);
  }
};

// UI Renderers
function render() {
  const content = document.getElementById('content');
  const navActions = document.getElementById('nav-actions');
  content.innerHTML = '';
  navActions.innerHTML = '';

  if (appState.currentView === 'home') {
    content.appendChild(renderHome());
  } else if (appState.currentView === 'flashcards') {
    navActions.innerHTML = `<button class="btn btn-outline" onclick="appState.navigate('home')">🏠 ホームへ</button>`;
    content.appendChild(renderFlashcards(appState.currentGenre));
  } else if (appState.currentView === 'quiz') {
    navActions.innerHTML = `<button class="btn btn-outline" onclick="appState.navigate('home')">🏠 ホームへ</button>`;
    content.appendChild(renderQuiz(appState.currentGenre, appState.quizMode));
  }
}

// 1. Home Screen
function renderHome() {
  const div = document.createElement('div');
  div.className = 'home-container';
  
  const title = document.createElement('h1');
  title.innerHTML = '学習するジャンルを選んでください<br><span class="subtitle">Select a genre to study</span>';
  div.appendChild(title);

  const grid = document.createElement('div');
  grid.className = 'genre-grid';

  genresInfo.forEach(genre => {
    const card = document.createElement('div');
    card.className = 'genre-card';
    card.style.borderTop = `6px solid ${genre.color}`;
    
    card.innerHTML = `
      <div class="genre-icon">${genre.icon}</div>
      <h2>${genre.label}</h2>
      <p>${genre.enLabel} (${db[genre.id] ? db[genre.id].length : 0}語)</p>
    `;
    
    const actions = document.createElement('div');
    actions.className = 'genre-actions';
    
    const btnLearn = document.createElement('button');
    btnLearn.className = 'btn btn-primary w-full';
    btnLearn.innerHTML = '📖 単語一覧・暗記カード';
    btnLearn.onclick = (e) => { e.stopPropagation(); appState.navigate('flashcards', genre.id); };
    actions.appendChild(btnLearn);

    const quizLabel = document.createElement('p');
    quizLabel.className = 'quiz-label';
    quizLabel.textContent = '▼ テスト形式を選ぶ ▼';
    actions.appendChild(quizLabel);

    const quizModes = document.createElement('div');
    quizModes.className = 'quiz-modes';
    
    const btn4Choice = document.createElement('button');
    btn4Choice.className = 'btn btn-secondary btn-sm';
    btn4Choice.textContent = '4択クイズ';
    btn4Choice.onclick = (e) => { e.stopPropagation(); appState.navigate('quiz', genre.id, '4choice'); };
    
    const btnListening = document.createElement('button');
    btnListening.className = 'btn btn-secondary btn-sm';
    btnListening.textContent = 'リスニング';
    btnListening.onclick = (e) => { e.stopPropagation(); appState.navigate('quiz', genre.id, 'listening'); };

    quizModes.appendChild(btn4Choice);
    quizModes.appendChild(btnListening);
    actions.appendChild(quizModes);
    
    card.appendChild(actions);
    grid.appendChild(card);
  });

  div.appendChild(grid);
  return div;
}

// 2. Flashcards Screen
function renderFlashcards(genreId) {
  const div = document.createElement('div');
  div.className = 'flashcards-container';
  
  const genreInfo = genresInfo.find(g => g.id === genreId);
  const allWords = db[genreId] || [];
  
  const categories = [...new Set(allWords.map(w => w.category || 'その他'))];
  const hasCategories = categories.length > 1 || (categories.length === 1 && categories[0] !== 'その他');

  const words = appState.currentCategory === 'All' 
    ? allWords 
    : allWords.filter(w => (w.category || 'その他') === appState.currentCategory);

  const header = document.createElement('div');
  header.className = 'view-header';
  
  let headerHTML = `<h2>${genreInfo.icon} ${genreInfo.label} (${genreInfo.enLabel})</h2>
    <p>カードをタップすると裏返り、中国語の音声が流れます。</p>`;
  
  if (hasCategories) {
    let options = `<option value="All">すべてのカテゴリー (All)</option>`;
    categories.forEach(cat => {
      options += `<option value="${cat}" ${appState.currentCategory === cat ? 'selected' : ''}>${cat}</option>`;
    });
    headerHTML += `<select id="category-select" class="category-select">${options}</select>`;
  }
  
  header.innerHTML = headerHTML;
  div.appendChild(header);

  if (hasCategories) {
    setTimeout(() => {
      const select = document.getElementById('category-select');
      if(select) {
        select.onchange = (e) => {
          appState.currentCategory = e.target.value;
          appState.currentPage = 1;
          render();
        };
      }
    }, 0);
  }

  const totalPages = Math.ceil(words.length / appState.itemsPerPage);
  if (totalPages > 1) {
    div.appendChild(createPaginationDOM(appState.currentPage, totalPages, render));
  }

  const grid = document.createElement('div');
  grid.className = 'flashcard-grid';

  const startIndex = (appState.currentPage - 1) * appState.itemsPerPage;
  const currentWords = words.slice(startIndex, startIndex + appState.itemsPerPage);

  currentWords.forEach(word => {
    const card = document.createElement('div');
    card.className = 'flashcard';
    
    card.innerHTML = `
      <div class="flashcard-inner">
        <div class="card-face front">
          <div class="word-ja">${word.ja}</div>
        </div>
        <div class="card-face back">
          <div class="word-es">${word.zh}</div>
          <div class="pinyin">${word.pinyin || ''}</div>
        </div>
      </div>
    `;
    
    card.onclick = () => {
      card.classList.toggle('flipped');
      if (card.classList.contains('flipped')) {
        playAudio(word.zh);
      }
    };
    
    grid.appendChild(card);
  });

  div.appendChild(grid);

  if (totalPages > 1) {
    div.appendChild(createPaginationDOM(appState.currentPage, totalPages, render));
  }

  return div;
}

// 3. Quiz Screen
function renderQuiz(genreId, mode) {
  const div = document.createElement('div');
  div.className = 'quiz-container';
  
  const allWords = db[genreId] || [];
  const words = appState.currentCategory === 'All' 
    ? allWords 
    : allWords.filter(w => (w.category || 'その他') === appState.currentCategory);

  if (words.length < 4) {
    div.innerHTML = '<div class="view-header"><h2>単語が不足しています。</h2><p>少なくとも4つの単語が必要です。</p></div>';
    return div;
  }

  const targetIndex = Math.floor(Math.random() * words.length);
  const targetWord = words[targetIndex];
  
  let choices = [targetWord];
  while(choices.length < 4) {
    const randItem = words[Math.floor(Math.random() * words.length)];
    if (!choices.some(c => c.zh === randItem.zh)) choices.push(randItem);
  }
  choices.sort(() => Math.random() - 0.5);

  const header = document.createElement('div');
  header.className = 'view-header';
  header.innerHTML = `<h2>${mode === '4choice' ? '🤔 4択クイズ' : '🎧 リスニング'}</h2>`;
  div.appendChild(header);

  const questionCard = document.createElement('div');
  questionCard.className = 'quiz-question';
  
  if (mode === 'listening') {
    questionCard.innerHTML = `
      <button id="play-audio-btn" class="btn btn-primary btn-pulse" style="font-size: 1.5rem; padding: 1.5rem 3rem;">🔊 再生 (Play)</button>
      <p style="margin-top: 1rem; color: #666;">中国語を聞いて意味を選んでください</p>
    `;
  } else {
    questionCard.innerHTML = `
      <div class="prompt-ja" style="font-size: 2.5rem; font-weight: 800; color: #073B4C;">${targetWord.ja}</div>
      <p style="margin-top: 0.5rem; color: #666;">この意味の中国語はどれ？</p>
    `;
  }
  div.appendChild(questionCard);

  const choicesGrid = document.createElement('div');
  choicesGrid.className = 'quiz-choices';
  
  let answered = false;
  const choiceButtons = [];

  choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.className = 'quiz-btn';
    // 4択クイズなら選択肢は中国語、リスニングなら日本語
    btn.innerHTML = mode === '4choice' ? `<span class="zh-choice">${choice.zh}</span>` : `<span class="ja-choice">${choice.ja}</span>`;
    
    btn.onclick = () => {
      if (answered) return;
      answered = true;
      
      const isCorrect = choice.zh === targetWord.zh;
      if (isCorrect) {
        btn.classList.add('correct');
        playEffect('correct');
      } else {
        btn.classList.add('wrong');
        playEffect('wrong');
        // 正解のボタンをハイライト
        choiceButtons.find(b => b.dataset.zh === targetWord.zh).classList.add('correct');
      }
      
      showQuizFeedback(div, choices, targetWord, genreId, mode);
    };
    btn.dataset.zh = choice.zh;
    choiceButtons.push(btn);
    choicesGrid.appendChild(btn);
  });
  div.appendChild(choicesGrid);

  if (mode === 'listening') {
    setTimeout(() => {
      const btn = document.getElementById('play-audio-btn');
      if(btn) {
        btn.onclick = () => playAudio(targetWord.zh);
        playAudio(targetWord.zh); // 最初にも一回流す
      }
    }, 100);
  }

  return div;
}

function showQuizFeedback(container, choices, targetWord, genreId, mode) {
  const feedbackDiv = document.createElement('div');
  feedbackDiv.className = 'quiz-feedback fade-in';
  feedbackDiv.style.marginTop = '2rem';
  feedbackDiv.style.padding = '1.5rem';
  feedbackDiv.style.background = 'rgba(255,255,255,0.8)';
  feedbackDiv.style.borderRadius = '20px';
  feedbackDiv.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';

  let choicesHTML = '<h3 style="margin-bottom: 1rem; color: #073B4C; border-bottom: 2px solid #eee; padding-bottom: 0.5rem;">📚 選択肢の振り返り</h3>';
  choicesHTML += '<div style="display: grid; gap: 1rem;">';
  
  choices.forEach(c => {
    const isTarget = c.zh === targetWord.zh;
    choicesHTML += `
      <div style="display: flex; align-items: center; gap: 1rem; padding: 0.8rem; background: ${isTarget ? '#e6f4ea' : '#f8f9fa'}; border-radius: 12px; border-left: 5px solid ${isTarget ? '#34a853' : '#ddd'}">
        <div style="font-size: 1.4rem; font-weight: bold; min-width: 80px;">${c.zh}</div>
        <div style="flex: 1;">
          <div style="font-size: 0.9rem; color: #666;">${c.pinyin}</div>
          <div style="font-weight: 600;">${c.ja}</div>
        </div>
        <button class="btn btn-sm btn-outline" onclick="playAudio('${c.zh}')">🔊</button>
      </div>
    `;
  });
  choicesHTML += '</div>';
  
  feedbackDiv.innerHTML = choicesHTML;

  const nextBtn = document.createElement('button');
  nextBtn.className = 'btn btn-primary btn-lg w-full mt-2';
  nextBtn.style.padding = '1.2rem';
  nextBtn.style.fontSize = '1.2rem';
  nextBtn.innerHTML = '次の問題へ ➡️';
  nextBtn.onclick = () => {
    container.innerHTML = '';
    container.appendChild(renderQuiz(genreId, mode));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  feedbackDiv.appendChild(nextBtn);
  container.appendChild(feedbackDiv);
  
  // フィードバックまでスクロール
  setTimeout(() => {
    feedbackDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 100);
}

window.openFeedbackModal = function() {
  window.open('https://forms.gle/zzKM4A79kHne13bF7', '_blank');
};

document.addEventListener('DOMContentLoaded', () => {
  render();
});
