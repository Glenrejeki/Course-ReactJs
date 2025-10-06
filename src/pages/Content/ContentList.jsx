import React, { useState } from "react";
import { contents as initialContents } from "../../data/contents";
import { useNavigate } from "react-router-dom";

export default function ContentList() {
  const [contents, setContents] = useState(initialContents);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    if (window.confirm("Yakin mau hapus konten ini?")) {
      setContents(contents.filter((c) => c.id !== id));
    }
  };

  const toggleStatus = (id) => {
    setContents(
      contents.map((c) =>
        c.id === id ? { ...c, status: c.status === "Published" ? "Draft" : "Published" } : c
      )
    );
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Daftar Konten</h1>
        <button
          onClick={() => navigate("/content/add")}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          + Tambah Konten
        </button>
      </div>

      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-3 py-2">#</th>
            <th className="border px-3 py-2">Judul</th>
            <th className="border px-3 py-2">Deskripsi</th>
            <th className="border px-3 py-2">Status</th>
            <th className="border px-3 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {contents.map((content, i) => (
            <tr key={content.id} className="text-center">
              <td className="border px-3 py-2">{i + 1}</td>
              <td className="border px-3 py-2">{content.title}</td>
              <td className="border px-3 py-2">{content.description}</td>
              <td className="border px-3 py-2">
                <span
                  className={`px-2 py-1 rounded ${
                    content.status === "Published" ? "bg-green-200" : "bg-yellow-200"
                  }`}
                >
                  {content.status}
                </span>
              </td>
              <td className="border px-3 py-2 space-x-2">
                <button
                  onClick={() => navigate(`/content/${content.id}`)}
                  className="text-blue-600 hover:underline"
                >
                  Detail
                </button>
                <button
                  onClick={() => navigate(`/content/edit/${content.id}`)}
                  className="text-yellow-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => toggleStatus(content.id)}
                  className="text-green-600 hover:underline"
                >
                  Toggle Status
                </button>
                <button
                  onClick={() => handleDelete(content.id)}
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
