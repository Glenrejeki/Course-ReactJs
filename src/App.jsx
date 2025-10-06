import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

// Context Providers
import { AuthProvider } from "./context/AuthContext";
import { CourseProvider } from "./context/CourseContext";
import { ContentProvider } from "./context/ContentContext";
import { StudentProvider } from "./context/StudentContext";
import { ThemeProvider } from "./context/ThemeContext"; // ✅ tambahkan

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const toggleSidebar = () => setIsSidebarVisible((prev) => !prev);

  return (
    <BrowserRouter>
      <AuthProvider>
        <CourseProvider>
          <ContentProvider>
            <StudentProvider>
              <ThemeProvider> {/* ✅ Bungkus semua di sini */}
                <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-all duration-300">
                  {/* Sidebar */}
                  <div
                    className={`transition-all duration-300 ${
                      isSidebarVisible ? "w-60" : "w-0"
                    } overflow-hidden`}
                  >
                    <Sidebar />
                  </div>

                  {/* Main area */}
                  <div className="flex-1 flex flex-col">
                    <Navbar toggleSidebar={toggleSidebar} />
                    <main className="flex-1 p-6 overflow-y-auto">
                      <AppRouter />
                    </main>
                  </div>
                </div>
              </ThemeProvider>
            </StudentProvider>
          </ContentProvider>
        </CourseProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
