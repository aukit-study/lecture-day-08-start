import { getTasks } from '@/lib/taskStore'
import AddTaskForm from './AddTaskForm'
import { removeTask } from './actions'

// Server Component — บล็อก 1.2 · 1.3 · 1.6
export default function TasksPage() {
  const tasks = getTasks()

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">รายการงาน (Tasks)</h1>

      {/* บล็อก 1.3 · 1.4: Client Component ฟอร์มเพิ่มงานด้วย useActionState */}
      <AddTaskForm />

      {/* รายการงาน + บล็อก 1.6: Server Action ลบงาน */}
      <ul className="divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden bg-white shadow-xs">
        {tasks.length === 0 ? (
          <li className="p-4 text-center text-gray-500 text-sm">ไม่มีงานที่ต้องทำ</li>
        ) : (
          tasks.map(t => (
            <li key={t.id} className="p-3 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <span className={`text-sm ${t.done ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                {t.title}
              </span>
              <form action={removeTask}>
                <input type="hidden" name="id" value={t.id} />
                <button
                  type="submit"
                  className="text-red-500 hover:text-red-700 text-xs px-2 py-1 rounded hover:bg-red-50 transition-colors cursor-pointer"
                >
                  ลบ
                </button>
              </form>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}
