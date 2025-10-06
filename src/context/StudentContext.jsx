import React, { createContext, useState, useEffect } from "react";
import { getStudents, saveStudents } from "../utils/localStorage";
import { generateId } from "../utils/dummyHelpers";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState(getStudents() || []);

  useEffect(() => {
    saveStudents(students);
  }, [students]);

  const addStudent = (student) => {
    const newStudent = { id: generateId(), ...student };
    setStudents([...students, newStudent]);
  };

  const updateStudent = (id, updatedData) => {
    const updated = students.map((s) => (s.id === id ? { ...s, ...updatedData } : s));
    setStudents(updated);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const getStudentById = (id) => students.find((s) => s.id === id);

  return (
    <StudentContext.Provider value={{ students, addStudent, updateStudent, deleteStudent, getStudentById }}>
      {children}
    </StudentContext.Provider>
  );
};
