// src/utils/dummyHelpers.js

// Generator ID unik sederhana (mirip UUID versi pendek)
export const generateId = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

// Format tanggal sederhana
export const formatDate = (date) => {
  const d = new Date(date);
  return `${d.getDate().toString().padStart(2, "0")}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${d.getFullYear()}`;
};

// Dummy data awal (bisa dipakai saat testing)
export const dummyCourses = [
  {
    id: generateId(),
    title: "Web Development Basics",
    description: "Belajar dasar HTML, CSS, dan JavaScript.",
    cover: "https://source.unsplash.com/600x400/?coding,web",
    students: [],
    contents: [],
  },
  {
    id: generateId(),
    title: "React Fundamentals",
    description: "Pahami dasar React JS dan cara membuat komponen interaktif.",
    cover: "https://source.unsplash.com/600x400/?reactjs,frontend",
    students: [],
    contents: [],
  },
];

export const dummyStudents = [
  { id: generateId(), name: "John Doe", rating: 4.5 },
  { id: generateId(), name: "Jane Smith", rating: 3.8 },
];

export const dummyContents = [
  {
    id: generateId(),
    title: "Intro to Web",
    status: "published",
    body: "Ini adalah konten pengantar dasar web development.",
  },
  {
    id: generateId(),
    title: "React Components",
    status: "draft",
    body: "Penjelasan tentang komponen dan props pada React.",
  },
];
