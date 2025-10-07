import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const links = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/courses", label: "Courses" },
    { path: "/students", label: "Students" },
    { path: "/contents", label: "Contents" },
    { path: "/calendar", label: "Kalender" },
  ];

  return (
    <aside
      className="
        bg-gray-100 dark:bg-gray-900
        text-gray-800 dark:text-gray-100
        w-56 md:w-64 lg:w-72
        min-h-screen
        shadow-inner
        p-4
        flex flex-col
        justify-between
      "
    >
      <div>
        <ul className="space-y-3 mb-6">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`block px-3 py-2 rounded-lg ${
                  location.pathname === link.path
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
