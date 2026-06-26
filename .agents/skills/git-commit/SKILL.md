---
name: git-commit
description: 根據目前的暫存變更（git diff --cached）自動生成符合專案風格的 git commit 訊息。
---

# 說明

這個 SKILL 用於協助開發者在完成階段性開發後，自動分析目前已經透過 `git add` 暫存的變更內容，並生成符合此專案風格規範的 Git Commit 訊息。

# Commit 訊息規範

撰寫 commit 訊息時請務必遵循以下原則：

1. **語言限制**
   - 訊息必須使用 **繁體中文（台灣）** 撰寫。
   - 若僅為版本號更新，直接使用版本號（例如 `v1.4.12`）。

2. **結構與風格**
   - 格式一般為：`<type>: <簡短描述>`。
   - 如果變更非常單純或專指某個主要功能，可省略 `<type>:` 前綴，直接使用簡短的中文描述（本專案常見風格，例如：`優化 reduceEventSubscriptions`）。
   - 訊息必須簡潔明瞭，儘量控制在單行內。
   - 重點在於「做了什麼變更」，而非「如何實現」。

3. **Type 類型定義**
   - `feat`: 新增功能。
   - `fix`: 修復 Bug。
   - `test`: 新增或修改測試案例。
   - `refactor`: 重構程式碼（不影響原有功能）。
   - `docs`: 修改或新增文件（例如 README.md, GEMINI.md）。
   - `chore`: 其他非功能性修改（例如套件管理配置、建置流程設定等）。

# 參考範本

本專案歷史 commit 風格示範：

```
新增 reduceEventSubscriptionsForSingleEvent
fix: 補充缺少的interface
優化 reduceEventSubscriptions
Bet更新時才填上isPriceHigher
sort market type
v1.4.12
```

# AI Workflow

1. **取得暫存變更概覽**
   - 執行 `git diff --cached --stat` 取得哪些檔案被變更以及變更的行數規模。
2. **分析詳細代碼變更**
   - 執行 `git diff --cached` 詳細閱讀代碼的具體修改內容，特別注意介面（interfaces）、邏輯控制、測試案例以及配置檔的變動。
3. **判定 Commit 類型與內容**
   - 比對上面的「Commit 訊息規範」，決定適合的簡短描述。
   - 若為多重且無關的變更，提示使用者可能需要拆分 commit。
4. **生成指令**
   - 提供一行可直接複製執行的 git 命令：
     ```bash
     git commit -m "<生成的 commit 訊息>"
     ```
