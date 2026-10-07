# Stephen Wen 個人網站

依據上一層的 `spec.md` 製作，採用 Astro、TypeScript 與自託管字體，輸出靜態網站。

## 開發與建置

```sh
npm install
npm run dev
npm run build
npm run check:build
npm run preview
```

首頁 `/`、資料工程 `/work/`、志工教育 `/volunteer/`、成長內容 `/growth/`，另有 404 頁、robots.txt 與 sitemap。

## 修改內容

- `src/data/content.ts`：聯絡信箱、外部平台、職涯經歷、工程成果、精選 Threads 貼文與更新日期。
- `src/pages/`：四個頁面的文字與結構。
- `src/styles/`：全站與詳情頁樣式。
- `src/assets/`：使用者提供的個人照與志工照，由 Astro 自動產生 WebP 與響應式圖片。
- `astro.config.mjs`：部署網址。改用其他網域時，可設定 `SITE_URL` 後重新建置。

Coffee Chat 使用 Clipboard API，失敗時嘗試相容複製，再提供可手動選取的 Email。網站不含追蹤碼或資料收集表單。所有外部連結均另開分頁並標註。

## 驗證

- 以實際瀏覽器檢查四個主要頁面在 320、390、768、1024、1440px 的版面、圖片與標題。
- Coffee Chat 已實際複製後貼上，確認內容為 `chanwei394@gmail.com`。
- 行動導覽已檢查開啟、頁面切換、Escape 關閉與焦點返回。
- 開發時在網址加上 `?audit=1`，可執行 axe-core 的 WCAG A／AA 檢查；此工具不在正式頁面載入。
- 尚未做 iOS 真機與各瀏覽器版本矩陣測試，亦未宣稱已達實測 Core Web Vitals 指標。

## 內容選擇與待補素材

- 使用繁體中文，首頁摘要與三個詳情頁分開。
- 目前兩張演講照片未在來源資料夾中，因此 Meetup 區採完整文字版，不放假圖或空白佔位。取得照片後可加入 `src/assets/` 與工作頁。
- Threads 精選使用對話中已查證的公開原文，標題與摘要為網站編輯版；可在內容檔更換。
- 社群追蹤數未顯示，以免過期。現在的可信訊號為可追溯文章與真實工作／志工經驗。
- 分享預覽使用既有個人照，不生成新的人像。可日後換成專屬社群分享圖。
- 發布流程以 Sites 私人預覽為預設；公開分享與自訂網域需另行設定。

原始 PDF 與照片仍保存在上一層，不包含於網站公開目錄。
