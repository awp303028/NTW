# 新寶島 · 可玩原型（v1 歷史文件）

目前已更新為 v3 城市生活版，請以 [README-V3.md](README-V3.md) 的功能與限制為準。以下保留第一版紀錄。

本版本為裝置端單機試玩，使用 HTML / CSS / JavaScript。所有插畫為 PNG，未使用 SVG。

## 已實作
- 22 縣市選擇、8 位在地職人、4 種職業與被動技能。
- 三人編隊、四維能力、最高 Lv.30 升級。
- 抽卡：SSR 5%、SR 25%、R 70%，無保底；重複轉 80 金幣。
- 8 小時離線收益上限、行動力自然恢復。
- PVE 遞增難度、PVP 模擬對手、最多 15 回合自動戰鬥。
- 聲望捐獻、城市等級、設施升級、突襲演練。
- 獨立城市戰籌備入口，尚未實作多人城市戰。

## LINE LIFF 接入
`dist/config.js` 提供 `liffId` 設定。已有條件式 SDK 載入、初始化、登入及顯示名稱讀取；未填入 ID，因此未實際連接 LINE。

正式接入需建立 LINE Login channel 與 LIFF app，將可供玩家存取的 HTTPS URL 設為 Endpoint URL，設定 openid / profile scopes，再將 LIFF ID 填入 config.js。目前私人預覽只供擁有者檢查，並非正式 LIFF 公開遊戲入口。

官方文件：https://developers.line.biz/en/docs/liff/developing-liff-apps/

## 正式版仍需完成
伺服器驗證 LINE 身分、玩家資料庫、伺服器端抽卡/戰鬥/資源結算、防作弊、真人競技配對、多人共用城市、每週城市戰與排名獎勵。請勿將本版本 localStorage 資料當作可信任的正式遊戲帳本。

## 素材
`dist/assets/world.png` 為台灣海島背景；`dist/assets/heroes.png` 為四職業 Q 版角色圖集。8 張職人卡目前共用四種職業示意圖。按钮以 CSS 製作，方便互動與手機縮放。

## 驗證
通過 JavaScript 語法檢查，以及 22 縣市、掛機上限、重複領取保護、抽卡扣款、戰鬥回合上限、單次獎勵結算與科技掛機加成測試。LINE 真實登入與多人連線尚未測試。
