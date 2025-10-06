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
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Add New Course</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md p-6 rounded-xl max-w-lg"
      >
        <div className="mb-4">
          <label className="block mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
            rows={4}
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block mb-1">Cover Image URL</label>
          <input
            type="text"
            name="cover"
            value={form.cover}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          Save Course
        </button>
      </form>
    </div>
  );
}
