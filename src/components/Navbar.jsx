import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { getLocalUser } from "../utils/localStorage";

export default function Navbar({ toggleSidebar }) {
  const navigate = useNavigate();
  const user = getLocalUser();
  const { darkMode, toggleTheme } = useContext(ThemeContext); // ✅ pakai context

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 dark:bg-gray-800 text-white px-6 py-3 flex justify-between items-center shadow-md transition-colors duration-300">
      {/* Left: tombol toggle + title */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="bg-blue-500 dark:bg-gray-700 hover:bg-blue-700 dark:hover:bg-gray-600 px-2 py-1 rounded-md text-lg"
          title="Toggle Sidebar"
        >
          ☰
        </button>
        <h1 className="text-xl font-bold tracking-wide">🎓 Course App</h1>
      </div>

      {/* Right: user info + tombol dark mode */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="px-2 py-1 rounded-md bg-blue-500 dark:bg-gray-700 hover:bg-blue-700 dark:hover:bg-gray-600 transition"
          title="Toggle Dark Mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

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
              className="bg-white text-blue-600 dark:bg-gray-700 dark:text-white px-3 py-1 rounded-md font-semibold hover:bg-blue-100 dark:hover:bg-gray-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-white text-blue-600 dark:bg-gray-700 dark:text-white px-3 py-1 rounded-md font-semibold hover:bg-blue-100 dark:hover:bg-gray-600 transition"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
