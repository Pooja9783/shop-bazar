import { createContext, useState, useEffect } from "react";

export const SignUpContext = createContext();

export const SignUpContextProvider = ({ children }) => {
  const [signUpInfo, setSignUpInfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    if (storedUsers) {
      setSignUpInfo(storedUsers[storedUsers.length - 1]);
    }
  }, []);

  const handleSignUp = (username, email, password) => {
    const newUser = {
      username,
      email,
      password,
    };
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = [...storedUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    console.log(updatedUsers);

    setSignUpInfo(newUser);
  };

  return (
    <SignUpContext.Provider value={{ signUpInfo, setSignUpInfo, handleSignUp }}>
      {children}
    </SignUpContext.Provider>
  );
};
