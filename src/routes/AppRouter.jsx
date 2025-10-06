import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Context
import { AuthProvider } from "../context/AuthContext";
import { CourseProvider } from "../context/CourseContext";
import { ContentProvider } from "../context/ContentContext";
import { StudentProvider } from "../context/StudentContext";

// Pages - Auth
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

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

// Pages - Dashboard
import Dashboard from "../pages/Dashboard";

// Utils
import { getLocalUser } from "../utils/localStorage";

// Private route protection
const PrivateRoute = ({ children }) => {
  const user = getLocalUser();
  return user ? children : <Navigate to="/login" />;
};

const AppRouter = () => {
  return (
    <AuthProvider>
      <CourseProvider>
        <ContentProvider>
          <StudentProvider>
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

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </StudentProvider>
        </ContentProvider>
      </CourseProvider>
    </AuthProvider>
  );
};

export default AppRouter;
