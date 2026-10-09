export const profile = {
  name: 'Stephen Wen',
  email: 'chanwei394@gmail.com',
  updated: '2026-10-09',
  socials: [
    { label: 'Threads', url: 'https://www.threads.com/@iam_wei_stephen' },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/stephen-wen-85a124168/',
    },
    { label: 'Substack', url: 'https://stephendatavisualization.substack.com' },
  ],
};
export const navigation = [
  { href: '/', label: '首頁' },
  { href: '/work/', label: '資料工程' },
  { href: '/volunteer/', label: '志工教育' },
  { href: '/growth/', label: '成長內容' },
];
export const posts = [
  {
    id: 'self-drive',
    takeaway: '如果先不問「我應該做什麼」，你真正想弄懂的是什麼？',
    theme: '自驅力與探索',
    date: '2024-09-12',
    title: '同一個人，是什麼讓學習的動力完全不同？',
    summary:
      '從找不到讀書的理由，到主動攻讀資管碩士、走進資料領域。我回頭看見，改變的起點，是開始探索自己。',
    url: 'https://www.threads.com/@iam_wei_stephen/post/C_0KeZUytrw',
  },
  {
    id: 'career',
    takeaway: '你希望從工作獲得的，和能在生活其他角色裡實現的，分別是什麼？',
    theme: '職涯與生活',
    date: '2026-10-07',
    title: '喜歡的事，一定要全部放進同一份工作嗎？',
    summary:
      '當熱愛、擅長、世界需要與報酬不完全重疊，也許可以透過生活中的不同角色，找到自己的平衡。',
    url: 'https://www.threads.com/@iam_wei_stephen/post/DeLQDlUn3D7',
  },
  {
    id: 'public',
    takeaway: '最近學到的哪一件小事，可能剛好幫得上另一個人？',
    theme: '公開學習',
    date: '2026-10-02',
    title: '個人品牌，是會跟著你複利的資產。',
    summary:
      '選一個有熱情、對世界有幫助的方向，把踩過的坑、學到的事與真實的快樂分享出來。',
    url: 'https://www.threads.com/@iam_wei_stephen/post/Dd-upieETRn',
  },
];

export const engineeringCases = [
  {
    n: '01',
    id: 'delivery',
    problem: '資料部署需要 4 小時，交付流程有改善空間。',
    contribution: '推動企業資料平台採用 dbt，並重建 Databricks 資料管線。',
    discussion:
      '團隊導入 dbt 時，如何界定先改哪些模型、怎麼衡量交付流程是否真的改善？',
    value: '95',
    unit: '%',
    label: '部署時間縮短',
    from: '4 小時 → 10 分鐘',
    title: '讓開發到上線的距離更短。',
    text: '在大聯大推動企業資料平台採用 dbt，並重建 Databricks 管線，改善開發到部署的瓶頸，讓團隊更快交付資料產品。',
    tags: ['dbt', 'Databricks', 'Developer experience'],
    detail:
      '工作重點是將既有資料流程整理成可擴充、自動化的架構，同時讓開發流程跟得上團隊交付需求。部署時間由 4 小時降至 10 分鐘，LinkedIn 公開資料以約 95% 的改善呈現。',
  },
  {
    n: '02',
    id: 'logic',
    problem: '複雜商業邏輯造成資料處理負擔，也增加後續維護難度。',
    contribution: '與跨部門團隊協作，將複雜邏輯重構為可擴充、自動化的方案。',
    discussion: '重構既有邏輯時，如何驗證新舊結果一致，再比較處理效能？',
    value: '98',
    unit: '%',
    label: '處理時間降低',
    from: '複雜邏輯 → 可擴充方案',
    title: '把技術債，轉成下一步的空間。',
    text: '與跨部門團隊一起重構複雜商業邏輯。先理解需求和既有限制，再把資料處理流程改造成能持續演進的方案。',
    tags: ['Business logic', 'Data architecture'],
    detail:
      '這項成果來自商業邏輯與管線的重構。另有關鍵 Spark 管線效能提升 95% 的成果；兩者是不同項目，不合併為同一指標。',
  },
  {
    n: '03',
    id: 'cost',
    problem: 'GA4 資料延遲達 24 小時，BigQuery 支出也需要優化。',
    contribution:
      '優化 GA4 資料管線，並建立應用於 3 個網站的可重用 BigQuery 處理框架。',
    discussion: '在成本與資料新鮮度之間，如何用業務需求決定值得投入的改善？',
    value: '80',
    unit: '%',
    label: 'BigQuery 成本降低',
    from: '資料延遲 24 小時 → 1 小時內',
    title: '更即時的資料，不一定更昂貴。',
    text: '從使用者真正遇到的延遲問題出發，優化 GA4 資料管線，同時降低雲端支出，縮短資料可用前的等待時間。',
    tags: ['BigQuery', 'GA4', 'Cost optimization'],
    detail:
      '除了改善成本與延遲，也建立可重複使用的 GA4 BigQuery 處理框架，應用於 3 個網站，讓改善能被持續複用。',
  },
  {
    n: '04',
    id: 'pipelines',
    problem: '400 個依時間觸發的 SQL 任務，帶來日常管理負擔。',
    contribution: '使用 Dataform，將原有任務整併為 5 條事件驅動管線。',
    discussion: '從時間排程改為事件觸發後，如何思考相依關係、失敗重跑與監控？',
    value: '400',
    unit: '→ 5',
    label: 'SQL 任務整併為事件管線',
    from: '管理時間降低 90%',
    title: '讓系統依事件運作，少一點人工管理。',
    text: '使用 Dataform，將 400 個依時間觸發的 SQL 任務整併成 5 條事件驅動管線，降低日常管理負擔。',
    tags: ['Dataform', 'Event-driven pipelines'],
    detail:
      '這項重構的重點在任務組織與觸發方式。數字代表排程任務整併後的結構變化，以及管理時間的改善。',
  },
];

export const experiences = [
  {
    period: '2026.05 — 至今',
    current: true,
    role: 'Senior Data Engineer',
    organization: 'TSMC · 台灣積體電路製造股份有限公司',
    location: '台北 · 全職 · 現場',
    highlights: [],
  },
  {
    period: '2023.02 — 2026.03',
    current: false,
    role: 'Data Engineer',
    organization: 'WPG Holdings · 大聯大投資控股',
    location: '',
    highlights: [
      '導入 dbt，重建 Databricks 資料管線與交付流程。',
      '重構商業邏輯、改善 Spark 效能與 GA4 資料延遲。',
      '以 BigQuery、Dataform 建立可重用、易管理的資料系統。',
    ],
  },
  {
    period: '2022.02 — 2022.09',
    current: false,
    role: 'Data Analyst Intern',
    organization: 'Junyi Academy · 均一平台教育基金會',
    location: '',
    highlights: [
      '優化 20 條 SQL 資料管線以降低成本。',
      '從零設計資料敘事與視覺化課程，包含 100+ 張圖像與 10,000 字內容。',
    ],
  },
];
