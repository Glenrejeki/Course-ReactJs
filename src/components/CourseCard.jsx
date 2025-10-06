export default function CourseCard({ course, onEdit, onDelete }) {
  return (
    <div className="bg-white shadow rounded-xl p-4 border hover:shadow-lg transition">
      <img
        src={course.cover}
        alt={course.title}
        className="w-full h-40 object-cover rounded-lg mb-3"
      />
      <h3 className="text-lg font-semibold">{course.title}</h3>
      <p className="text-gray-600 text-sm mb-2">{course.description}</p>
      <div className="flex justify-between text-sm text-gray-500">
        <span>👥 {course.students} Students</span>
        <span>⭐ {course.rating}</span>
      </div>
      <div className="mt-3 flex gap-2">
        <button
          onClick={() => onEdit(course.id)}
          className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(course.id)}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
