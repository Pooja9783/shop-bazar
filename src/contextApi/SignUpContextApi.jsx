import { createContext, useState, useEffect } from "react";

export const SignUpContext = createContext();

export const SignUpContextProvider = ({ children }) => {
  const [signUpInfo, setSignUpInfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSignUp = (username, email, password) => {
    const user = {
      username,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    setSignUpInfo(user);
  };

  return (
    <>
      <SignUpContext.Provider value={{ signUpInfo, setSignUpInfo, handleSignUp }}>
        {children}
      </SignUpContext.Provider>
    </>
  );
};
