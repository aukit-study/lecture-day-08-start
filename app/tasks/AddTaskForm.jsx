"use client"

import { useActionState, useRef, useEffect } from 'react'
import { addTask } from './actions'

// ⌨️ บล็อก 1.3 · 1.4: Form สำหรับเพิ่มงาน เชื่อมกับ Server Action ด้วย useActionState
export default function AddTaskForm() {
  const [state, formAction, isPending] = useActionState(addTask, { error: null })
  const formRef = useRef(null)

  useEffect(() => {
    if (state && !state.error) {
      formRef.current?.reset()
    }
  }, [state])

  return (
    <form ref={formRef} action={formAction} className="mb-6">
      <div className="flex gap-2">
        <input
          name="title"
          placeholder="เพิ่มงานใหม่..."
          disabled={isPending}
          className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors disabled:opacity-50 cursor-pointer"
        >
          {isPending ? 'กำลังเพิ่ม...' : 'เพิ่มงาน'}
        </button>
      </div>
      {state?.error && (
        <p className="text-red-600 text-sm mt-2">{state.error}</p>
      )}
    </form>
  )
}
