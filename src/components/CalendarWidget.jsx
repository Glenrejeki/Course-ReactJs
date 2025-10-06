import React, { useState } from "react";

// daftar libur nasional manual
const holidays = [
  { date: "2025-01-01", name: "Tahun Baru Masehi" },
  { date: "2025-03-31", name: "Hari Raya Nyepi" },
  { date: "2025-04-18", name: "Jumat Agung" },
  { date: "2025-05-01", name: "Hari Buruh Internasional" },
  { date: "2025-05-29", name: "Kenaikan Yesus Kristus" },
  { date: "2025-06-06", name: "Hari Raya Idul Adha" },
  { date: "2025-08-17", name: "Hari Kemerdekaan RI" },
  { date: "2025-12-25", name: "Hari Natal" },
];

export default function CalendarWidget() {
  const [currentDate] = useState(new Date());
  const month = currentDate.toLocaleString("id-ID", { month: "long" });
  const year = currentDate.getFullYear();

  // buat tanggal 1 s/d akhir bulan
  const daysInMonth = new Date(year, currentDate.getMonth() + 1, 0).getDate();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const isHoliday = (day) => {
    const dateStr = `${year}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return holidays.find((h) => h.date === dateStr);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow mt-6">
      <h2 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-200">
        🗓️ Kalender {month} {year}
      </h2>
      <div className="grid grid-cols-7 text-center text-sm">
        {["M", "S", "S", "R", "K", "J", "S"].map((d, i) => (
          <div key={i} className="font-semibold text-gray-500 dark:text-gray-400">
            {d}
          </div>
        ))}
        {daysArray.map((day) => {
          const holiday = isHoliday(day);
          return (
            <div
              key={day}
              className={`py-1 rounded-lg ${
                holiday
                  ? "bg-red-100 dark:bg-red-700 text-red-600 dark:text-red-200 font-semibold"
                  : "hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              title={holiday ? holiday.name : ""}
            >
              {day}
            </div>
          );
        })}
      </div>
      <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
        <p><strong>Legenda:</strong> <span className="text-red-500">Merah</span> = Libur Nasional</p>
      </div>
    </div>
  );
}
