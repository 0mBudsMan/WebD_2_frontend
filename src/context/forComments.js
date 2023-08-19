import { createContext, useEffect, useState } from "react";

export const CommentsContext = createContext();

export const CommentsContextProvider = ({ children }) => {
  const [commentOpen, setCommentOpen] = useState(
    JSON.parse(localStorage.getItem("commentOpen")) || false
  );

  const refresh = () => {
    setCommentOpen(!commentOpen);
    setCommentOpen(commentOpen)
  };

  const toggle = ()=>{
    setCommentOpen(!commentOpen)
  }

  useEffect(() => {
    localStorage.setItem("commentOpen", commentOpen);
  }, [commentOpen]);

  return (
    <CommentsContext.Provider value={{ commentOpen, toggle, refresh }}>
      {children}
    </CommentsContext.Provider>
  );
};
