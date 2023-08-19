import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = (FirstName, LastName, Profile_Link, Education, Location ) => {
    //TO DO
    setCurrentUser({
      id: 1,
      name: FirstName + " " + LastName,
      profilePic: Profile_Link,
      Education: Education,
      Location: Location,
        
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
