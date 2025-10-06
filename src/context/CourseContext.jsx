import React, { createContext, useState, useEffect } from "react";
import { getCourses, saveCourses } from "../utils/localStorage";
import { generateId } from "../utils/dummyHelpers";

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState(getCourses() || []);

  useEffect(() => {
    saveCourses(courses);
  }, [courses]);

  const addCourse = (course) => {
    const newCourse = { id: generateId(), ...course };
    setCourses([...courses, newCourse]);
  };

  const updateCourse = (id, updatedData) => {
    const updated = courses.map((c) => (c.id === id ? { ...c, ...updatedData } : c));
    setCourses(updated);
  };

  const deleteCourse = (id) => {
    setCourses(courses.filter((c) => c.id !== id));
  };

  const getCourseById = (id) => courses.find((c) => c.id === id);

  return (
    <CourseContext.Provider value={{ courses, addCourse, updateCourse, deleteCourse, getCourseById }}>
      {children}
    </CourseContext.Provider>
  );
};
