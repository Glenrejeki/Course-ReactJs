import React, { useState } from "react";
import { students as initialStudents } from "../../data/students";
import { useNavigate } from "react-router-dom";

export default function StudentList() {
  const [students, setStudents] = useState(initialStudents);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRating, setFilterRating] = useState("all");
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

  // 🔍 Filter pencarian dan rating
  const filteredStudents = students
    .filter((s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((s) => {
      if (filterRating === "high") return s.rating >= 4;
      if (filterRating === "low") return s.rating < 4;
      return true;
    });

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-3">
        <h1 className="text-2xl font-bold">Daftar Mahasiswa</h1>
        <div className="flex flex-wrap gap-3">
          {/* 🔍 Input Pencarian */}
          <input
            type="text"
            placeholder="Cari nama mahasiswa..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded-md px-3 py-2"
          />

          {/* 🎯 Filter Rating */}
          <select
            value={filterRating}
            onChange={(e) => setFilterRating(e.target.value)}
            className="border rounded-md px-3 py-2"
          >
            <option value="all">Semua Rating</option>
            <option value="high">Rating Tinggi (≥ 4)</option>
            <option value="low">Rating Rendah (&lt; 4)</option>
          </select>

          {/* ➕ Tambah Student */}
          <button
            onClick={handleAddStudent}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            + Tambah Student
          </button>
        </div>
      </div>

      {/* Tabel */}
      <table className="min-w-full border border-gray-300 dark:border-gray-600">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th className="border px-3 py-2">#</th>
            <th className="border px-3 py-2">Nama</th>
            <th className="border px-3 py-2">Rating</th>
            <th className="border px-3 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student, i) => (
              <tr
                key={student.id}
                className="text-center hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <td className="border px-3 py-2">{i + 1}</td>
                <td className="border px-3 py-2">{student.name}</td>
                <td className="border px-3 py-2">
                  <input
                    type="number"
                    value={student.rating}
                    onChange={(e) =>
                      handleRatingChange(student.id, e.target.value)
                    }
                    className="w-16 border rounded text-center dark:bg-gray-800"
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
            ))
          ) : (
            <tr>
              <td
                colSpan="4"
                className="text-center py-4 text-gray-500 dark:text-gray-400"
              >
                Tidak ada mahasiswa ditemukan.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
