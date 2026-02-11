import { createContext, useContext, useState, ReactNode } from "react";

type UserType = "propietario" | "empresa" | "proveedor";

interface User {
  name: string;
  email: string;
  type: UserType;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  register: (name: string, email: string, password: string, type: UserType) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside AuthProvider");
  return ctx;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, _password: string) => {
    setUser({ name: email.split("@")[0], email, type: "empresa" });
  };

  const register = (name: string, email: string, _password: string, type: UserType) => {
    setUser({ name, email, type });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
