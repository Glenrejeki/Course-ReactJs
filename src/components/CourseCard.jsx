import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { coursesData } from "../../data/coursesData";
import Sortable from "sortablejs";
import CourseCard from "./CourseCard"; // pastikan path benar

export default function CourseList() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const gridRef = useRef(null);

  // ambil data awal dari localStorage atau data default
  useEffect(() => {
    const savedCourses = JSON.parse(localStorage.getItem("courses")) || coursesData;
    setCourses(savedCourses);
  }, []);

  // aktifkan fitur drag & drop
  useEffect(() => {
    if (gridRef.current) {
      const sortable = new Sortable(gridRef.current, {
        animation: 200,
        ghostClass: "bg-blue-100 dark:bg-gray-700",
        onEnd: (evt) => {
          const newOrder = Array.from(gridRef.current.children).map(
            (el) => parseInt(el.dataset.id)
          );
          const reordered = newOrder.map((id) => courses.find((c) => c.id === id));
          setCourses(reordered);
          localStorage.setItem("courses", JSON.stringify(reordered));
        },
      });
      return () => sortable.destroy();
    }
  }, [courses]);

  const handleEdit = (id) => {
    navigate(`/courses/edit/${id}`);
  };

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

      {/* grid kursus yang bisa di-drag */}
      <div ref={gridRef} className="grid md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} data-id={course.id}>
            <CourseCard
              course={course}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
