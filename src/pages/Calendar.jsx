import React, { useState } from "react";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthNames = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];

  const days = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // 📅 tanggal libur nasional statis (contoh)
  const holidays = [
    { date: "2025-01-01", name: "Tahun Baru" },
    { date: "2025-03-29", name: "Nyepi" },
    { date: "2025-05-01", name: "Hari Buruh" },
    { date: "2025-05-29", name: "Kenaikan Isa Almasih" },
    { date: "2025-06-01", name: "Hari Lahir Pancasila" },
    { date: "2025-08-17", name: "Hari Kemerdekaan RI" },
    { date: "2025-12-25", name: "Natal" },
  ];

  const isHoliday = (day) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return holidays.some((h) => h.date === dateStr);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow p-3 text-center text-sm">
      <div className="flex justify-between items-center mb-2">
        <button
          onClick={() => setCurrentDate(new Date(year, month - 1))}
          className="text-blue-500 hover:text-blue-700"
        >
          ◀
        </button>
        <h2 className="font-semibold">{monthNames[month]} {year}</h2>
        <button
          onClick={() => setCurrentDate(new Date(year, month + 1))}
          className="text-blue-500 hover:text-blue-700"
        >
          ▶
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((d) => (
          <div key={d} className="font-bold">{d}</div>
        ))}

        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={`empty-${i}`}></div>
        ))}

        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const isToday = day === new Date().getDate() && month === new Date().getMonth();
          const holiday = isHoliday(day);

          return (
            <div
              key={day}
              className={`p-1 rounded-lg ${
                isToday
                  ? "bg-blue-500 text-white"
                  : holiday
                  ? "bg-red-200 dark:bg-red-700"
                  : "hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              title={holiday ? holidays.find((h) => h.date.endsWith(`-${String(day).padStart(2, "0")}`))?.name : ""}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}
