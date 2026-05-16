const db = {
  "adjectives": [
    {
      "category": "評価・良し悪し",
      "zh": "好",
      "pinyin": "hǎo",
      "ja": "良い",
      "en": ""
    },
    {
      "category": "評価・良し悪し",
      "zh": "坏",
      "pinyin": "huài",
      "ja": "悪い",
      "en": ""
    },
    {
      "category": "外見・容姿",
      "zh": "漂亮",
      "pinyin": "piàoliang",
      "ja": "きれいな",
      "en": ""
    },
    {
      "category": "外見・容姿",
      "zh": "可爱",
      "pinyin": "kě'ài",
      "ja": "かわいい",
      "en": ""
    },
    {
      "category": "外見・容姿",
      "zh": "帅",
      "pinyin": "shuài",
      "ja": "かっこいい、美形の",
      "en": ""
    },
    {
      "category": "外見・容姿",
      "zh": "丑",
      "pinyin": "chǒu",
      "ja": "ぶさいくな",
      "en": ""
    },
    {
      "category": "体格・身体",
      "zh": "高",
      "pinyin": "gāo",
      "ja": "背が高い",
      "en": ""
    },
    {
      "category": "体格・身体",
      "zh": "矮",
      "pinyin": "ǎi",
      "ja": "背が低い",
      "en": ""
    },
    {
      "category": "体格・身体",
      "zh": "胖",
      "pinyin": "pàng",
      "ja": "太っている",
      "en": ""
    },
    {
      "category": "体格・身体",
      "zh": "瘦",
      "pinyin": "shòu",
      "ja": "痩せている",
      "en": ""
    },
    {
      "category": "年齢・新旧",
      "zh": "年轻",
      "pinyin": "niánqīng",
      "ja": "若い",
      "en": ""
    },
    {
      "category": "年齢・新旧",
      "zh": "老",
      "pinyin": "lǎo",
      "ja": "年をとった",
      "en": ""
    },
    {
      "category": "年齢・新旧",
      "zh": "旧",
      "pinyin": "jiù",
      "ja": "古い",
      "en": ""
    },
    {
      "category": "年齢・新旧",
      "zh": "新",
      "pinyin": "xīn",
      "ja": "新しい",
      "en": ""
    },
    {
      "category": "難易度",
      "zh": "简单",
      "pinyin": "jiǎndān",
      "ja": "簡単な",
      "en": ""
    },
    {
      "category": "難易度",
      "zh": "难",
      "pinyin": "nán",
      "ja": "難しい",
      "en": ""
    },
    {
      "category": "速度",
      "zh": "快",
      "pinyin": "kuài",
      "ja": "速い",
      "en": ""
    },
    {
      "category": "速度",
      "zh": "慢",
      "pinyin": "màn",
      "ja": "遅い、ゆっくりな",
      "en": ""
    },
    {
      "category": "価格",
      "zh": "贵",
      "pinyin": "guì",
      "ja": "高い（値段が）",
      "en": ""
    },
    {
      "category": "価格",
      "zh": "便宜",
      "pinyin": "piányi",
      "ja": "安い（値段が）",
      "en": ""
    },
    {
      "category": "快適さ",
      "zh": "舒适",
      "pinyin": "shūshì",
      "ja": "快適な",
      "en": ""
    },
    {
      "category": "快適さ",
      "zh": "不舒服",
      "pinyin": "bù shūfu",
      "ja": "居心地が悪い",
      "en": ""
    },
    {
      "category": "状態・清潔さ",
      "zh": "干净",
      "pinyin": "gānjìng",
      "ja": "きれいな（清潔）",
      "en": ""
    },
    {
      "category": "状態・清潔さ",
      "zh": "脏",
      "pinyin": "zāng",
      "ja": "汚い",
      "en": ""
    },
    {
      "category": "状態・清潔さ",
      "zh": "满",
      "pinyin": "mǎn",
      "ja": "いっぱいの",
      "en": ""
    },
    {
      "category": "状態・清潔さ",
      "zh": "空",
      "pinyin": "kōng",
      "ja": "空の",
      "en": ""
    },
    {
      "category": "感情・気分",
      "zh": "满意",
      "pinyin": "mǎnyì",
      "ja": "満足している",
      "en": ""
    },
    {
      "category": "感情・気分",
      "zh": "高兴",
      "pinyin": "gāoxìng",
      "ja": "うれしい",
      "en": ""
    },
    {
      "category": "感情・気分",
      "zh": "幸福",
      "pinyin": "xìngfú",
      "ja": "幸せな",
      "en": ""
    },
    {
      "category": "感情・気分",
      "zh": "悲伤",
      "pinyin": "bēishāng",
      "ja": "悲しい",
      "en": ""
    },
    {
      "category": "感情・気分",
      "zh": "生气",
      "pinyin": "shēngqì",
      "ja": "怒っている",
      "en": ""
    },
    {
      "category": "感情・気分",
      "zh": "累",
      "pinyin": "lèi",
      "ja": "疲れた",
      "en": ""
    },
    {
      "category": "感情・気分",
      "zh": "无聊",
      "pinyin": "wúliáo",
      "ja": "退屈している",
      "en": ""
    },
    {
      "category": "重要性・可能性",
      "zh": "有趣",
      "pinyin": "yǒuqù",
      "ja": "面白い、興味深い",
      "en": ""
    },
    {
      "category": "重要性・可能性",
      "zh": "重要",
      "pinyin": "zhòngyào",
      "ja": "重要な",
      "en": ""
    },
    {
      "category": "重要性・可能性",
      "zh": "必要",
      "pinyin": "bìyào",
      "ja": "必要な",
      "en": ""
    },
    {
      "category": "重要性・可能性",
      "zh": "可能",
      "pinyin": "kěnéng",
      "ja": "可能な",
      "en": ""
    },
    {
      "category": "重要性・可能性",
      "zh": "不可能",
      "pinyin": "bù kěnéng",
      "ja": "不可能な",
      "en": ""
    },
    {
      "category": "時間・忙しさ",
      "zh": "空闲",
      "pinyin": "kòngxián",
      "ja": "暇な",
      "en": ""
    },
    {
      "category": "時間・忙しさ",
      "zh": "自由",
      "pinyin": "zìyóu",
      "ja": "自由な",
      "en": ""
    },
    {
      "category": "時間・忙しさ",
      "zh": "忙",
      "pinyin": "máng",
      "ja": "忙しい",
      "en": ""
    },
    {
      "category": "安全・危険",
      "zh": "安全",
      "pinyin": "ānquán",
      "ja": "安全な",
      "en": ""
    },
    {
      "category": "安全・危険",
      "zh": "确定",
      "pinyin": "quèdìng",
      "ja": "確信している",
      "en": ""
    },
    {
      "category": "安全・危険",
      "zh": "危险",
      "pinyin": "wēixiǎn",
      "ja": "危険な",
      "en": ""
    },
    {
      "category": "強さ・弱さ",
      "zh": "强",
      "pinyin": "qiáng",
      "ja": "強い",
      "en": ""
    },
    {
      "category": "強さ・弱さ",
      "zh": "弱",
      "pinyin": "ruò",
      "ja": "弱い",
      "en": ""
    },
    {
      "category": "温度・気候",
      "zh": "冷",
      "pinyin": "lěng",
      "ja": "寒い、冷たい",
      "en": ""
    },
    {
      "category": "温度・気候",
      "zh": "热",
      "pinyin": "rè",
      "ja": "熱い、暑い",
      "en": ""
    },
    {
      "category": "温度・気候",
      "zh": "炎热",
      "pinyin": "yánrè",
      "ja": "暑い（気候が）",
      "en": ""
    },
    {
      "category": "経済・豊かさ",
      "zh": "富有",
      "pinyin": "fùyǒu",
      "ja": "金持ちの",
      "en": ""
    },
    {
      "category": "経済・豊かさ",
      "zh": "好吃",
      "pinyin": "hǎochī",
      "ja": "おいしい",
      "en": ""
    },
    {
      "category": "経済・豊かさ",
      "zh": "穷",
      "pinyin": "qióng",
      "ja": "貧しい",
      "en": ""
    },
    {
      "category": "使いやすさ",
      "zh": "好用",
      "pinyin": "hǎoyòng",
      "ja": "使いやすい",
      "en": ""
    },
    {
      "category": "使いやすさ",
      "zh": "难用",
      "pinyin": "nányòng",
      "ja": "使いにくい",
      "en": ""
    },
    {
      "category": "性格・人柄",
      "zh": "友善",
      "pinyin": "yǒushàn",
      "ja": "優しい",
      "en": ""
    },
    {
      "category": "性格・人柄",
      "zh": "亲切",
      "pinyin": "qīnqiè",
      "ja": "親切な",
      "en": ""
    },
    {
      "category": "性格・人柄",
      "zh": "和蔼可亲",
      "pinyin": "hé'ǎi kěqīn",
      "ja": "感じが良い",
      "en": ""
    },
    {
      "category": "性格・人柄",
      "zh": "严肃",
      "pinyin": "yánsù",
      "ja": "真面目な",
      "en": ""
    },
    {
      "category": "性格・人柄",
      "zh": "认真",
      "pinyin": "rènzhēn",
      "ja": "深刻な",
      "en": ""
    },
    {
      "category": "性格・人柄",
      "zh": "聪明",
      "pinyin": "cōngming",
      "ja": "賢い",
      "en": ""
    },
    {
      "category": "性格・人柄",
      "zh": "笨",
      "pinyin": "bèn",
      "ja": "愚かな",
      "en": ""
    },
    {
      "category": "性格・人柄",
      "zh": "勤劳",
      "pinyin": "qínláo",
      "ja": "勤勉な",
      "en": ""
    },
    {
      "category": "性格・人柄",
      "zh": "懒",
      "pinyin": "lǎn",
      "ja": "怠惰な",
      "en": ""
    },
    {
      "category": "性格・人柄",
      "zh": "诚实",
      "pinyin": "chéngshí",
      "ja": "正直な",
      "en": ""
    },
    {
      "category": "性格・人柄",
      "zh": "骗人",
      "pinyin": "piànrén",
      "ja": "嘘つきの",
      "en": ""
    },
    {
      "category": "性格・人柄",
      "zh": "耐心",
      "pinyin": "nàixīn",
      "ja": "辛抱強い",
      "en": ""
    },
    {
      "category": "性格・人柄",
      "zh": "急躁",
      "pinyin": "jízào",
      "ja": "せっかちな",
      "en": ""
    },
    {
      "category": "性格・人柄",
      "zh": "大方",
      "pinyin": "dàfang",
      "ja": "気前が良い",
      "en": ""
    },
    {
      "category": "性格・人柄",
      "zh": "小气",
      "pinyin": "xiǎoqì",
      "ja": "けちな",
      "en": ""
    },
    {
      "category": "性格・人柄",
      "zh": "勇敢",
      "pinyin": "yǒnggǎn",
      "ja": "勇敢な",
      "en": ""
    },
    {
      "category": "性格・人柄",
      "zh": "胆小",
      "pinyin": "dǎnxiǎo",
      "ja": "臆病な",
      "en": ""
    },
    {
      "category": "性格・人柄",
      "zh": "自信",
      "pinyin": "zìxìn",
      "ja": "自信がある",
      "en": ""
    },
    {
      "category": "性格・人柄",
      "zh": "害羞",
      "pinyin": "hàixiū",
      "ja": "恥ずかしがり屋の",
      "en": ""
    },
    {
      "category": "性格・人柄",
      "zh": "开朗",
      "pinyin": "kāilǎng",
      "ja": "明るい（性格）",
      "en": ""
    },
    {
      "category": "性格・人柄",
      "zh": "内向",
      "pinyin": "nèixiàng",
      "ja": "内向的な",
      "en": ""
    },
    {
      "category": "性格・人柄",
      "zh": "外向",
      "pinyin": "wàixiàng",
      "ja": "外向的な",
      "en": ""
    },
    {
      "category": "サイズ・形",
      "zh": "大",
      "pinyin": "dà",
      "ja": "大きい",
      "en": ""
    },
    {
      "category": "サイズ・形",
      "zh": "小",
      "pinyin": "xiǎo",
      "ja": "小さい",
      "en": ""
    },
    {
      "category": "サイズ・形",
      "zh": "长",
      "pinyin": "cháng",
      "ja": "長い",
      "en": ""
    },
    {
      "category": "サイズ・形",
      "zh": "短",
      "pinyin": "duǎn",
      "ja": "短い",
      "en": ""
    },
    {
      "category": "サイズ・形",
      "zh": "宽",
      "pinyin": "kuān",
      "ja": "広い",
      "en": ""
    },
    {
      "category": "サイズ・形",
      "zh": "窄",
      "pinyin": "zhǎi",
      "ja": "狭い",
      "en": ""
    },
    {
      "category": "サイズ・形",
      "zh": "厚",
      "pinyin": "hòu",
      "ja": "厚い",
      "en": ""
    },
    {
      "category": "サイズ・形",
      "zh": "薄",
      "pinyin": "báo",
      "ja": "薄い",
      "en": ""
    },
    {
      "category": "サイズ・形",
      "zh": "深",
      "pinyin": "shēn",
      "ja": "深い",
      "en": ""
    },
    {
      "category": "サイズ・形",
      "zh": "浅",
      "pinyin": "qiǎn",
      "ja": "浅い",
      "en": ""
    },
    {
      "category": "サイズ・形",
      "zh": "重",
      "pinyin": "zhòng",
      "ja": "重い",
      "en": ""
    },
    {
      "category": "サイズ・形",
      "zh": "轻",
      "pinyin": "qīng",
      "ja": "軽い",
      "en": ""
    },
    {
      "category": "質感",
      "zh": "硬",
      "pinyin": "yìng",
      "ja": "硬い",
      "en": ""
    },
    {
      "category": "質感",
      "zh": "软",
      "pinyin": "ruǎn",
      "ja": "柔らかい",
      "en": ""
    },
    {
      "category": "質感",
      "zh": "滑",
      "pinyin": "huá",
      "ja": "滑らかな",
      "en": ""
    },
    {
      "category": "質感",
      "zh": "粗糙",
      "pinyin": "cūcāo",
      "ja": "粗い",
      "en": ""
    },
    {
      "category": "質感",
      "zh": "湿",
      "pinyin": "shī",
      "ja": "濡れた",
      "en": ""
    },
    {
      "category": "質感",
      "zh": "干",
      "pinyin": "gān",
      "ja": "乾いた",
      "en": ""
    },
    {
      "category": "色・光",
      "zh": "亮",
      "pinyin": "liàng",
      "ja": "明るい",
      "en": ""
    },
    {
      "category": "色・光",
      "zh": "暗",
      "pinyin": "àn",
      "ja": "暗い",
      "en": ""
    },
    {
      "category": "色・光",
      "zh": "鲜艳",
      "pinyin": "xiānyàn",
      "ja": "鮮やかな",
      "en": ""
    },
    {
      "category": "色・光",
      "zh": "淡",
      "pinyin": "dàn",
      "ja": "淡い",
      "en": ""
    },
    {
      "category": "色・光",
      "zh": "透明",
      "pinyin": "tòumíng",
      "ja": "透明な",
      "en": ""
    },
    {
      "category": "色・光",
      "zh": "模糊",
      "pinyin": "móhu",
      "ja": "ぼんやりした",
      "en": ""
    },
    {
      "category": "色・光",
      "zh": "清晰",
      "pinyin": "qīngxī",
      "ja": "はっきりした",
      "en": ""
    },
    {
      "category": "味・匂い",
      "zh": "甜",
      "pinyin": "tián",
      "ja": "甘い",
      "en": ""
    },
    {
      "category": "味・匂い",
      "zh": "酸",
      "pinyin": "suān",
      "ja": "酸っぱい",
      "en": ""
    },
    {
      "category": "味・匂い",
      "zh": "苦",
      "pinyin": "kǔ",
      "ja": "苦い",
      "en": ""
    },
    {
      "category": "味・匂い",
      "zh": "辣",
      "pinyin": "là",
      "ja": "辛い",
      "en": ""
    },
    {
      "category": "味・匂い",
      "zh": "咸",
      "pinyin": "xián",
      "ja": "しょっぱい",
      "en": ""
    },
    {
      "category": "味・匂い",
      "zh": "淡",
      "pinyin": "dàn",
      "ja": "味が薄い",
      "en": ""
    },
    {
      "category": "味・匂い",
      "zh": "香",
      "pinyin": "xiāng",
      "ja": "いい匂いの",
      "en": ""
    },
    {
      "category": "味・匂い",
      "zh": "臭",
      "pinyin": "chòu",
      "ja": "臭い",
      "en": ""
    },
    {
      "category": "味・匂い",
      "zh": "新鲜",
      "pinyin": "xīnxiān",
      "ja": "新鮮な",
      "en": ""
    },
    {
      "category": "味・匂い",
      "zh": "腐烂",
      "pinyin": "fǔlàn",
      "ja": "腐った",
      "en": ""
    },
    {
      "category": "音",
      "zh": "好听",
      "pinyin": "hǎotīng",
      "ja": "心地よい（音）",
      "en": ""
    },
    {
      "category": "音",
      "zh": "难听",
      "pinyin": "nántīng",
      "ja": "不快な（音）",
      "en": ""
    },
    {
      "category": "音",
      "zh": "安静",
      "pinyin": "ānjìng",
      "ja": "静かな",
      "en": ""
    },
    {
      "category": "音",
      "zh": "吵",
      "pinyin": "chǎo",
      "ja": "うるさい",
      "en": ""
    },
    {
      "category": "音",
      "zh": "响",
      "pinyin": "xiǎng",
      "ja": "大きな音の",
      "en": ""
    },
    {
      "category": "距離・位置",
      "zh": "远",
      "pinyin": "yuǎn",
      "ja": "遠い",
      "en": ""
    },
    {
      "category": "距離・位置",
      "zh": "近",
      "pinyin": "jìn",
      "ja": "近い",
      "en": ""
    },
    {
      "category": "距離・位置",
      "zh": "左",
      "pinyin": "zuǒ",
      "ja": "左の",
      "en": ""
    },
    {
      "category": "距離・位置",
      "zh": "右",
      "pinyin": "yòu",
      "ja": "右の",
      "en": ""
    },
    {
      "category": "距離・位置",
      "zh": "前",
      "pinyin": "qián",
      "ja": "前の",
      "en": ""
    },
    {
      "category": "距離・位置",
      "zh": "后",
      "pinyin": "hòu",
      "ja": "後ろの",
      "en": ""
    },
    {
      "category": "距離・位置",
      "zh": "上",
      "pinyin": "shàng",
      "ja": "上の",
      "en": ""
    },
    {
      "category": "距離・位置",
      "zh": "下",
      "pinyin": "xià",
      "ja": "下の",
      "en": ""
    },
    {
      "category": "距離・位置",
      "zh": "里面",
      "pinyin": "lǐmiàn",
      "ja": "内側の",
      "en": ""
    },
    {
      "category": "距離・位置",
      "zh": "外面",
      "pinyin": "wàimiàn",
      "ja": "外側の",
      "en": ""
    },
    {
      "category": "正誤・真偽",
      "zh": "正确",
      "pinyin": "zhèngquè",
      "ja": "正しい",
      "en": ""
    },
    {
      "category": "正誤・真偽",
      "zh": "错误",
      "pinyin": "cuòwù",
      "ja": "間違った",
      "en": ""
    },
    {
      "category": "正誤・真偽",
      "zh": "真",
      "pinyin": "zhēn",
      "ja": "本当の",
      "en": ""
    },
    {
      "category": "正誤・真偽",
      "zh": "假",
      "pinyin": "jiǎ",
      "ja": "偽の",
      "en": ""
    },
    {
      "category": "比較",
      "zh": "相同",
      "pinyin": "xiāngtóng",
      "ja": "同じ",
      "en": ""
    },
    {
      "category": "比較",
      "zh": "不同",
      "pinyin": "bùtóng",
      "ja": "違う",
      "en": ""
    },
    {
      "category": "比較",
      "zh": "类似",
      "pinyin": "lèisì",
      "ja": "似ている",
      "en": ""
    },
    {
      "category": "比較",
      "zh": "普通",
      "pinyin": "pǔtōng",
      "ja": "普通の",
      "en": ""
    },
    {
      "category": "比較",
      "zh": "特别",
      "pinyin": "tèbié",
      "ja": "特別な",
      "en": ""
    },
    {
      "category": "比較",
      "zh": "独特",
      "pinyin": "dútè",
      "ja": "ユニークな",
      "en": ""
    },
    {
      "category": "比較",
      "zh": "一般",
      "pinyin": "yībān",
      "ja": "一般的な",
      "en": ""
    },
    {
      "category": "比較",
      "zh": "流行",
      "pinyin": "liúxíng",
      "ja": "流行の",
      "en": ""
    },
    {
      "category": "比較",
      "zh": "古典",
      "pinyin": "gǔdiǎn",
      "ja": "古典的な",
      "en": ""
    },
    {
      "category": "比較",
      "zh": "现代",
      "pinyin": "xiàndài",
      "ja": "現代的な",
      "en": ""
    },
    {
      "category": "比較",
      "zh": "传统",
      "pinyin": "chuántǒng",
      "ja": "伝統的な",
      "en": ""
    },
    {
      "category": "社会・評価",
      "zh": "有名",
      "pinyin": "yǒumíng",
      "ja": "有名な",
      "en": ""
    },
    {
      "category": "社会・評価",
      "zh": "陌生",
      "pinyin": "mòshēng",
      "ja": "知らない",
      "en": ""
    },
    {
      "category": "社会・評価",
      "zh": "熟悉",
      "pinyin": "shúxī",
      "ja": "よく知っている",
      "en": ""
    },
    {
      "category": "社会・評価",
      "zh": "受欢迎",
      "pinyin": "shòu huānyíng",
      "ja": "人気がある",
      "en": ""
    },
    {
      "category": "社会・評価",
      "zh": "成功",
      "pinyin": "chénggōng",
      "ja": "成功した",
      "en": ""
    },
    {
      "category": "社会・評価",
      "zh": "失败",
      "pinyin": "shībài",
      "ja": "失敗した",
      "en": ""
    },
    {
      "category": "社会・評価",
      "zh": "完美",
      "pinyin": "wánměi",
      "ja": "完璧な",
      "en": ""
    },
    {
      "category": "社会・評価",
      "zh": "糟糕",
      "pinyin": "zāogāo",
      "ja": "ひどい",
      "en": ""
    },
    {
      "category": "社会・評価",
      "zh": "优秀",
      "pinyin": "yōuxiù",
      "ja": "優れた",
      "en": ""
    },
    {
      "category": "社会・評価",
      "zh": "差",
      "pinyin": "chà",
      "ja": "劣った",
      "en": ""
    },
    {
      "category": "適合性",
      "zh": "适合",
      "pinyin": "shìhé",
      "ja": "適した",
      "en": ""
    },
    {
      "category": "適合性",
      "zh": "不适合",
      "pinyin": "bù shìhé",
      "ja": "不適切な",
      "en": ""
    },
    {
      "category": "適合性",
      "zh": "方便",
      "pinyin": "fāngbiàn",
      "ja": "便利な",
      "en": ""
    },
    {
      "category": "適合性",
      "zh": "不方便",
      "pinyin": "bù fāngbiàn",
      "ja": "不便な",
      "en": ""
    },
    {
      "category": "価格",
      "zh": "免费",
      "pinyin": "miǎnfèi",
      "ja": "無料の",
      "en": ""
    },
    {
      "category": "価格",
      "zh": "昂贵",
      "pinyin": "ángguì",
      "ja": "高価な",
      "en": ""
    },
    {
      "category": "価格",
      "zh": "便宜",
      "pinyin": "piányi",
      "ja": "安価な",
      "en": ""
    },
    {
      "category": "価格",
      "zh": "值得",
      "pinyin": "zhíde",
      "ja": "価値がある",
      "en": ""
    },
    {
      "category": "健康",
      "zh": "健康",
      "pinyin": "jiànkāng",
      "ja": "健康な",
      "en": ""
    },
    {
      "category": "健康",
      "zh": "生病",
      "pinyin": "shēngbìng",
      "ja": "病気の",
      "en": ""
    },
    {
      "category": "健康",
      "zh": "舒服",
      "pinyin": "shūfu",
      "ja": "気持ちいい",
      "en": ""
    },
    {
      "category": "健康",
      "zh": "痛",
      "pinyin": "tòng",
      "ja": "痛い",
      "en": ""
    },
    {
      "category": "健康",
      "zh": "饿",
      "pinyin": "è",
      "ja": "お腹が空いた",
      "en": ""
    },
    {
      "category": "健康",
      "zh": "渴",
      "pinyin": "kě",
      "ja": "喉が渇いた",
      "en": ""
    },
    {
      "category": "健康",
      "zh": "困",
      "pinyin": "kùn",
      "ja": "眠い",
      "en": ""
    },
    {
      "category": "健康",
      "zh": "醒",
      "pinyin": "xǐng",
      "ja": "目が覚めた",
      "en": ""
    },
    {
      "category": "健康",
      "zh": "精神",
      "pinyin": "jīngshén",
      "ja": "元気な",
      "en": ""
    },
    {
      "category": "健康",
      "zh": "疲惫",
      "pinyin": "píbèi",
      "ja": "疲れ果てた",
      "en": ""
    },
    {
      "category": "感情",
      "zh": "兴奋",
      "pinyin": "xīngfèn",
      "ja": "興奮した",
      "en": ""
    },
    {
      "category": "感情",
      "zh": "平静",
      "pinyin": "píngjìng",
      "ja": "穏やかな",
      "en": ""
    },
    {
      "category": "感情",
      "zh": "紧张",
      "pinyin": "jǐnzhāng",
      "ja": "緊張した",
      "en": ""
    },
    {
      "category": "感情",
      "zh": "放松",
      "pinyin": "fàngsōng",
      "ja": "リラックスした",
      "en": ""
    },
    {
      "category": "感情",
      "zh": "担心",
      "pinyin": "dānxīn",
      "ja": "心配な",
      "en": ""
    },
    {
      "category": "感情",
      "zh": "安心",
      "pinyin": "ānxīn",
      "ja": "安心した",
      "en": ""
    },
    {
      "category": "感情",
      "zh": "好奇",
      "pinyin": "hàoqí",
      "ja": "好奇心がある",
      "en": ""
    },
    {
      "category": "感情",
      "zh": "感动",
      "pinyin": "gǎndòng",
      "ja": "感動した",
      "en": ""
    },
    {
      "category": "感情",
      "zh": "惊讶",
      "pinyin": "jīngyà",
      "ja": "驚いた",
      "en": ""
    },
    {
      "category": "感情",
      "zh": "失望",
      "pinyin": "shīwàng",
      "ja": "がっかりした",
      "en": ""
    },
    {
      "category": "感情",
      "zh": "满足",
      "pinyin": "mǎnzú",
      "ja": "満足した",
      "en": ""
    },
    {
      "category": "感情",
      "zh": "骄傲",
      "pinyin": "jiāo'ào",
      "ja": "誇りに思う",
      "en": ""
    },
    {
      "category": "感情",
      "zh": "羞愧",
      "pinyin": "xiūkuì",
      "ja": "恥ずかしい",
      "en": ""
    },
    {
      "category": "感情",
      "zh": "嫉妒",
      "pinyin": "jídù",
      "ja": "嫉妬した",
      "en": ""
    },
    {
      "category": "感情",
      "zh": "感激",
      "pinyin": "gǎnjī",
      "ja": "感謝している",
      "en": ""
    },
    {
      "category": "感情",
      "zh": "抱歉",
      "pinyin": "bàoqiàn",
      "ja": "申し訳ない",
      "en": ""
    },
    {
      "category": "天気",
      "zh": "晴",
      "pinyin": "qíng",
      "ja": "晴れの",
      "en": ""
    },
    {
      "category": "天気",
      "zh": "阴",
      "pinyin": "yīn",
      "ja": "曇りの",
      "en": ""
    },
    {
      "category": "天気",
      "zh": "多云",
      "pinyin": "duōyún",
      "ja": "雲が多い",
      "en": ""
    },
    {
      "category": "天気",
      "zh": "下雨",
      "pinyin": "xiàyǔ",
      "ja": "雨の",
      "en": ""
    },
    {
      "category": "天気",
      "zh": "下雪",
      "pinyin": "xiàxuě",
      "ja": "雪の",
      "en": ""
    },
    {
      "category": "天気",
      "zh": "刮风",
      "pinyin": "guāfēng",
      "ja": "風が強い",
      "en": ""
    },
    {
      "category": "天気",
      "zh": "潮湿",
      "pinyin": "cháoshī",
      "ja": "湿度が高い",
      "en": ""
    },
    {
      "category": "天気",
      "zh": "干燥",
      "pinyin": "gānzào",
      "ja": "乾燥した",
      "en": ""
    },
    {
      "category": "天気",
      "zh": "温暖",
      "pinyin": "wēnnuǎn",
      "ja": "暖かい",
      "en": ""
    },
    {
      "category": "天気",
      "zh": "凉爽",
      "pinyin": "liángshuǎng",
      "ja": "涼しい",
      "en": ""
    },
    {
      "category": "程度",
      "zh": "严重",
      "pinyin": "yánzhòng",
      "ja": "深刻な",
      "en": ""
    },
    {
      "category": "程度",
      "zh": "轻微",
      "pinyin": "qīngwēi",
      "ja": "軽い",
      "en": ""
    },
    {
      "category": "程度",
      "zh": "完整",
      "pinyin": "wánzhěng",
      "ja": "完全な",
      "en": ""
    },
    {
      "category": "程度",
      "zh": "部分",
      "pinyin": "bùfèn",
      "ja": "部分的な",
      "en": ""
    },
    {
      "category": "程度",
      "zh": "临时",
      "pinyin": "línshí",
      "ja": "一時的な",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "专业",
      "pinyin": "zhuānyè",
      "ja": "専門的な、プロフェッショナルな",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "正式",
      "pinyin": "zhèngshì",
      "ja": "正式な、フォーマルな",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "非正式",
      "pinyin": "fēi zhèngshì",
      "ja": "非公式な、インフォーマルな",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "有效",
      "pinyin": "yǒuxiào",
      "ja": "有効な、効果的な",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "无效",
      "pinyin": "wúxiào",
      "ja": "無効な",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "高效",
      "pinyin": "gāoxiào",
      "ja": "効率的な",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "低效",
      "pinyin": "dīxiào",
      "ja": "非効率な",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "可靠",
      "pinyin": "kěkào",
      "ja": "信頼できる",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "紧急",
      "pinyin": "jǐnjí",
      "ja": "緊急の",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "优先",
      "pinyin": "yōuxiān",
      "ja": "優先の",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "详细",
      "pinyin": "xiángxì",
      "ja": "詳細な",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "简洁",
      "pinyin": "jiǎnjié",
      "ja": "簡潔な",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "清晰",
      "pinyin": "qīngxī",
      "ja": "明確な、クリアな",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "模糊",
      "pinyin": "móhu",
      "ja": "曖昧な",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "合理",
      "pinyin": "hélǐ",
      "ja": "合理的な",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "不合理",
      "pinyin": "bù hélǐ",
      "ja": "不合理な",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "灵活",
      "pinyin": "línghuó",
      "ja": "柔軟な",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "严格",
      "pinyin": "yángé",
      "ja": "厳格な",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "稳定",
      "pinyin": "wěndìng",
      "ja": "安定した",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "不稳定",
      "pinyin": "bù wěndìng",
      "ja": "不安定な",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "积极",
      "pinyin": "jījí",
      "ja": "積極的な",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "消极",
      "pinyin": "xiāojí",
      "ja": "消極的な",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "主动",
      "pinyin": "zhǔdòng",
      "ja": "能動的な、自発的な",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "被动",
      "pinyin": "bèidòng",
      "ja": "受動的な",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "国际",
      "pinyin": "guójì",
      "ja": "国際的な",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "国内",
      "pinyin": "guónèi",
      "ja": "国内の",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "全球",
      "pinyin": "quánqiú",
      "ja": "グローバルな",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "本地",
      "pinyin": "běndì",
      "ja": "ローカルな",
      "en": ""
    },
    {
      "category": "技術",
      "zh": "先进",
      "pinyin": "xiānjìn",
      "ja": "先進的な",
      "en": ""
    },
    {
      "category": "技術",
      "zh": "落后",
      "pinyin": "luòhòu",
      "ja": "遅れた",
      "en": ""
    },
    {
      "category": "技術",
      "zh": "智能",
      "pinyin": "zhìnéng",
      "ja": "スマートな、知能的な",
      "en": ""
    },
    {
      "category": "技術",
      "zh": "数字化",
      "pinyin": "shùzìhuà",
      "ja": "デジタル化された",
      "en": ""
    },
    {
      "category": "技術",
      "zh": "自动",
      "pinyin": "zìdòng",
      "ja": "自動の",
      "en": ""
    },
    {
      "category": "技術",
      "zh": "手动",
      "pinyin": "shǒudòng",
      "ja": "手動の",
      "en": ""
    },
    {
      "category": "価格",
      "zh": "免费",
      "pinyin": "miǎnfèi",
      "ja": "無料の",
      "en": ""
    },
    {
      "category": "価格",
      "zh": "付费",
      "pinyin": "fùfèi",
      "ja": "有料の",
      "en": ""
    }
  ],
  "adverbs": [
    {
      "category": "頻度・否定",
      "zh": "总是",
      "pinyin": "zǒngshì",
      "ja": "いつも",
      "en": ""
    },
    {
      "category": "頻度・否定",
      "zh": "几乎总是",
      "pinyin": "jīhū zǒngshì",
      "ja": "ほとんどいつも",
      "en": ""
    },
    {
      "category": "頻度・否定",
      "zh": "经常",
      "pinyin": "jīngcháng",
      "ja": "しばしば",
      "en": ""
    },
    {
      "category": "頻度・否定",
      "zh": "频繁地",
      "pinyin": "pínfán de",
      "ja": "頻繁に",
      "en": ""
    },
    {
      "category": "頻度・否定",
      "zh": "有时",
      "pinyin": "yǒushí",
      "ja": "ときどき",
      "en": ""
    },
    {
      "category": "頻度・否定",
      "zh": "偶尔",
      "pinyin": "ǒu'ěr",
      "ja": "たまに",
      "en": ""
    },
    {
      "category": "頻度・否定",
      "zh": "很少",
      "pinyin": "hěnshǎo",
      "ja": "めったに～ない",
      "en": ""
    },
    {
      "category": "頻度・否定",
      "zh": "几乎从不",
      "pinyin": "jīhū cóngbù",
      "ja": "ほとんど決して～ない",
      "en": ""
    },
    {
      "category": "頻度・否定",
      "zh": "从不",
      "pinyin": "cóngbù",
      "ja": "決して～ない",
      "en": ""
    },
    {
      "category": "時間・時点",
      "zh": "今天",
      "pinyin": "jīntiān",
      "ja": "今日",
      "en": ""
    },
    {
      "category": "時間・時点",
      "zh": "昨天",
      "pinyin": "zuótiān",
      "ja": "昨日",
      "en": ""
    },
    {
      "category": "時間・時点",
      "zh": "明天",
      "pinyin": "míngtiān",
      "ja": "明日",
      "en": ""
    },
    {
      "category": "時間・時点",
      "zh": "很快",
      "pinyin": "hěnkuài",
      "ja": "すぐに",
      "en": ""
    },
    {
      "category": "時間・時点",
      "zh": "即将",
      "pinyin": "jíjiāng",
      "ja": "まもなく",
      "en": ""
    },
    {
      "category": "時間・時点",
      "zh": "晚",
      "pinyin": "wǎn",
      "ja": "遅く",
      "en": ""
    },
    {
      "category": "時間・時点",
      "zh": "迟",
      "pinyin": "chí",
      "ja": "遅く",
      "en": ""
    },
    {
      "category": "時間・時点",
      "zh": "早",
      "pinyin": "zǎo",
      "ja": "早く",
      "en": ""
    },
    {
      "category": "時間・時点",
      "zh": "已经",
      "pinyin": "yǐjīng",
      "ja": "もう、すでに",
      "en": ""
    },
    {
      "category": "時間・時点",
      "zh": "还",
      "pinyin": "hái",
      "ja": "まだ",
      "en": ""
    },
    {
      "category": "時間・時点",
      "zh": "仍然",
      "pinyin": "réngrán",
      "ja": "まだ",
      "en": ""
    },
    {
      "category": "時間・時点",
      "zh": "还没",
      "pinyin": "hái méi",
      "ja": "まだ～ない",
      "en": ""
    },
    {
      "category": "時間・時点",
      "zh": "不再",
      "pinyin": "bú zài",
      "ja": "もう～ない",
      "en": ""
    },
    {
      "category": "時間・時点",
      "zh": "以前",
      "pinyin": "yǐqián",
      "ja": "前に、以前",
      "en": ""
    },
    {
      "category": "時間・時点",
      "zh": "立刻",
      "pinyin": "lìkè",
      "ja": "すぐに、ただちに",
      "en": ""
    },
    {
      "category": "時間・時点",
      "zh": "突然",
      "pinyin": "tūrán",
      "ja": "突然",
      "en": ""
    },
    {
      "category": "様態・方法",
      "zh": "慢慢地",
      "pinyin": "mànmàn de",
      "ja": "ゆっくり",
      "en": ""
    },
    {
      "category": "様態・方法",
      "zh": "快速地",
      "pinyin": "kuàisù de",
      "ja": "速く",
      "en": ""
    },
    {
      "category": "様態・方法",
      "zh": "好",
      "pinyin": "hǎo",
      "ja": "うまく",
      "en": ""
    },
    {
      "category": "様態・方法",
      "zh": "很好",
      "pinyin": "hěn hǎo",
      "ja": "よく",
      "en": ""
    },
    {
      "category": "様態・方法",
      "zh": "差",
      "pinyin": "chà",
      "ja": "悪く",
      "en": ""
    },
    {
      "category": "様態・方法",
      "zh": "不好",
      "pinyin": "bù hǎo",
      "ja": "下手に",
      "en": ""
    },
    {
      "category": "程度・数量",
      "zh": "相当",
      "pinyin": "xiāngdāng",
      "ja": "かなり",
      "en": ""
    },
    {
      "category": "程度・数量",
      "zh": "足够",
      "pinyin": "zúgòu",
      "ja": "十分に",
      "en": ""
    },
    {
      "category": "程度・数量",
      "zh": "非常",
      "pinyin": "fēicháng",
      "ja": "とても",
      "en": ""
    },
    {
      "category": "程度・数量",
      "zh": "太",
      "pinyin": "tài",
      "ja": "あまりに～すぎる",
      "en": ""
    },
    {
      "category": "程度・数量",
      "zh": "一点点",
      "pinyin": "yīdiǎndiǎn",
      "ja": "少し",
      "en": ""
    },
    {
      "category": "程度・数量",
      "zh": "几乎",
      "pinyin": "jīhū",
      "ja": "ほとんど",
      "en": ""
    },
    {
      "category": "程度・数量",
      "zh": "勉强",
      "pinyin": "miǎnqiǎng",
      "ja": "ほとんど～ない",
      "en": ""
    },
    {
      "category": "程度・数量",
      "zh": "只",
      "pinyin": "zhǐ",
      "ja": "～だけ",
      "en": ""
    },
    {
      "category": "程度・数量",
      "zh": "仅仅",
      "pinyin": "jǐnjǐn",
      "ja": "～だけ",
      "en": ""
    },
    {
      "category": "程度・数量",
      "zh": "准确地",
      "pinyin": "zhǔnquè de",
      "ja": "正確に",
      "en": ""
    },
    {
      "category": "程度・数量",
      "zh": "大约",
      "pinyin": "dàyuē",
      "ja": "およそ、だいたい",
      "en": ""
    },
    {
      "category": "程度・数量",
      "zh": "更多",
      "pinyin": "gèngduō",
      "ja": "もっと",
      "en": ""
    },
    {
      "category": "程度・数量",
      "zh": "更少",
      "pinyin": "gèngshǎo",
      "ja": "より少なく、あまり～ない",
      "en": ""
    },
    {
      "category": "時間・時点",
      "zh": "马上",
      "pinyin": "mǎshàng",
      "ja": "今すぐ",
      "en": ""
    },
    {
      "category": "程度・数量",
      "zh": "更加",
      "pinyin": "gèngjiā",
      "ja": "さらにもっと",
      "en": ""
    },
    {
      "category": "頻度・反復",
      "zh": "每天",
      "pinyin": "měitiān",
      "ja": "毎日",
      "en": ""
    },
    {
      "category": "頻度・反復",
      "zh": "每周",
      "pinyin": "měizhōu",
      "ja": "毎週",
      "en": ""
    },
    {
      "category": "頻度・反復",
      "zh": "日常",
      "pinyin": "rìcháng",
      "ja": "日常的に",
      "en": ""
    },
    {
      "category": "頻度・反復",
      "zh": "再次",
      "pinyin": "zàicì",
      "ja": "もう一度",
      "en": ""
    },
    {
      "category": "頻度・反復",
      "zh": "又",
      "pinyin": "yòu",
      "ja": "再び",
      "en": ""
    },
    {
      "category": "頻度・反復",
      "zh": "每当",
      "pinyin": "měidāng",
      "ja": "～するたびに",
      "en": ""
    },
    {
      "category": "程度・数量",
      "zh": "很多",
      "pinyin": "hěnduō",
      "ja": "たくさん、とても",
      "en": ""
    },
    {
      "category": "程度・数量",
      "zh": "很少",
      "pinyin": "hěnshǎo",
      "ja": "少ししか～ない",
      "en": ""
    },
    {
      "category": "程度・数量",
      "zh": "那么",
      "pinyin": "nàme",
      "ja": "とても～（…だ）",
      "en": ""
    },
    {
      "category": "程度・数量",
      "zh": "那么多",
      "pinyin": "nàme duō",
      "ja": "とてもたくさん",
      "en": ""
    },
    {
      "category": "程度・数量",
      "zh": "一点也不",
      "pinyin": "yīdiǎn yě bù",
      "ja": "全く～ない",
      "en": ""
    },
    {
      "category": "程度・数量",
      "zh": "有点",
      "pinyin": "yǒudiǎn",
      "ja": "少し、やや",
      "en": ""
    },
    {
      "category": "程度・数量",
      "zh": "完全地",
      "pinyin": "wánquán de",
      "ja": "完全に",
      "en": ""
    },
    {
      "category": "程度・数量",
      "zh": "彻底地",
      "pinyin": "chèdǐ de",
      "ja": "完全に",
      "en": ""
    },
    {
      "category": "程度・数量",
      "zh": "部分地",
      "pinyin": "bùfèn de",
      "ja": "部分的に",
      "en": ""
    },
    {
      "category": "程度・数量",
      "zh": "足够地",
      "pinyin": "zúgòu de",
      "ja": "十分に",
      "en": ""
    },
    {
      "category": "程度・数量",
      "zh": "极其",
      "pinyin": "jíqí",
      "ja": "極めて",
      "en": ""
    },
    {
      "category": "推量・可能性",
      "zh": "大概",
      "pinyin": "dàgài",
      "ja": "おそらく",
      "en": ""
    },
    {
      "category": "推量・可能性",
      "zh": "可能",
      "pinyin": "kěnéng",
      "ja": "もしかすると",
      "en": ""
    },
    {
      "category": "推量・可能性",
      "zh": "肯定",
      "pinyin": "kěndìng",
      "ja": "きっと、おそらく",
      "en": ""
    },
    {
      "category": "確信・明確さ",
      "zh": "清楚地",
      "pinyin": "qīngchǔ de",
      "ja": "明らかに、はっきり",
      "en": ""
    },
    {
      "category": "確信・明確さ",
      "zh": "显然",
      "pinyin": "xiǎnrán",
      "ja": "明らかに",
      "en": ""
    },
    {
      "category": "確信・明確さ",
      "zh": "当然",
      "pinyin": "dāngrán",
      "ja": "当然ながら",
      "en": ""
    },
    {
      "category": "確信・明確さ",
      "zh": "简单地",
      "pinyin": "jiǎndān de",
      "ja": "単に、ただ",
      "en": ""
    },
    {
      "category": "確信・明確さ",
      "zh": "真的",
      "pinyin": "zhēn de",
      "ja": "本当に",
      "en": ""
    },
    {
      "category": "確信・明確さ",
      "zh": "字面上",
      "pinyin": "zìmiàn shàng",
      "ja": "文字通り",
      "en": ""
    },
    {
      "category": "確信・明確さ",
      "zh": "实际上",
      "pinyin": "shíjì shàng",
      "ja": "ほとんど",
      "en": ""
    },
    {
      "category": "接続・例示",
      "zh": "所以",
      "pinyin": "suǒyǐ",
      "ja": "だから、なので",
      "en": ""
    },
    {
      "category": "接続・例示",
      "zh": "例如",
      "pinyin": "lìrú",
      "ja": "例えば",
      "en": ""
    },
    {
      "category": "時間・時点",
      "zh": "现在",
      "pinyin": "xiànzài",
      "ja": "今",
      "en": ""
    },
    {
      "category": "時間・時点",
      "zh": "目前",
      "pinyin": "mùqián",
      "ja": "現在、今のところ",
      "en": ""
    },
    {
      "category": "時間・時点",
      "zh": "马上",
      "pinyin": "mǎshàng",
      "ja": "すぐに",
      "en": ""
    },
    {
      "category": "時間・時点",
      "zh": "终于",
      "pinyin": "zhōngyú",
      "ja": "やっと、ついに",
      "en": ""
    },
    {
      "category": "頻度・否定",
      "zh": "绝不",
      "pinyin": "jué bù",
      "ja": "決して～ない",
      "en": ""
    },
    {
      "category": "肯定・同意",
      "zh": "当然",
      "pinyin": "dāngrán",
      "ja": "もちろん、明らかに",
      "en": ""
    },
    {
      "category": "肯定・同意",
      "zh": "当然",
      "pinyin": "dāngrán",
      "ja": "もちろん",
      "en": ""
    },
    {
      "category": "肯定・同意",
      "zh": "确实",
      "pinyin": "quèshí",
      "ja": "そのとおり",
      "en": ""
    },
    {
      "category": "推量・可能性",
      "zh": "也许",
      "pinyin": "yěxǔ",
      "ja": "たぶん",
      "en": ""
    },
    {
      "category": "推量・可能性",
      "zh": "或许",
      "pinyin": "huòxǔ",
      "ja": "もしかすると",
      "en": ""
    },
    {
      "category": "推量・可能性",
      "zh": "说不定",
      "pinyin": "shuōbudìng",
      "ja": "もしかしたら",
      "en": ""
    },
    {
      "category": "一般性・習慣",
      "zh": "通常",
      "pinyin": "tōngcháng",
      "ja": "ふつうは",
      "en": ""
    },
    {
      "category": "一般性・習慣",
      "zh": "一般来说",
      "pinyin": "yībān lái shuō",
      "ja": "一般的に",
      "en": ""
    },
    {
      "category": "場所・方向",
      "zh": "这里",
      "pinyin": "zhèlǐ",
      "ja": "ここに",
      "en": ""
    },
    {
      "category": "場所・方向",
      "zh": "那里",
      "pinyin": "nàlǐ",
      "ja": "そこに",
      "en": ""
    },
    {
      "category": "場所・方向",
      "zh": "那边",
      "pinyin": "nàbiān",
      "ja": "あそこに",
      "en": ""
    },
    {
      "category": "場所・方向",
      "zh": "这边",
      "pinyin": "zhèbiān",
      "ja": "こちらへ",
      "en": ""
    },
    {
      "category": "場所・方向",
      "zh": "上面",
      "pinyin": "shàngmiàn",
      "ja": "上に",
      "en": ""
    },
    {
      "category": "場所・方向",
      "zh": "下面",
      "pinyin": "xiàmiàn",
      "ja": "下に",
      "en": ""
    },
    {
      "category": "場所・方向",
      "zh": "向前",
      "pinyin": "xiàng qián",
      "ja": "前へ、先へ",
      "en": ""
    },
    {
      "category": "場所・方向",
      "zh": "向后",
      "pinyin": "xiàng hòu",
      "ja": "後ろへ",
      "en": ""
    },
    {
      "category": "場所・方向",
      "zh": "里面",
      "pinyin": "lǐmiàn",
      "ja": "中へ",
      "en": ""
    },
    {
      "category": "場所・方向",
      "zh": "外面",
      "pinyin": "wàimiàn",
      "ja": "外へ",
      "en": ""
    },
    {
      "category": "場所・方向",
      "zh": "周围",
      "pinyin": "zhōuwéi",
      "ja": "周りに",
      "en": ""
    },
    {
      "category": "場所・方向",
      "zh": "正面",
      "pinyin": "zhèngmiàn",
      "ja": "正面に",
      "en": ""
    },
    {
      "category": "場所・方向",
      "zh": "向右",
      "pinyin": "xiàng yòu",
      "ja": "右に",
      "en": ""
    },
    {
      "category": "場所・方向",
      "zh": "向左",
      "pinyin": "xiàng zuǒ",
      "ja": "左に",
      "en": ""
    },
    {
      "category": "場所・方向",
      "zh": "远",
      "pinyin": "yuǎn",
      "ja": "遠くに",
      "en": ""
    },
    {
      "category": "場所・方向",
      "zh": "近",
      "pinyin": "jìn",
      "ja": "近くに",
      "en": ""
    },
    {
      "category": "場所・方向",
      "zh": "到处",
      "pinyin": "dàochù",
      "ja": "至る所に",
      "en": ""
    },
    {
      "category": "場所・方向",
      "zh": "哪里都不",
      "pinyin": "nǎlǐ dōu bù",
      "ja": "どこにも～ない",
      "en": ""
    },
    {
      "category": "場所・方向",
      "zh": "某处",
      "pinyin": "mǒuchù",
      "ja": "どこかに",
      "en": ""
    },
    {
      "category": "様態・方法",
      "zh": "这样",
      "pinyin": "zhèyàng",
      "ja": "このように",
      "en": ""
    },
    {
      "category": "様態・方法",
      "zh": "慢慢地",
      "pinyin": "mànmàn de",
      "ja": "ゆっくりと",
      "en": ""
    },
    {
      "category": "様態・方法",
      "zh": "快快地",
      "pinyin": "kuàikuài de",
      "ja": "急いで",
      "en": ""
    },
    {
      "category": "様態・方法",
      "zh": "仔细地",
      "pinyin": "zǐxì de",
      "ja": "注意深く",
      "en": ""
    },
    {
      "category": "様態・方法",
      "zh": "容易地",
      "pinyin": "róngyì de",
      "ja": "簡単に",
      "en": ""
    },
    {
      "category": "様態・方法",
      "zh": "艰难地",
      "pinyin": "jiānnán de",
      "ja": "かろうじて、難しく",
      "en": ""
    },
    {
      "category": "様態・方法",
      "zh": "高兴地",
      "pinyin": "gāoxìng de",
      "ja": "楽しそうに",
      "en": ""
    },
    {
      "category": "様態・方法",
      "zh": "悲伤地",
      "pinyin": "bēishāng de",
      "ja": "悲しそうに",
      "en": ""
    },
    {
      "category": "様態・方法",
      "zh": "平静地",
      "pinyin": "píngjìng de",
      "ja": "穏やかに",
      "en": ""
    },
    {
      "category": "様態・方法",
      "zh": "安静地",
      "pinyin": "ānjìng de",
      "ja": "静かに",
      "en": ""
    },
    {
      "category": "様態・方法",
      "zh": "强烈地",
      "pinyin": "qiángliè de",
      "ja": "強く",
      "en": ""
    },
    {
      "category": "様態・方法",
      "zh": "轻轻地",
      "pinyin": "qīngqīng de",
      "ja": "柔らかく、優しく",
      "en": ""
    },
    {
      "category": "様態・方法",
      "zh": "自然地",
      "pinyin": "zìrán de",
      "ja": "自然に",
      "en": ""
    },
    {
      "category": "様態・方法",
      "zh": "特别是",
      "pinyin": "tèbié shì",
      "ja": "特に",
      "en": ""
    },
    {
      "category": "様態・方法",
      "zh": "主要是",
      "pinyin": "zhǔyào shì",
      "ja": "主に",
      "en": ""
    },
    {
      "category": "様態・方法",
      "zh": "直接地",
      "pinyin": "zhíjiē de",
      "ja": "直接に",
      "en": ""
    },
    {
      "category": "様態・方法",
      "zh": "个人来说",
      "pinyin": "gèrén lái shuō",
      "ja": "個人的に",
      "en": ""
    },
    {
      "category": "様態・方法",
      "zh": "自动地",
      "pinyin": "zìdòng de",
      "ja": "自動的に",
      "en": ""
    },
    {
      "category": "様態・方法",
      "zh": "完美地",
      "pinyin": "wánměi de",
      "ja": "完璧に",
      "en": ""
    },
    {
      "category": "様態・方法",
      "zh": "正确地",
      "pinyin": "zhèngquè de",
      "ja": "正しく",
      "en": ""
    },
    {
      "category": "様態・方法",
      "zh": "错误地",
      "pinyin": "cuòwù de",
      "ja": "間違って",
      "en": ""
    },
    {
      "category": "肯定・否定",
      "zh": "是",
      "pinyin": "shì",
      "ja": "はい",
      "en": ""
    },
    {
      "category": "肯定・否定",
      "zh": "不",
      "pinyin": "bù",
      "ja": "いいえ",
      "en": ""
    },
    {
      "category": "肯定・否定",
      "zh": "不是",
      "pinyin": "bú shì",
      "ja": "～ない",
      "en": ""
    },
    {
      "category": "肯定・否定",
      "zh": "也不",
      "pinyin": "yě bù",
      "ja": "～もまた～ない",
      "en": ""
    },
    {
      "category": "確信・明確さ",
      "zh": "确实",
      "pinyin": "quèshí",
      "ja": "確かに",
      "en": ""
    },
    {
      "category": "確信・明確さ",
      "zh": "真正地",
      "pinyin": "zhēnzhèng de",
      "ja": "本当に",
      "en": ""
    },
    {
      "category": "確信・明確さ",
      "zh": "一定",
      "pinyin": "yīdìng",
      "ja": "間違いなく",
      "en": ""
    },
    {
      "category": "確信・明確さ",
      "zh": "绝对",
      "pinyin": "juéduì",
      "ja": "絶対に",
      "en": ""
    },
    {
      "category": "確信・明確さ",
      "zh": "无疑",
      "pinyin": "wúyí",
      "ja": "疑いなく",
      "en": ""
    },
    {
      "category": "確信・明確さ",
      "zh": "看起来",
      "pinyin": "kànqǐlái",
      "ja": "どうやら、見たところ",
      "en": ""
    },
    {
      "category": "疑問・質問",
      "zh": "哪里",
      "pinyin": "nǎlǐ",
      "ja": "どこ",
      "en": ""
    },
    {
      "category": "疑問・質問",
      "zh": "什么时候",
      "pinyin": "shénme shíhou",
      "ja": "いつ",
      "en": ""
    },
    {
      "category": "疑問・質問",
      "zh": "怎么",
      "pinyin": "zěnme",
      "ja": "どのように",
      "en": ""
    },
    {
      "category": "疑問・質問",
      "zh": "多少",
      "pinyin": "duōshao",
      "ja": "どのくらい",
      "en": ""
    },
    {
      "category": "疑問・質問",
      "zh": "为什么",
      "pinyin": "wèishénme",
      "ja": "なぜ",
      "en": ""
    },
    {
      "category": "疑問・質問",
      "zh": "为了什么",
      "pinyin": "wèile shénme",
      "ja": "何のために",
      "en": ""
    },
    {
      "category": "時間・期間",
      "zh": "昨晚",
      "pinyin": "zuówǎn",
      "ja": "昨夜",
      "en": ""
    },
    {
      "category": "時間・期間",
      "zh": "前天",
      "pinyin": "qiántiān",
      "ja": "おととい",
      "en": ""
    },
    {
      "category": "時間・期間",
      "zh": "后天",
      "pinyin": "hòutiān",
      "ja": "あさって",
      "en": ""
    },
    {
      "category": "時間・期間",
      "zh": "最近",
      "pinyin": "zuìjìn",
      "ja": "最近",
      "en": ""
    },
    {
      "category": "時間・期間",
      "zh": "近来",
      "pinyin": "jìnlái",
      "ja": "最近、このごろ",
      "en": ""
    },
    {
      "category": "時間・期間",
      "zh": "以前",
      "pinyin": "yǐqián",
      "ja": "昔は",
      "en": ""
    },
    {
      "category": "時間・期間",
      "zh": "与此同时",
      "pinyin": "yǔcǐ tóngshí",
      "ja": "その間に",
      "en": ""
    },
    {
      "category": "時間・期間",
      "zh": "从现在起",
      "pinyin": "cóng xiànzài qǐ",
      "ja": "今から",
      "en": ""
    },
    {
      "category": "時間・期間",
      "zh": "今后",
      "pinyin": "jīnhòu",
      "ja": "これからは",
      "en": ""
    },
    {
      "category": "時間・期間",
      "zh": "从今以后",
      "pinyin": "cóng jīn yǐhòu",
      "ja": "今後は",
      "en": ""
    },
    {
      "category": "時間・期間",
      "zh": "立即",
      "pinyin": "lìjí",
      "ja": "すぐに",
      "en": ""
    },
    {
      "category": "時間・期間",
      "zh": "暂时",
      "pinyin": "zànshí",
      "ja": "とりあえず",
      "en": ""
    },
    {
      "category": "時間・期間",
      "zh": "目前",
      "pinyin": "mùqián",
      "ja": "今のところ",
      "en": ""
    },
    {
      "category": "時間・期間",
      "zh": "到目前为止",
      "pinyin": "dào mùqián wéizhǐ",
      "ja": "今まで",
      "en": ""
    },
    {
      "category": "時間・期間",
      "zh": "从那以后",
      "pinyin": "cóng nà yǐhòu",
      "ja": "それ以来",
      "en": ""
    },
    {
      "category": "時間・期間",
      "zh": "准时",
      "pinyin": "zhǔnshí",
      "ja": "時間通りに",
      "en": ""
    },
    {
      "category": "時間・期間",
      "zh": "同时",
      "pinyin": "tóngshí",
      "ja": "同時に",
      "en": ""
    },
    {
      "category": "時間・期間",
      "zh": "同时",
      "pinyin": "tóngshí",
      "ja": "同時に",
      "en": ""
    },
    {
      "category": "時間・期間",
      "zh": "连续地",
      "pinyin": "liánxù de",
      "ja": "絶えず",
      "en": ""
    },
    {
      "category": "時間・期間",
      "zh": "不断地",
      "pinyin": "búduàn de",
      "ja": "常に",
      "en": ""
    },
    {
      "category": "時間・期間",
      "zh": "永久地",
      "pinyin": "yǒngjiǔ de",
      "ja": "永久に",
      "en": ""
    },
    {
      "category": "時間・期間",
      "zh": "暂时地",
      "pinyin": "zànshí de",
      "ja": "一時的に",
      "en": ""
    },
    {
      "category": "時間・期間",
      "zh": "偶尔",
      "pinyin": "ǒu'ěr",
      "ja": "時折",
      "en": ""
    },
    {
      "category": "時間・期間",
      "zh": "每日",
      "pinyin": "měirì",
      "ja": "毎日",
      "en": ""
    },
    {
      "category": "時間・期間",
      "zh": "每周",
      "pinyin": "měizhōu",
      "ja": "毎週",
      "en": ""
    },
    {
      "category": "時間・期間",
      "zh": "每月",
      "pinyin": "měiyuè",
      "ja": "毎月",
      "en": ""
    },
    {
      "category": "時間・期間",
      "zh": "每年",
      "pinyin": "měinián",
      "ja": "毎年",
      "en": ""
    },
    {
      "category": "程度・範囲",
      "zh": "极其",
      "pinyin": "jíqí",
      "ja": "極めて",
      "en": ""
    },
    {
      "category": "程度・範囲",
      "zh": "非常",
      "pinyin": "fēicháng",
      "ja": "非常に",
      "en": ""
    },
    {
      "category": "程度・範囲",
      "zh": "难以置信地",
      "pinyin": "nányǐ zhìxìn de",
      "ja": "信じられないほど",
      "en": ""
    },
    {
      "category": "程度・範囲",
      "zh": "非常",
      "pinyin": "fēicháng",
      "ja": "ひどく",
      "en": ""
    },
    {
      "category": "程度・範囲",
      "zh": "可怕地",
      "pinyin": "kěpà de",
      "ja": "ひどく",
      "en": ""
    },
    {
      "category": "程度・範囲",
      "zh": "轻微地",
      "pinyin": "qīngwéi de",
      "ja": "わずかに",
      "en": ""
    },
    {
      "category": "程度・範囲",
      "zh": "相对地",
      "pinyin": "xiāngduì de",
      "ja": "比較的",
      "en": ""
    },
    {
      "category": "程度・範囲",
      "zh": "差不多",
      "pinyin": "chàbuduō",
      "ja": "だいたい",
      "en": ""
    },
    {
      "category": "程度・範囲",
      "zh": "至少",
      "pinyin": "zhìshǎo",
      "ja": "少なくとも",
      "en": ""
    },
    {
      "category": "程度・範囲",
      "zh": "最多",
      "pinyin": "zuìduō",
      "ja": "多くとも",
      "en": ""
    },
    {
      "category": "程度・範囲",
      "zh": "最少",
      "pinyin": "zuìshǎo",
      "ja": "最低でも",
      "en": ""
    },
    {
      "category": "強調・限定",
      "zh": "特别是",
      "pinyin": "tèbié shì",
      "ja": "特に",
      "en": ""
    },
    {
      "category": "強調・限定",
      "zh": "甚至",
      "pinyin": "shènzhì",
      "ja": "～さえ",
      "en": ""
    },
    {
      "category": "強調・限定",
      "zh": "甚至",
      "pinyin": "shènzhì",
      "ja": "～でさえ",
      "en": ""
    },
    {
      "category": "強調・限定",
      "zh": "甚至都不",
      "pinyin": "shènzhì dōu bù",
      "ja": "～さえも～ない",
      "en": ""
    },
    {
      "category": "接続・談話",
      "zh": "也就是说",
      "pinyin": "yě jiùshì shuō",
      "ja": "つまり",
      "en": ""
    },
    {
      "category": "接続・談話",
      "zh": "换句话说",
      "pinyin": "huànjù huà shuō",
      "ja": "すなわち",
      "en": ""
    },
    {
      "category": "接続・談話",
      "zh": "换言之",
      "pinyin": "huàn yán zhī",
      "ja": "言い換えると",
      "en": ""
    },
    {
      "category": "接続・談話",
      "zh": "总之",
      "pinyin": "zǒngzhī",
      "ja": "要するに",
      "en": ""
    },
    {
      "category": "接続・談話",
      "zh": "总结而言",
      "pinyin": "zǒngjié ér yán",
      "ja": "結論として",
      "en": ""
    },
    {
      "category": "接続・談話",
      "zh": "相反",
      "pinyin": "xiāngfǎn",
      "ja": "それどころか",
      "en": ""
    },
    {
      "category": "接続・談話",
      "zh": "然而",
      "pinyin": "rán'ér",
      "ja": "それにもかかわらず",
      "en": ""
    },
    {
      "category": "接続・談話",
      "zh": "不管怎样",
      "pinyin": "bùguǎn zěnyàng",
      "ja": "とにかく",
      "en": ""
    },
    {
      "category": "接続・談話",
      "zh": "无论如何",
      "pinyin": "wúlùn rúhé",
      "ja": "いずれにせよ",
      "en": ""
    },
    {
      "category": "接続・談話",
      "zh": "实际上",
      "pinyin": "shíjì shàng",
      "ja": "実際には",
      "en": ""
    },
    {
      "category": "評価・態度",
      "zh": "幸运的是",
      "pinyin": "xìngyùn de shì",
      "ja": "幸いにも",
      "en": ""
    },
    {
      "category": "評価・態度",
      "zh": "不幸的是",
      "pinyin": "búxìng de shì",
      "ja": "残念ながら",
      "en": ""
    },
    {
      "category": "評価・態度",
      "zh": "遗憾的是",
      "pinyin": "yíhàn de shì",
      "ja": "残念なことに",
      "en": ""
    },
    {
      "category": "評価・態度",
      "zh": "令人惊讶的是",
      "pinyin": "lìngrén jīngyà de shì",
      "ja": "驚くことに",
      "en": ""
    },
    {
      "category": "評価・態度",
      "zh": "坦率地说",
      "pinyin": "tǎnshuài de shuō",
      "ja": "率直に言って",
      "en": ""
    },
    {
      "category": "評価・態度",
      "zh": "诚实地说",
      "pinyin": "chéngshí de shuō",
      "ja": "正直に",
      "en": ""
    },
    {
      "category": "評価・態度",
      "zh": "真诚地",
      "pinyin": "zhēnchéng de",
      "ja": "心から",
      "en": ""
    },
    {
      "category": "基本・本質",
      "zh": "基本上",
      "pinyin": "jīběn shàng",
      "ja": "基本的に",
      "en": ""
    },
    {
      "category": "基本・本質",
      "zh": "本质上",
      "pinyin": "běnzhì shàng",
      "ja": "本質的に",
      "en": ""
    },
    {
      "category": "基本・本質",
      "zh": "原本",
      "pinyin": "yuánběn",
      "ja": "もともと",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "尽快",
      "pinyin": "jǐnkuài",
      "ja": "できるだけ早く、ASAP",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "及时",
      "pinyin": "jíshí",
      "ja": "タイムリーに、適時に",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "暂时",
      "pinyin": "zànshí",
      "ja": "一時的に、当面",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "长期",
      "pinyin": "chángqī",
      "ja": "長期的に",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "短期",
      "pinyin": "duǎnqī",
      "ja": "短期的に",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "永久",
      "pinyin": "yǒngjiǔ",
      "ja": "永久に",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "临时",
      "pinyin": "línshí",
      "ja": "臨時に",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "正式地",
      "pinyin": "zhèngshì de",
      "ja": "正式に",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "直接",
      "pinyin": "zhíjiē",
      "ja": "直接に",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "间接",
      "pinyin": "jiànjiē",
      "ja": "間接的に",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "分别",
      "pinyin": "fēnbié",
      "ja": "それぞれ、別々に",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "统一",
      "pinyin": "tǒngyī",
      "ja": "統一して",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "基本上",
      "pinyin": "jīběn shàng",
      "ja": "基本的に",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "原则上",
      "pinyin": "yuánzé shàng",
      "ja": "原則として",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "实际上",
      "pinyin": "shíjì shàng",
      "ja": "実際には",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "理论上",
      "pinyin": "lǐlùn shàng",
      "ja": "理論上は",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "大概",
      "pinyin": "dàgài",
      "ja": "おおよそ、だいたい",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "具体地",
      "pinyin": "jùtǐ de",
      "ja": "具体的に",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "明确地",
      "pinyin": "míngquè de",
      "ja": "明確に",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "彻底地",
      "pinyin": "chèdǐ de",
      "ja": "徹底的に",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "逐步",
      "pinyin": "zhúbù",
      "ja": "段階的に、徐々に",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "逐渐",
      "pinyin": "zhújiàn",
      "ja": "次第に、徐々に",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "同时",
      "pinyin": "tóngshí",
      "ja": "同時に",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "首先",
      "pinyin": "shǒuxiān",
      "ja": "まず、最初に",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "其次",
      "pinyin": "qícì",
      "ja": "次に、第二に",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "最后",
      "pinyin": "zuìhòu",
      "ja": "最後に",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "总之",
      "pinyin": "zǒngzhī",
      "ja": "要するに",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "另外",
      "pinyin": "lìngwài",
      "ja": "その他に、また",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "此外",
      "pinyin": "cǐwài",
      "ja": "さらに、この他に",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "尤其",
      "pinyin": "yóuqí",
      "ja": "特に",
      "en": ""
    }
  ],
  "nouns": [
    {
      "category": "人・家族",
      "zh": "人",
      "pinyin": "rén",
      "ja": "人",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "男人",
      "pinyin": "nánrén",
      "ja": "男の人",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "女人",
      "pinyin": "nǚrén",
      "ja": "女の人",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "男孩",
      "pinyin": "nánhái",
      "ja": "少年、男の子",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "女孩",
      "pinyin": "nǚhái",
      "ja": "少女、女の子",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "孩子",
      "pinyin": "háizi",
      "ja": "子ども",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "婴儿",
      "pinyin": "yīng'ér",
      "ja": "赤ちゃん",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "青少年",
      "pinyin": "qīngshàonián",
      "ja": "ティーンエイジャー",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "年轻人",
      "pinyin": "niánqīngrén",
      "ja": "若者",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "成年人",
      "pinyin": "chéngnián rén",
      "ja": "大人",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "老人",
      "pinyin": "lǎorén",
      "ja": "高齢者",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "家庭",
      "pinyin": "jiātíng",
      "ja": "家族",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "父亲",
      "pinyin": "fùqīn",
      "ja": "父",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "母亲",
      "pinyin": "mǔqīn",
      "ja": "母",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "爸爸",
      "pinyin": "bàba",
      "ja": "お父さん",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "妈妈",
      "pinyin": "māma",
      "ja": "お母さん",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "父母",
      "pinyin": "fùmǔ",
      "ja": "両親",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "儿子",
      "pinyin": "érzi",
      "ja": "息子",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "女儿",
      "pinyin": "nǚ'ér",
      "ja": "娘",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "孩子们",
      "pinyin": "háizimen",
      "ja": "子どもたち",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "兄弟",
      "pinyin": "xiōngdì",
      "ja": "兄・弟",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "姐妹",
      "pinyin": "jiěmèi",
      "ja": "姉・妹",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "兄弟姐妹",
      "pinyin": "xiōngdì jiěmèi",
      "ja": "兄弟姉妹",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "继兄弟",
      "pinyin": "jì xiōngdì",
      "ja": "義理の兄弟",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "继姐妹",
      "pinyin": "jì jiěmèi",
      "ja": "義理の姉妹",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "爷爷",
      "pinyin": "yéye",
      "ja": "祖父",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "奶奶",
      "pinyin": "nǎinai",
      "ja": "祖母",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "祖父母",
      "pinyin": "zǔfùmǔ",
      "ja": "祖父母",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "曾祖父",
      "pinyin": "zēngzǔfù",
      "ja": "曾祖父",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "曾祖母",
      "pinyin": "zēngzǔmǔ",
      "ja": "曾祖母",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "叔叔",
      "pinyin": "shūshu",
      "ja": "おじ",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "阿姨",
      "pinyin": "āyí",
      "ja": "おば",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "表兄弟姐妹",
      "pinyin": "biǎo xiōngdì jiěmèi",
      "ja": "いとこ",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "孙子",
      "pinyin": "sūnzi",
      "ja": "孫",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "孙女",
      "pinyin": "sūnnǚ",
      "ja": "孫",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "侄子",
      "pinyin": "zhízi",
      "ja": "甥",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "侄女",
      "pinyin": "zhínǚ",
      "ja": "姪",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "岳父",
      "pinyin": "yuèfù",
      "ja": "義父",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "岳母",
      "pinyin": "yuèmǔ",
      "ja": "義母",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "女婿",
      "pinyin": "nǚxu",
      "ja": "婿",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "儿媳",
      "pinyin": "érxí",
      "ja": "嫁",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "姐夫",
      "pinyin": "jiěfu",
      "ja": "義兄弟",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "嫂子",
      "pinyin": "sǎozi",
      "ja": "義姉妹",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "丈夫",
      "pinyin": "zhàngfu",
      "ja": "夫",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "妻子",
      "pinyin": "qīzi",
      "ja": "妻",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "老公",
      "pinyin": "lǎogōng",
      "ja": "旦那",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "伴侣",
      "pinyin": "bànlǚ",
      "ja": "パートナー",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "男朋友",
      "pinyin": "nánpéngyou",
      "ja": "彼氏、婚約者",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "女朋友",
      "pinyin": "nǚpéngyou",
      "ja": "彼女、婚約者",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "鳏夫",
      "pinyin": "guānfū",
      "ja": "やもめ（男）",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "寡妇",
      "pinyin": "guǎfu",
      "ja": "未亡人",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "朋友",
      "pinyin": "péngyou",
      "ja": "友達",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "最好的朋友",
      "pinyin": "zuìhǎo de péngyou",
      "ja": "親友",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "邻居",
      "pinyin": "línjū",
      "ja": "近所の人",
      "en": ""
    },
    {
      "category": "人・家族",
      "zh": "熟人",
      "pinyin": "shúrén",
      "ja": "知り合い",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "上司",
      "pinyin": "shàngsi",
      "ja": "上司",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "同伴",
      "pinyin": "tóngbàn",
      "ja": "仲間",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "同事",
      "pinyin": "tóngshì",
      "ja": "同僚",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "老师",
      "pinyin": "lǎoshī",
      "ja": "教師、先生",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "老师（小学）",
      "pinyin": "lǎoshī",
      "ja": "教師、小学校の先生",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "学生",
      "pinyin": "xuésheng",
      "ja": "学生、生徒",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "生徒",
      "pinyin": "xuésheng",
      "ja": "学生",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "毕业生",
      "pinyin": "bìyèshēng",
      "ja": "卒業生",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "教练",
      "pinyin": "jiàoliàn",
      "ja": "コーチ、トレーナー",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "运动员",
      "pinyin": "yùndòngyuán",
      "ja": "スポーツ選手",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "选手",
      "pinyin": "xuǎnshǒu",
      "ja": "選手、プレーヤー",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "裁判",
      "pinyin": "cáipàn",
      "ja": "審判",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "守门员",
      "pinyin": "shǒuményuán",
      "ja": "ゴールキーパー / 門番",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "游泳运动员",
      "pinyin": "yóuyǒng yùndòngyuán",
      "ja": "水泳選手",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "救生员",
      "pinyin": "jiùshēngyuán",
      "ja": "ライフガード、救助員",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "指导员",
      "pinyin": "zhǐdǎoyuán",
      "ja": "インストラクター、指導員",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "医生",
      "pinyin": "yīshēng",
      "ja": "医者",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "博士",
      "pinyin": "bóshì",
      "ja": "ドクター、博士号を持つ人",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "护士",
      "pinyin": "hùshi",
      "ja": "看護師",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "外科医生",
      "pinyin": "wàikē yīshēng",
      "ja": "外科医",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "牙医",
      "pinyin": "yáyī",
      "ja": "歯科医",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "理疗师",
      "pinyin": "lǐliáoshī",
      "ja": "理学療法士",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "药剂师",
      "pinyin": "yàojìshī",
      "ja": "薬剤師",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "心理学家",
      "pinyin": "xīnlǐxuéjiā",
      "ja": "心理士",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "警察",
      "pinyin": "jǐngchá",
      "ja": "警察官",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "消防员",
      "pinyin": "xiāofángyuán",
      "ja": "消防士",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "士兵",
      "pinyin": "shìbīng",
      "ja": "兵士",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "服务员",
      "pinyin": "fúwùyuán",
      "ja": "ウェイター / ウェイトレス",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "厨师",
      "pinyin": "chúshī",
      "ja": "料理人、コック",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "主厨",
      "pinyin": "zhǔchú",
      "ja": "シェフ",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "面包师",
      "pinyin": "miànbāoshī",
      "ja": "パン屋",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "店员",
      "pinyin": "diànyuán",
      "ja": "店員",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "律师",
      "pinyin": "lǜshī",
      "ja": "弁護士",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "法官",
      "pinyin": "fǎguān",
      "ja": "裁判官",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "工程师",
      "pinyin": "gōngchéngshī",
      "ja": "エンジニア",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "建筑师",
      "pinyin": "jiànzhùshī",
      "ja": "建築家",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "设计师",
      "pinyin": "shèjìshī",
      "ja": "デザイナー",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "记者",
      "pinyin": "jìzhě",
      "ja": "ジャーナリスト",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "作家",
      "pinyin": "zuòjiā",
      "ja": "作家",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "摄影师",
      "pinyin": "shèyǐngshī",
      "ja": "写真家",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "工人",
      "pinyin": "gōngrén",
      "ja": "労働者、働く人",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "员工",
      "pinyin": "yuángōng",
      "ja": "従業員",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "企业家",
      "pinyin": "qǐyèjiā",
      "ja": "起業家",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "秘书",
      "pinyin": "mìshū",
      "ja": "秘書",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "会计",
      "pinyin": "kuàijì",
      "ja": "会計士",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "飞行员",
      "pinyin": "fēixíngyuán",
      "ja": "パイロット",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "机械师",
      "pinyin": "jīxièshī",
      "ja": "整備士",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "电工",
      "pinyin": "diàngōng",
      "ja": "電気技師",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "水管工",
      "pinyin": "shuǐguǎngōng",
      "ja": "配管工",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "木匠",
      "pinyin": "mùjiàng",
      "ja": "大工",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "美发师",
      "pinyin": "měifàshī",
      "ja": "美容師",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "客户",
      "pinyin": "kèhù",
      "ja": "客",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "顾客",
      "pinyin": "gùkè",
      "ja": "顧客",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "受邀客人",
      "pinyin": "shòuyāo kèrén",
      "ja": "招待客",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "住客",
      "pinyin": "zhùkè",
      "ja": "宿泊客",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "来宾",
      "pinyin": "láibīn",
      "ja": "来客",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "访客",
      "pinyin": "fǎngkè",
      "ja": "訪問者、来場者",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "观众",
      "pinyin": "guānzhòng",
      "ja": "観客、一般の人々",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "粉丝",
      "pinyin": "fěnsī",
      "ja": "ファン",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "爱好者",
      "pinyin": "àihàozhě",
      "ja": "愛好家",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "市民",
      "pinyin": "shìmín",
      "ja": "市民",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "外国人",
      "pinyin": "wàiguórén",
      "ja": "外国人",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "游客",
      "pinyin": "yóukè",
      "ja": "観光客",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "移民",
      "pinyin": "yímín",
      "ja": "移民",
      "en": ""
    },
    {
      "category": "職業・人々",
      "zh": "居民",
      "pinyin": "jūmín",
      "ja": "住民、居住者",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "爱",
      "pinyin": "ài",
      "ja": "愛",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "喜悦",
      "pinyin": "xǐyuè",
      "ja": "喜び",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "幸福",
      "pinyin": "xìngfú",
      "ja": "幸せ",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "悲伤",
      "pinyin": "bēishāng",
      "ja": "悲しみ",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "恐惧",
      "pinyin": "kǒngjù",
      "ja": "恐怖",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "恐怖",
      "pinyin": "kǒngbù",
      "ja": "恐怖、テロ",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "担忧",
      "pinyin": "dānyōu",
      "ja": "心配、不安",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "焦虑",
      "pinyin": "jiāolǜ",
      "ja": "不安、焦り",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "压力",
      "pinyin": "yālì",
      "ja": "ストレス",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "平静",
      "pinyin": "píngjìng",
      "ja": "落ち着き、静けさ",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "安宁",
      "pinyin": "ānníng",
      "ja": "穏やかさ",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "愤怒",
      "pinyin": "fènnù",
      "ja": "怒り",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "暴怒",
      "pinyin": "bàonù",
      "ja": "激しい怒り",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "挫折感",
      "pinyin": "cuòzhé gǎn",
      "ja": "フラストレーション",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "惊讶",
      "pinyin": "jīngyà",
      "ja": "驚き",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "羞耻",
      "pinyin": "xiūchǐ",
      "ja": "恥ずかしさ",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "羡慕",
      "pinyin": "xiànmù",
      "ja": "うらやましさ、嫉妬",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "嫉妒",
      "pinyin": "jídù",
      "ja": "嫉妬心",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "亲情",
      "pinyin": "qīnqíng",
      "ja": "愛情、親しみ",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "憎恨",
      "pinyin": "zēnghèn",
      "ja": "憎しみ",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "怨恨",
      "pinyin": "yuànhèn",
      "ja": "恨み",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "兴趣",
      "pinyin": "xìngqù",
      "ja": "興味、関心",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "困意",
      "pinyin": "kùnyì",
      "ja": "眠気",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "梦",
      "pinyin": "mèng",
      "ja": "夢",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "期待",
      "pinyin": "qīdài",
      "ja": "わくわく感、期待",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "欲望",
      "pinyin": "yùwàng",
      "ja": "願望、欲求",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "骄傲",
      "pinyin": "jiāo'ào",
      "ja": "誇り",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "心情",
      "pinyin": "xīnqíng",
      "ja": "気分",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "精神",
      "pinyin": "jīngshén",
      "ja": "気力",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "情绪",
      "pinyin": "qíngxù",
      "ja": "機嫌",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "幽默",
      "pinyin": "yōumò",
      "ja": "ユーモア",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "自信",
      "pinyin": "zìxìn",
      "ja": "自信",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "信任",
      "pinyin": "xìnrèn",
      "ja": "信頼",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "希望",
      "pinyin": "xīwàng",
      "ja": "希望",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "绝望",
      "pinyin": "juéwàng",
      "ja": "絶望",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "孤独",
      "pinyin": "gūdú",
      "ja": "孤独",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "感激",
      "pinyin": "gǎnjī",
      "ja": "感謝",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "宽慰",
      "pinyin": "kuānwèi",
      "ja": "安心、安堵",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "怀旧",
      "pinyin": "huáijiù",
      "ja": "郷愁、懐かしさ",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "无聊",
      "pinyin": "wúliáo",
      "ja": "退屈",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "情感",
      "pinyin": "qínggǎn",
      "ja": "感情",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "兴奋",
      "pinyin": "xīngfèn",
      "ja": "興奮",
      "en": ""
    },
    {
      "category": "感情・心理",
      "zh": "感情",
      "pinyin": "gǎnqíng",
      "ja": "感情、気持ち",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "头",
      "pinyin": "tóu",
      "ja": "頭",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "大脑",
      "pinyin": "dànǎo",
      "ja": "脳",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "脸",
      "pinyin": "liǎn",
      "ja": "顔",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "额头",
      "pinyin": "étóu",
      "ja": "おでこ",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "眼睛",
      "pinyin": "yǎnjing",
      "ja": "目",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "眉毛",
      "pinyin": "méimao",
      "ja": "眉毛",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "睫毛",
      "pinyin": "jiémáo",
      "ja": "まつげ",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "鼻子",
      "pinyin": "bízi",
      "ja": "鼻",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "嘴",
      "pinyin": "zuǐ",
      "ja": "口",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "嘴唇",
      "pinyin": "zuǐchún",
      "ja": "唇",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "牙齿",
      "pinyin": "yáchǐ",
      "ja": "歯",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "臼齿",
      "pinyin": "jiùchǐ",
      "ja": "奥歯",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "舌头",
      "pinyin": "shétou",
      "ja": "舌",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "耳朵（外）",
      "pinyin": "ěrduo",
      "ja": "耳（外側）",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "耳（内）",
      "pinyin": "ěr",
      "ja": "耳（内側）",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "听觉",
      "pinyin": "tīngjué",
      "ja": "聴覚",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "脸颊",
      "pinyin": "liǎnjiá",
      "ja": "頬",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "下巴",
      "pinyin": "xiàba",
      "ja": "あご",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "脖子",
      "pinyin": "bózi",
      "ja": "首",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "喉咙",
      "pinyin": "hóulóng",
      "ja": "喉",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "肩膀",
      "pinyin": "jiānbǎng",
      "ja": "肩",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "手臂",
      "pinyin": "shǒubì",
      "ja": "腕",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "手肘",
      "pinyin": "shǒuzhǒu",
      "ja": "肘",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "手腕",
      "pinyin": "shǒuwàn",
      "ja": "手首",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "手",
      "pinyin": "shǒu",
      "ja": "手",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "手掌",
      "pinyin": "shǒuzhǎng",
      "ja": "手のひら",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "手指",
      "pinyin": "shǒuzhǐ",
      "ja": "指",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "拇指",
      "pinyin": "mǔzhǐ",
      "ja": "親指",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "指甲",
      "pinyin": "zhǐjia",
      "ja": "爪",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "腿",
      "pinyin": "tuǐ",
      "ja": "脚",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "大腿",
      "pinyin": "dàtuǐ",
      "ja": "太もも",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "膝盖",
      "pinyin": "xīgài",
      "ja": "膝",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "脚踝",
      "pinyin": "jiǎohuái",
      "ja": "くるぶし",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "脚",
      "pinyin": "jiǎo",
      "ja": "足",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "脚跟",
      "pinyin": "jiǎogēn",
      "ja": "かかと",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "背",
      "pinyin": "bèi",
      "ja": "背中",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "腰",
      "pinyin": "yāo",
      "ja": "腰",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "臀部",
      "pinyin": "túnbù",
      "ja": "腰、ヒップ",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "胸",
      "pinyin": "xiōng",
      "ja": "胸",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "胃",
      "pinyin": "wèi",
      "ja": "胃",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "肚子",
      "pinyin": "dùzi",
      "ja": "お腹",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "心脏",
      "pinyin": "xīnzàng",
      "ja": "心臓",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "肺",
      "pinyin": "fèi",
      "ja": "肺",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "肝脏",
      "pinyin": "gānzàng",
      "ja": "肝臓",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "肾脏",
      "pinyin": "shènzàng",
      "ja": "腎臓",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "肠",
      "pinyin": "cháng",
      "ja": "腸",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "骨头",
      "pinyin": "gǔtou",
      "ja": "骨",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "肌肉",
      "pinyin": "jīròu",
      "ja": "筋肉",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "皮肤",
      "pinyin": "pífū",
      "ja": "肌、皮膚",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "头发",
      "pinyin": "tóufa",
      "ja": "髪の毛",
      "en": ""
    },
    {
      "category": "体の部位",
      "zh": "血",
      "pinyin": "xuè",
      "ja": "血",
      "en": ""
    },
    {
      "category": "健康・医療",
      "zh": "健康",
      "pinyin": "jiànkāng",
      "ja": "健康",
      "en": ""
    },
    {
      "category": "健康・医療",
      "zh": "疾病",
      "pinyin": "jíbìng",
      "ja": "病気",
      "en": ""
    },
    {
      "category": "健康・医療",
      "zh": "发烧",
      "pinyin": "fāshāo",
      "ja": "熱",
      "en": ""
    },
    {
      "category": "健康・医療",
      "zh": "咳嗽",
      "pinyin": "késou",
      "ja": "せき",
      "en": ""
    },
    {
      "category": "健康・医療",
      "zh": "喷嚏",
      "pinyin": "pēntì",
      "ja": "くしゃみ",
      "en": ""
    },
    {
      "category": "健康・医療",
      "zh": "感冒",
      "pinyin": "gǎnmào",
      "ja": "風邪",
      "en": ""
    },
    {
      "category": "健康・医療",
      "zh": "流感",
      "pinyin": "liúgǎn",
      "ja": "インフルエンザ",
      "en": ""
    },
    {
      "category": "健康・医療",
      "zh": "病毒",
      "pinyin": "bìngdú",
      "ja": "ウイルス",
      "en": ""
    },
    {
      "category": "健康・医療",
      "zh": "感染",
      "pinyin": "gǎnrǎn",
      "ja": "感染",
      "en": ""
    },
    {
      "category": "健康・医療",
      "zh": "过敏",
      "pinyin": "guòmǐn",
      "ja": "アレルギー",
      "en": ""
    },
    {
      "category": "健康・医療",
      "zh": "疼痛",
      "pinyin": "téngtòng",
      "ja": "痛み",
      "en": ""
    },
    {
      "category": "健康・医療",
      "zh": "头痛",
      "pinyin": "tóutòng",
      "ja": "頭痛",
      "en": ""
    },
    {
      "category": "健康・医療",
      "zh": "肚子痛",
      "pinyin": "dùzi tòng",
      "ja": "腹痛",
      "en": ""
    },
    {
      "category": "健康・医療",
      "zh": "腰痛",
      "pinyin": "yāotòng",
      "ja": "腰痛",
      "en": ""
    },
    {
      "category": "健康・医療",
      "zh": "喉咙痛",
      "pinyin": "hóulóng tòng",
      "ja": "喉の痛み",
      "en": ""
    },
    {
      "category": "健康・医療",
      "zh": "牙痛",
      "pinyin": "yátòng",
      "ja": "歯痛",
      "en": ""
    },
    {
      "category": "健康・医療",
      "zh": "伤口",
      "pinyin": "shāngkǒu",
      "ja": "けが、傷",
      "en": ""
    },
    {
      "category": "健康・医療",
      "zh": "骨折",
      "pinyin": "gǔzhé",
      "ja": "骨折",
      "en": ""
    },
    {
      "category": "健康・医療",
      "zh": "事故",
      "pinyin": "shìgù",
      "ja": "事故",
      "en": ""
    },
    {
      "category": "健康・医療",
      "zh": "紧急情况",
      "pinyin": "jǐnjí qíngkuàng",
      "ja": "緊急事態",
      "en": ""
    },
    {
      "category": "健康・医療",
      "zh": "治疗",
      "pinyin": "zhìliáo",
      "ja": "治療",
      "en": ""
    },
    {
      "category": "健康・医療",
      "zh": "手术",
      "pinyin": "shǒushù",
      "ja": "手術",
      "en": ""
    },
    {
      "category": "健康・医療",
      "zh": "药",
      "pinyin": "yào",
      "ja": "薬",
      "en": ""
    },
    {
      "category": "健康・医療",
      "zh": "药片",
      "pinyin": "yàopiàn",
      "ja": "錠剤",
      "en": ""
    },
    {
      "category": "健康・医療",
      "zh": "注射",
      "pinyin": "zhùshè",
      "ja": "注射",
      "en": ""
    },
    {
      "category": "健康・医療",
      "zh": "疫苗",
      "pinyin": "yìmiáo",
      "ja": "ワクチン",
      "en": ""
    },
    {
      "category": "健康・医療",
      "zh": "糖浆",
      "pinyin": "tángjiāng",
      "ja": "シロップ",
      "en": ""
    },
    {
      "category": "健康・医療",
      "zh": "处方",
      "pinyin": "chǔfāng",
      "ja": "処方箋",
      "en": ""
    },
    {
      "category": "健康・医療",
      "zh": "休息",
      "pinyin": "xiūxi",
      "ja": "休養",
      "en": ""
    },
    {
      "category": "健康・医療",
      "zh": "节食",
      "pinyin": "jiéshí",
      "ja": "ダイエット、食事療法",
      "en": ""
    },
    {
      "category": "健康・医療",
      "zh": "医疗保险",
      "pinyin": "yīliáo bǎoxiǎn",
      "ja": "健康保険",
      "en": ""
    },
    {
      "category": "健康・医療",
      "zh": "救护车",
      "pinyin": "jiùhùchē",
      "ja": "救急車",
      "en": ""
    },
    {
      "category": "健康・医療",
      "zh": "担架",
      "pinyin": "dānjià",
      "ja": "担架",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "运动",
      "pinyin": "yùndòng",
      "ja": "スポーツ",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "足球",
      "pinyin": "zúqiú",
      "ja": "サッカー",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "篮球",
      "pinyin": "lánqiú",
      "ja": "バスケットボール",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "棒球",
      "pinyin": "bàngqiú",
      "ja": "野球",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "网球",
      "pinyin": "wǎngqiú",
      "ja": "テニス",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "高尔夫",
      "pinyin": "gāo'ěrfū",
      "ja": "ゴルフ",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "游泳",
      "pinyin": "yóuyǒng",
      "ja": "水泳",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "田径",
      "pinyin": "tiánjìng",
      "ja": "陸上競技",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "拳击",
      "pinyin": "quánjī",
      "ja": "ボクシング",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "瑜伽",
      "pinyin": "yújiā",
      "ja": "ヨガ",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "比赛",
      "pinyin": "bǐsài",
      "ja": "試合",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "竞争",
      "pinyin": "jìngzhēng",
      "ja": "競争",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "锦标赛",
      "pinyin": "jǐnbiāosài",
      "ja": "選手権",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "决赛",
      "pinyin": "juésài",
      "ja": "決勝",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "淘汰赛",
      "pinyin": "táotàisài",
      "ja": "トーナメント",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "训练",
      "pinyin": "xùnliàn",
      "ja": "トレーニング",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "队伍",
      "pinyin": "duìwu",
      "ja": "チーム",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "竞技",
      "pinyin": "jìngjì",
      "ja": "競技会",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "结果",
      "pinyin": "jiéguǒ",
      "ja": "結果",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "比分",
      "pinyin": "bǐfēn",
      "ja": "スコア",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "胜利",
      "pinyin": "shènglì",
      "ja": "勝利",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "失败",
      "pinyin": "shībài",
      "ja": "敗北",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "平局",
      "pinyin": "píngjú",
      "ja": "引き分け",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "进球",
      "pinyin": "jìnqiú",
      "ja": "ゴール",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "分数",
      "pinyin": "fēnshù",
      "ja": "ポイント",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "游泳池",
      "pinyin": "yóuyǒngchí",
      "ja": "プール",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "体育场",
      "pinyin": "tǐyùchǎng",
      "ja": "スタジアム",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "足球场",
      "pinyin": "zúqiúchǎng",
      "ja": "サッカー場",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "球场",
      "pinyin": "qiúchǎng",
      "ja": "コート",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "健身房",
      "pinyin": "jiànshēnfáng",
      "ja": "ジム",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "跑道",
      "pinyin": "pǎodào",
      "ja": "トラック",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "小球",
      "pinyin": "xiǎoqiú",
      "ja": "ボール（小さめ）",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "大球",
      "pinyin": "dàqiú",
      "ja": "ボール（大きめ）",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "球拍",
      "pinyin": "qiúpāi",
      "ja": "ラケット",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "网",
      "pinyin": "wǎng",
      "ja": "ネット",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "手套",
      "pinyin": "shǒutào",
      "ja": "グローブ",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "球棒",
      "pinyin": "qiúbàng",
      "ja": "バット",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "自行车",
      "pinyin": "zìxíngchē",
      "ja": "自転車",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "头盔",
      "pinyin": "tóukuī",
      "ja": "ヘルメット",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "护具",
      "pinyin": "hùjù",
      "ja": "プロテクター",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "奖牌",
      "pinyin": "jiǎngpái",
      "ja": "メダル",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "奖杯",
      "pinyin": "jiǎngbēi",
      "ja": "トロフィー",
      "en": ""
    },
    {
      "category": "スポーツ・運動",
      "zh": "纪录",
      "pinyin": "jìlù",
      "ja": "記録",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "日",
      "pinyin": "rì",
      "ja": "日",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "一天",
      "pinyin": "yī tiān",
      "ja": "1日",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "早上",
      "pinyin": "zǎoshang",
      "ja": "朝",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "下午",
      "pinyin": "xiàwǔ",
      "ja": "午後",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "傍晚",
      "pinyin": "bàngwǎn",
      "ja": "夕方",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "晚上",
      "pinyin": "wǎnshang",
      "ja": "夜",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "工作",
      "pinyin": "gōngzuò",
      "ja": "仕事",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "家",
      "pinyin": "jiā",
      "ja": "家",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "时间",
      "pinyin": "shíjiān",
      "ja": "時間",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "天气",
      "pinyin": "tiānqì",
      "ja": "天気",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "卫生间",
      "pinyin": "wèishēngjiān",
      "ja": "トイレ",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "浴室",
      "pinyin": "yùshì",
      "ja": "浴室",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "淋浴",
      "pinyin": "línyù",
      "ja": "シャワー",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "早餐",
      "pinyin": "zǎocān",
      "ja": "朝ごはん",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "午餐",
      "pinyin": "wǔcān",
      "ja": "昼ごはん",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "点心",
      "pinyin": "diǎnxin",
      "ja": "おやつ",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "晚餐",
      "pinyin": "wǎncān",
      "ja": "夕ごはん",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "睡眠",
      "pinyin": "shuìmián",
      "ja": "睡眠",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "午睡",
      "pinyin": "wǔshuì",
      "ja": "昼寝",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "散步",
      "pinyin": "sànbù",
      "ja": "散歩",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "音乐",
      "pinyin": "yīnyuè",
      "ja": "音楽",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "书",
      "pinyin": "shū",
      "ja": "本",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "电话",
      "pinyin": "diànhuà",
      "ja": "電話",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "手机",
      "pinyin": "shǒujī",
      "ja": "携帯電話",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "手机（拉美）",
      "pinyin": "shǒujī",
      "ja": "携帯電話（中南米）",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "通话",
      "pinyin": "tōnghuà",
      "ja": "電話、通話",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "信息",
      "pinyin": "xìnxī",
      "ja": "メッセージ",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "短信",
      "pinyin": "duǎnxìn",
      "ja": "テキストメッセージ",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "电视",
      "pinyin": "diànshì",
      "ja": "テレビ",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "节目",
      "pinyin": "jiémù",
      "ja": "番組",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "电视剧",
      "pinyin": "diànshìjù",
      "ja": "ドラマシリーズ",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "互联网",
      "pinyin": "hùliánwǎng",
      "ja": "インターネット",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "无线网",
      "pinyin": "wúxiànwǎng",
      "ja": "ワイファイ",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "电子邮件",
      "pinyin": "diànzǐ yóujiàn",
      "ja": "メール",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "电脑",
      "pinyin": "diànnǎo",
      "ja": "コンピューター",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "电脑（拉美）",
      "pinyin": "diànnǎo",
      "ja": "コンピューター",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "笔记本电脑",
      "pinyin": "bǐjìběn diànnǎo",
      "ja": "ノートパソコン",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "平板电脑",
      "pinyin": "píngbǎn diànnǎo",
      "ja": "タブレット",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "家务",
      "pinyin": "jiāwù",
      "ja": "家事、雑用",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "清洁",
      "pinyin": "qīngjié",
      "ja": "掃除",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "洗衣服",
      "pinyin": "xǐ yīfu",
      "ja": "洗濯",
      "en": ""
    },
    {
      "category": "日常生活",
      "zh": "购物",
      "pinyin": "gòuwù",
      "ja": "買い物",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "厨房",
      "pinyin": "chúfáng",
      "ja": "キッチン",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "烹饪",
      "pinyin": "pēngrèn",
      "ja": "料理",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "餐厅",
      "pinyin": "cāntīng",
      "ja": "ダイニング",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "客厅",
      "pinyin": "kètīng",
      "ja": "リビング",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "房间",
      "pinyin": "fángjiān",
      "ja": "部屋",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "床",
      "pinyin": "chuáng",
      "ja": "ベッド",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "沙发",
      "pinyin": "shāfā",
      "ja": "ソファ",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "扶手椅",
      "pinyin": "fúshǒu yǐ",
      "ja": "ひじ掛けいす",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "桌子",
      "pinyin": "zhuōzi",
      "ja": "テーブル",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "椅子",
      "pinyin": "yǐzi",
      "ja": "いす",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "书桌",
      "pinyin": "shūzhuō",
      "ja": "机",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "架子",
      "pinyin": "jiàzi",
      "ja": "棚",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "盘子",
      "pinyin": "pánzi",
      "ja": "皿",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "菜",
      "pinyin": "cài",
      "ja": "料理",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "玻璃杯",
      "pinyin": "bōlibēi",
      "ja": "コップ",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "酒杯",
      "pinyin": "jiǔbēi",
      "ja": "ワイングラス",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "刀",
      "pinyin": "dāo",
      "ja": "ナイフ",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "叉子",
      "pinyin": "chāzi",
      "ja": "フォーク",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "勺子",
      "pinyin": "sháozi",
      "ja": "スプーン",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "杯子",
      "pinyin": "bēizi",
      "ja": "カップ",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "锅",
      "pinyin": "guō",
      "ja": "鍋",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "平底锅",
      "pinyin": "píngdǐguō",
      "ja": "フライパン",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "洗衣机",
      "pinyin": "xǐyījī",
      "ja": "洗濯機",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "烘干机",
      "pinyin": "hōnggānjī",
      "ja": "乾燥機",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "冰箱",
      "pinyin": "bīngxiāng",
      "ja": "冷蔵庫",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "冰箱（拉美）",
      "pinyin": "bīngxiāng",
      "ja": "冷蔵庫",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "冷冻库",
      "pinyin": "lěngdòngkù",
      "ja": "冷凍庫",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "微波炉",
      "pinyin": "wēibōlú",
      "ja": "電子レンジ",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "烤箱",
      "pinyin": "kǎoxiāng",
      "ja": "オーブン",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "烤面包机",
      "pinyin": "kǎo miànbāo jī",
      "ja": "トースター",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "搅拌机",
      "pinyin": "jiǎobànjī",
      "ja": "ミキサー",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "空调",
      "pinyin": "kōngtiáo",
      "ja": "エアコン",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "风扇",
      "pinyin": "fēngshàn",
      "ja": "扇風機",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "暖气",
      "pinyin": "nuǎnqì",
      "ja": "暖房",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "电梯",
      "pinyin": "diàntī",
      "ja": "エレベーター",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "楼梯",
      "pinyin": "lóutī",
      "ja": "階段",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "房子",
      "pinyin": "fángzi",
      "ja": "家",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "公寓",
      "pinyin": "gōngyù",
      "ja": "アパート",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "层",
      "pinyin": "céng",
      "ja": "階",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "建筑物",
      "pinyin": "jiànzhùwù",
      "ja": "建物",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "花园",
      "pinyin": "huāyuán",
      "ja": "庭",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "车库",
      "pinyin": "chēkù",
      "ja": "ガレージ",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "阳台",
      "pinyin": "yángtái",
      "ja": "バルコニー",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "露台",
      "pinyin": "lùtái",
      "ja": "テラス",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "走廊",
      "pinyin": "zǒuláng",
      "ja": "廊下",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "入口",
      "pinyin": "rùkǒu",
      "ja": "玄関",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "卧室",
      "pinyin": "wòshì",
      "ja": "寝室",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "起居室",
      "pinyin": "qǐjūshì",
      "ja": "リビング",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "家具",
      "pinyin": "jiājù",
      "ja": "家具",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "衣柜",
      "pinyin": "yīguì",
      "ja": "タンス、クローゼット",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "五斗柜",
      "pinyin": "wǔdǒuguì",
      "ja": "タンス",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "镜子",
      "pinyin": "jìngzi",
      "ja": "鏡",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "茶几",
      "pinyin": "chájī",
      "ja": "ローテーブル",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "灯",
      "pinyin": "dēng",
      "ja": "ランプ",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "窗帘",
      "pinyin": "chuānglián",
      "ja": "カーテン",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "地毯",
      "pinyin": "dìtǎn",
      "ja": "カーペット、ラグ",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "枕头",
      "pinyin": "zhěntou",
      "ja": "枕",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "毯子",
      "pinyin": "tǎnzi",
      "ja": "毛布",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "床单",
      "pinyin": "chuángdān",
      "ja": "シーツ",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "床垫",
      "pinyin": "chuángdiàn",
      "ja": "マットレス",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "门",
      "pinyin": "mén",
      "ja": "ドア",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "窗户",
      "pinyin": "chuānghu",
      "ja": "窓",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "天花板",
      "pinyin": "tiānhuābǎn",
      "ja": "天井",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "屋顶",
      "pinyin": "wūdǐng",
      "ja": "屋根",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "地板",
      "pinyin": "dìbǎn",
      "ja": "床",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "墙",
      "pinyin": "qiáng",
      "ja": "壁",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "插座",
      "pinyin": "chāzuò",
      "ja": "コンセント",
      "en": ""
    },
    {
      "category": "家・住居",
      "zh": "开关",
      "pinyin": "kāiguān",
      "ja": "スイッチ",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "学校",
      "pinyin": "xuéxiào",
      "ja": "学校",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "大学",
      "pinyin": "dàxué",
      "ja": "大学",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "高中",
      "pinyin": "gāozhōng",
      "ja": "高校",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "幼儿园",
      "pinyin": "yòu'éryuán",
      "ja": "幼稚園",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "托儿所",
      "pinyin": "tuō'érsuǒ",
      "ja": "保育園",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "课程",
      "pinyin": "kèchéng",
      "ja": "コース",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "年级",
      "pinyin": "niánjí",
      "ja": "学年",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "学期",
      "pinyin": "xuéqī",
      "ja": "学期",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "考试",
      "pinyin": "kǎoshì",
      "ja": "試験",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "测验",
      "pinyin": "cèyàn",
      "ja": "テスト",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "成绩",
      "pinyin": "chéngjì",
      "ja": "成績",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "笔记",
      "pinyin": "bǐjì",
      "ja": "メモ",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "练习",
      "pinyin": "liànxí",
      "ja": "練習問題",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "作业",
      "pinyin": "zuòyè",
      "ja": "宿題",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "课",
      "pinyin": "kè",
      "ja": "授業",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "班级",
      "pinyin": "bānjí",
      "ja": "クラス",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "教室",
      "pinyin": "jiàoshì",
      "ja": "教室",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "实验室",
      "pinyin": "shíyànshì",
      "ja": "実験室",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "时间表",
      "pinyin": "shíjiānbiǎo",
      "ja": "時間割、スケジュール",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "教科书",
      "pinyin": "jiàokēshū",
      "ja": "教科書",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "词典",
      "pinyin": "cídiǎn",
      "ja": "辞書",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "笔记本",
      "pinyin": "bǐjìběn",
      "ja": "ノート",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "圆珠笔",
      "pinyin": "yuánzhūbǐ",
      "ja": "ボールペン",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "钢笔",
      "pinyin": "gāngbǐ",
      "ja": "ペン",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "铅笔",
      "pinyin": "qiānbǐ",
      "ja": "鉛筆",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "橡皮",
      "pinyin": "xiàngpí",
      "ja": "消しゴム",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "尺子",
      "pinyin": "chǐzi",
      "ja": "定規",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "剪刀",
      "pinyin": "jiǎndāo",
      "ja": "はさみ",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "胶水",
      "pinyin": "jiāoshuǐ",
      "ja": "のり",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "订书机",
      "pinyin": "dìngshūjī",
      "ja": "ホッチキス",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "背包",
      "pinyin": "bēibāo",
      "ja": "リュック、かばん",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "科目",
      "pinyin": "kēmù",
      "ja": "教科",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "数学",
      "pinyin": "shùxué",
      "ja": "数学",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "历史",
      "pinyin": "lìshǐ",
      "ja": "歴史",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "地理",
      "pinyin": "dìlǐ",
      "ja": "地理",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "科学",
      "pinyin": "kēxué",
      "ja": "理科",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "生物",
      "pinyin": "shēngwù",
      "ja": "生物",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "化学",
      "pinyin": "huàxué",
      "ja": "化学",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "物理",
      "pinyin": "wùlǐ",
      "ja": "物理",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "体育",
      "pinyin": "tǐyù",
      "ja": "体育",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "文学",
      "pinyin": "wénxué",
      "ja": "文学",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "美术",
      "pinyin": "měishù",
      "ja": "美術",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "语言",
      "pinyin": "yǔyán",
      "ja": "言語",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "西班牙语",
      "pinyin": "xībānyáyǔ",
      "ja": "スペイン語",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "英语",
      "pinyin": "yīngyǔ",
      "ja": "英語",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "法语",
      "pinyin": "fǎyǔ",
      "ja": "フランス語",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "德语",
      "pinyin": "déyǔ",
      "ja": "ドイツ語",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "日语",
      "pinyin": "rìyǔ",
      "ja": "日本語",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "中文",
      "pinyin": "zhōngwén",
      "ja": "中国語",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "奖学金",
      "pinyin": "jiǎngxuéjīn",
      "ja": "奨学金",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "学位",
      "pinyin": "xuéwèi",
      "ja": "学位",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "标题",
      "pinyin": "biāotí",
      "ja": "タイトル",
      "en": ""
    },
    {
      "category": "学校・教育",
      "zh": "毕业证",
      "pinyin": "bìyèzhèng",
      "ja": "卒業証書",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "职位",
      "pinyin": "zhíwèi",
      "ja": "ポジション、役職",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "职务",
      "pinyin": "zhíwù",
      "ja": "役職",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "薪水",
      "pinyin": "xīnshuǐ",
      "ja": "給料",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "工资",
      "pinyin": "gōngzī",
      "ja": "給料",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "企业",
      "pinyin": "qǐyè",
      "ja": "会社",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "公司",
      "pinyin": "gōngsī",
      "ja": "会社",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "法人",
      "pinyin": "fǎrén",
      "ja": "法人",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "生意",
      "pinyin": "shēngyi",
      "ja": "ビジネス、商売",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "商业",
      "pinyin": "shāngyè",
      "ja": "商業",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "贸易",
      "pinyin": "màoyì",
      "ja": "貿易",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "合同",
      "pinyin": "hétong",
      "ja": "契約",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "协议",
      "pinyin": "xiéyì",
      "ja": "合意",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "会议",
      "pinyin": "huìyì",
      "ja": "会議",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "演讲",
      "pinyin": "yǎnjiǎng",
      "ja": "講演",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "演示",
      "pinyin": "yǎnshì",
      "ja": "プレゼンテーション",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "项目",
      "pinyin": "xiàngmù",
      "ja": "プロジェクト",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "计划",
      "pinyin": "jìhuà",
      "ja": "計画",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "策略",
      "pinyin": "cèlüè",
      "ja": "戦略",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "目标",
      "pinyin": "mùbiāo",
      "ja": "目標",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "报告",
      "pinyin": "bàogào",
      "ja": "報告書",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "文件",
      "pinyin": "wénjiàn",
      "ja": "書類",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "文件夹",
      "pinyin": "wénjiànjiā",
      "ja": "フォルダー",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "邮件",
      "pinyin": "yóujiàn",
      "ja": "メール",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "供应商",
      "pinyin": "gōngyìngshāng",
      "ja": "サプライヤー",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "上司（男）",
      "pinyin": "shàngsi",
      "ja": "上司（男）",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "上司（女）",
      "pinyin": "shàngsi",
      "ja": "上司（女）",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "经理（男）",
      "pinyin": "jīnglǐ",
      "ja": "マネージャー（男）",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "经理（女）",
      "pinyin": "jīnglǐ",
      "ja": "マネージャー（女）",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "主管（男）",
      "pinyin": "zhǔguǎn",
      "ja": "ディレクター（男）",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "主管（女）",
      "pinyin": "zhǔguǎn",
      "ja": "ディレクター（女）",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "同事（男）",
      "pinyin": "tóngshì",
      "ja": "同僚（男）",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "同事（女）",
      "pinyin": "tóngshì",
      "ja": "同僚（女）",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "办公室",
      "pinyin": "bàngōngshì",
      "ja": "オフィス",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "工厂",
      "pinyin": "gōngchǎng",
      "ja": "工場",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "仓库",
      "pinyin": "cāngkù",
      "ja": "倉庫",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "面试",
      "pinyin": "miànshì",
      "ja": "面接",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "简历",
      "pinyin": "jiǎnlì",
      "ja": "履歴書",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "申请",
      "pinyin": "shēnqǐng",
      "ja": "申請書",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "部门",
      "pinyin": "bùmén",
      "ja": "部署",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "分公司",
      "pinyin": "fēn gōngsī",
      "ja": "支店",
      "en": ""
    },
    {
      "category": "仕事・ビジネス",
      "zh": "总部",
      "pinyin": "zǒngbù",
      "ja": "本社",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "街道",
      "pinyin": "jiēdào",
      "ja": "通り",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "大道",
      "pinyin": "dàdào",
      "ja": "大通り",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "人行道",
      "pinyin": "rénxíngdào",
      "ja": "歩道",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "广场",
      "pinyin": "guǎngchǎng",
      "ja": "広場",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "公园",
      "pinyin": "gōngyuán",
      "ja": "公園",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "海滩",
      "pinyin": "hǎitān",
      "ja": "ビーチ",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "中心",
      "pinyin": "zhōngxīn",
      "ja": "中心",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "市中心",
      "pinyin": "shì zhōngxīn",
      "ja": "中心街",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "区域",
      "pinyin": "qūyù",
      "ja": "エリア、地域",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "社区",
      "pinyin": "shèqū",
      "ja": "地区",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "邻里",
      "pinyin": "línlǐ",
      "ja": "近所",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "商店",
      "pinyin": "shāngdiàn",
      "ja": "店",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "超市",
      "pinyin": "chāoshì",
      "ja": "スーパー",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "大型超市",
      "pinyin": "dàxíng chāoshì",
      "ja": "大型スーパー",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "市场",
      "pinyin": "shìchǎng",
      "ja": "市場",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "购物中心",
      "pinyin": "gòuwù zhōngxīn",
      "ja": "ショッピングモール",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "咖啡厅",
      "pinyin": "kāfēitīng",
      "ja": "カフェ",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "酒吧",
      "pinyin": "jiǔbā",
      "ja": "バー",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "夜总会",
      "pinyin": "yèzǒnghuì",
      "ja": "ナイトクラブ",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "面包店",
      "pinyin": "miànbāodiàn",
      "ja": "パン屋",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "肉店",
      "pinyin": "ròudiàn",
      "ja": "肉屋",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "鱼店",
      "pinyin": "yúdiàn",
      "ja": "魚屋",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "水果店",
      "pinyin": "shuǐguǒdiàn",
      "ja": "果物屋",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "蔬菜店",
      "pinyin": "shūcàidiàn",
      "ja": "八百屋",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "花店",
      "pinyin": "huādiàn",
      "ja": "花屋",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "书店",
      "pinyin": "shūdiàn",
      "ja": "本屋",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "文具店",
      "pinyin": "wénjùdiàn",
      "ja": "文房具店",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "药店",
      "pinyin": "yàodiàn",
      "ja": "薬局",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "医院",
      "pinyin": "yīyuàn",
      "ja": "病院",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "诊所",
      "pinyin": "zhěnsuǒ",
      "ja": "クリニック",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "图书馆",
      "pinyin": "túshūguǎn",
      "ja": "図書館",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "博物馆",
      "pinyin": "bówùguǎn",
      "ja": "博物館、美術館",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "画廊",
      "pinyin": "huàláng",
      "ja": "ギャラリー",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "教堂",
      "pinyin": "jiàotáng",
      "ja": "教会",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "寺庙",
      "pinyin": "sìmiào",
      "ja": "寺院",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "清真寺",
      "pinyin": "qīngzhēnsì",
      "ja": "モスク",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "邮局",
      "pinyin": "yóujú",
      "ja": "郵便局",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "警察局",
      "pinyin": "jǐngchájú",
      "ja": "警察署",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "消防站",
      "pinyin": "xiāofángzhàn",
      "ja": "消防署",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "加油站",
      "pinyin": "jiāyóuzhàn",
      "ja": "ガソリンスタンド",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "车站",
      "pinyin": "chēzhàn",
      "ja": "停留所",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "市政厅",
      "pinyin": "shìzhèngtīng",
      "ja": "市役所",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "银行",
      "pinyin": "yínháng",
      "ja": "銀行",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "酒店",
      "pinyin": "jiǔdiàn",
      "ja": "ホテル",
      "en": ""
    },
    {
      "category": "街・場所",
      "zh": "旅馆",
      "pinyin": "lǚguǎn",
      "ja": "ホステル",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "交通",
      "pinyin": "jiāotōng",
      "ja": "交通、輸送",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "交通流量",
      "pinyin": "jiāotōng liúliàng",
      "ja": "交通量",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "汽车",
      "pinyin": "qìchē",
      "ja": "車",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "汽车（拉美）",
      "pinyin": "qìchē",
      "ja": "車",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "出租车",
      "pinyin": "chūzūchē",
      "ja": "タクシー",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "公共汽车",
      "pinyin": "gōnggòng qìchē",
      "ja": "バス",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "卡车",
      "pinyin": "kǎchē",
      "ja": "トラック",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "巴士（墨西哥）",
      "pinyin": "bāshì",
      "ja": "バス（メキシコ）",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "火车",
      "pinyin": "huǒchē",
      "ja": "電車、列車",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "地铁",
      "pinyin": "dìtiě",
      "ja": "地下鉄",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "有轨电车",
      "pinyin": "yǒuguǐ diànchē",
      "ja": "路面電車",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "飞机",
      "pinyin": "fēijī",
      "ja": "飛行機",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "直升机",
      "pinyin": "zhíshēngjī",
      "ja": "ヘリコプター",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "船",
      "pinyin": "chuán",
      "ja": "船",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "渡轮",
      "pinyin": "dùlún",
      "ja": "フェリー",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "游艇",
      "pinyin": "yóutǐng",
      "ja": "ヨット",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "摩托车",
      "pinyin": "mótuōchē",
      "ja": "バイク",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "滑板车",
      "pinyin": "huábǎnchē",
      "ja": "キックボード",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "司机（男）",
      "pinyin": "sījī",
      "ja": "運転手（男）",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "司机（女）",
      "pinyin": "sījī",
      "ja": "運転手（女）",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "乘客（男）",
      "pinyin": "chéngkè",
      "ja": "乗客（男）",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "乘客（女）",
      "pinyin": "chéngkè",
      "ja": "乗客（女）",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "行人（男）",
      "pinyin": "xíngrén",
      "ja": "歩行者（男）",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "行人（女）",
      "pinyin": "xíngrén",
      "ja": "歩行者（女）",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "票",
      "pinyin": "piào",
      "ja": "切符、チケット",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "时刻表",
      "pinyin": "shíkèbiǎo",
      "ja": "時刻表",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "站台",
      "pinyin": "zhàntái",
      "ja": "ホーム",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "轨道",
      "pinyin": "guǐdào",
      "ja": "線路",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "机场",
      "pinyin": "jīchǎng",
      "ja": "空港",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "航站楼",
      "pinyin": "hángzhànlóu",
      "ja": "ターミナル",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "交通卡",
      "pinyin": "jiāotōngkǎ",
      "ja": "交通カード",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "旅行",
      "pinyin": "lǚxíng",
      "ja": "旅行",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "远足",
      "pinyin": "yuǎnzú",
      "ja": "遠足",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "短途旅行",
      "pinyin": "duǎntú lǚxíng",
      "ja": "小旅行",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "路程",
      "pinyin": "lùchéng",
      "ja": "区間、行程",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "路线",
      "pinyin": "lùxiàn",
      "ja": "ルート",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "目的地",
      "pinyin": "mùdìdì",
      "ja": "目的地",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "出发",
      "pinyin": "chūfā",
      "ja": "出発",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "到达",
      "pinyin": "dàodá",
      "ja": "到着",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "单程票",
      "pinyin": "dānchéngpiào",
      "ja": "片道切符",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "往返票",
      "pinyin": "wǎngfǎnpiào",
      "ja": "往復切符",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "座位",
      "pinyin": "zuòwèi",
      "ja": "座席",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "窗口",
      "pinyin": "chuāngkǒu",
      "ja": "窓口",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "靠窗",
      "pinyin": "kàochuāng",
      "ja": "窓側",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "过道",
      "pinyin": "guòdào",
      "ja": "通路",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "行李箱",
      "pinyin": "xínglixiāng",
      "ja": "スーツケース",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "行李",
      "pinyin": "xíngli",
      "ja": "荷物",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "护照",
      "pinyin": "hùzhào",
      "ja": "パスポート",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "签证",
      "pinyin": "qiānzhèng",
      "ja": "ビザ",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "驾照",
      "pinyin": "jiàzhào",
      "ja": "運転免許証",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "交通信号灯",
      "pinyin": "jiāotōng xìnhàodēng",
      "ja": "信号",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "标志",
      "pinyin": "biāozhì",
      "ja": "標識",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "十字路口",
      "pinyin": "shízì lùkǒu",
      "ja": "交差点",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "高速公路",
      "pinyin": "gāosù gōnglù",
      "ja": "高速道路",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "公路",
      "pinyin": "gōnglù",
      "ja": "道路",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "收费站",
      "pinyin": "shōufèizhàn",
      "ja": "料金所",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "停车场",
      "pinyin": "tíngchēchǎng",
      "ja": "駐車場",
      "en": ""
    },
    {
      "category": "交通・乗り物",
      "zh": "停车场（拉美）",
      "pinyin": "tíngchēchǎng",
      "ja": "駐車場",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "面包",
      "pinyin": "miànbāo",
      "ja": "パン",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "全麦面包",
      "pinyin": "quánmài miànbāo",
      "ja": "全粒パン",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "吐司",
      "pinyin": "tǔsī",
      "ja": "トースト",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "食物",
      "pinyin": "shíwù",
      "ja": "食べ物",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "餐",
      "pinyin": "cān",
      "ja": "食事",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "饮料",
      "pinyin": "yǐnliào",
      "ja": "飲み物",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "米饭",
      "pinyin": "mǐfàn",
      "ja": "米、ご飯",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "意大利面",
      "pinyin": "yìdàlì miàn",
      "ja": "パスタ",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "鸡蛋",
      "pinyin": "jīdàn",
      "ja": "卵",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "煎蛋",
      "pinyin": "jiāndàn",
      "ja": "オムレツ",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "玉米饼",
      "pinyin": "yùmǐbǐng",
      "ja": "トルティーヤ",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "肉",
      "pinyin": "ròu",
      "ja": "肉",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "牛肉",
      "pinyin": "niúròu",
      "ja": "牛肉",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "猪肉",
      "pinyin": "zhūròu",
      "ja": "豚肉",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "鱼",
      "pinyin": "yú",
      "ja": "魚（食用）",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "海鲜",
      "pinyin": "hǎixiān",
      "ja": "シーフード",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "鸡肉",
      "pinyin": "jīròu",
      "ja": "鶏肉",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "火鸡肉",
      "pinyin": "huǒjī ròu",
      "ja": "七面鳥の肉",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "火腿",
      "pinyin": "huǒtuǐ",
      "ja": "ハム",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "培根",
      "pinyin": "péigēn",
      "ja": "ベーコン",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "香肠",
      "pinyin": "xiāngcháng",
      "ja": "ソーセージ",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "奶酪",
      "pinyin": "nǎilào",
      "ja": "チーズ",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "黄油",
      "pinyin": "huángyóu",
      "ja": "バター",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "酸奶",
      "pinyin": "suānnǎi",
      "ja": "ヨーグルト",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "牛奶",
      "pinyin": "niúnǎi",
      "ja": "牛乳",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "奶油",
      "pinyin": "nǎiyóu",
      "ja": "クリーム",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "沙拉",
      "pinyin": "shālā",
      "ja": "サラダ",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "汤",
      "pinyin": "tāng",
      "ja": "スープ",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "三明治",
      "pinyin": "sānmíngzhì",
      "ja": "サンドイッチ",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "汉堡",
      "pinyin": "hànbǎo",
      "ja": "ハンバーガー",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "披萨",
      "pinyin": "pīsà",
      "ja": "ピザ",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "塔可",
      "pinyin": "tǎkě",
      "ja": "タコス",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "卷饼",
      "pinyin": "juǎnbǐng",
      "ja": "ブリトー",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "冰淇淋",
      "pinyin": "bīngqílín",
      "ja": "アイスクリーム",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "蛋糕",
      "pinyin": "dàngāo",
      "ja": "ケーキ",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "饼干",
      "pinyin": "bǐnggān",
      "ja": "クッキー",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "巧克力",
      "pinyin": "qiǎokèlì",
      "ja": "チョコレート",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "糖果",
      "pinyin": "tángguǒ",
      "ja": "キャンディー",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "水果",
      "pinyin": "shuǐguǒ",
      "ja": "果物",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "苹果",
      "pinyin": "píngguǒ",
      "ja": "りんご",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "橙子",
      "pinyin": "chéngzi",
      "ja": "オレンジ",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "香蕉",
      "pinyin": "xiāngjiāo",
      "ja": "バナナ",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "草莓",
      "pinyin": "cǎoméi",
      "ja": "いちご",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "葡萄",
      "pinyin": "pútao",
      "ja": "ぶどう",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "柠檬",
      "pinyin": "níngméng",
      "ja": "レモン",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "西瓜",
      "pinyin": "xīguā",
      "ja": "スイカ",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "桃子",
      "pinyin": "táozi",
      "ja": "桃",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "蔬菜",
      "pinyin": "shūcài",
      "ja": "野菜",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "番茄",
      "pinyin": "fānqié",
      "ja": "トマト",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "生菜",
      "pinyin": "shēngcài",
      "ja": "レタス",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "洋葱",
      "pinyin": "yángcōng",
      "ja": "玉ねぎ",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "大蒜",
      "pinyin": "dàsuàn",
      "ja": "にんにく",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "胡萝卜",
      "pinyin": "húluóbo",
      "ja": "にんじん",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "土豆",
      "pinyin": "tǔdòu",
      "ja": "じゃがいも",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "土豆（拉美）",
      "pinyin": "tǔdòu",
      "ja": "じゃがいも",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "青椒",
      "pinyin": "qīngjiāo",
      "ja": "ピーマン",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "糖",
      "pinyin": "táng",
      "ja": "砂糖",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "盐",
      "pinyin": "yán",
      "ja": "塩",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "胡椒",
      "pinyin": "hújiāo",
      "ja": "こしょう",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "酱",
      "pinyin": "jiàng",
      "ja": "ソース、たれ",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "油",
      "pinyin": "yóu",
      "ja": "油",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "醋",
      "pinyin": "cù",
      "ja": "酢",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "蛋黄酱",
      "pinyin": "dànhuángjiàng",
      "ja": "マヨネーズ",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "番茄酱",
      "pinyin": "fānqiéjiàng",
      "ja": "ケチャップ",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "咖啡",
      "pinyin": "kāfēi",
      "ja": "コーヒー",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "茶",
      "pinyin": "chá",
      "ja": "お茶",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "绿茶",
      "pinyin": "lǜchá",
      "ja": "緑茶",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "热巧克力",
      "pinyin": "rè qiǎokèlì",
      "ja": "ホットチョコレート",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "果汁",
      "pinyin": "guǒzhī",
      "ja": "ジュース",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "柠檬水",
      "pinyin": "níngméngshuǐ",
      "ja": "レモネード",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "汽水",
      "pinyin": "qìshuǐ",
      "ja": "炭酸飲料",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "水",
      "pinyin": "shuǐ",
      "ja": "水",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "矿泉水",
      "pinyin": "kuàngquánshuǐ",
      "ja": "ミネラルウォーター",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "苏打水",
      "pinyin": "sūdáshuǐ",
      "ja": "炭酸水",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "啤酒",
      "pinyin": "píjiǔ",
      "ja": "ビール",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "葡萄酒",
      "pinyin": "pútaojiǔ",
      "ja": "ワイン",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "红葡萄酒",
      "pinyin": "hóng pútaojiǔ",
      "ja": "赤ワイン",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "白葡萄酒",
      "pinyin": "bái pútaojiǔ",
      "ja": "白ワイン",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "鸡尾酒",
      "pinyin": "jīwěijiǔ",
      "ja": "カクテル",
      "en": ""
    },
    {
      "category": "食べ物・飲み物",
      "zh": "威士忌",
      "pinyin": "wēishìjì",
      "ja": "ウイスキー",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "服装店",
      "pinyin": "fúzhuāngdiàn",
      "ja": "服屋",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "精品店",
      "pinyin": "jīngpǐndiàn",
      "ja": "ブティック",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "试衣间",
      "pinyin": "shìyījiān",
      "ja": "試着室",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "尺码",
      "pinyin": "chǐmǎ",
      "ja": "サイズ",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "价格",
      "pinyin": "jiàgé",
      "ja": "値段",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "标签",
      "pinyin": "biāoqiān",
      "ja": "タグ",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "特价",
      "pinyin": "tèjià",
      "ja": "セール",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "优惠",
      "pinyin": "yōuhuì",
      "ja": "特売",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "降价",
      "pinyin": "jiàngjià",
      "ja": "値引き",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "折扣",
      "pinyin": "zhékòu",
      "ja": "割引",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "促销",
      "pinyin": "cùxiāo",
      "ja": "プロモーション",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "收据",
      "pinyin": "shōujù",
      "ja": "レシート",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "发票",
      "pinyin": "fāpiào",
      "ja": "請求書",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "钱",
      "pinyin": "qián",
      "ja": "お金",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "现金",
      "pinyin": "xiànjīn",
      "ja": "現金",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "信用卡",
      "pinyin": "xìnyòngkǎ",
      "ja": "クレジットカード",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "借记卡",
      "pinyin": "jièjìkǎ",
      "ja": "デビットカード",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "收银台",
      "pinyin": "shōuyíntái",
      "ja": "レジ",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "盒子",
      "pinyin": "hézi",
      "ja": "箱",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "零钱",
      "pinyin": "língqián",
      "ja": "おつり",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "退货",
      "pinyin": "tuìhuò",
      "ja": "返品",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "大衣",
      "pinyin": "dàyī",
      "ja": "コート",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "夹克",
      "pinyin": "jiákè",
      "ja": "ジャケット",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "皮夹克",
      "pinyin": "pí jiákè",
      "ja": "レザージャケット",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "马甲",
      "pinyin": "mǎjiǎ",
      "ja": "ベスト",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "衬衫",
      "pinyin": "chènshān",
      "ja": "シャツ",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "女衬衫",
      "pinyin": "nǚ chènshān",
      "ja": "ブラウス",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "T恤",
      "pinyin": "T xù",
      "ja": "Tシャツ",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "卫衣",
      "pinyin": "wèiyī",
      "ja": "トレーナー",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "毛衣",
      "pinyin": "máoyī",
      "ja": "セーター",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "裤子",
      "pinyin": "kùzi",
      "ja": "ズボン",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "牛仔裤",
      "pinyin": "niúzǎikù",
      "ja": "ジーンズ",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "短裤",
      "pinyin": "duǎnkù",
      "ja": "短パン",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "裙子",
      "pinyin": "qúnzi",
      "ja": "スカート",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "连衣裙",
      "pinyin": "liányīqún",
      "ja": "ワンピース",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "衣服",
      "pinyin": "yīfu",
      "ja": "服",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "内衣",
      "pinyin": "nèiyī",
      "ja": "下着",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "袜子",
      "pinyin": "wàzi",
      "ja": "靴下",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "鞋",
      "pinyin": "xié",
      "ja": "靴",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "高跟鞋",
      "pinyin": "gāogēnxié",
      "ja": "ハイヒール",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "运动鞋",
      "pinyin": "yùndòngxié",
      "ja": "スニーカー",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "拖鞋",
      "pinyin": "tuōxié",
      "ja": "スリッパ",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "靴子",
      "pinyin": "xuēzi",
      "ja": "ブーツ",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "凉鞋",
      "pinyin": "liángxié",
      "ja": "サンダル",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "皮带",
      "pinyin": "pídài",
      "ja": "ベルト",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "领带",
      "pinyin": "lǐngdài",
      "ja": "ネクタイ",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "围巾",
      "pinyin": "wéijīn",
      "ja": "マフラー",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "帽子",
      "pinyin": "màozi",
      "ja": "帽子",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "棒球帽",
      "pinyin": "bàngqiúmào",
      "ja": "キャップ",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "雨伞",
      "pinyin": "yǔsǎn",
      "ja": "傘",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "包",
      "pinyin": "bāo",
      "ja": "バッグ",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "手提包",
      "pinyin": "shǒutíbāo",
      "ja": "ハンドバッグ",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "钱包",
      "pinyin": "qiánbāo",
      "ja": "財布",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "手表",
      "pinyin": "shǒubiǎo",
      "ja": "腕時計",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "戒指",
      "pinyin": "jièzhi",
      "ja": "指輪",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "项链",
      "pinyin": "xiàngliàn",
      "ja": "ネックレス",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "耳环",
      "pinyin": "ěrhuán",
      "ja": "イヤリング",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "手镯",
      "pinyin": "shǒuzhuó",
      "ja": "ブレスレット",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "颜色",
      "pinyin": "yánsè",
      "ja": "色",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "白色",
      "pinyin": "báisè",
      "ja": "白",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "黑色",
      "pinyin": "hēisè",
      "ja": "黒",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "红色",
      "pinyin": "hóngsè",
      "ja": "赤",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "蓝色",
      "pinyin": "lánsè",
      "ja": "青",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "绿色",
      "pinyin": "lǜsè",
      "ja": "緑",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "黄色",
      "pinyin": "huángsè",
      "ja": "黄",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "棕色",
      "pinyin": "zōngsè",
      "ja": "茶色",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "灰色",
      "pinyin": "huīsè",
      "ja": "灰色",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "粉红色",
      "pinyin": "fěnhóngsè",
      "ja": "ピンク",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "橙色",
      "pinyin": "chéngsè",
      "ja": "オレンジ",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "紫色",
      "pinyin": "zǐsè",
      "ja": "紫",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "米色",
      "pinyin": "mǐsè",
      "ja": "ベージュ",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "小号",
      "pinyin": "xiǎohào",
      "ja": "Sサイズ",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "中号",
      "pinyin": "zhōnghào",
      "ja": "Mサイズ",
      "en": ""
    },
    {
      "category": "買い物・服",
      "zh": "大号",
      "pinyin": "dàhào",
      "ja": "Lサイズ",
      "en": ""
    },
    {
      "category": "ホテル・旅行",
      "zh": "前台",
      "pinyin": "qiántái",
      "ja": "フロント",
      "en": ""
    },
    {
      "category": "ホテル・旅行",
      "zh": "前台接待（男）",
      "pinyin": "qiántái jiēdài",
      "ja": "受付（男）",
      "en": ""
    },
    {
      "category": "ホテル・旅行",
      "zh": "前台接待（女）",
      "pinyin": "qiántái jiēdài",
      "ja": "受付（女）",
      "en": ""
    },
    {
      "category": "ホテル・旅行",
      "zh": "单人间",
      "pinyin": "dānrénjiān",
      "ja": "シングルルーム",
      "en": ""
    },
    {
      "category": "ホテル・旅行",
      "zh": "双人间",
      "pinyin": "shuāngrénjiān",
      "ja": "ダブルルーム",
      "en": ""
    },
    {
      "category": "ホテル・旅行",
      "zh": "套房",
      "pinyin": "tàofáng",
      "ja": "スイートルーム",
      "en": ""
    },
    {
      "category": "ホテル・旅行",
      "zh": "预订",
      "pinyin": "yùdìng",
      "ja": "予約",
      "en": ""
    },
    {
      "category": "ホテル・旅行",
      "zh": "住客（男）",
      "pinyin": "zhùkè",
      "ja": "宿泊客（男）",
      "en": ""
    },
    {
      "category": "ホテル・旅行",
      "zh": "住客（女）",
      "pinyin": "zhùkè",
      "ja": "宿泊客（女）",
      "en": ""
    },
    {
      "category": "ホテル・旅行",
      "zh": "钥匙",
      "pinyin": "yàoshi",
      "ja": "鍵",
      "en": ""
    },
    {
      "category": "ホテル・旅行",
      "zh": "房卡",
      "pinyin": "fángkǎ",
      "ja": "カードキー",
      "en": ""
    },
    {
      "category": "ホテル・旅行",
      "zh": "含早餐",
      "pinyin": "hán zǎocān",
      "ja": "朝食付き",
      "en": ""
    },
    {
      "category": "ホテル・旅行",
      "zh": "水疗中心",
      "pinyin": "shuǐliáo zhōngxīn",
      "ja": "スパ",
      "en": ""
    },
    {
      "category": "ホテル・旅行",
      "zh": "客房服务",
      "pinyin": "kèfáng fúwù",
      "ja": "ルームサービス",
      "en": ""
    },
    {
      "category": "ホテル・旅行",
      "zh": "航班",
      "pinyin": "hángbān",
      "ja": "フライト",
      "en": ""
    },
    {
      "category": "ホテル・旅行",
      "zh": "航空公司",
      "pinyin": "hángkōng gōngsī",
      "ja": "航空会社",
      "en": ""
    },
    {
      "category": "ホテル・旅行",
      "zh": "登机口",
      "pinyin": "dēngjīkǒu",
      "ja": "搭乗口",
      "en": ""
    },
    {
      "category": "ホテル・旅行",
      "zh": "登机牌",
      "pinyin": "dēngjīpái",
      "ja": "搭乗券",
      "en": ""
    },
    {
      "category": "ホテル・旅行",
      "zh": "安检",
      "pinyin": "ānjiǎn",
      "ja": "保安検査",
      "en": ""
    },
    {
      "category": "ホテル・旅行",
      "zh": "海关",
      "pinyin": "hǎiguān",
      "ja": "税関",
      "en": ""
    },
    {
      "category": "ホテル・旅行",
      "zh": "候机室",
      "pinyin": "hòujīshì",
      "ja": "待合室",
      "en": ""
    },
    {
      "category": "ホテル・旅行",
      "zh": "延误",
      "pinyin": "yánwù",
      "ja": "遅延",
      "en": ""
    },
    {
      "category": "ホテル・旅行",
      "zh": "取消",
      "pinyin": "qǔxiāo",
      "ja": "キャンセル",
      "en": ""
    },
    {
      "category": "銀行・郵便",
      "zh": "账户",
      "pinyin": "zhànghù",
      "ja": "口座",
      "en": ""
    },
    {
      "category": "銀行・郵便",
      "zh": "活期账户",
      "pinyin": "huóqī zhànghù",
      "ja": "普通預金口座",
      "en": ""
    },
    {
      "category": "銀行・郵便",
      "zh": "储蓄账户",
      "pinyin": "chúxù zhànghù",
      "ja": "貯蓄口座",
      "en": ""
    },
    {
      "category": "銀行・郵便",
      "zh": "自动取款机",
      "pinyin": "zìdòng qǔkuǎnjī",
      "ja": "ATM",
      "en": ""
    },
    {
      "category": "銀行・郵便",
      "zh": "卡",
      "pinyin": "kǎ",
      "ja": "カード",
      "en": ""
    },
    {
      "category": "銀行・郵便",
      "zh": "兑换",
      "pinyin": "duìhuàn",
      "ja": "両替、為替",
      "en": ""
    },
    {
      "category": "銀行・郵便",
      "zh": "硬币",
      "pinyin": "yìngbì",
      "ja": "硬貨",
      "en": ""
    },
    {
      "category": "銀行・郵便",
      "zh": "货币",
      "pinyin": "huòbì",
      "ja": "通貨",
      "en": ""
    },
    {
      "category": "銀行・郵便",
      "zh": "纸币",
      "pinyin": "zhǐbì",
      "ja": "紙幣",
      "en": ""
    },
    {
      "category": "銀行・郵便",
      "zh": "利息",
      "pinyin": "lìxī",
      "ja": "利息",
      "en": ""
    },
    {
      "category": "銀行・郵便",
      "zh": "贷款",
      "pinyin": "dàikuǎn",
      "ja": "ローン",
      "en": ""
    },
    {
      "category": "銀行・郵便",
      "zh": "房贷",
      "pinyin": "fángdài",
      "ja": "住宅ローン",
      "en": ""
    },
    {
      "category": "銀行・郵便",
      "zh": "存款",
      "pinyin": "cúnkuǎn",
      "ja": "預金",
      "en": ""
    },
    {
      "category": "銀行・郵便",
      "zh": "转账",
      "pinyin": "zhuǎnzhàng",
      "ja": "振込",
      "en": ""
    },
    {
      "category": "銀行・郵便",
      "zh": "包裹",
      "pinyin": "bāoguǒ",
      "ja": "小包",
      "en": ""
    },
    {
      "category": "銀行・郵便",
      "zh": "邮票",
      "pinyin": "yóupiào",
      "ja": "切手",
      "en": ""
    },
    {
      "category": "銀行・郵便",
      "zh": "信",
      "pinyin": "xìn",
      "ja": "手紙",
      "en": ""
    },
    {
      "category": "銀行・郵便",
      "zh": "明信片",
      "pinyin": "míngxìnpiàn",
      "ja": "はがき",
      "en": ""
    },
    {
      "category": "銀行・郵便",
      "zh": "信封",
      "pinyin": "xìnfēng",
      "ja": "封筒",
      "en": ""
    },
    {
      "category": "銀行・郵便",
      "zh": "表格",
      "pinyin": "biǎogé",
      "ja": "用紙",
      "en": ""
    },
    {
      "category": "銀行・郵便",
      "zh": "邮箱",
      "pinyin": "yóuxiāng",
      "ja": "郵便ポスト",
      "en": ""
    },
    {
      "category": "銀行・郵便",
      "zh": "邮递员",
      "pinyin": "yóudìyuán",
      "ja": "郵便配達員",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "自然",
      "pinyin": "zìrán",
      "ja": "自然",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "世界",
      "pinyin": "shìjiè",
      "ja": "世界",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "宇宙",
      "pinyin": "yǔzhòu",
      "ja": "宇宙",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "行星",
      "pinyin": "xíngxīng",
      "ja": "惑星",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "风景",
      "pinyin": "fēngjǐng",
      "ja": "景色、風景",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "地球",
      "pinyin": "dìqiú",
      "ja": "地球",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "土地",
      "pinyin": "tǔdì",
      "ja": "大地",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "乡村",
      "pinyin": "xiāngcūn",
      "ja": "田舎",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "田野",
      "pinyin": "tiányě",
      "ja": "野原",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "山",
      "pinyin": "shān",
      "ja": "山",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "丘",
      "pinyin": "qiū",
      "ja": "丘",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "丘陵",
      "pinyin": "qiūlíng",
      "ja": "丘",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "山谷",
      "pinyin": "shāngǔ",
      "ja": "谷",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "火山",
      "pinyin": "huǒshān",
      "ja": "火山",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "洞穴",
      "pinyin": "dòngxuè",
      "ja": "洞窟",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "沙漠",
      "pinyin": "shāmò",
      "ja": "砂漠",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "海岸",
      "pinyin": "hǎi'àn",
      "ja": "海岸",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "岛屿",
      "pinyin": "dǎoyǔ",
      "ja": "島",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "海",
      "pinyin": "hǎi",
      "ja": "海",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "大洋",
      "pinyin": "dàyáng",
      "ja": "大洋",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "河",
      "pinyin": "hé",
      "ja": "川",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "小溪",
      "pinyin": "xiǎoxī",
      "ja": "小川",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "湖",
      "pinyin": "hú",
      "ja": "湖",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "潟",
      "pinyin": "xì",
      "ja": "潟",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "池塘",
      "pinyin": "chítáng",
      "ja": "池",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "瀑布",
      "pinyin": "pùbù",
      "ja": "滝",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "丛林",
      "pinyin": "cónglín",
      "ja": "ジャングル",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "热带雨林",
      "pinyin": "rèdài yǔlín",
      "ja": "熱帯雨林",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "森林",
      "pinyin": "sēnlín",
      "ja": "森、林",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "草地",
      "pinyin": "cǎodì",
      "ja": "草原",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "花",
      "pinyin": "huā",
      "ja": "花",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "玫瑰",
      "pinyin": "méiguī",
      "ja": "バラ",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "雏菊",
      "pinyin": "chújú",
      "ja": "デイジー",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "向日葵",
      "pinyin": "xiàngrìkuí",
      "ja": "ひまわり",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "植物",
      "pinyin": "zhíwù",
      "ja": "植物",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "树",
      "pinyin": "shù",
      "ja": "木、樹木",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "叶子",
      "pinyin": "yèzi",
      "ja": "葉",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "枝",
      "pinyin": "zhī",
      "ja": "枝",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "根",
      "pinyin": "gēn",
      "ja": "根",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "树干",
      "pinyin": "shùgàn",
      "ja": "幹",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "草",
      "pinyin": "cǎo",
      "ja": "草",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "草坪",
      "pinyin": "cǎopíng",
      "ja": "芝生",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "种子",
      "pinyin": "zhǒngzi",
      "ja": "種",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "天空",
      "pinyin": "tiānkōng",
      "ja": "空",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "月亮",
      "pinyin": "yuèliang",
      "ja": "月",
      "en": ""
    },
    {
      "category": "自然・地形",
      "zh": "星星",
      "pinyin": "xīngxīng",
      "ja": "星",
      "en": ""
    },
    {
      "category": "天気・季節",
      "zh": "气候",
      "pinyin": "qìhòu",
      "ja": "気候",
      "en": ""
    },
    {
      "category": "天気・季節",
      "zh": "温度",
      "pinyin": "wēndù",
      "ja": "気温",
      "en": ""
    },
    {
      "category": "天気・季節",
      "zh": "太阳",
      "pinyin": "tàiyáng",
      "ja": "太陽",
      "en": ""
    },
    {
      "category": "天気・季節",
      "zh": "风",
      "pinyin": "fēng",
      "ja": "風",
      "en": ""
    },
    {
      "category": "天気・季節",
      "zh": "微风",
      "pinyin": "wēifēng",
      "ja": "そよ風",
      "en": ""
    },
    {
      "category": "天気・季節",
      "zh": "雨",
      "pinyin": "yǔ",
      "ja": "雨",
      "en": ""
    },
    {
      "category": "天気・季節",
      "zh": "毛毛雨",
      "pinyin": "máomáoyǔ",
      "ja": "霧雨",
      "en": ""
    },
    {
      "category": "天気・季節",
      "zh": "倾盆大雨",
      "pinyin": "qīngpén dàyǔ",
      "ja": "土砂降り",
      "en": ""
    },
    {
      "category": "天気・季節",
      "zh": "雷声",
      "pinyin": "léishēng",
      "ja": "雷鳴",
      "en": ""
    },
    {
      "category": "天気・季節",
      "zh": "闪电",
      "pinyin": "shǎndiàn",
      "ja": "稲妻",
      "en": ""
    },
    {
      "category": "天気・季節",
      "zh": "暴风雨",
      "pinyin": "bàofēngyǔ",
      "ja": "嵐",
      "en": ""
    },
    {
      "category": "天気・季節",
      "zh": "飓风",
      "pinyin": "jùfēng",
      "ja": "ハリケーン",
      "en": ""
    },
    {
      "category": "天気・季節",
      "zh": "台风",
      "pinyin": "táifēng",
      "ja": "台風",
      "en": ""
    },
    {
      "category": "天気・季節",
      "zh": "雪",
      "pinyin": "xuě",
      "ja": "雪",
      "en": ""
    },
    {
      "category": "天気・季節",
      "zh": "冰雹",
      "pinyin": "bīngbáo",
      "ja": "ひょう",
      "en": ""
    },
    {
      "category": "天気・季節",
      "zh": "冰",
      "pinyin": "bīng",
      "ja": "氷",
      "en": ""
    },
    {
      "category": "天気・季節",
      "zh": "霜",
      "pinyin": "shuāng",
      "ja": "霜",
      "en": ""
    },
    {
      "category": "天気・季節",
      "zh": "云",
      "pinyin": "yún",
      "ja": "雲",
      "en": ""
    },
    {
      "category": "天気・季節",
      "zh": "雾",
      "pinyin": "wù",
      "ja": "霧",
      "en": ""
    },
    {
      "category": "天気・季節",
      "zh": "彩虹",
      "pinyin": "cǎihóng",
      "ja": "虹",
      "en": ""
    },
    {
      "category": "天気・季節",
      "zh": "湿度",
      "pinyin": "shīdù",
      "ja": "湿度",
      "en": ""
    },
    {
      "category": "天気・季節",
      "zh": "干旱",
      "pinyin": "gānhàn",
      "ja": "干ばつ",
      "en": ""
    },
    {
      "category": "天気・季節",
      "zh": "春天",
      "pinyin": "chūntiān",
      "ja": "春",
      "en": ""
    },
    {
      "category": "天気・季節",
      "zh": "夏天",
      "pinyin": "xiàtiān",
      "ja": "夏",
      "en": ""
    },
    {
      "category": "天気・季節",
      "zh": "秋天",
      "pinyin": "qiūtiān",
      "ja": "秋",
      "en": ""
    },
    {
      "category": "天気・季節",
      "zh": "冬天",
      "pinyin": "dōngtiān",
      "ja": "冬",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "动物",
      "pinyin": "dòngwù",
      "ja": "動物",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "宠物",
      "pinyin": "chǒngwù",
      "ja": "ペット",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "狗（公）",
      "pinyin": "gǒu",
      "ja": "犬（オス）",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "狗（母）",
      "pinyin": "gǒu",
      "ja": "犬（メス）",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "小狗",
      "pinyin": "xiǎogǒu",
      "ja": "子犬",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "猫（公）",
      "pinyin": "māo",
      "ja": "猫（オス）",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "猫（母）",
      "pinyin": "māo",
      "ja": "猫（メス）",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "小猫",
      "pinyin": "xiǎomāo",
      "ja": "子猫",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "鸟",
      "pinyin": "niǎo",
      "ja": "鳥",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "鸽子",
      "pinyin": "gēzi",
      "ja": "鳩",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "鹦鹉",
      "pinyin": "yīngwǔ",
      "ja": "オウム",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "鹰",
      "pinyin": "yīng",
      "ja": "ワシ",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "鱼（活的）",
      "pinyin": "yú",
      "ja": "魚（生きている）",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "金鱼",
      "pinyin": "jīnyú",
      "ja": "金魚",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "马",
      "pinyin": "mǎ",
      "ja": "馬",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "驴",
      "pinyin": "lǘ",
      "ja": "ロバ",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "牛（母）",
      "pinyin": "niú",
      "ja": "牛",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "公牛",
      "pinyin": "gōngniú",
      "ja": "雄牛",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "羊",
      "pinyin": "yáng",
      "ja": "羊",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "山羊",
      "pinyin": "shānyáng",
      "ja": "ヤギ",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "猪",
      "pinyin": "zhū",
      "ja": "豚",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "兔子",
      "pinyin": "tùzi",
      "ja": "ウサギ",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "老鼠",
      "pinyin": "lǎoshǔ",
      "ja": "ネズミ",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "仓鼠",
      "pinyin": "cāngshǔ",
      "ja": "ハムスター",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "鸡",
      "pinyin": "jī",
      "ja": "ひよこ",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "母鸡",
      "pinyin": "mǔjī",
      "ja": "めんどり",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "公鸡",
      "pinyin": "gōngjī",
      "ja": "おんどり",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "鸭子",
      "pinyin": "yāzi",
      "ja": "アヒル",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "火鸡",
      "pinyin": "huǒjī",
      "ja": "七面鳥",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "狮子",
      "pinyin": "shīzi",
      "ja": "ライオン",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "老虎",
      "pinyin": "lǎohǔ",
      "ja": "トラ",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "豹",
      "pinyin": "bào",
      "ja": "ヒョウ",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "猎豹",
      "pinyin": "lièbào",
      "ja": "チーター",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "大象",
      "pinyin": "dàxiàng",
      "ja": "ゾウ",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "长颈鹿",
      "pinyin": "chángjǐnglù",
      "ja": "キリン",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "河马",
      "pinyin": "hémǎ",
      "ja": "カバ",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "犀牛",
      "pinyin": "xīniú",
      "ja": "サイ",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "斑马",
      "pinyin": "bānmǎ",
      "ja": "シマウマ",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "猴子",
      "pinyin": "hóuzi",
      "ja": "サル",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "大猩猩",
      "pinyin": "dàxīngxīng",
      "ja": "ゴリラ",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "黑猩猩",
      "pinyin": "hēixīngxīng",
      "ja": "チンパンジー",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "熊",
      "pinyin": "xióng",
      "ja": "クマ",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "北极熊",
      "pinyin": "běijíxióng",
      "ja": "ホッキョクグマ",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "熊猫",
      "pinyin": "xióngmāo",
      "ja": "パンダ",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "狼",
      "pinyin": "láng",
      "ja": "オオカミ",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "狐狸",
      "pinyin": "húli",
      "ja": "キツネ",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "蛇",
      "pinyin": "shé",
      "ja": "ヘビ",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "青蛙",
      "pinyin": "qīngwā",
      "ja": "カエル",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "乌龟",
      "pinyin": "wūguī",
      "ja": "カメ",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "鳄鱼",
      "pinyin": "èyú",
      "ja": "ワニ",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "蜥蜴",
      "pinyin": "xīyì",
      "ja": "トカゲ",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "海豚",
      "pinyin": "hǎitún",
      "ja": "イルカ",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "鲨鱼",
      "pinyin": "shāyú",
      "ja": "サメ",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "章鱼",
      "pinyin": "zhāngyú",
      "ja": "タコ",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "鱿鱼",
      "pinyin": "yóuyú",
      "ja": "イカ",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "虾",
      "pinyin": "xiā",
      "ja": "エビ",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "螃蟹",
      "pinyin": "pángxiè",
      "ja": "カニ",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "鲸鱼",
      "pinyin": "jīngyú",
      "ja": "クジラ",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "海豹",
      "pinyin": "hǎibào",
      "ja": "アザラシ",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "企鹅",
      "pinyin": "qì'é",
      "ja": "ペンギン",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "水母",
      "pinyin": "shuǐmǔ",
      "ja": "クラゲ",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "蜜蜂",
      "pinyin": "mìfēng",
      "ja": "ミツバチ",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "蝴蝶",
      "pinyin": "húdié",
      "ja": "蝶",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "蚂蚁",
      "pinyin": "mǎyǐ",
      "ja": "アリ",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "苍蝇",
      "pinyin": "cāngyíng",
      "ja": "ハエ",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "蚊子",
      "pinyin": "wénzi",
      "ja": "蚊",
      "en": ""
    },
    {
      "category": "動物",
      "zh": "蜘蛛",
      "pinyin": "zhīzhū",
      "ja": "クモ",
      "en": ""
    },
    {
      "category": "環境・エコロジー",
      "zh": "环境",
      "pinyin": "huánjìng",
      "ja": "環境",
      "en": ""
    },
    {
      "category": "環境・エコロジー",
      "zh": "生态",
      "pinyin": "shēngtài",
      "ja": "エコロジー",
      "en": ""
    },
    {
      "category": "環境・エコロジー",
      "zh": "污染",
      "pinyin": "wūrǎn",
      "ja": "汚染",
      "en": ""
    },
    {
      "category": "環境・エコロジー",
      "zh": "大气污染",
      "pinyin": "dàqì wūrǎn",
      "ja": "大気汚染",
      "en": ""
    },
    {
      "category": "環境・エコロジー",
      "zh": "水污染",
      "pinyin": "shuǐ wūrǎn",
      "ja": "水質汚染",
      "en": ""
    },
    {
      "category": "環境・エコロジー",
      "zh": "回收",
      "pinyin": "huíshōu",
      "ja": "リサイクル",
      "en": ""
    },
    {
      "category": "環境・エコロジー",
      "zh": "资源",
      "pinyin": "zīyuán",
      "ja": "資源",
      "en": ""
    },
    {
      "category": "環境・エコロジー",
      "zh": "能源",
      "pinyin": "néngyuán",
      "ja": "エネルギー",
      "en": ""
    },
    {
      "category": "環境・エコロジー",
      "zh": "可再生能源",
      "pinyin": "kě zàishēng néngyuán",
      "ja": "再生可能エネルギー",
      "en": ""
    },
    {
      "category": "環境・エコロジー",
      "zh": "太阳能",
      "pinyin": "tàiyángnéng",
      "ja": "太陽エネルギー",
      "en": ""
    },
    {
      "category": "環境・エコロジー",
      "zh": "塑料",
      "pinyin": "sùliào",
      "ja": "プラスチック",
      "en": ""
    },
    {
      "category": "環境・エコロジー",
      "zh": "纸",
      "pinyin": "zhǐ",
      "ja": "紙",
      "en": ""
    },
    {
      "category": "環境・エコロジー",
      "zh": "纸板",
      "pinyin": "zhǐbǎn",
      "ja": "段ボール",
      "en": ""
    },
    {
      "category": "環境・エコロジー",
      "zh": "玻璃",
      "pinyin": "bōli",
      "ja": "ガラス",
      "en": ""
    },
    {
      "category": "環境・エコロジー",
      "zh": "金属",
      "pinyin": "jīnshǔ",
      "ja": "金属",
      "en": ""
    },
    {
      "category": "環境・エコロジー",
      "zh": "铝",
      "pinyin": "lǚ",
      "ja": "アルミニウム",
      "en": ""
    },
    {
      "category": "環境・エコロジー",
      "zh": "烟",
      "pinyin": "yān",
      "ja": "煙",
      "en": ""
    },
    {
      "category": "環境・エコロジー",
      "zh": "气体",
      "pinyin": "qìtǐ",
      "ja": "ガス",
      "en": ""
    },
    {
      "category": "環境・エコロジー",
      "zh": "二氧化碳",
      "pinyin": "èryǎnghuàtàn",
      "ja": "二酸化炭素",
      "en": ""
    },
    {
      "category": "環境・エコロジー",
      "zh": "温室效应",
      "pinyin": "wēnshì xiàoyìng",
      "ja": "温室効果",
      "en": ""
    },
    {
      "category": "環境・エコロジー",
      "zh": "气候变化",
      "pinyin": "qìhòu biànhuà",
      "ja": "気候変動",
      "en": ""
    },
    {
      "category": "環境・エコロジー",
      "zh": "垃圾",
      "pinyin": "lājī",
      "ja": "ゴミ",
      "en": ""
    },
    {
      "category": "環境・エコロジー",
      "zh": "废物",
      "pinyin": "fèiwù",
      "ja": "廃棄物",
      "en": ""
    },
    {
      "category": "環境・エコロジー",
      "zh": "森林砍伐",
      "pinyin": "sēnlín kǎnfá",
      "ja": "森林破壊",
      "en": ""
    },
    {
      "category": "環境・エコロジー",
      "zh": "灭绝",
      "pinyin": "mièjué",
      "ja": "絶滅",
      "en": ""
    },
    {
      "category": "環境・エコロジー",
      "zh": "保护",
      "pinyin": "bǎohù",
      "ja": "保全",
      "en": ""
    },
    {
      "category": "時間・数量",
      "zh": "小时",
      "pinyin": "xiǎoshí",
      "ja": "時間",
      "en": ""
    },
    {
      "category": "時間・数量",
      "zh": "点",
      "pinyin": "diǎn",
      "ja": "～時",
      "en": ""
    },
    {
      "category": "時間・数量",
      "zh": "分钟",
      "pinyin": "fēnzhōng",
      "ja": "分",
      "en": ""
    },
    {
      "category": "時間・数量",
      "zh": "秒",
      "pinyin": "miǎo",
      "ja": "秒",
      "en": ""
    },
    {
      "category": "時間・数量",
      "zh": "周",
      "pinyin": "zhōu",
      "ja": "週",
      "en": ""
    },
    {
      "category": "時間・数量",
      "zh": "周末",
      "pinyin": "zhōumò",
      "ja": "週末",
      "en": ""
    },
    {
      "category": "時間・数量",
      "zh": "月",
      "pinyin": "yuè",
      "ja": "月",
      "en": ""
    },
    {
      "category": "時間・数量",
      "zh": "年",
      "pinyin": "nián",
      "ja": "年",
      "en": ""
    },
    {
      "category": "時間・数量",
      "zh": "十年",
      "pinyin": "shí nián",
      "ja": "10年間",
      "en": ""
    },
    {
      "category": "時間・数量",
      "zh": "世纪",
      "pinyin": "shìjì",
      "ja": "世紀",
      "en": ""
    },
    {
      "category": "時間・数量",
      "zh": "时刻",
      "pinyin": "shíkè",
      "ja": "瞬間、タイミング",
      "en": ""
    },
    {
      "category": "時間・数量",
      "zh": "瞬间",
      "pinyin": "shùnjiān",
      "ja": "瞬間",
      "en": ""
    },
    {
      "category": "時間・数量",
      "zh": "一会儿",
      "pinyin": "yīhuìr",
      "ja": "しばらくの間",
      "en": ""
    },
    {
      "category": "時間・数量",
      "zh": "季节",
      "pinyin": "jìjié",
      "ja": "シーズン",
      "en": ""
    },
    {
      "category": "時間・数量",
      "zh": "时期",
      "pinyin": "shíqī",
      "ja": "期間",
      "en": ""
    },
    {
      "category": "時間・数量",
      "zh": "时代",
      "pinyin": "shídài",
      "ja": "時代",
      "en": ""
    },
    {
      "category": "時間・数量",
      "zh": "过去",
      "pinyin": "guòqù",
      "ja": "過去",
      "en": ""
    },
    {
      "category": "時間・数量",
      "zh": "现在",
      "pinyin": "xiànzài",
      "ja": "現在",
      "en": ""
    },
    {
      "category": "時間・数量",
      "zh": "未来",
      "pinyin": "wèilái",
      "ja": "未来",
      "en": ""
    },
    {
      "category": "時間・数量",
      "zh": "数字",
      "pinyin": "shùzì",
      "ja": "数",
      "en": ""
    },
    {
      "category": "時間・数量",
      "zh": "组",
      "pinyin": "zǔ",
      "ja": "グループ",
      "en": ""
    },
    {
      "category": "時間・数量",
      "zh": "群",
      "pinyin": "qún",
      "ja": "グループ",
      "en": ""
    },
    {
      "category": "時間・数量",
      "zh": "公斤",
      "pinyin": "gōngjīn",
      "ja": "キロ",
      "en": ""
    },
    {
      "category": "時間・数量",
      "zh": "克",
      "pinyin": "kè",
      "ja": "グラム",
      "en": ""
    },
    {
      "category": "時間・数量",
      "zh": "升",
      "pinyin": "shēng",
      "ja": "リットル",
      "en": ""
    },
    {
      "category": "時間・数量",
      "zh": "毫升",
      "pinyin": "háoshēng",
      "ja": "ミリリットル",
      "en": ""
    },
    {
      "category": "時間・数量",
      "zh": "米",
      "pinyin": "mǐ",
      "ja": "メートル",
      "en": ""
    },
    {
      "category": "時間・数量",
      "zh": "厘米",
      "pinyin": "límǐ",
      "ja": "センチメートル",
      "en": ""
    },
    {
      "category": "時間・数量",
      "zh": "公里",
      "pinyin": "gōnglǐ",
      "ja": "キロメートル",
      "en": ""
    },
    {
      "category": "時間・数量",
      "zh": "百分比",
      "pinyin": "bǎifēnbǐ",
      "ja": "割合、パーセント",
      "en": ""
    },
    {
      "category": "時間・数量",
      "zh": "级别",
      "pinyin": "jíbié",
      "ja": "レベル",
      "en": ""
    },
    {
      "category": "時間・数量",
      "zh": "数量",
      "pinyin": "shùliàng",
      "ja": "量",
      "en": ""
    },
    {
      "category": "時間・数量",
      "zh": "大小",
      "pinyin": "dàxiǎo",
      "ja": "大きさ",
      "en": ""
    },
    {
      "category": "時間・数量",
      "zh": "距离",
      "pinyin": "jùlí",
      "ja": "距離",
      "en": ""
    },
    {
      "category": "時間・数量",
      "zh": "高度",
      "pinyin": "gāodù",
      "ja": "高さ",
      "en": ""
    },
    {
      "category": "時間・数量",
      "zh": "宽度",
      "pinyin": "kuāndù",
      "ja": "幅",
      "en": ""
    },
    {
      "category": "時間・数量",
      "zh": "深度",
      "pinyin": "shēndù",
      "ja": "深さ",
      "en": ""
    },
    {
      "category": "時間・数量",
      "zh": "重量",
      "pinyin": "zhòngliàng",
      "ja": "重さ",
      "en": ""
    },
    {
      "category": "時間・数量",
      "zh": "速度",
      "pinyin": "sùdù",
      "ja": "速度",
      "en": ""
    },
    {
      "category": "状況・出来事",
      "zh": "事件",
      "pinyin": "shìjiàn",
      "ja": "イベント、出来事",
      "en": ""
    },
    {
      "category": "状況・出来事",
      "zh": "事实",
      "pinyin": "shìshí",
      "ja": "事実",
      "en": ""
    },
    {
      "category": "状況・出来事",
      "zh": "情况",
      "pinyin": "qíngkuàng",
      "ja": "状況",
      "en": ""
    },
    {
      "category": "状況・出来事",
      "zh": "事情",
      "pinyin": "shìqíng",
      "ja": "事情",
      "en": ""
    },
    {
      "category": "状況・出来事",
      "zh": "案例",
      "pinyin": "ànlì",
      "ja": "ケース",
      "en": ""
    },
    {
      "category": "状況・出来事",
      "zh": "问题",
      "pinyin": "wèntí",
      "ja": "問題",
      "en": ""
    },
    {
      "category": "状況・出来事",
      "zh": "困难",
      "pinyin": "kùnnán",
      "ja": "困難",
      "en": ""
    },
    {
      "category": "状況・出来事",
      "zh": "解决方案",
      "pinyin": "jiějué fāng'àn",
      "ja": "解決策",
      "en": ""
    },
    {
      "category": "状況・出来事",
      "zh": "原因",
      "pinyin": "yuányīn",
      "ja": "原因",
      "en": ""
    },
    {
      "category": "状況・出来事",
      "zh": "效果",
      "pinyin": "xiàoguǒ",
      "ja": "効果",
      "en": ""
    },
    {
      "category": "状況・出来事",
      "zh": "理由",
      "pinyin": "lǐyóu",
      "ja": "理由",
      "en": ""
    },
    {
      "category": "状況・出来事",
      "zh": "动机",
      "pinyin": "dòngjī",
      "ja": "動機",
      "en": ""
    },
    {
      "category": "状況・出来事",
      "zh": "后果",
      "pinyin": "hòuguǒ",
      "ja": "結果、影響",
      "en": ""
    },
    {
      "category": "状況・出来事",
      "zh": "变化",
      "pinyin": "biànhuà",
      "ja": "変化",
      "en": ""
    },
    {
      "category": "状況・出来事",
      "zh": "进步",
      "pinyin": "jìnbù",
      "ja": "進歩",
      "en": ""
    },
    {
      "category": "状況・出来事",
      "zh": "发展",
      "pinyin": "fāzhǎn",
      "ja": "発展",
      "en": ""
    },
    {
      "category": "状況・出来事",
      "zh": "风险",
      "pinyin": "fēngxiǎn",
      "ja": "リスク",
      "en": ""
    },
    {
      "category": "状況・出来事",
      "zh": "危险",
      "pinyin": "wēixiǎn",
      "ja": "危険",
      "en": ""
    },
    {
      "category": "状況・出来事",
      "zh": "错误",
      "pinyin": "cuòwù",
      "ja": "間違い",
      "en": ""
    },
    {
      "category": "状況・出来事",
      "zh": "故障",
      "pinyin": "gùzhàng",
      "ja": "故障",
      "en": ""
    },
    {
      "category": "状況・出来事",
      "zh": "失误",
      "pinyin": "shīwù",
      "ja": "ミス",
      "en": ""
    },
    {
      "category": "状況・出来事",
      "zh": "成功",
      "pinyin": "chénggōng",
      "ja": "成功",
      "en": ""
    },
    {
      "category": "状況・出来事",
      "zh": "机会",
      "pinyin": "jīhuì",
      "ja": "機会",
      "en": ""
    },
    {
      "category": "状況・出来事",
      "zh": "尝试",
      "pinyin": "chángshì",
      "ja": "試み",
      "en": ""
    },
    {
      "category": "状況・出来事",
      "zh": "经验",
      "pinyin": "jīngyàn",
      "ja": "経験",
      "en": ""
    },
    {
      "category": "状況・出来事",
      "zh": "例子",
      "pinyin": "lìzi",
      "ja": "例",
      "en": ""
    },
    {
      "category": "状況・出来事",
      "zh": "故事",
      "pinyin": "gùshi",
      "ja": "物語",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "友谊",
      "pinyin": "yǒuyì",
      "ja": "友情",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "忠诚",
      "pinyin": "zhōngchéng",
      "ja": "忠誠",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "和平",
      "pinyin": "hépíng",
      "ja": "平和",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "战争",
      "pinyin": "zhànzhēng",
      "ja": "戦争",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "冲突",
      "pinyin": "chōngtū",
      "ja": "紛争",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "自由",
      "pinyin": "zìyóu",
      "ja": "自由",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "平等",
      "pinyin": "píngděng",
      "ja": "平等",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "正义",
      "pinyin": "zhèngyì",
      "ja": "正義",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "不公正",
      "pinyin": "bù gōngzhèng",
      "ja": "不正",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "真相",
      "pinyin": "zhēnxiàng",
      "ja": "真実",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "谎言",
      "pinyin": "huǎngyán",
      "ja": "うそ",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "秘密",
      "pinyin": "mìmì",
      "ja": "秘密",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "权力",
      "pinyin": "quánlì",
      "ja": "権力、力",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "力量",
      "pinyin": "lìliàng",
      "ja": "力、強さ",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "控制",
      "pinyin": "kòngzhì",
      "ja": "コントロール",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "秩序",
      "pinyin": "zhìxù",
      "ja": "秩序、順番",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "混乱",
      "pinyin": "hùnluàn",
      "ja": "混沌",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "尊重",
      "pinyin": "zūnzhòng",
      "ja": "尊敬、敬意",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "荣誉",
      "pinyin": "róngyù",
      "ja": "名誉",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "尊严",
      "pinyin": "zūnyán",
      "ja": "尊厳",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "价值",
      "pinyin": "jiàzhí",
      "ja": "価値",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "勇气",
      "pinyin": "yǒngqì",
      "ja": "勇気",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "勇敢",
      "pinyin": "yǒnggǎn",
      "ja": "勇敢さ",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "权利",
      "pinyin": "quánlì",
      "ja": "権利",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "义务",
      "pinyin": "yìwù",
      "ja": "義務",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "责任",
      "pinyin": "zérèn",
      "ja": "責任",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "利益",
      "pinyin": "lìyì",
      "ja": "関心",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "好奇心",
      "pinyin": "hàoqíxīn",
      "ja": "好奇心",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "想法",
      "pinyin": "xiǎngfǎ",
      "ja": "考え、アイデア",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "思想",
      "pinyin": "sīxiǎng",
      "ja": "思考",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "意见",
      "pinyin": "yìjiàn",
      "ja": "意見",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "决定",
      "pinyin": "juédìng",
      "ja": "決定",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "选择",
      "pinyin": "xuǎnzé",
      "ja": "選択",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "梦想",
      "pinyin": "mèngxiǎng",
      "ja": "夢",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "现实",
      "pinyin": "xiànshí",
      "ja": "現実",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "想象力",
      "pinyin": "xiǎngxiànglì",
      "ja": "想像力",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "创造力",
      "pinyin": "chuàngzàolì",
      "ja": "創造性",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "智慧",
      "pinyin": "zhìhuì",
      "ja": "知恵",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "知识",
      "pinyin": "zhīshi",
      "ja": "知識",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "智力",
      "pinyin": "zhìlì",
      "ja": "知性",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "耐心",
      "pinyin": "nàixīn",
      "ja": "忍耐",
      "en": ""
    },
    {
      "category": "抽象概念・価値観",
      "zh": "坚持",
      "pinyin": "jiānchí",
      "ja": "粘り強さ",
      "en": ""
    },
    {
      "category": "社会・政治",
      "zh": "社会",
      "pinyin": "shèhuì",
      "ja": "社会",
      "en": ""
    },
    {
      "category": "社会・政治",
      "zh": "国家",
      "pinyin": "guójiā",
      "ja": "国",
      "en": ""
    },
    {
      "category": "社会・政治",
      "zh": "民族",
      "pinyin": "mínzú",
      "ja": "国家",
      "en": ""
    },
    {
      "category": "社会・政治",
      "zh": "城市",
      "pinyin": "chéngshì",
      "ja": "都市",
      "en": ""
    },
    {
      "category": "社会・政治",
      "zh": "城镇",
      "pinyin": "chéngzhèn",
      "ja": "町",
      "en": ""
    },
    {
      "category": "社会・政治",
      "zh": "人民",
      "pinyin": "rénmín",
      "ja": "国民",
      "en": ""
    },
    {
      "category": "社会・政治",
      "zh": "地区",
      "pinyin": "dìqū",
      "ja": "地域",
      "en": ""
    },
    {
      "category": "社会・政治",
      "zh": "政府",
      "pinyin": "zhèngfǔ",
      "ja": "政府",
      "en": ""
    },
    {
      "category": "社会・政治",
      "zh": "总统（男）",
      "pinyin": "zǒngtǒng",
      "ja": "大統領（男）",
      "en": ""
    },
    {
      "category": "社会・政治",
      "zh": "总统（女）",
      "pinyin": "zǒngtǒng",
      "ja": "大統領（女）",
      "en": ""
    },
    {
      "category": "社会・政治",
      "zh": "部长（男）",
      "pinyin": "bùzhǎng",
      "ja": "大臣（男）",
      "en": ""
    },
    {
      "category": "社会・政治",
      "zh": "部长（女）",
      "pinyin": "bùzhǎng",
      "ja": "大臣（女）",
      "en": ""
    },
    {
      "category": "社会・政治",
      "zh": "法律",
      "pinyin": "fǎlǜ",
      "ja": "法律",
      "en": ""
    },
    {
      "category": "社会・政治",
      "zh": "宪法",
      "pinyin": "xiànfǎ",
      "ja": "憲法",
      "en": ""
    },
    {
      "category": "社会・政治",
      "zh": "政党",
      "pinyin": "zhèngdǎng",
      "ja": "政党",
      "en": ""
    },
    {
      "category": "社会・政治",
      "zh": "选举",
      "pinyin": "xuǎnjǔ",
      "ja": "選挙",
      "en": ""
    },
    {
      "category": "社会・政治",
      "zh": "竞选活动",
      "pinyin": "jìngxuǎn huódòng",
      "ja": "選挙運動",
      "en": ""
    },
    {
      "category": "社会・政治",
      "zh": "投票",
      "pinyin": "tóupiào",
      "ja": "投票",
      "en": ""
    },
    {
      "category": "社会・政治",
      "zh": "民主",
      "pinyin": "mínzhǔ",
      "ja": "民主主義",
      "en": ""
    },
    {
      "category": "社会・政治",
      "zh": "独裁",
      "pinyin": "dúcái",
      "ja": "独裁",
      "en": ""
    },
    {
      "category": "社会・政治",
      "zh": "君主制",
      "pinyin": "jūnzhǔzhì",
      "ja": "君主制",
      "en": ""
    },
    {
      "category": "社会・政治",
      "zh": "共和国",
      "pinyin": "gònghéguó",
      "ja": "共和国",
      "en": ""
    },
    {
      "category": "社会・政治",
      "zh": "政治",
      "pinyin": "zhèngzhì",
      "ja": "政治",
      "en": ""
    },
    {
      "category": "社会・政治",
      "zh": "政策",
      "pinyin": "zhèngcè",
      "ja": "政策",
      "en": ""
    },
    {
      "category": "社会・政治",
      "zh": "示威",
      "pinyin": "shìwēi",
      "ja": "デモ",
      "en": ""
    },
    {
      "category": "社会・政治",
      "zh": "抗议",
      "pinyin": "kàngyì",
      "ja": "抗議",
      "en": ""
    },
    {
      "category": "社会・政治",
      "zh": "罢工",
      "pinyin": "bàgōng",
      "ja": "ストライキ",
      "en": ""
    },
    {
      "category": "社会・政治",
      "zh": "腐败",
      "pinyin": "fǔbài",
      "ja": "汚職、腐敗",
      "en": ""
    },
    {
      "category": "社会・政治",
      "zh": "系统",
      "pinyin": "xìtǒng",
      "ja": "システム",
      "en": ""
    },
    {
      "category": "社会・政治",
      "zh": "体制",
      "pinyin": "tǐzhì",
      "ja": "体制",
      "en": ""
    },
    {
      "category": "社会・政治",
      "zh": "州",
      "pinyin": "zhōu",
      "ja": "州",
      "en": ""
    },
    {
      "category": "社会・政治",
      "zh": "税",
      "pinyin": "shuì",
      "ja": "税金",
      "en": ""
    },
    {
      "category": "社会・政治",
      "zh": "经济",
      "pinyin": "jīngjì",
      "ja": "経済",
      "en": ""
    },
    {
      "category": "社会・政治",
      "zh": "资本",
      "pinyin": "zīběn",
      "ja": "資本",
      "en": ""
    },
    {
      "category": "社会・政治",
      "zh": "预算",
      "pinyin": "yùsuàn",
      "ja": "予算",
      "en": ""
    },
    {
      "category": "社会・政治",
      "zh": "最低工资",
      "pinyin": "zuìdī gōngzī",
      "ja": "最低賃金",
      "en": ""
    },
    {
      "category": "社会・政治",
      "zh": "失业",
      "pinyin": "shīyè",
      "ja": "失業",
      "en": ""
    },
    {
      "category": "社会・政治",
      "zh": "通货膨胀",
      "pinyin": "tōnghuò péngzhàng",
      "ja": "インフレ",
      "en": ""
    },
    {
      "category": "社会・政治",
      "zh": "成本",
      "pinyin": "chéngběn",
      "ja": "コスト",
      "en": ""
    },
    {
      "category": "社会・政治",
      "zh": "危机",
      "pinyin": "wēijī",
      "ja": "危機",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "文化",
      "pinyin": "wénhuà",
      "ja": "文化",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "传统",
      "pinyin": "chuántǒng",
      "ja": "伝統",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "习俗",
      "pinyin": "xísú",
      "ja": "習慣",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "宗教",
      "pinyin": "zōngjiào",
      "ja": "宗教",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "信仰",
      "pinyin": "xìnyǎng",
      "ja": "信仰",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "节日",
      "pinyin": "jiérì",
      "ja": "フェスティバル",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "聚会",
      "pinyin": "jùhuì",
      "ja": "パーティー",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "庆祝",
      "pinyin": "qìngzhù",
      "ja": "お祝い",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "生日",
      "pinyin": "shēngrì",
      "ja": "誕生日",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "婚礼",
      "pinyin": "hūnlǐ",
      "ja": "結婚式",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "圣诞节",
      "pinyin": "shèngdànjié",
      "ja": "クリスマス",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "复活节",
      "pinyin": "fùhuójié",
      "ja": "イースター",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "新年",
      "pinyin": "xīnnián",
      "ja": "新年",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "音乐会",
      "pinyin": "yīnyuèhuì",
      "ja": "コンサート",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "表演",
      "pinyin": "biǎoyǎn",
      "ja": "ショー、公演",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "电影",
      "pinyin": "diànyǐng",
      "ja": "映画",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "纪录片",
      "pinyin": "jìlùpiàn",
      "ja": "ドキュメンタリー",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "电影院",
      "pinyin": "diànyǐngyuàn",
      "ja": "映画館",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "剧院",
      "pinyin": "jùyuàn",
      "ja": "劇場",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "戏剧",
      "pinyin": "xìjù",
      "ja": "演劇",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "音乐剧",
      "pinyin": "yīnyuèjù",
      "ja": "ミュージカル",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "展览",
      "pinyin": "zhǎnlǎn",
      "ja": "展覧会",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "艺术",
      "pinyin": "yìshù",
      "ja": "芸術",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "绘画",
      "pinyin": "huìhuà",
      "ja": "絵画",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "雕塑",
      "pinyin": "diāosù",
      "ja": "彫刻",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "摄影",
      "pinyin": "shèyǐng",
      "ja": "写真",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "歌曲",
      "pinyin": "gēqǔ",
      "ja": "歌",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "专辑",
      "pinyin": "zhuānjí",
      "ja": "アルバム",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "乐器",
      "pinyin": "yuèqì",
      "ja": "楽器",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "吉他",
      "pinyin": "jítā",
      "ja": "ギター",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "钢琴",
      "pinyin": "gāngqín",
      "ja": "ピアノ",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "小提琴",
      "pinyin": "xiǎotíqín",
      "ja": "バイオリン",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "鼓",
      "pinyin": "gǔ",
      "ja": "ドラム",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "舞蹈",
      "pinyin": "wǔdǎo",
      "ja": "ダンス",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "跳舞",
      "pinyin": "tiàowǔ",
      "ja": "踊り",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "小说",
      "pinyin": "xiǎoshuō",
      "ja": "小説",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "诗",
      "pinyin": "shī",
      "ja": "詩",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "杂志",
      "pinyin": "zázhì",
      "ja": "雑誌",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "游戏",
      "pinyin": "yóuxì",
      "ja": "ゲーム",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "电子游戏",
      "pinyin": "diànzǐ yóuxì",
      "ja": "ビデオゲーム",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "玩具",
      "pinyin": "wánjù",
      "ja": "おもちゃ",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "爱好",
      "pinyin": "àihào",
      "ja": "趣味",
      "en": ""
    },
    {
      "category": "文化・娯楽",
      "zh": "消遣",
      "pinyin": "xiāoqiǎn",
      "ja": "趣味、娯楽",
      "en": ""
    },
    {
      "category": "メディア・テクノロジー",
      "zh": "报纸",
      "pinyin": "bàozhǐ",
      "ja": "新聞",
      "en": ""
    },
    {
      "category": "メディア・テクノロジー",
      "zh": "新闻",
      "pinyin": "xīnwén",
      "ja": "ニュース",
      "en": ""
    },
    {
      "category": "メディア・テクノロジー",
      "zh": "文章",
      "pinyin": "wénzhāng",
      "ja": "記事",
      "en": ""
    },
    {
      "category": "メディア・テクノロジー",
      "zh": "频道",
      "pinyin": "píndào",
      "ja": "チャンネル",
      "en": ""
    },
    {
      "category": "メディア・テクノロジー",
      "zh": "系列",
      "pinyin": "xìliè",
      "ja": "シリーズ",
      "en": ""
    },
    {
      "category": "メディア・テクノロジー",
      "zh": "社交网络",
      "pinyin": "shèjiāo wǎngluò",
      "ja": "SNS",
      "en": ""
    },
    {
      "category": "メディア・テクノロジー",
      "zh": "应用程序",
      "pinyin": "yìngyòng chéngxù",
      "ja": "アプリ",
      "en": ""
    },
    {
      "category": "メディア・テクノロジー",
      "zh": "网站",
      "pinyin": "wǎngzhàn",
      "ja": "ウェブサイト",
      "en": ""
    },
    {
      "category": "メディア・テクノロジー",
      "zh": "网页",
      "pinyin": "wǎngyè",
      "ja": "ウェブページ",
      "en": ""
    },
    {
      "category": "メディア・テクノロジー",
      "zh": "博客",
      "pinyin": "bókè",
      "ja": "ブログ",
      "en": ""
    },
    {
      "category": "メディア・テクノロジー",
      "zh": "视频",
      "pinyin": "shìpín",
      "ja": "動画",
      "en": ""
    },
    {
      "category": "メディア・テクノロジー",
      "zh": "照片",
      "pinyin": "zhàopiàn",
      "ja": "写真",
      "en": ""
    },
    {
      "category": "メディア・テクノロジー",
      "zh": "智能手机",
      "pinyin": "zhìnéng shǒujī",
      "ja": "スマートフォン",
      "en": ""
    },
    {
      "category": "メディア・テクノロジー",
      "zh": "技术",
      "pinyin": "jìshù",
      "ja": "テクノロジー",
      "en": ""
    },
    {
      "category": "メディア・テクノロジー",
      "zh": "人工智能",
      "pinyin": "réngōng zhìnéng",
      "ja": "人工知能",
      "en": ""
    },
    {
      "category": "メディア・テクノロジー",
      "zh": "机器人",
      "pinyin": "jīqìrén",
      "ja": "ロボット",
      "en": ""
    },
    {
      "category": "メディア・テクノロジー",
      "zh": "虚拟现实",
      "pinyin": "xūnǐ xiànshí",
      "ja": "仮想現実",
      "en": ""
    },
    {
      "category": "メディア・テクノロジー",
      "zh": "软件",
      "pinyin": "ruǎnjiàn",
      "ja": "ソフトウェア",
      "en": ""
    },
    {
      "category": "メディア・テクノロジー",
      "zh": "硬件",
      "pinyin": "yìngjiàn",
      "ja": "ハードウェア",
      "en": ""
    },
    {
      "category": "メディア・テクノロジー",
      "zh": "密码",
      "pinyin": "mìmǎ",
      "ja": "パスワード",
      "en": ""
    },
    {
      "category": "メディア・テクノロジー",
      "zh": "用户",
      "pinyin": "yònghù",
      "ja": "ユーザー",
      "en": ""
    },
    {
      "category": "メディア・テクノロジー",
      "zh": "个人资料",
      "pinyin": "gèrén zīliào",
      "ja": "プロフィール",
      "en": ""
    },
    {
      "category": "メディア・テクノロジー",
      "zh": "帖子",
      "pinyin": "tiězi",
      "ja": "投稿",
      "en": ""
    },
    {
      "category": "メディア・テクノロジー",
      "zh": "评论",
      "pinyin": "pínglùn",
      "ja": "コメント",
      "en": ""
    },
    {
      "category": "メディア・テクノロジー",
      "zh": "点赞",
      "pinyin": "diǎnzàn",
      "ja": "いいね",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "公司",
      "pinyin": "gōngsī",
      "ja": "会社",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "企业",
      "pinyin": "qǐyè",
      "ja": "企業",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "办公室",
      "pinyin": "bàngōngshì",
      "ja": "オフィス",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "会议",
      "pinyin": "huìyì",
      "ja": "会議",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "会议室",
      "pinyin": "huìyìshì",
      "ja": "会議室",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "合同",
      "pinyin": "hétong",
      "ja": "契約書",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "报告",
      "pinyin": "bàogào",
      "ja": "報告書、レポート",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "发票",
      "pinyin": "fāpiào",
      "ja": "領収書、請求書",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "预算",
      "pinyin": "yùsuàn",
      "ja": "予算",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "利润",
      "pinyin": "lìrùn",
      "ja": "利益",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "收入",
      "pinyin": "shōurù",
      "ja": "収入",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "支出",
      "pinyin": "zhīchū",
      "ja": "支出",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "成本",
      "pinyin": "chéngběn",
      "ja": "コスト",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "销售",
      "pinyin": "xiāoshòu",
      "ja": "販売、セールス",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "市场",
      "pinyin": "shìchǎng",
      "ja": "市場、マーケット",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "营销",
      "pinyin": "yíngxiāo",
      "ja": "マーケティング",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "广告",
      "pinyin": "guǎnggào",
      "ja": "広告",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "品牌",
      "pinyin": "pǐnpái",
      "ja": "ブランド",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "产品",
      "pinyin": "chǎnpǐn",
      "ja": "製品",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "服务",
      "pinyin": "fúwù",
      "ja": "サービス",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "项目",
      "pinyin": "xiàngmù",
      "ja": "プロジェクト",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "计划书",
      "pinyin": "jìhuàshū",
      "ja": "企画書",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "提案",
      "pinyin": "tí'àn",
      "ja": "提案",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "方案",
      "pinyin": "fāng'àn",
      "ja": "プラン、案",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "策略",
      "pinyin": "cèlüè",
      "ja": "戦略",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "目标",
      "pinyin": "mùbiāo",
      "ja": "目標",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "业绩",
      "pinyin": "yèjì",
      "ja": "業績",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "部门",
      "pinyin": "bùmén",
      "ja": "部門",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "团队",
      "pinyin": "tuánduì",
      "ja": "チーム",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "领导",
      "pinyin": "lǐngdǎo",
      "ja": "リーダー、指導者",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "经理",
      "pinyin": "jīnglǐ",
      "ja": "マネージャー",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "总经理",
      "pinyin": "zǒngjīnglǐ",
      "ja": "社長、総経理",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "董事长",
      "pinyin": "dǒngshìzhǎng",
      "ja": "会長、取締役会長",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "名片",
      "pinyin": "míngpiàn",
      "ja": "名刺",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "简历",
      "pinyin": "jiǎnlì",
      "ja": "履歴書",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "薪水",
      "pinyin": "xīnshuǐ",
      "ja": "給料",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "奖金",
      "pinyin": "jiǎngjīn",
      "ja": "ボーナス",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "福利",
      "pinyin": "fúlì",
      "ja": "福利厚生",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "培训",
      "pinyin": "péixùn",
      "ja": "研修",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "出差",
      "pinyin": "chūchāi",
      "ja": "出張",
      "en": ""
    },
    {
      "category": "IT・テクノロジー",
      "zh": "电脑",
      "pinyin": "diànnǎo",
      "ja": "コンピュータ",
      "en": ""
    },
    {
      "category": "IT・テクノロジー",
      "zh": "笔记本电脑",
      "pinyin": "bǐjìběn diànnǎo",
      "ja": "ノートパソコン",
      "en": ""
    },
    {
      "category": "IT・テクノロジー",
      "zh": "软件",
      "pinyin": "ruǎnjiàn",
      "ja": "ソフトウェア",
      "en": ""
    },
    {
      "category": "IT・テクノロジー",
      "zh": "硬件",
      "pinyin": "yìngjiàn",
      "ja": "ハードウェア",
      "en": ""
    },
    {
      "category": "IT・テクノロジー",
      "zh": "程序",
      "pinyin": "chéngxù",
      "ja": "プログラム",
      "en": ""
    },
    {
      "category": "IT・テクノロジー",
      "zh": "代码",
      "pinyin": "dàimǎ",
      "ja": "コード",
      "en": ""
    },
    {
      "category": "IT・テクノロジー",
      "zh": "数据",
      "pinyin": "shùjù",
      "ja": "データ",
      "en": ""
    },
    {
      "category": "IT・テクノロジー",
      "zh": "数据库",
      "pinyin": "shùjùkù",
      "ja": "データベース",
      "en": ""
    },
    {
      "category": "IT・テクノロジー",
      "zh": "服务器",
      "pinyin": "fúwùqì",
      "ja": "サーバー",
      "en": ""
    },
    {
      "category": "IT・テクノロジー",
      "zh": "网络",
      "pinyin": "wǎngluò",
      "ja": "ネットワーク",
      "en": ""
    },
    {
      "category": "IT・テクノロジー",
      "zh": "互联网",
      "pinyin": "hùliánwǎng",
      "ja": "インターネット",
      "en": ""
    },
    {
      "category": "IT・テクノロジー",
      "zh": "网站",
      "pinyin": "wǎngzhàn",
      "ja": "ウェブサイト",
      "en": ""
    },
    {
      "category": "IT・テクノロジー",
      "zh": "网页",
      "pinyin": "wǎngyè",
      "ja": "ウェブページ",
      "en": ""
    },
    {
      "category": "IT・テクノロジー",
      "zh": "应用程序",
      "pinyin": "yìngyòng chéngxù",
      "ja": "アプリケーション",
      "en": ""
    },
    {
      "category": "IT・テクノロジー",
      "zh": "手机应用",
      "pinyin": "shǒujī yìngyòng",
      "ja": "スマホアプリ",
      "en": ""
    },
    {
      "category": "IT・テクノロジー",
      "zh": "操作系统",
      "pinyin": "cāozuò xìtǒng",
      "ja": "OS、オペレーティングシステム",
      "en": ""
    },
    {
      "category": "IT・テクノロジー",
      "zh": "人工智能",
      "pinyin": "réngōng zhìnéng",
      "ja": "人工知能、AI",
      "en": ""
    },
    {
      "category": "IT・テクノロジー",
      "zh": "云计算",
      "pinyin": "yún jìsuàn",
      "ja": "クラウドコンピューティング",
      "en": ""
    },
    {
      "category": "IT・テクノロジー",
      "zh": "大数据",
      "pinyin": "dà shùjù",
      "ja": "ビッグデータ",
      "en": ""
    },
    {
      "category": "IT・テクノロジー",
      "zh": "算法",
      "pinyin": "suànfǎ",
      "ja": "アルゴリズム",
      "en": ""
    },
    {
      "category": "IT・テクノロジー",
      "zh": "密码",
      "pinyin": "mìmǎ",
      "ja": "パスワード",
      "en": ""
    },
    {
      "category": "IT・テクノロジー",
      "zh": "账号",
      "pinyin": "zhànghào",
      "ja": "アカウント",
      "en": ""
    },
    {
      "category": "IT・テクノロジー",
      "zh": "用户",
      "pinyin": "yònghù",
      "ja": "ユーザー",
      "en": ""
    },
    {
      "category": "IT・テクノロジー",
      "zh": "界面",
      "pinyin": "jièmiàn",
      "ja": "インターフェース",
      "en": ""
    },
    {
      "category": "IT・テクノロジー",
      "zh": "链接",
      "pinyin": "liànjiē",
      "ja": "リンク",
      "en": ""
    },
    {
      "category": "IT・テクノロジー",
      "zh": "文件",
      "pinyin": "wénjiàn",
      "ja": "ファイル",
      "en": ""
    },
    {
      "category": "IT・テクノロジー",
      "zh": "文件夹",
      "pinyin": "wénjiànjiā",
      "ja": "フォルダ",
      "en": ""
    },
    {
      "category": "IT・テクノロジー",
      "zh": "备份",
      "pinyin": "bèifèn",
      "ja": "バックアップ",
      "en": ""
    },
    {
      "category": "IT・テクノロジー",
      "zh": "病毒",
      "pinyin": "bìngdú",
      "ja": "ウイルス",
      "en": ""
    },
    {
      "category": "IT・テクノロジー",
      "zh": "黑客",
      "pinyin": "hēikè",
      "ja": "ハッカー",
      "en": ""
    },
    {
      "category": "IT・テクノロジー",
      "zh": "网络安全",
      "pinyin": "wǎngluò ānquán",
      "ja": "サイバーセキュリティ",
      "en": ""
    },
    {
      "category": "金融・経済",
      "zh": "银行",
      "pinyin": "yínháng",
      "ja": "銀行",
      "en": ""
    },
    {
      "category": "金融・経済",
      "zh": "账户",
      "pinyin": "zhànghù",
      "ja": "口座",
      "en": ""
    },
    {
      "category": "金融・経済",
      "zh": "存款",
      "pinyin": "cúnkuǎn",
      "ja": "預金",
      "en": ""
    },
    {
      "category": "金融・経済",
      "zh": "贷款",
      "pinyin": "dàikuǎn",
      "ja": "ローン、融資",
      "en": ""
    },
    {
      "category": "金融・経済",
      "zh": "利息",
      "pinyin": "lìxī",
      "ja": "利息",
      "en": ""
    },
    {
      "category": "金融・経済",
      "zh": "利率",
      "pinyin": "lìlǜ",
      "ja": "利率、金利",
      "en": ""
    },
    {
      "category": "金融・経済",
      "zh": "汇率",
      "pinyin": "huìlǜ",
      "ja": "為替レート",
      "en": ""
    },
    {
      "category": "金融・経済",
      "zh": "股票",
      "pinyin": "gǔpiào",
      "ja": "株式",
      "en": ""
    },
    {
      "category": "金融・経済",
      "zh": "股市",
      "pinyin": "gǔshì",
      "ja": "株式市場",
      "en": ""
    },
    {
      "category": "金融・経済",
      "zh": "投资",
      "pinyin": "tóuzī",
      "ja": "投資",
      "en": ""
    },
    {
      "category": "金融・経済",
      "zh": "基金",
      "pinyin": "jījīn",
      "ja": "ファンド、基金",
      "en": ""
    },
    {
      "category": "金融・経済",
      "zh": "债券",
      "pinyin": "zhàiquàn",
      "ja": "債券",
      "en": ""
    },
    {
      "category": "金融・経済",
      "zh": "保险",
      "pinyin": "bǎoxiǎn",
      "ja": "保険",
      "en": ""
    },
    {
      "category": "金融・経済",
      "zh": "税",
      "pinyin": "shuì",
      "ja": "税金",
      "en": ""
    },
    {
      "category": "金融・経済",
      "zh": "所得税",
      "pinyin": "suǒdéshuì",
      "ja": "所得税",
      "en": ""
    },
    {
      "category": "金融・経済",
      "zh": "消费税",
      "pinyin": "xiāofèishuì",
      "ja": "消費税",
      "en": ""
    },
    {
      "category": "金融・経済",
      "zh": "通货膨胀",
      "pinyin": "tōnghuò péngzhàng",
      "ja": "インフレーション",
      "en": ""
    },
    {
      "category": "金融・経済",
      "zh": "通货紧缩",
      "pinyin": "tōnghuò jǐnsuō",
      "ja": "デフレーション",
      "en": ""
    },
    {
      "category": "金融・経済",
      "zh": "经济",
      "pinyin": "jīngjì",
      "ja": "経済",
      "en": ""
    },
    {
      "category": "金融・経済",
      "zh": "GDP",
      "pinyin": "GDP",
      "ja": "GDP（国内総生産）",
      "en": ""
    },
    {
      "category": "金融・経済",
      "zh": "贸易",
      "pinyin": "màoyì",
      "ja": "貿易",
      "en": ""
    },
    {
      "category": "金融・経済",
      "zh": "进口",
      "pinyin": "jìnkǒu",
      "ja": "輸入",
      "en": ""
    },
    {
      "category": "金融・経済",
      "zh": "出口",
      "pinyin": "chūkǒu",
      "ja": "輸出",
      "en": ""
    },
    {
      "category": "金融・経済",
      "zh": "货币",
      "pinyin": "huòbì",
      "ja": "通貨",
      "en": ""
    },
    {
      "category": "金融・経済",
      "zh": "人民币",
      "pinyin": "rénmínbì",
      "ja": "人民元",
      "en": ""
    },
    {
      "category": "金融・経済",
      "zh": "美元",
      "pinyin": "měiyuán",
      "ja": "ドル",
      "en": ""
    },
    {
      "category": "金融・経済",
      "zh": "日元",
      "pinyin": "rìyuán",
      "ja": "円",
      "en": ""
    },
    {
      "category": "金融・経済",
      "zh": "欧元",
      "pinyin": "ōuyuán",
      "ja": "ユーロ",
      "en": ""
    },
    {
      "category": "金融・経済",
      "zh": "信用卡",
      "pinyin": "xìnyòngkǎ",
      "ja": "クレジットカード",
      "en": ""
    },
    {
      "category": "金融・経済",
      "zh": "现金",
      "pinyin": "xiànjīn",
      "ja": "現金",
      "en": ""
    },
    {
      "category": "金融・経済",
      "zh": "转账",
      "pinyin": "zhuǎnzhàng",
      "ja": "振込",
      "en": ""
    },
    {
      "category": "金融・経済",
      "zh": "收据",
      "pinyin": "shōujù",
      "ja": "領収書",
      "en": ""
    }
  ],
  "verbs": [
    {
      "category": "基本・存在",
      "zh": "是",
      "pinyin": "shì",
      "ja": "～である",
      "en": ""
    },
    {
      "category": "基本・存在",
      "zh": "在",
      "pinyin": "zài",
      "ja": "～にいる",
      "en": ""
    },
    {
      "category": "基本・存在",
      "zh": "有",
      "pinyin": "yǒu",
      "ja": "持つ、ある",
      "en": ""
    },
    {
      "category": "基本・存在",
      "zh": "做",
      "pinyin": "zuò",
      "ja": "する",
      "en": ""
    },
    {
      "category": "基本・存在",
      "zh": "制作",
      "pinyin": "zhìzuò",
      "ja": "作る",
      "en": ""
    },
    {
      "category": "移動・位置",
      "zh": "去",
      "pinyin": "qù",
      "ja": "行く",
      "en": ""
    },
    {
      "category": "移動・位置",
      "zh": "来",
      "pinyin": "lái",
      "ja": "来る",
      "en": ""
    },
    {
      "category": "知覚・認識",
      "zh": "看",
      "pinyin": "kàn",
      "ja": "見る",
      "en": ""
    },
    {
      "category": "操作・使用",
      "zh": "放",
      "pinyin": "fàng",
      "ja": "置く",
      "en": ""
    },
    {
      "category": "操作・使用",
      "zh": "放置",
      "pinyin": "fàngzhì",
      "ja": "置いておく",
      "en": ""
    },
    {
      "category": "移動・運搬",
      "zh": "出去",
      "pinyin": "chūqù",
      "ja": "出る",
      "en": ""
    },
    {
      "category": "移動・運搬",
      "zh": "出门",
      "pinyin": "chūmén",
      "ja": "出かける",
      "en": ""
    },
    {
      "category": "移動・運搬",
      "zh": "到达",
      "pinyin": "dàodá",
      "ja": "着く",
      "en": ""
    },
    {
      "category": "移動・運搬",
      "zh": "留下",
      "pinyin": "liúxià",
      "ja": "残る",
      "en": ""
    },
    {
      "category": "移動・運搬",
      "zh": "保持",
      "pinyin": "bǎochí",
      "ja": "～のままでいる",
      "en": ""
    },
    {
      "category": "移動・運搬",
      "zh": "带",
      "pinyin": "dài",
      "ja": "持っていく",
      "en": ""
    },
    {
      "category": "移動・運搬",
      "zh": "携带",
      "pinyin": "xiédài",
      "ja": "身につける",
      "en": ""
    },
    {
      "category": "移動・運搬",
      "zh": "带来",
      "pinyin": "dàilái",
      "ja": "持ってくる",
      "en": ""
    },
    {
      "category": "操作・使用",
      "zh": "拿",
      "pinyin": "ná",
      "ja": "取る",
      "en": ""
    },
    {
      "category": "飲食",
      "zh": "喝",
      "pinyin": "hē",
      "ja": "飲む",
      "en": ""
    },
    {
      "category": "授受",
      "zh": "给",
      "pinyin": "gěi",
      "ja": "与える",
      "en": ""
    },
    {
      "category": "授受",
      "zh": "收到",
      "pinyin": "shōudào",
      "ja": "受け取る",
      "en": ""
    },
    {
      "category": "操作・使用",
      "zh": "让",
      "pinyin": "ràng",
      "ja": "～させる",
      "en": ""
    },
    {
      "category": "操作・使用",
      "zh": "保管",
      "pinyin": "bǎoguǎn",
      "ja": "取っておく",
      "en": ""
    },
    {
      "category": "操作・使用",
      "zh": "保存",
      "pinyin": "bǎocún",
      "ja": "保管する",
      "en": ""
    },
    {
      "category": "操作・使用",
      "zh": "使用",
      "pinyin": "shǐyòng",
      "ja": "使う",
      "en": ""
    },
    {
      "category": "操作・使用",
      "zh": "打开",
      "pinyin": "dǎkāi",
      "ja": "開ける",
      "en": ""
    },
    {
      "category": "操作・使用",
      "zh": "关闭",
      "pinyin": "guānbì",
      "ja": "閉める",
      "en": ""
    },
    {
      "category": "変化",
      "zh": "开始",
      "pinyin": "kāishǐ",
      "ja": "始める",
      "en": ""
    },
    {
      "category": "変化",
      "zh": "结束",
      "pinyin": "jiéshù",
      "ja": "終える",
      "en": ""
    },
    {
      "category": "変化",
      "zh": "完成",
      "pinyin": "wánchéng",
      "ja": "完了する",
      "en": ""
    },
    {
      "category": "変化",
      "zh": "继续",
      "pinyin": "jìxù",
      "ja": "続ける",
      "en": ""
    },
    {
      "category": "移動",
      "zh": "跟随",
      "pinyin": "gēnsuí",
      "ja": "ついて行く",
      "en": ""
    },
    {
      "category": "変化",
      "zh": "改变",
      "pinyin": "gǎibiàn",
      "ja": "変える",
      "en": ""
    },
    {
      "category": "仕事",
      "zh": "工作",
      "pinyin": "gōngzuò",
      "ja": "働く",
      "en": ""
    },
    {
      "category": "学習",
      "zh": "学习",
      "pinyin": "xuéxí",
      "ja": "勉強する",
      "en": ""
    },
    {
      "category": "社会",
      "zh": "帮助",
      "pinyin": "bāngzhù",
      "ja": "助ける",
      "en": ""
    },
    {
      "category": "行動",
      "zh": "等待",
      "pinyin": "děngdài",
      "ja": "待つ",
      "en": ""
    },
    {
      "category": "感情",
      "zh": "希望",
      "pinyin": "xīwàng",
      "ja": "望む",
      "en": ""
    },
    {
      "category": "行動",
      "zh": "寻找",
      "pinyin": "xúnzhǎo",
      "ja": "探す",
      "en": ""
    },
    {
      "category": "行動",
      "zh": "找到",
      "pinyin": "zhǎodào",
      "ja": "見つける",
      "en": ""
    },
    {
      "category": "状態",
      "zh": "需要",
      "pinyin": "xūyào",
      "ja": "必要とする",
      "en": ""
    },
    {
      "category": "行動",
      "zh": "尝试",
      "pinyin": "chángshì",
      "ja": "試す",
      "en": ""
    },
    {
      "category": "飲食",
      "zh": "品尝",
      "pinyin": "pǐncháng",
      "ja": "味見する",
      "en": ""
    },
    {
      "category": "助動詞",
      "zh": "能",
      "pinyin": "néng",
      "ja": "～できる",
      "en": ""
    },
    {
      "category": "助動詞",
      "zh": "可以",
      "pinyin": "kěyǐ",
      "ja": "～できる",
      "en": ""
    },
    {
      "category": "感情・思考",
      "zh": "想",
      "pinyin": "xiǎng",
      "ja": "～したい、考える",
      "en": ""
    },
    {
      "category": "感情",
      "zh": "想要",
      "pinyin": "xiǎngyào",
      "ja": "欲しい",
      "en": ""
    },
    {
      "category": "感情",
      "zh": "喜欢",
      "pinyin": "xǐhuān",
      "ja": "好きだ",
      "en": ""
    },
    {
      "category": "感情",
      "zh": "爱",
      "pinyin": "ài",
      "ja": "愛する",
      "en": ""
    },
    {
      "category": "生活",
      "zh": "住",
      "pinyin": "zhù",
      "ja": "住む",
      "en": ""
    },
    {
      "category": "生活",
      "zh": "生活",
      "pinyin": "shēnghuó",
      "ja": "暮らす",
      "en": ""
    },
    {
      "category": "生命",
      "zh": "死",
      "pinyin": "sǐ",
      "ja": "死ぬ",
      "en": ""
    },
    {
      "category": "生命",
      "zh": "出生",
      "pinyin": "chūshēng",
      "ja": "生まれる",
      "en": ""
    },
    {
      "category": "思考",
      "zh": "认为",
      "pinyin": "rènwéi",
      "ja": "思う",
      "en": ""
    },
    {
      "category": "思考",
      "zh": "相信",
      "pinyin": "xiāngxìn",
      "ja": "信じる",
      "en": ""
    },
    {
      "category": "思考",
      "zh": "理解",
      "pinyin": "lǐjiě",
      "ja": "理解する",
      "en": ""
    },
    {
      "category": "思考",
      "zh": "认识",
      "pinyin": "rènshi",
      "ja": "知っている",
      "en": ""
    },
    {
      "category": "社会",
      "zh": "见面",
      "pinyin": "jiànmiàn",
      "ja": "会う",
      "en": ""
    },
    {
      "category": "記憶",
      "zh": "记得",
      "pinyin": "jìde",
      "ja": "覚えている",
      "en": ""
    },
    {
      "category": "記憶",
      "zh": "回忆",
      "pinyin": "huíyì",
      "ja": "思い出す",
      "en": ""
    },
    {
      "category": "記憶",
      "zh": "忘记",
      "pinyin": "wàngjì",
      "ja": "忘れる",
      "en": ""
    },
    {
      "category": "状態",
      "zh": "失去",
      "pinyin": "shīqù",
      "ja": "失う",
      "en": ""
    },
    {
      "category": "競争",
      "zh": "输",
      "pinyin": "shū",
      "ja": "負ける",
      "en": ""
    },
    {
      "category": "競争",
      "zh": "赢",
      "pinyin": "yíng",
      "ja": "勝つ",
      "en": ""
    },
    {
      "category": "経済",
      "zh": "赚",
      "pinyin": "zhuàn",
      "ja": "稼ぐ",
      "en": ""
    },
    {
      "category": "感覚",
      "zh": "感觉",
      "pinyin": "gǎnjué",
      "ja": "感じる",
      "en": ""
    },
    {
      "category": "感情",
      "zh": "遗憾",
      "pinyin": "yíhàn",
      "ja": "残念に思う",
      "en": ""
    },
    {
      "category": "会話",
      "zh": "说",
      "pinyin": "shuō",
      "ja": "言う",
      "en": ""
    },
    {
      "category": "会話",
      "zh": "告诉",
      "pinyin": "gàosu",
      "ja": "伝える",
      "en": ""
    },
    {
      "category": "会話",
      "zh": "说话",
      "pinyin": "shuōhuà",
      "ja": "話す",
      "en": ""
    },
    {
      "category": "会話",
      "zh": "聊天",
      "pinyin": "liáotiān",
      "ja": "しゃべる",
      "en": ""
    },
    {
      "category": "会話",
      "zh": "讲",
      "pinyin": "jiǎng",
      "ja": "話す",
      "en": ""
    },
    {
      "category": "計算",
      "zh": "数",
      "pinyin": "shǔ",
      "ja": "数える",
      "en": ""
    },
    {
      "category": "会話",
      "zh": "解释",
      "pinyin": "jiěshì",
      "ja": "説明する",
      "en": ""
    },
    {
      "category": "会話",
      "zh": "问",
      "pinyin": "wèn",
      "ja": "質問する",
      "en": ""
    },
    {
      "category": "会話",
      "zh": "回答",
      "pinyin": "huídá",
      "ja": "答える",
      "en": ""
    },
    {
      "category": "読み書き",
      "zh": "读",
      "pinyin": "dú",
      "ja": "読む",
      "en": ""
    },
    {
      "category": "読み書き",
      "zh": "写",
      "pinyin": "xiě",
      "ja": "書く",
      "en": ""
    },
    {
      "category": "知覚",
      "zh": "听",
      "pinyin": "tīng",
      "ja": "聞く",
      "en": ""
    },
    {
      "category": "知覚",
      "zh": "闻",
      "pinyin": "wén",
      "ja": "嗅ぐ",
      "en": ""
    },
    {
      "category": "知覚",
      "zh": "触摸",
      "pinyin": "chùmō",
      "ja": "触る",
      "en": ""
    },
    {
      "category": "知覚",
      "zh": "尝",
      "pinyin": "cháng",
      "ja": "味わう",
      "en": ""
    },
    {
      "category": "飲食",
      "zh": "吃",
      "pinyin": "chī",
      "ja": "食べる",
      "en": ""
    },
    {
      "category": "日常",
      "zh": "睡觉",
      "pinyin": "shuìjiào",
      "ja": "眠る",
      "en": ""
    },
    {
      "category": "日常",
      "zh": "醒来",
      "pinyin": "xǐnglái",
      "ja": "起きる",
      "en": ""
    },
    {
      "category": "日常",
      "zh": "洗",
      "pinyin": "xǐ",
      "ja": "洗う",
      "en": ""
    },
    {
      "category": "日常",
      "zh": "穿",
      "pinyin": "chuān",
      "ja": "着る",
      "en": ""
    },
    {
      "category": "日常",
      "zh": "脱",
      "pinyin": "tuō",
      "ja": "脱ぐ",
      "en": ""
    },
    {
      "category": "移動",
      "zh": "走",
      "pinyin": "zǒu",
      "ja": "歩く",
      "en": ""
    },
    {
      "category": "移動",
      "zh": "跑",
      "pinyin": "pǎo",
      "ja": "走る",
      "en": ""
    },
    {
      "category": "移動",
      "zh": "跳",
      "pinyin": "tiào",
      "ja": "跳ぶ",
      "en": ""
    },
    {
      "category": "移動",
      "zh": "游泳",
      "pinyin": "yóuyǒng",
      "ja": "泳ぐ",
      "en": ""
    },
    {
      "category": "移動",
      "zh": "飞",
      "pinyin": "fēi",
      "ja": "飛ぶ",
      "en": ""
    },
    {
      "category": "日常",
      "zh": "坐",
      "pinyin": "zuò",
      "ja": "座る",
      "en": ""
    },
    {
      "category": "日常",
      "zh": "站",
      "pinyin": "zhàn",
      "ja": "立つ",
      "en": ""
    },
    {
      "category": "日常",
      "zh": "躺",
      "pinyin": "tǎng",
      "ja": "横になる",
      "en": ""
    },
    {
      "category": "取引",
      "zh": "买",
      "pinyin": "mǎi",
      "ja": "買う",
      "en": ""
    },
    {
      "category": "取引",
      "zh": "卖",
      "pinyin": "mài",
      "ja": "売る",
      "en": ""
    },
    {
      "category": "取引",
      "zh": "付款",
      "pinyin": "fùkuǎn",
      "ja": "支払う",
      "en": ""
    },
    {
      "category": "取引",
      "zh": "花费",
      "pinyin": "huāfèi",
      "ja": "費やす",
      "en": ""
    },
    {
      "category": "取引",
      "zh": "节省",
      "pinyin": "jiéshěng",
      "ja": "節約する",
      "en": ""
    },
    {
      "category": "取引",
      "zh": "借",
      "pinyin": "jiè",
      "ja": "借りる",
      "en": ""
    },
    {
      "category": "取引",
      "zh": "还",
      "pinyin": "huán",
      "ja": "返す",
      "en": ""
    },
    {
      "category": "取引",
      "zh": "租",
      "pinyin": "zū",
      "ja": "借りる（賃貸）",
      "en": ""
    },
    {
      "category": "取引",
      "zh": "预订",
      "pinyin": "yùdìng",
      "ja": "予約する",
      "en": ""
    },
    {
      "category": "取引",
      "zh": "取消",
      "pinyin": "qǔxiāo",
      "ja": "キャンセルする",
      "en": ""
    },
    {
      "category": "判断",
      "zh": "确认",
      "pinyin": "quèrèn",
      "ja": "確認する",
      "en": ""
    },
    {
      "category": "計画",
      "zh": "安排",
      "pinyin": "ānpái",
      "ja": "手配する",
      "en": ""
    },
    {
      "category": "計画",
      "zh": "准备",
      "pinyin": "zhǔnbèi",
      "ja": "準備する",
      "en": ""
    },
    {
      "category": "計画",
      "zh": "计划",
      "pinyin": "jìhuà",
      "ja": "計画する",
      "en": ""
    },
    {
      "category": "判断",
      "zh": "决定",
      "pinyin": "juédìng",
      "ja": "決める",
      "en": ""
    },
    {
      "category": "判断",
      "zh": "选择",
      "pinyin": "xuǎnzé",
      "ja": "選ぶ",
      "en": ""
    },
    {
      "category": "判断",
      "zh": "比较",
      "pinyin": "bǐjiào",
      "ja": "比較する",
      "en": ""
    },
    {
      "category": "判断",
      "zh": "检查",
      "pinyin": "jiǎnchá",
      "ja": "チェックする",
      "en": ""
    },
    {
      "category": "操作",
      "zh": "修理",
      "pinyin": "xiūlǐ",
      "ja": "修理する",
      "en": ""
    },
    {
      "category": "操作",
      "zh": "建造",
      "pinyin": "jiànzào",
      "ja": "建てる",
      "en": ""
    },
    {
      "category": "操作",
      "zh": "破坏",
      "pinyin": "pòhuài",
      "ja": "壊す",
      "en": ""
    },
    {
      "category": "操作",
      "zh": "切",
      "pinyin": "qiē",
      "ja": "切る",
      "en": ""
    },
    {
      "category": "操作",
      "zh": "打",
      "pinyin": "dǎ",
      "ja": "打つ",
      "en": ""
    },
    {
      "category": "操作",
      "zh": "推",
      "pinyin": "tuī",
      "ja": "押す",
      "en": ""
    },
    {
      "category": "操作",
      "zh": "拉",
      "pinyin": "lā",
      "ja": "引く",
      "en": ""
    },
    {
      "category": "操作",
      "zh": "举",
      "pinyin": "jǔ",
      "ja": "持ち上げる",
      "en": ""
    },
    {
      "category": "操作",
      "zh": "放下",
      "pinyin": "fàngxià",
      "ja": "降ろす",
      "en": ""
    },
    {
      "category": "操作",
      "zh": "扔",
      "pinyin": "rēng",
      "ja": "投げる",
      "en": ""
    },
    {
      "category": "操作",
      "zh": "接",
      "pinyin": "jiē",
      "ja": "捕まえる",
      "en": ""
    },
    {
      "category": "操作",
      "zh": "抓",
      "pinyin": "zhuā",
      "ja": "つかむ",
      "en": ""
    },
    {
      "category": "操作",
      "zh": "握",
      "pinyin": "wò",
      "ja": "握る",
      "en": ""
    },
    {
      "category": "操作",
      "zh": "触碰",
      "pinyin": "chùpèng",
      "ja": "触れる",
      "en": ""
    },
    {
      "category": "操作",
      "zh": "指",
      "pinyin": "zhǐ",
      "ja": "指さす",
      "en": ""
    },
    {
      "category": "操作",
      "zh": "展示",
      "pinyin": "zhǎnshì",
      "ja": "見せる",
      "en": ""
    },
    {
      "category": "操作",
      "zh": "藏",
      "pinyin": "cáng",
      "ja": "隠す",
      "en": ""
    },
    {
      "category": "知覚",
      "zh": "发现",
      "pinyin": "fāxiàn",
      "ja": "発見する",
      "en": ""
    },
    {
      "category": "知覚",
      "zh": "搜索",
      "pinyin": "sōusuǒ",
      "ja": "検索する",
      "en": ""
    },
    {
      "category": "知覚",
      "zh": "认出",
      "pinyin": "rènchū",
      "ja": "認識する",
      "en": ""
    },
    {
      "category": "知覚",
      "zh": "注意",
      "pinyin": "zhùyì",
      "ja": "注意する",
      "en": ""
    },
    {
      "category": "思考",
      "zh": "集中",
      "pinyin": "jízhōng",
      "ja": "集中する",
      "en": ""
    },
    {
      "category": "思考",
      "zh": "想象",
      "pinyin": "xiǎngxiàng",
      "ja": "想像する",
      "en": ""
    },
    {
      "category": "思考",
      "zh": "梦想",
      "pinyin": "mèngxiǎng",
      "ja": "夢見る",
      "en": ""
    },
    {
      "category": "思考",
      "zh": "怀疑",
      "pinyin": "huáiyí",
      "ja": "疑う",
      "en": ""
    },
    {
      "category": "思考",
      "zh": "猜",
      "pinyin": "cāi",
      "ja": "推測する",
      "en": ""
    },
    {
      "category": "思考",
      "zh": "假设",
      "pinyin": "jiǎshè",
      "ja": "仮定する",
      "en": ""
    },
    {
      "category": "学習",
      "zh": "学会",
      "pinyin": "xuéhuì",
      "ja": "学ぶ",
      "en": ""
    },
    {
      "category": "学習",
      "zh": "教",
      "pinyin": "jiāo",
      "ja": "教える",
      "en": ""
    },
    {
      "category": "学習",
      "zh": "训练",
      "pinyin": "xùnliàn",
      "ja": "訓練する",
      "en": ""
    },
    {
      "category": "学習",
      "zh": "练习",
      "pinyin": "liànxí",
      "ja": "練習する",
      "en": ""
    },
    {
      "category": "結果",
      "zh": "成功",
      "pinyin": "chénggōng",
      "ja": "成功する",
      "en": ""
    },
    {
      "category": "結果",
      "zh": "失败",
      "pinyin": "shībài",
      "ja": "失敗する",
      "en": ""
    },
    {
      "category": "行動",
      "zh": "努力",
      "pinyin": "nǔlì",
      "ja": "努力する",
      "en": ""
    },
    {
      "category": "日常",
      "zh": "休息",
      "pinyin": "xiūxi",
      "ja": "休む",
      "en": ""
    },
    {
      "category": "娯楽",
      "zh": "玩",
      "pinyin": "wán",
      "ja": "遊ぶ",
      "en": ""
    },
    {
      "category": "娯楽",
      "zh": "唱",
      "pinyin": "chàng",
      "ja": "歌う",
      "en": ""
    },
    {
      "category": "娯楽",
      "zh": "跳舞",
      "pinyin": "tiàowǔ",
      "ja": "踊る",
      "en": ""
    },
    {
      "category": "娯楽",
      "zh": "画",
      "pinyin": "huà",
      "ja": "描く",
      "en": ""
    },
    {
      "category": "娯楽",
      "zh": "拍照",
      "pinyin": "pāizhào",
      "ja": "写真を撮る",
      "en": ""
    },
    {
      "category": "通信",
      "zh": "打电话",
      "pinyin": "dǎ diànhuà",
      "ja": "電話をかける",
      "en": ""
    },
    {
      "category": "通信",
      "zh": "发短信",
      "pinyin": "fā duǎnxìn",
      "ja": "メッセージを送る",
      "en": ""
    },
    {
      "category": "通信",
      "zh": "发邮件",
      "pinyin": "fā yóujiàn",
      "ja": "メールを送る",
      "en": ""
    },
    {
      "category": "通信",
      "zh": "上网",
      "pinyin": "shàngwǎng",
      "ja": "ネットを使う",
      "en": ""
    },
    {
      "category": "通信",
      "zh": "分享",
      "pinyin": "fēnxiǎng",
      "ja": "シェアする",
      "en": ""
    },
    {
      "category": "通信",
      "zh": "下载",
      "pinyin": "xiàzài",
      "ja": "ダウンロードする",
      "en": ""
    },
    {
      "category": "通信",
      "zh": "上传",
      "pinyin": "shàngchuán",
      "ja": "アップロードする",
      "en": ""
    },
    {
      "category": "感情表現",
      "zh": "笑",
      "pinyin": "xiào",
      "ja": "笑う",
      "en": ""
    },
    {
      "category": "感情表現",
      "zh": "哭",
      "pinyin": "kū",
      "ja": "泣く",
      "en": ""
    },
    {
      "category": "感情表現",
      "zh": "微笑",
      "pinyin": "wēixiào",
      "ja": "微笑む",
      "en": ""
    },
    {
      "category": "感情表現",
      "zh": "叹气",
      "pinyin": "tànqì",
      "ja": "ため息をつく",
      "en": ""
    },
    {
      "category": "感情表現",
      "zh": "生气",
      "pinyin": "shēngqì",
      "ja": "怒る",
      "en": ""
    },
    {
      "category": "感情",
      "zh": "担心",
      "pinyin": "dānxīn",
      "ja": "心配する",
      "en": ""
    },
    {
      "category": "感情",
      "zh": "害怕",
      "pinyin": "hàipà",
      "ja": "恐れる",
      "en": ""
    },
    {
      "category": "感情",
      "zh": "惊讶",
      "pinyin": "jīngyà",
      "ja": "驚く",
      "en": ""
    },
    {
      "category": "感情",
      "zh": "高兴",
      "pinyin": "gāoxìng",
      "ja": "喜ぶ",
      "en": ""
    },
    {
      "category": "感情",
      "zh": "伤心",
      "pinyin": "shāngxīn",
      "ja": "悲しむ",
      "en": ""
    },
    {
      "category": "状態",
      "zh": "放松",
      "pinyin": "fàngsōng",
      "ja": "リラックスする",
      "en": ""
    },
    {
      "category": "状態",
      "zh": "紧张",
      "pinyin": "jǐnzhāng",
      "ja": "緊張する",
      "en": ""
    },
    {
      "category": "判断",
      "zh": "同意",
      "pinyin": "tóngyì",
      "ja": "同意する",
      "en": ""
    },
    {
      "category": "判断",
      "zh": "反对",
      "pinyin": "fǎnduì",
      "ja": "反対する",
      "en": ""
    },
    {
      "category": "判断",
      "zh": "拒绝",
      "pinyin": "jùjué",
      "ja": "拒否する",
      "en": ""
    },
    {
      "category": "判断",
      "zh": "接受",
      "pinyin": "jiēshòu",
      "ja": "受け入れる",
      "en": ""
    },
    {
      "category": "判断",
      "zh": "承认",
      "pinyin": "chéngrèn",
      "ja": "認める",
      "en": ""
    },
    {
      "category": "判断",
      "zh": "否认",
      "pinyin": "fǒurèn",
      "ja": "否定する",
      "en": ""
    },
    {
      "category": "社会",
      "zh": "道歉",
      "pinyin": "dàoqiàn",
      "ja": "謝る",
      "en": ""
    },
    {
      "category": "社会",
      "zh": "原谅",
      "pinyin": "yuánliàng",
      "ja": "許す",
      "en": ""
    },
    {
      "category": "社会",
      "zh": "感谢",
      "pinyin": "gǎnxiè",
      "ja": "感謝する",
      "en": ""
    },
    {
      "category": "社会",
      "zh": "祝贺",
      "pinyin": "zhùhè",
      "ja": "祝う",
      "en": ""
    },
    {
      "category": "社会",
      "zh": "邀请",
      "pinyin": "yāoqǐng",
      "ja": "招待する",
      "en": ""
    },
    {
      "category": "社会",
      "zh": "介绍",
      "pinyin": "jièshào",
      "ja": "紹介する",
      "en": ""
    },
    {
      "category": "社会",
      "zh": "建议",
      "pinyin": "jiànyì",
      "ja": "提案する",
      "en": ""
    },
    {
      "category": "社会",
      "zh": "推荐",
      "pinyin": "tuījiàn",
      "ja": "推薦する",
      "en": ""
    },
    {
      "category": "社会",
      "zh": "警告",
      "pinyin": "jǐnggào",
      "ja": "警告する",
      "en": ""
    },
    {
      "category": "社会",
      "zh": "命令",
      "pinyin": "mìnglìng",
      "ja": "命令する",
      "en": ""
    },
    {
      "category": "社会",
      "zh": "要求",
      "pinyin": "yāoqiú",
      "ja": "要求する",
      "en": ""
    },
    {
      "category": "社会",
      "zh": "请求",
      "pinyin": "qǐngqiú",
      "ja": "頼む",
      "en": ""
    },
    {
      "category": "社会",
      "zh": "允许",
      "pinyin": "yǔnxǔ",
      "ja": "許可する",
      "en": ""
    },
    {
      "category": "社会",
      "zh": "禁止",
      "pinyin": "jìnzhǐ",
      "ja": "禁止する",
      "en": ""
    },
    {
      "category": "交通",
      "zh": "开车",
      "pinyin": "kāichē",
      "ja": "運転する",
      "en": ""
    },
    {
      "category": "交通",
      "zh": "骑",
      "pinyin": "qí",
      "ja": "乗る（自転車）",
      "en": ""
    },
    {
      "category": "交通",
      "zh": "乘坐",
      "pinyin": "chéngzuò",
      "ja": "乗る（乗り物）",
      "en": ""
    },
    {
      "category": "交通",
      "zh": "出发",
      "pinyin": "chūfā",
      "ja": "出発する",
      "en": ""
    },
    {
      "category": "交通",
      "zh": "返回",
      "pinyin": "fǎnhuí",
      "ja": "戻る",
      "en": ""
    },
    {
      "category": "交通",
      "zh": "迷路",
      "pinyin": "mílù",
      "ja": "迷う",
      "en": ""
    },
    {
      "category": "交通",
      "zh": "转",
      "pinyin": "zhuǎn",
      "ja": "曲がる",
      "en": ""
    },
    {
      "category": "交通",
      "zh": "停",
      "pinyin": "tíng",
      "ja": "止まる",
      "en": ""
    },
    {
      "category": "社会",
      "zh": "迎接",
      "pinyin": "yíngjiē",
      "ja": "迎える",
      "en": ""
    },
    {
      "category": "社会",
      "zh": "送别",
      "pinyin": "sòngbié",
      "ja": "見送る",
      "en": ""
    },
    {
      "category": "社会",
      "zh": "拜访",
      "pinyin": "bàifǎng",
      "ja": "訪問する",
      "en": ""
    },
    {
      "category": "社会",
      "zh": "接待",
      "pinyin": "jiēdài",
      "ja": "もてなす",
      "en": ""
    },
    {
      "category": "社会",
      "zh": "照顾",
      "pinyin": "zhàogu",
      "ja": "世話をする",
      "en": ""
    },
    {
      "category": "社会",
      "zh": "保护",
      "pinyin": "bǎohù",
      "ja": "守る",
      "en": ""
    },
    {
      "category": "社会",
      "zh": "救",
      "pinyin": "jiù",
      "ja": "救う",
      "en": ""
    },
    {
      "category": "社会",
      "zh": "帮忙",
      "pinyin": "bāngmáng",
      "ja": "手伝う",
      "en": ""
    },
    {
      "category": "社会",
      "zh": "支持",
      "pinyin": "zhīchí",
      "ja": "支持する",
      "en": ""
    },
    {
      "category": "社会",
      "zh": "鼓励",
      "pinyin": "gǔlì",
      "ja": "励ます",
      "en": ""
    },
    {
      "category": "社会",
      "zh": "批评",
      "pinyin": "pīpíng",
      "ja": "批判する",
      "en": ""
    },
    {
      "category": "社会",
      "zh": "赞美",
      "pinyin": "zànměi",
      "ja": "褒める",
      "en": ""
    },
    {
      "category": "社会",
      "zh": "责备",
      "pinyin": "zébèi",
      "ja": "責める",
      "en": ""
    },
    {
      "category": "社会",
      "zh": "吵架",
      "pinyin": "chǎojià",
      "ja": "けんかする",
      "en": ""
    },
    {
      "category": "社会",
      "zh": "和好",
      "pinyin": "héhǎo",
      "ja": "仲直りする",
      "en": ""
    },
    {
      "category": "人生",
      "zh": "结婚",
      "pinyin": "jiéhūn",
      "ja": "結婚する",
      "en": ""
    },
    {
      "category": "人生",
      "zh": "离婚",
      "pinyin": "líhūn",
      "ja": "離婚する",
      "en": ""
    },
    {
      "category": "人生",
      "zh": "怀孕",
      "pinyin": "huáiyùn",
      "ja": "妊娠する",
      "en": ""
    },
    {
      "category": "人生",
      "zh": "生",
      "pinyin": "shēng",
      "ja": "産む",
      "en": ""
    },
    {
      "category": "人生",
      "zh": "抚养",
      "pinyin": "fǔyǎng",
      "ja": "育てる",
      "en": ""
    },
    {
      "category": "人生",
      "zh": "成长",
      "pinyin": "chéngzhǎng",
      "ja": "成長する",
      "en": ""
    },
    {
      "category": "人生",
      "zh": "毕业",
      "pinyin": "bìyè",
      "ja": "卒業する",
      "en": ""
    },
    {
      "category": "人生",
      "zh": "退休",
      "pinyin": "tuìxiū",
      "ja": "退職する",
      "en": ""
    },
    {
      "category": "人生",
      "zh": "搬家",
      "pinyin": "bānjiā",
      "ja": "引っ越す",
      "en": ""
    },
    {
      "category": "健康",
      "zh": "住院",
      "pinyin": "zhùyuàn",
      "ja": "入院する",
      "en": ""
    },
    {
      "category": "健康",
      "zh": "出院",
      "pinyin": "chūyuàn",
      "ja": "退院する",
      "en": ""
    },
    {
      "category": "健康",
      "zh": "看病",
      "pinyin": "kànbìng",
      "ja": "診察を受ける",
      "en": ""
    },
    {
      "category": "健康",
      "zh": "治疗",
      "pinyin": "zhìliáo",
      "ja": "治療する",
      "en": ""
    },
    {
      "category": "健康",
      "zh": "康复",
      "pinyin": "kāngfù",
      "ja": "回復する",
      "en": ""
    },
    {
      "category": "健康",
      "zh": "生病",
      "pinyin": "shēngbìng",
      "ja": "病気になる",
      "en": ""
    },
    {
      "category": "健康",
      "zh": "受伤",
      "pinyin": "shòushāng",
      "ja": "けがをする",
      "en": ""
    },
    {
      "category": "健康",
      "zh": "发烧",
      "pinyin": "fāshāo",
      "ja": "熱が出る",
      "en": ""
    },
    {
      "category": "健康",
      "zh": "咳嗽",
      "pinyin": "késou",
      "ja": "咳をする",
      "en": ""
    },
    {
      "category": "スポーツ",
      "zh": "运动",
      "pinyin": "yùndòng",
      "ja": "運動する",
      "en": ""
    },
    {
      "category": "スポーツ",
      "zh": "锻炼",
      "pinyin": "duànliàn",
      "ja": "鍛える",
      "en": ""
    },
    {
      "category": "スポーツ",
      "zh": "比赛",
      "pinyin": "bǐsài",
      "ja": "試合する",
      "en": ""
    },
    {
      "category": "スポーツ",
      "zh": "得分",
      "pinyin": "défēn",
      "ja": "得点する",
      "en": ""
    },
    {
      "category": "スポーツ",
      "zh": "踢",
      "pinyin": "tī",
      "ja": "蹴る",
      "en": ""
    },
    {
      "category": "仕事",
      "zh": "开会",
      "pinyin": "kāihuì",
      "ja": "会議をする",
      "en": ""
    },
    {
      "category": "仕事",
      "zh": "加班",
      "pinyin": "jiābān",
      "ja": "残業する",
      "en": ""
    },
    {
      "category": "仕事",
      "zh": "辞职",
      "pinyin": "cízhí",
      "ja": "辞職する",
      "en": ""
    },
    {
      "category": "仕事",
      "zh": "雇用",
      "pinyin": "gùyòng",
      "ja": "雇う",
      "en": ""
    },
    {
      "category": "仕事",
      "zh": "解雇",
      "pinyin": "jiěgù",
      "ja": "解雇する",
      "en": ""
    },
    {
      "category": "仕事",
      "zh": "面试",
      "pinyin": "miànshì",
      "ja": "面接する",
      "en": ""
    },
    {
      "category": "仕事",
      "zh": "申请",
      "pinyin": "shēnqǐng",
      "ja": "申請する",
      "en": ""
    },
    {
      "category": "日常",
      "zh": "做饭",
      "pinyin": "zuòfàn",
      "ja": "料理する",
      "en": ""
    },
    {
      "category": "日常",
      "zh": "炒",
      "pinyin": "chǎo",
      "ja": "炒める",
      "en": ""
    },
    {
      "category": "日常",
      "zh": "煮",
      "pinyin": "zhǔ",
      "ja": "煮る",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "谈判",
      "pinyin": "tánpàn",
      "ja": "交渉する",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "签署",
      "pinyin": "qiānshǔ",
      "ja": "署名する",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "签字",
      "pinyin": "qiānzì",
      "ja": "サインする",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "批准",
      "pinyin": "pīzhǔn",
      "ja": "承認する",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "审批",
      "pinyin": "shěnpī",
      "ja": "審査・承認する",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "报销",
      "pinyin": "bàoxiāo",
      "ja": "経費精算する",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "汇报",
      "pinyin": "huìbào",
      "ja": "報告する",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "提交",
      "pinyin": "tíjiāo",
      "ja": "提出する",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "执行",
      "pinyin": "zhíxíng",
      "ja": "実行する",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "实施",
      "pinyin": "shíshī",
      "ja": "実施する",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "管理",
      "pinyin": "guǎnlǐ",
      "ja": "管理する",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "协调",
      "pinyin": "xiétiáo",
      "ja": "調整する",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "沟通",
      "pinyin": "gōutōng",
      "ja": "コミュニケーションする",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "联系",
      "pinyin": "liánxì",
      "ja": "連絡する",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "确定",
      "pinyin": "quèdìng",
      "ja": "確定する",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "安排",
      "pinyin": "ānpái",
      "ja": "手配する、アレンジする",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "预约",
      "pinyin": "yùyuē",
      "ja": "予約する",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "延期",
      "pinyin": "yánqī",
      "ja": "延期する",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "推迟",
      "pinyin": "tuīchí",
      "ja": "延期する、遅らせる",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "加速",
      "pinyin": "jiāsù",
      "ja": "加速する",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "改进",
      "pinyin": "gǎijìn",
      "ja": "改善する",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "优化",
      "pinyin": "yōuhuà",
      "ja": "最適化する",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "升级",
      "pinyin": "shēngjí",
      "ja": "アップグレードする",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "更新",
      "pinyin": "gēngxīn",
      "ja": "更新する",
      "en": ""
    },
    {
      "category": "ビジネス",
      "zh": "删除",
      "pinyin": "shānchú",
      "ja": "削除する",
      "en": ""
    },
    {
      "category": "IT",
      "zh": "复制",
      "pinyin": "fùzhì",
      "ja": "コピーする",
      "en": ""
    },
    {
      "category": "IT",
      "zh": "粘贴",
      "pinyin": "zhāntiē",
      "ja": "ペーストする",
      "en": ""
    },
    {
      "category": "IT",
      "zh": "安装",
      "pinyin": "ānzhuāng",
      "ja": "インストールする",
      "en": ""
    },
    {
      "category": "IT",
      "zh": "卸载",
      "pinyin": "xièzài",
      "ja": "アンインストールする",
      "en": ""
    },
    {
      "category": "IT",
      "zh": "重启",
      "pinyin": "chóngqǐ",
      "ja": "再起動する",
      "en": ""
    },
    {
      "category": "IT",
      "zh": "登录",
      "pinyin": "dēnglù",
      "ja": "ログインする",
      "en": ""
    },
    {
      "category": "IT",
      "zh": "退出",
      "pinyin": "tuìchū",
      "ja": "ログアウトする",
      "en": ""
    },
    {
      "category": "IT",
      "zh": "注册",
      "pinyin": "zhùcè",
      "ja": "登録する",
      "en": ""
    },
    {
      "category": "IT",
      "zh": "搜索",
      "pinyin": "sōusuǒ",
      "ja": "検索する",
      "en": ""
    },
    {
      "category": "IT",
      "zh": "浏览",
      "pinyin": "liúlǎn",
      "ja": "ブラウズする",
      "en": ""
    },
    {
      "category": "IT",
      "zh": "点击",
      "pinyin": "diǎnjī",
      "ja": "クリックする",
      "en": ""
    },
    {
      "category": "IT",
      "zh": "输入",
      "pinyin": "shūrù",
      "ja": "入力する",
      "en": ""
    },
    {
      "category": "IT",
      "zh": "输出",
      "pinyin": "shūchū",
      "ja": "出力する",
      "en": ""
    },
    {
      "category": "IT",
      "zh": "编辑",
      "pinyin": "biānjí",
      "ja": "編集する",
      "en": ""
    },
    {
      "category": "IT",
      "zh": "保存",
      "pinyin": "bǎocún",
      "ja": "保存する",
      "en": ""
    }
  ]
};

const genresInfo = [
  {
    "id": "nouns",
    "label": "名詞",
    "enLabel": "Nouns",
    "icon": "🏷️",
    "color": "#FF6B6B"
  },
  {
    "id": "adjectives",
    "label": "形容詞",
    "enLabel": "Adjectives",
    "icon": "✨",
    "color": "#4ECDC4"
  },
  {
    "id": "adverbs",
    "label": "副詞",
    "enLabel": "Adverbs",
    "icon": "⏱️",
    "color": "#FFD166"
  },
  {
    "id": "verbs",
    "label": "動詞",
    "enLabel": "Verbs",
    "icon": "🏃",
    "color": "#073B4C"
  }
];