import { createContext, useState, useEffect } from "react";

export const SignUpContext = createContext();

export const SignUpContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const userFormStorage = localStorage.getItem("users");
    if (userFormStorage) {
      setUsers(JSON.parse(userFormStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, []);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <>
      <SignUpContextProvider.Provider value={{users, addUser}}>
        {children}
      </SignUpContextProvider.Provider>
    </>
  );
};
