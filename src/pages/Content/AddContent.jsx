import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddContent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Konten "${title}" berhasil ditambahkan (simulasi, belum ke API).`);
    navigate("/content");
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Tambah Konten Baru</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Judul</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded w-full px-3 py-2"
            placeholder="Masukkan judul konten"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Deskripsi</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded w-full px-3 py-2"
            rows="4"
            placeholder="Deskripsi singkat"
            required
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md">
          Simpan
        </button>
      </form>
    </div>
  );
}
