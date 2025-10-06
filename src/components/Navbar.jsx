import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold tracking-wide">🎓 Course App</h1>
      <div className="flex gap-4">
        <Link to="/dashboard" className="hover:underline">
          Dashboard
        </Link>
        <Link to="/courses" className="hover:underline">
          Courses
        </Link>
        <Link to="/students" className="hover:underline">
          Students
        </Link>
        <Link to="/contents" className="hover:underline">
          Contents
        </Link>
      </div>
    </nav>
  );
}
