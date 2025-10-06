export default function ContentCard({ content, onStatusChange, onEdit, onDelete }) {
  return (
    <div className="p-4 bg-white border rounded-lg shadow-sm hover:shadow-md">
      <h3 className="font-semibold text-lg">{content.title}</h3>
      <p
        className={`text-sm mt-1 ${
          content.status === "published" ? "text-green-600" : "text-yellow-600"
        }`}
      >
        Status: {content.status}
      </p>

      <div className="flex gap-2 mt-3">
        <button
          onClick={() => onStatusChange(content.id)}
          className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
        >
          Change Status
        </button>
        <button
          onClick={() => onEdit(content.id)}
          className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(content.id)}
          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
