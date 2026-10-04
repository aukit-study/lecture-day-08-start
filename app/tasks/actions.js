"use server"

import { revalidatePath } from 'next/cache'
import { addTaskToStore, removeTaskFromStore } from '@/lib/taskStore'

// ⌨️ บล็อก 1.2 · 1.4: Server Action สำหรับเพิ่มงาน
// รองรับทั้ง useActionState (prevState, formData) และ standard form action (formData)
export async function addTask(prevStateOrFormData, maybeFormData) {
  const formData = maybeFormData || prevStateOrFormData
  const title = formData?.get ? formData.get('title')?.trim() : ''

  if (!title) {
    return { error: 'กรุณากรอกชื่องาน' }
  }

  addTaskToStore({
    id: Date.now(),
    title,
    done: false,
  })

  revalidatePath('/tasks')
  return { error: null }
}

// ⌨️ บล็อก 1.6: Server Action สำหรับลบงาน
export async function removeTask(formData) {
  const id = typeof formData === 'object' && formData?.get ? Number(formData.get('id')) : Number(formData)
  if (id) {
    removeTaskFromStore(id)
    revalidatePath('/tasks')
  }
}
