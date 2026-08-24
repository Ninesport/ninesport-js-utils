# Gemini 開發規範

## Lint 檢查

每次完成代碼修改後，**必須**執行 lint 檢查並修復所有問題，確保代碼符合專案的 ESLint 規範。

```bash
npx eslint <修改過的檔案路徑>
```

- 若有 lint 錯誤，必須在提交前修復
- 測試檔案中僅用於 `typeof` 的變數，需加上 `// eslint-disable-next-line @typescript-eslint/no-unused-vars` 註解

## 新增模組與 exports 檢查

當在專案中新增模組檔案（例如 `src/<module>.ts`）或公開新的函式/型別供外部專案引用時，**必須**檢查並更新 `package.json` 的 `exports` 欄位：

- 確認 `package.json` 的 `exports` 包含新模組的 `import` 與 `types` 路徑（對應 `dist/<module>.js` 與 `dist/<module>.d.ts`）。
- 同步更新 `README.md` 中的 API 文件與匯入範例。
- 執行 `npm run build` 確認 TypeScript 能順利編譯產出對應的 `dist` 檔案。

