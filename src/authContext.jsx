import { createContext,  useState } from "react";
import { accountsAPI } from "./api/axios";
import { apiLinks } from "./constants/Links";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const token = userData?.token

  const [user, setUser] = useState(null);

  const signInUser = async (values) => {
    const response = await accountsAPI?.post(apiLinks?.LOGIN, values);
    setUser(response?.data);
    localStorage.setItem("user", JSON.stringify(response?.data));
  };

  return (
    <AuthContext.Provider value={{ user, setUser, signInUser, userData, token }}>
      {children}
    </AuthContext.Provider>
  );
};
