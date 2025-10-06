import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { contents } from "../../data/contents";

export default function ContentDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const content = contents.find((c) => c.id === parseInt(id));

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
    <div className="p-6 space-y-3">
      <h1 className="text-3xl font-bold">{content.title}</h1>
      <p className="text-gray-700">{content.description}</p>
      <p className="italic">Status: {content.status}</p>

      <div className="space-x-3 mt-5">
        <button
          onClick={() => navigate(`/content/edit/${content.id}`)}
          className="bg-yellow-500 text-white px-4 py-2 rounded-md"
        >
          Edit
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
