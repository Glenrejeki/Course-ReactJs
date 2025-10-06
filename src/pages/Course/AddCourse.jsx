import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { coursesData } from "../../data/coursesData";

export default function AddCourse() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    cover: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedCourses = JSON.parse(localStorage.getItem("courses")) || coursesData;
    const newCourse = {
      id: savedCourses.length + 1,
      ...form,
      students: 0,
      rating: 0,
    };

    const updated = [...savedCourses, newCourse];
    localStorage.setItem("courses", JSON.stringify(updated));
    navigate("/courses");
  };

  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <h1 className="text-3xl font-bold mb-6">Add New Course</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-xl max-w-lg transition-colors duration-300"
      >
        {/* Title */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 
              bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 
              focus:ring-2 focus:ring-green-500 outline-none transition"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 
              bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 
              focus:ring-2 focus:ring-green-500 outline-none transition"
            rows={4}
            required
          ></textarea>
        </div>

        {/* Cover URL */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Cover Image URL</label>
          <input
            type="text"
            name="cover"
            value={form.cover}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 
              bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 
              focus:ring-2 focus:ring-green-500 outline-none transition"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 
            text-white px-4 py-2 rounded-lg transition-colors duration-200"
        >
          Save Course
        </button>
      </form>
    </div>
  );
}
