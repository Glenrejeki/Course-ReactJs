import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { coursesData } from "../../data/coursesData";

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const savedCourses = JSON.parse(localStorage.getItem("courses")) || coursesData;
    const found = savedCourses.find((c) => c.id === parseInt(id));
    setCourse(found);
  }, [id]);

  if (!course) return <p className="p-8">Course not found</p>;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <button
        onClick={() => navigate(-1)}
        className="text-blue-600 hover:underline mb-4"
      >
        ← Back
      </button>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <img
          src={course.cover}
          alt={course.title}
          className="rounded-lg w-full h-64 object-cover mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
        <p className="text-gray-700 mb-3">{course.description}</p>
        <p className="text-gray-500 text-sm mb-2">
          Students: {course.students} | Rating: ⭐ {course.rating}
        </p>
      </div>
    </div>
  );
}
