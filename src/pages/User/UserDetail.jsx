import { useParams, Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";

export default function UserDetail() {
  const { id } = useParams();
  const { getUserById } = useUser();

  const user = getUserById(id);

  if (!user) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold text-red-500">User not found</h2>
        <Link to="/users" className="text-blue-600 hover:underline">
          ← Back to User List
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <Link to="/users" className="text-blue-600 hover:underline">
        ← Back to User List
      </Link>

      <div className="mt-6 bg-white shadow-md rounded-lg p-6 w-full md:w-1/2">
        <div className="flex flex-col items-center text-center">
          <img
            src={user.photo}
            alt={user.name}
            className="w-24 h-24 rounded-full border border-gray-300 mb-4"
          />
          <h3 className="text-xl font-bold text-gray-800">{user.name}</h3>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-500 mt-2 text-sm">
            Joined: {new Date(user.created_at).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
