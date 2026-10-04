import { NextResponse } from 'next/server'

// 🔗 Route Handler แบบวันที่ 7 — ⚠️ ยังไม่เช็ก auth ใด ๆ เลย (ใช้สาธิต 💥 บล็อก 2.2)
// ลองจาก Console ตอน log out: fetch('/api/dashboard-data').then(r => r.json()).then(console.log)
export async function GET() {
  return NextResponse.json({
    revenue: 12400000,
    note: "ยอดขายทั้งปีนี้ (ห้ามพนักงานทั่วไปเห็น)",
  })
}
