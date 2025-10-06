import { useNavigate } from "react-router-dom";
import { getLocalUser } from "../utils/localStorage";

export default function Navbar() {
  const navigate = useNavigate();
  const user = getLocalUser(); // ambil user dari localStorage (kalau sudah login)

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center shadow-md">
      {/* Left - App Title */}
      <h1 className="text-xl font-bold tracking-wide">🎓 Course App</h1>

      {/* Right - User Info */}
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <div className="flex items-center gap-2">
              <img
                src={user.photo || "https://via.placeholder.com/40"}
                alt={user.name}
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <span className="font-medium">{user.name}</span>
            </div>
            <button
              onClick={handleLogout}
              className="bg-white text-blue-600 px-3 py-1 rounded-md font-semibold hover:bg-blue-100 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-white text-blue-600 px-3 py-1 rounded-md font-semibold hover:bg-blue-100 transition"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
