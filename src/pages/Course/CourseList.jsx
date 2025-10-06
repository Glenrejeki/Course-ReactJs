import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { coursesData } from "../../data/coursesData";
import Sortable from "sortablejs";

export default function CourseList() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const gridRef = useRef(null);

  useEffect(() => {
    // Ambil data dari localStorage (jika ada)
    const savedCourses = JSON.parse(localStorage.getItem("courses")) || coursesData;
    setCourses(savedCourses);
  }, []);

  useEffect(() => {
    // Aktifkan drag hanya sekali saat komponen siap
    if (gridRef.current) {
      const sortable = new Sortable(gridRef.current, {
        animation: 200,
        ghostClass: "bg-blue-100 dark:bg-gray-700",
        onEnd: (evt) => {
          const newOrder = Array.from(gridRef.current.children).map(
            (el) => parseInt(el.dataset.id)
          );

          // Urutkan ulang berdasarkan ID hasil drag
          const reordered = newOrder.map((id) => courses.find((c) => c.id === id));
          setCourses(reordered);
          localStorage.setItem("courses", JSON.stringify(reordered));
        },
      });
      return () => sortable.destroy();
    }
  }, [gridRef.current, courses]);

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this course?")) {
      const updated = courses.filter((c) => c.id !== id);
      setCourses(updated);
      localStorage.setItem("courses", JSON.stringify(updated));
    }
  };

  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Course List</h1>
        <button
          onClick={() => navigate("/courses/add")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          + Add Course
        </button>
      </div>

      <div ref={gridRef} className="grid md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            data-id={course.id}
            className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-md transition cursor-grab"
          >
            <img
              src={course.cover}
              alt={course.title}
              className="rounded-md h-40 w-full object-cover mb-3"
            />
            <h2 className="text-xl font-semibold mb-1">{course.title}</h2>
            <p className="text-gray-600 text-sm mb-2">{course.description}</p>
            <p className="text-sm text-gray-500 mb-3">
              Students: {course.students} | ⭐ {course.rating}
            </p>
            <div className="flex justify-between">
              <button
                onClick={() => navigate(`/courses/${course.id}`)}
                className="text-blue-600 hover:underline"
              >
                Detail
              </button>
              <button
                onClick={() => navigate(`/courses/edit/${course.id}`)}
                className="text-green-600 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(course.id)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
