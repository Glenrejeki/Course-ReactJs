// src/routes/AppRouter.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Context
import { UserProvider } from "../context/UserContext";

// Pages - Auth
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

// Pages - Dashboard
import Dashboard from "../pages/Dashboard";

// Pages - Course
import CourseList from "../pages/Course/CourseList";
import CourseDetail from "../pages/Course/CourseDetail";
import AddCourse from "../pages/Course/AddCourse";
import EditCourse from "../pages/Course/EditCourse";

// Pages - Content
import ContentList from "../pages/Content/ContentList";
import ContentDetail from "../pages/Content/ContentDetail";
import AddContent from "../pages/Content/AddContent";
import EditContent from "../pages/Content/EditContent";

// Pages - Student
import StudentList from "../pages/Student/StudentList";
import StudentDetail from "../pages/Student/StudentDetail";

// Pages - User
import UserList from "../pages/User/UserList";
import UserDetail from "../pages/User/UserDetail";

// Utils
import { getLocalUser } from "../utils/localStorage";

const PrivateRoute = ({ children }) => {
  const user = getLocalUser();
  return user ? children : <Navigate to="/login" />;
};

const AppRouter = () => {
  return (
    <UserProvider>
      <Routes>
        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* Course */}
        <Route
          path="/courses"
          element={
            <PrivateRoute>
              <CourseList />
            </PrivateRoute>
          }
        />
        <Route
          path="/courses/:id"
          element={
            <PrivateRoute>
              <CourseDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/courses/add"
          element={
            <PrivateRoute>
              <AddCourse />
            </PrivateRoute>
          }
        />
        <Route
          path="/courses/edit/:id"
          element={
            <PrivateRoute>
              <EditCourse />
            </PrivateRoute>
          }
        />

        {/* Content */}
        <Route
          path="/contents"
          element={
            <PrivateRoute>
              <ContentList />
            </PrivateRoute>
          }
        />
        <Route
          path="/contents/:id"
          element={
            <PrivateRoute>
              <ContentDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/contents/add"
          element={
            <PrivateRoute>
              <AddContent />
            </PrivateRoute>
          }
        />
        <Route
          path="/contents/edit/:id"
          element={
            <PrivateRoute>
              <EditContent />
            </PrivateRoute>
          }
        />

        {/* Student */}
        <Route
          path="/students"
          element={
            <PrivateRoute>
              <StudentList />
            </PrivateRoute>
          }
        />
        <Route
          path="/students/:id"
          element={
            <PrivateRoute>
              <StudentDetail />
            </PrivateRoute>
          }
        />

        {/* User */}
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <UserList />
            </PrivateRoute>
          }
        />
        <Route
          path="/users/:id"
          element={
            <PrivateRoute>
              <UserDetail />
            </PrivateRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </UserProvider>
  );
};

export default AppRouter;
