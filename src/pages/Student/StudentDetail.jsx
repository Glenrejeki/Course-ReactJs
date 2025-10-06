import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { students } from "../../data/students";
import { courses } from "../../data/courses";

export default function StudentDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const student = students.find((s) => s.id === parseInt(id));

  if (!student) {
    return (
      <div className="p-6">
        <p>Student tidak ditemukan!</p>
        <button
          onClick={() => navigate(-1)}
          className="text-blue-600 underline mt-3"
        >
          Kembali
        </button>
      </div>
    );
  }

  const enrolledCourses = courses.filter((c) =>
    student.enrolledCourses.includes(c.id)
  );

  const handleEnroll = () => {
    alert(
      "Simulasi: fitur menambahkan course ke student ini akan aktif setelah API terhubung."
    );
  };

  const handleRemoveCourse = (courseId) => {
    alert(
      `Simulasi: course dengan ID ${courseId} dihapus dari student ${student.name}.`
    );
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">{student.name}</h1>
      <p className="text-gray-700">Rating: {student.rating.toFixed(1)} ⭐</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Course yang Diikuti</h2>
      {enrolledCourses.length > 0 ? (
        <ul className="list-disc ml-6">
          {enrolledCourses.map((course) => (
            <li key={course.id} className="mb-2 flex justify-between items-center">
              <span>{course.title}</span>
              <button
                onClick={() => handleRemoveCourse(course.id)}
                className="text-red-600 hover:underline text-sm"
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">Belum ada course yang diikuti.</p>
      )}

      <div className="space-x-3 mt-5">
        <button
          onClick={handleEnroll}
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          + Tambah Course
        </button>
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-400 text-white px-4 py-2 rounded-md"
        >
          Kembali
        </button>
      </div>
    </div>
  );
}
