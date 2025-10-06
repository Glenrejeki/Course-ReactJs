export default function StudentCard({ student, onRatingChange, onDelete }) {
  return (
    <div className="p-4 bg-white border rounded-xl shadow hover:shadow-md flex flex-col gap-2">
      <h3 className="font-semibold">{student.name}</h3>
      <p className="text-gray-600 text-sm">{student.email}</p>
      <p className="text-sm">⭐ Rating: {student.rating}</p>

      <div className="flex gap-2 mt-2">
        <button
          onClick={() => onRatingChange(student.id)}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Change Rating
        </button>
        <button
          onClick={() => onDelete(student.id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
