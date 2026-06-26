# Gemini 開發規範

## Lint 檢查

每次完成代碼修改後，**必須**執行 lint 檢查並修復所有問題，確保代碼符合專案的 ESLint 規範。

```bash
npx eslint <修改過的檔案路徑>
```

- 若有 lint 錯誤，必須在提交前修復
- 測試檔案中僅用於 `typeof` 的變數，需加上 `// eslint-disable-next-line @typescript-eslint/no-unused-vars` 註解
