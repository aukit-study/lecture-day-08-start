"use server"
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const MOCK_USER = { email: "admin@cmu.ac.th", password: "1234" }

export async function login(prevState, formData) {
  const email = formData.get('email')
  const password = formData.get('password')

  if (email !== MOCK_USER.email || password !== MOCK_USER.password) {
    return { error: "อีเมลหรือรหัสผ่านไม่ถูกต้อง" }
  }

  // ★ Next.js 15: cookies() เป็น async แล้ว ต้อง await เสมอ
  const cookieStore = await cookies()
  cookieStore.set('session', 'fake-session-token', {
    httpOnly: true,   // JS ฝั่งเบราว์เซอร์อ่าน cookie นี้ไม่ได้เลย — อ่านได้แค่ฝั่ง server
    path: '/',         // ★ ต้องใส่ ไม่งั้น cookie อาจผูกอยู่แค่ path /login แล้วหน้าอื่นอ่านไม่เจอ
  })

  redirect('/dashboard')
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete('session')
  redirect('/login')
}
