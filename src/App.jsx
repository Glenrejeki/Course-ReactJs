import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

// Context Providers
import { AuthProvider } from "./context/AuthContext";
import { CourseProvider } from "./context/CourseContext";
import { ContentProvider } from "./context/ContentContext";
import { StudentProvider } from "./context/StudentContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CourseProvider>
          <ContentProvider>
            <StudentProvider>
              <div className="flex min-h-screen bg-gray-50 text-gray-800">
                {/* Sidebar */}
                <Sidebar />

                {/* Main content area */}
                <div className="flex-1 flex flex-col">
                  <Navbar />
                  <main className="flex-1 p-6 overflow-y-auto">
                    <AppRouter />
                  </main>
                </div>
              </div>
            </StudentProvider>
          </ContentProvider>
        </CourseProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
