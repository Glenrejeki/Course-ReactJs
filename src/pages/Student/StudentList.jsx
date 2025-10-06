import React, { useState } from "react";
import { students as initialStudents } from "../../data/students";
import { useNavigate } from "react-router-dom";

export default function StudentList() {
  const [students, setStudents] = useState(initialStudents);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    if (window.confirm("Yakin mau hapus student ini?")) {
      setStudents(students.filter((s) => s.id !== id));
    }
  };

  const handleRatingChange = (id, newRating) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, rating: parseFloat(newRating) } : s
      )
    );
  };

  const handleAddStudent = () => {
    const name = prompt("Masukkan nama student:");
    if (name) {
      const newStudent = {
        id: students.length + 1,
        name,
        rating: 0,
        enrolledCourses: [],
      };
      setStudents([...students, newStudent]);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Daftar Mahasiswa</h1>
        <button
          onClick={handleAddStudent}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          + Tambah Student
        </button>
      </div>

      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-3 py-2">#</th>
            <th className="border px-3 py-2">Nama</th>
            <th className="border px-3 py-2">Rating</th>
            <th className="border px-3 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, i) => (
            <tr key={student.id} className="text-center">
              <td className="border px-3 py-2">{i + 1}</td>
              <td className="border px-3 py-2">{student.name}</td>
              <td className="border px-3 py-2">
                <input
                  type="number"
                  value={student.rating}
                  onChange={(e) =>
                    handleRatingChange(student.id, e.target.value)
                  }
                  className="w-16 border rounded text-center"
                  step="0.1"
                  min="0"
                  max="5"
                />
              </td>
              <td className="border px-3 py-2 space-x-2">
                <button
                  onClick={() => navigate(`/student/${student.id}`)}
                  className="text-blue-600 hover:underline"
                >
                  Detail
                </button>
                <button
                  onClick={() => handleDelete(student.id)}
                  className="text-red-600 hover:underline"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
