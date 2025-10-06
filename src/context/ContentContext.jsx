import React, { createContext, useState, useEffect } from "react";
import { getContents, saveContents } from "../utils/localStorage";
import { generateId } from "../utils/dummyHelpers";

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [contents, setContents] = useState(getContents() || []);

  useEffect(() => {
    saveContents(contents);
  }, [contents]);

  const addContent = (content) => {
    const newContent = { id: generateId(), ...content };
    setContents([...contents, newContent]);
  };

  const updateContent = (id, updatedData) => {
    const updated = contents.map((c) => (c.id === id ? { ...c, ...updatedData } : c));
    setContents(updated);
  };

  const deleteContent = (id) => {
    setContents(contents.filter((c) => c.id !== id));
  };

  const getContentById = (id) => contents.find((c) => c.id === id);

  return (
    <ContentContext.Provider value={{ contents, addContent, updateContent, deleteContent, getContentById }}>
      {children}
    </ContentContext.Provider>
  );
};
