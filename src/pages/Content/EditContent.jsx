import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { contents } from "../../data/contents";
import { ThemeContext } from "../../context/ThemeContext"; // 🔥 import context dark mode

export default function EditContent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext); // 🔥 ambil status darkMode dari context

  const content = contents.find((c) => c.id === parseInt(id));

  const [title, setTitle] = useState(content?.title || "");
  const [description, setDescription] = useState(content?.description || "");
  const [status, setStatus] = useState(content?.status || "Draft");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Konten "${title}" berhasil diperbarui (simulasi, belum ke API).`);
    navigate("/content");
  };

  if (!content) {
    return (
      <div
        className={`p-6 min-h-screen ${
          darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-800"
        }`}
      >
        <p>Konten tidak ditemukan!</p>
        <button
          onClick={() => navigate(-1)}
          className={`mt-3 underline ${
            darkMode ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-800"
          }`}
        >
          Kembali
        </button>
      </div>
    );
  }

  return (
    <div
      className={`p-6 max-w-lg mx-auto min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-800"
      }`}
    >
      <h1 className="text-2xl font-bold mb-4">Edit Konten</h1>
      <form
        onSubmit={handleSubmit}
        className={`space-y-4 ${
          darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"
        } shadow-lg rounded-2xl p-6 transition-all`}
      >
        <div>
          <label className="block mb-1 font-medium">Judul</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full px-3 py-2 rounded border ${
              darkMode
                ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring focus:ring-blue-700"
                : "bg-white border-gray-300 text-gray-900 focus:ring focus:ring-blue-200"
            }`}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Deskripsi</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={`w-full px-3 py-2 rounded border ${
              darkMode
                ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring focus:ring-blue-700"
                : "bg-white border-gray-300 text-gray-900 focus:ring focus:ring-blue-200"
            }`}
            rows="4"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className={`w-full px-3 py-2 rounded border ${
              darkMode
                ? "bg-gray-700 border-gray-600 text-white focus:ring focus:ring-blue-700"
                : "bg-white border-gray-300 text-gray-900 focus:ring focus:ring-blue-200"
            }`}
          >
            <option value="Draft">Draft</option>
            <option value="Published">Published</option>
          </select>
        </div>

        <button
          type="submit"
          className={`px-4 py-2 rounded-md font-semibold transition ${
            darkMode
              ? "bg-yellow-500 hover:bg-yellow-600 text-gray-900"
              : "bg-yellow-600 hover:bg-yellow-700 text-white"
          }`}
        >
          Simpan Perubahan
        </button>
      </form>
    </div>
  );
}
