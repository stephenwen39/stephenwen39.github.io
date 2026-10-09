export const visitorPaths = [
  { label: '招募與職務合作', href: '/work/#profile' },
  { label: '想轉進資料工程', href: '/work/#starting-out' },
  { label: '交流資料工程實作', href: '/work/#impact-title' },
  { label: '從 Threads 來認識我', href: '/growth/#start-reading' },
];

export const skillEvidence = [
  {
    title: '資料轉換與交付',
    tools: 'dbt · Databricks',
    proof: '部署時間由 4 小時縮短至 10 分鐘',
    href: '#case-delivery',
  },
  {
    title: '雲端成本與資料時效',
    tools: 'GCP · BigQuery · GA4',
    proof: '成本降低 80%，資料延遲降至 1 小時內',
    href: '#case-cost',
  },
  {
    title: '管線組織與維運',
    tools: 'SQL · Dataform',
    proof: '400 個 SQL 任務整併為 5 條事件管線',
    href: '#case-pipelines',
  },
];

export const startingSteps = [
  {
    title: '先用 SQL 回答一個問題',
    text: '挑一份公開資料，定義一個想回答的問題。練習關聯、彙總與空值處理，先說清楚每一列資料代表什麼。',
    output: '一份查詢、一段結果說明，以及資料限制。',
    resource: 'BigQuery SQL 官方入門',
    url: 'https://docs.cloud.google.com/bigquery/docs/introduction-sql',
  },
  {
    title: '把查詢整理成可重跑的流程',
    text: '將資料清理與分析邏輯拆開，記錄輸入、輸出與相依關係。練習使用 dbt 管理 SQL 模型，而不只交付一段長查詢。',
    output: '一個別人看得懂、能依說明執行的小型專案。',
    resource: 'dbt SQL 模型官方說明',
    url: 'https://docs.getdbt.com/docs/build/sql-models',
  },
  {
    title: '練習判斷資料是否可信',
    text: '檢查識別碼是否重複、必要欄位是否為空；再記錄執行時間，思考失敗或資料晚到時該怎麼處理。',
    output: '資料測試、執行紀錄，以及你如何發現和處理問題。',
    resource: 'dbt 資料測試官方說明',
    url: 'https://docs.getdbt.com/docs/build/data-tests',
  },
];

export const readingPaths = [
  {
    question: '努力了，卻不知道為什麼？',
    note: '先讀自驅力與探索',
    href: '#post-self-drive',
  },
  {
    question: '工作和喜歡的事，怎麼選？',
    note: '先讀職涯與生活',
    href: '#post-career',
  },
  {
    question: '想開始分享，卻遲遲沒行動？',
    note: '先讀公開學習',
    href: '#post-public',
  },
];

export const conversationPrompts = {
  work: [
    {
      label: '職務交流',
      text: '可附上職務內容、團隊正在處理的資料問題、工作地點與合作方式。',
    },
    {
      label: '轉職探索',
      text: '說說你的背景、目前做到哪一步，以及一個最想釐清的問題；不必先懂所有工具。',
    },
    {
      label: '技術討論',
      text: '帶上不涉及機密的問題背景、限制與試過的做法，讓討論更具體。',
    },
  ],
  growth: [
    {
      label: '聊一篇文章',
      text: '哪一篇內容讓你有共鳴？可以從那個句子或自己的經驗開始。',
    },
    {
      label: '聊正在探索的事',
      text: '不用先整理出漂亮的答案，分享你目前卡住的選擇或想法就好。',
    },
  ],
};
