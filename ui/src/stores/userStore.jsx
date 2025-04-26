import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children, username }) => {
  const [currentUser, setCurrentUser] = useState(username);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
