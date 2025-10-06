import { Link } from "react-router-dom";

export default function UserCard({ user }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center gap-4 hover:shadow-lg transition">
      <img
        src={user.photo}
        alt={user.name}
        className="w-16 h-16 rounded-full object-cover border border-gray-300"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
        <p className="text-sm text-gray-600">{user.email}</p>
        <Link
          to={`/users/${user.id}`}
          className="inline-block mt-2 text-blue-600 hover:underline"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}
