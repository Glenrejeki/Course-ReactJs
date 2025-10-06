import React, { useState } from "react";
import { contents as initialContents } from "../../data/contents";
import { useNavigate } from "react-router-dom";

export default function ContentList() {
  const [contents, setContents] = useState(initialContents);
  const [searchTerm, setSearchTerm] = useState(""); // 🔍 state pencarian
  const [filterStatus, setFilterStatus] = useState("all"); // 🧮 state filter
  const navigate = useNavigate();

  // 🗑️ Hapus konten
  const handleDelete = (id) => {
    if (window.confirm("Yakin mau hapus konten ini?")) {
      setContents(contents.filter((c) => c.id !== id));
    }
  };

  // 🔁 Toggle status Published <-> Draft
  const toggleStatus = (id) => {
    setContents(
      contents.map((c) =>
        c.id === id
          ? { ...c, status: c.status === "Published" ? "Draft" : "Published" }
          : c
      )
    );
  };

  // 🔍 Filter data berdasarkan pencarian dan status
  const filteredContents = contents
    .filter((c) =>
      c.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((c) => {
      if (filterStatus === "published") return c.status === "Published";
      if (filterStatus === "draft") return c.status === "Draft";
      return true; // jika "all"
    });

  return (
    <div className="p-6 dark:bg-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      {/* Header dan filter */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold">Daftar Konten</h1>

        {/* Tombol tambah */}
        <div className="flex flex-wrap gap-3 items-center">
          <input
            type="text"
            placeholder="Cari judul konten..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          >
            <option value="all">Semua Status</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>

          <button
            onClick={() => navigate("/content/add")}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            + Tambah Konten
          </button>
        </div>
      </div>

      {/* Tabel */}
      <table className="min-w-full border border-gray-300 dark:border-gray-700 rounded-md overflow-hidden">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th className="border px-3 py-2">#</th>
            <th className="border px-3 py-2">Judul</th>
            <th className="border px-3 py-2">Deskripsi</th>
            <th className="border px-3 py-2">Status</th>
            <th className="border px-3 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {filteredContents.length > 0 ? (
            filteredContents.map((content, i) => (
              <tr
                key={content.id}
                className="text-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <td className="border px-3 py-2">{i + 1}</td>
                <td className="border px-3 py-2">{content.title}</td>
                <td className="border px-3 py-2">{content.description}</td>
                <td className="border px-3 py-2">
                  <span
                    className={`px-2 py-1 rounded text-sm font-medium ${
                      content.status === "Published"
                        ? "bg-green-200 dark:bg-green-700 text-green-900 dark:text-green-100"
                        : "bg-yellow-200 dark:bg-yellow-700 text-yellow-900 dark:text-yellow-100"
                    }`}
                  >
                    {content.status}
                  </span>
                </td>
                <td className="border px-3 py-2 space-x-2">
                  <button
                    onClick={() => navigate(`/content/${content.id}`)}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Detail
                  </button>
                  <button
                    onClick={() => navigate(`/content/edit/${content.id}`)}
                    className="text-yellow-600 dark:text-yellow-400 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => toggleStatus(content.id)}
                    className="text-green-600 dark:text-green-400 hover:underline"
                  >
                    Toggle Status
                  </button>
                  <button
                    onClick={() => handleDelete(content.id)}
                    className="text-red-600 dark:text-red-400 hover:underline"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                className="text-center py-4 text-gray-500 dark:text-gray-400"
              >
                Tidak ada konten ditemukan.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
