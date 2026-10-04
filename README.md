# `lecture-day-08-start` — โปรเจกต์ตั้งต้นเลกเชอร์เช้า วันที่ 8

**Next.js: Server Actions, Auth Middleware & Deploy** — สคริปต์เต็มอยู่ที่ `live-coding/day-08.md`

```bash
npm install
npm run dev        # http://localhost:3000
```
`.env.local` ยังไม่ต้องสร้าง — ทำในบล็อก 2.4 (`cp .env.local.example .env.local`)

## มีอะไรให้แล้ว / พิมพ์อะไรในคาบ

| ไฟล์ | สถานะ | บล็อก |
|---|---|---|
| `lib/taskStore.js` | ✓ ให้แล้ว — `getTasks` / `addTaskToStore` / `removeTaskFromStore` | |
| `app/tasks/page.jsx` | list อย่างเดียว ยังไม่มีฟอร์ม | ⌨️ 1.2 · 1.3 · 1.6 |
| `app/tasks/actions.js` | ว่าง | ⌨️ 1.2 · 1.4 · 1.6 |
| `app/tasks/AddTaskForm.jsx` | **ยังไม่มีไฟล์** | ⌨️ 1.3 · 1.4 |
| `app/dashboard/page.jsx` + `DashboardPanel.jsx` | ✓ เวอร์ชันไม่ปลอดภัย (`"use client"` + `if (!user) return null`) | 👀 2.1 · 💥 2.2 |
| `app/api/dashboard-data/route.js` | ✓ Route Handler ที่ยังไม่เช็ก auth | 💥 2.2 |
| `app/login/page.jsx` + `actions.js` | ✓ ให้แล้ว — login ตั้ง cookie `session` (httpOnly) · logout ลบ cookie | 👀 2.3 ชี้ให้ดู |
| `context/AuthContext.jsx` + `app/layout.jsx` | ✓ layout อ่าน cookie ที่ server แล้วส่ง `user` เข้า context | |
| `middleware.js` | **ยังไม่มีไฟล์** — สร้างที่ราก project | ⌨️ 2.3 |
| `.env.local` | สร้างจาก `.env.local.example` | ⌨️ 2.4 |

บัญชีทดสอบ: `admin@cmu.ac.th` / `1234` · ปุ่ม "ออกจากระบบ" อยู่มุมขวาบน
