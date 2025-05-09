//import { usePostStore } from '../store/usePostStore.jsx';

const courses = ['Taller', 'Practica Supervisada', 'Tecnología'];

export default function Sidebar() {
 // const setCourseFilter = usePostStore(state => state.setCourseFilter);

  return (
    <aside className="w-64 bg-gray-200 p-4 min-h-screen">
      <h2 className="text-xl font-bold mb-4">Cursos</h2>
      <ul>
        {courses.map(course => (
          <li key={course}>
            <button
              onClick={() => setCourseFilter(course)}
              className="w-full text-left p-2 hover:bg-gray-300"
            >
              {course}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}