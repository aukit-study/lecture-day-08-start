"use client"
import { useActionState } from 'react'
import { login } from './actions'

export default function LoginPage() {
  const [state, formAction] = useActionState(login, { error: null })

  return (
    <form action={formAction} className="max-w-sm mx-auto p-6 bg-white">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">เข้าสู่ระบบ</h1>
      {state.error && <p className="bg-red-50 text-red-700 p-3 rounded mb-4 text-sm">{state.error}</p>}
      <input name="email" placeholder="อีเมล" className="w-full border border-gray-300 rounded px-3 py-2 mb-3 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <input name="password" type="password" placeholder="รหัสผ่าน" className="w-full border border-gray-300 rounded px-3 py-2 mb-4 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-medium cursor-pointer transition-colors">เข้าสู่ระบบ</button>
      <p className="text-xs text-gray-500 mt-4">ทดสอบ: admin@cmu.ac.th / 1234</p>
    </form>
  )
}
