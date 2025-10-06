import { useUser } from "../../context/UserContext";
import UserCard from "../../components/UserCard";

export default function UserList() {
  const { users } = useUser();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">All Users</h2>

      <div className="grid gap-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
