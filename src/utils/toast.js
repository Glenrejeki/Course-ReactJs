// src/utils/toast.js
// Wrapper sederhana untuk notifikasi (tanpa library eksternal)

export const toast = {
  success: (message) => showToast("✅ " + message, "success"),
  error: (message) => showToast("❌ " + message, "error"),
  info: (message) => showToast("ℹ️ " + message, "info"),
};

const showToast = (message, type) => {
  const div = document.createElement("div");
  div.textContent = message;

  const baseStyle = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 10px 16px;
    border-radius: 8px;
    font-size: 14px;
    color: white;
    z-index: 9999;
    opacity: 0;
    transition: all 0.3s ease;
  `;

  const color =
    type === "success"
      ? "background-color: #16a34a;"
      : type === "error"
      ? "background-color: #dc2626;"
      : "background-color: #2563eb;";

  div.style.cssText = baseStyle + color;
  document.body.appendChild(div);

  // Animasi muncul
  setTimeout(() => (div.style.opacity = "1"), 10);
  // Hilang otomatis
  setTimeout(() => {
    div.style.opacity = "0";
    setTimeout(() => div.remove(), 300);
  }, 2500);
};
