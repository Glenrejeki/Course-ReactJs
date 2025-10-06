import { createContext, useContext, useState } from "react";

// Buat Context
const UserContext = createContext();

// Provider
export const UserProvider = ({ children }) => {
  // Dummy data user
  const [users] = useState([
    {
      id: 1,
      name: "Delcom Testing",
      email: "testing@delcom.org",
      photo: "http://127.0.0.1:8000/default/img/user.png",
      created_at: "2024-10-05T02:53:38.000000Z",
    },
    {
      id: 2,
      name: "Abdullah Ubaid",
      email: "ifs18005@delcom.org",
      photo: "http://127.0.0.1:8000/img/profile/2_1728103215.jpeg",
      created_at: "2024-10-05T03:18:14.000000Z",
    },
    {
      id: 3,
      name: "Abdullah Ubaid",
      email: "ifs18004@delcom.org",
      photo: "http://127.0.0.1:8000/default/img/user.png",
      created_at: "2024-10-05T03:26:57.000000Z",
    },
  ]);

  const getUserById = (id) => users.find((u) => u.id === parseInt(id));

  return (
    <UserContext.Provider value={{ users, getUserById }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook
export const useUser = () => useContext(UserContext);
