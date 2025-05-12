import useCourseFilter from '../store/useCourseFilter'
import { useNavigate } from 'react-router-dom'

const courses = ['Taller', 'Práctica Supervisada', 'Tecnología']

function Sidebar() {
  const setCourseFilter = useCourseFilter((state) => state.setCourseFilter)
  const navigate = useNavigate()

  const handleFilter = (filter) => {
    setCourseFilter(filter)
    navigate('/')
  };

  return (
    <aside className="p-4 bg-gray-100 rounded shadow sticky top-4 h-fit">
      <h2 className="text-lg font-semibold mb-2">Filtrar por área</h2>
      <ul className="space-y-2">
        {courses.map((course) => (
          <li key={course}>
            <button
              onClick={() => handleFilter(course)}
              className="text-blue-600 hover:underline"
            >
              {course}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => handleFilter(null)}
            className="text-blue-600 hover:underline"
          >
            Ver todas
          </button>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
