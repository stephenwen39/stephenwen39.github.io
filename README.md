# 展維 Stephen Wen 個人網站

以 Astro、TypeScript、自託管字體與靜態輸出建立。現行內容規格為 `spec.md` v2.0（2026-10-09）；工作區上一層也保留一份規格。

## 開發與建置

```sh
npm install
npm run dev
npm run build
npm run check:build
npm run preview
```

## 頁面與維護

- `/`：資料工程師 × 自我成長教練，含直線分岔履歷與兩個專頁入口。
- `/work/`：dbt 演講、平台遷移、從零建構、優化與實際成果。
- `/growth/`：教練定位、志工與 DreamMore 經驗、自驅力故事、Threads 觀點。
- `/volunteer/`：相容舊連結，導向 `/growth/#experience`。
- `src/components/CareerPath.astro`：水平方向的履歷與兩條平行分岔；手機可左右捲動。
- `src/data/content.ts`：聯絡方式、社群與精選貼文來源。
- `src/styles/focus.css`：雙主線版本的頁面樣式；共享基礎樣式在 `global.css`。
- `src/assets/`：使用者提供的照片，建置時產生響應式 WebP。

聯絡按鈕複製 `chanwei394@gmail.com`，保留 Clipboard API、相容複製與手動選取的備援。網站沒有資料收集表單與追蹤碼。

`npm run check:build` 驗證主頁語意與中繼資料、內部連結與錨點、圖片替代文字、開發檢查工具未進入正式輸出，以及舊志工頁導向。

## 內容依據

工作與學歷來自使用者提供的 LinkedIn PDF；志工、教練定位與演講敘述依使用者確認。Threads 觀點保留原文連結。量化成果註明屬於大聯大任職期間。

原始 LinkedIn PDF 保留在上一層；公開網站使用的四張照片在 `src/assets/`，會隨網站原始碼發布。

## GitHub Pages 公開部署

公開網址：<https://stephenwen39.github.io/>

儲存庫：<https://github.com/stephenwen39/stephenwen39.github.io>

GitHub Pages 的發布來源設為 **GitHub Actions**。推送到 `main` 後，`.github/workflows/deploy.yml` 使用 Node.js 24 安裝鎖定的套件版本，執行建置與檢查，再部署 `dist/`。也可以在 Actions 頁面手動執行。

這是使用者首頁儲存庫，網址位於根目錄，因此不需要設定 Astro `base`。`astro.config.mjs` 的預設 `site` 為公開網址；其他環境可以透過 `SITE_URL` 覆寫。原本的 Sites 私人版本與 `.openai/hosting.json` 保留。

`audience-review.md` 是前一版四受眾分析的歷史紀錄；現行資訊架構以 `spec.md` v2.0 為準。
