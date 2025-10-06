// src/utils/localStorage.js

// ===== AUTH =====
export const getLocalUser = () => JSON.parse(localStorage.getItem("user"));
export const setLocalUser = (user) => localStorage.setItem("user", JSON.stringify(user));
export const removeLocalUser = () => localStorage.removeItem("user");

// ===== COURSE =====
export const getCourses = () => JSON.parse(localStorage.getItem("courses")) || [];
export const saveCourses = (data) => localStorage.setItem("courses", JSON.stringify(data));

// ===== CONTENT =====
export const getContents = () => JSON.parse(localStorage.getItem("contents")) || [];
export const saveContents = (data) => localStorage.setItem("contents", JSON.stringify(data));

// ===== STUDENT =====
export const getStudents = () => JSON.parse(localStorage.getItem("students")) || [];
export const saveStudents = (data) => localStorage.setItem("students", JSON.stringify(data));

// ===== RESET ALL DATA (jika mau debugging) =====
export const clearAllData = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("courses");
  localStorage.removeItem("contents");
  localStorage.removeItem("students");
};
