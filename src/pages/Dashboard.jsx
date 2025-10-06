import React from "react";
import { useNavigate } from "react-router-dom";
import { coursesData } from "../data/coursesData";
import { studentsData } from "../data/studentsData";
import { contentsData } from "../data/contentsData";

export default function Dashboard() {
  const navigate = useNavigate();

  const totalCourses = coursesData.length;
  const totalStudents = studentsData.length;
  const totalContents = contentsData.length;

  const publishedContents = contentsData.filter(
    (c) => c.status === "published"
  ).length;
  const draftContents = contentsData.filter((c) => c.status === "draft").length;

  return (
    <div className="p-8">
      {/* Judul Dashboard */}
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        📚 Dashboard Course Management
      </h1>

      {/* Statistik Utama */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div className="bg-blue-600 text-white rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform">
          <h2 className="text-lg font-semibold">Total Course</h2>
          <p className="text-4xl font-bold mt-2">{totalCourses}</p>
        </div>

        <div className="bg-green-600 text-white rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform">
          <h2 className="text-lg font-semibold">Total Student</h2>
          <p className="text-4xl font-bold mt-2">{totalStudents}</p>
        </div>

        <div className="bg-purple-600 text-white rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform">
          <h2 className="text-lg font-semibold">Total Content</h2>
          <p className="text-4xl font-bold mt-2">{totalContents}</p>
        </div>
      </div>

      {/* Statistik Tambahan */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        <div className="bg-yellow-500 text-white rounded-2xl p-6 shadow-md">
          <h3 className="text-lg font-semibold mb-2">Content Status</h3>
          <p>
            <strong>Published:</strong> {publishedContents}
          </p>
          <p>
            <strong>Draft:</strong> {draftContents}
          </p>
        </div>

        <div className="bg-pink-500 text-white rounded-2xl p-6 shadow-md">
          <h3 className="text-lg font-semibold mb-2">Average Course Rating</h3>
          <p className="text-3xl font-bold">
            {(
              coursesData.reduce((acc, c) => acc + c.rating, 0) /
              coursesData.length
            ).toFixed(1)}{" "}
            ⭐
          </p>
        </div>
      </div>

      {/* Navigasi Cepat */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
        <button
          onClick={() => navigate("/course")}
          className="bg-blue-500 text-white p-5 rounded-xl shadow hover:bg-blue-600 hover:scale-105 transition-transform"
        >
          📘 Kelola Course
        </button>

        <button
          onClick={() => navigate("/student")}
          className="bg-green-500 text-white p-5 rounded-xl shadow hover:bg-green-600 hover:scale-105 transition-transform"
        >
          👨‍🎓 Kelola Student
        </button>

        <button
          onClick={() => navigate("/content")}
          className="bg-purple-500 text-white p-5 rounded-xl shadow hover:bg-purple-600 hover:scale-105 transition-transform"
        >
          📝 Kelola Content
        </button>
      </div>

      {/* Data Preview */}
      <div className="mt-12 bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">📈 Course Terbaru</h2>
        <table className="w-full text-left border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-200 px-4 py-2">Judul</th>
              <th className="border border-gray-200 px-4 py-2">Deskripsi</th>
              <th className="border border-gray-200 px-4 py-2 text-center">Rating</th>
            </tr>
          </thead>
          <tbody>
            {coursesData.slice(0, 3).map((course) => (
              <tr key={course.id} className="hover:bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-medium">
                  {course.title}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {course.description.slice(0, 60)}...
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  ⭐ {course.rating}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-sm text-gray-400 mt-8 text-center">
        © {new Date().getFullYear()} Course Management — Dummy Version (No API)
      </p>
    </div>
  );
}
