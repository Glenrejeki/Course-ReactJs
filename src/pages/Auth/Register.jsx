import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usersData } from "../../data/usersData";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "", confirm: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirm) {
      setError("Passwords do not match!");
      return;
    }

    const existingUser = usersData.find((u) => u.username === form.username);
    if (existingUser) {
      setError("Username already exists!");
      return;
    }

    const savedUsers = JSON.parse(localStorage.getItem("users")) || usersData;
    const updatedUsers = [
      ...savedUsers,
      { id: savedUsers.length + 1, username: form.username, password: form.password, role: "student" },
    ];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setSuccess("Registration successful! Redirecting...");
    setTimeout(() => navigate("/login"), 2000);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900 transition-colors">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 dark:text-gray-100 shadow-lg rounded-2xl p-8 w-full max-w-sm transition-colors"
      >
        <h1 className="text-2xl font-bold text-center mb-6">Register</h1>

        {error && (
          <p className="bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 px-3 py-2 mb-4 rounded-md text-sm text-center">
            {error}
          </p>
        )}
        {success && (
          <p className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 px-3 py-2 mb-4 rounded-md text-sm text-center">
            {success}
          </p>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-200 mb-1">Username</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring focus:ring-blue-200 dark:focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-200 mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring focus:ring-blue-200 dark:focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 dark:text-gray-200 mb-1">Confirm Password</label>
          <input
            type="password"
            name="confirm"
            value={form.confirm}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring focus:ring-blue-200 dark:focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 dark:bg-green-500 text-white py-2 rounded-lg hover:bg-green-700 dark:hover:bg-green-400 transition"
        >
          Register
        </button>

        <p className="text-sm text-center mt-4 text-gray-700 dark:text-gray-300">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 dark:text-blue-400 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}
