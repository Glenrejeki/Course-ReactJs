import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { contents } from "../../data/contents";

export default function EditContent() {
  const { id } = useParams();
  const navigate = useNavigate();
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
      <div className="p-6">
        <p>Konten tidak ditemukan!</p>
        <button onClick={() => navigate(-1)} className="text-blue-600 underline mt-3">
          Kembali
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Konten</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Judul</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded w-full px-3 py-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Deskripsi</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded w-full px-3 py-2"
            rows="4"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border rounded w-full px-3 py-2"
          >
            <option value="Draft">Draft</option>
            <option value="Published">Published</option>
          </select>
        </div>
        <button type="submit" className="bg-yellow-600 text-white px-4 py-2 rounded-md">
          Simpan Perubahan
        </button>
      </form>
    </div>
  );
}
