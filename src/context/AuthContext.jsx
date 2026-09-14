import { createContext, useContext, useEffect, useState } from "react";
import { getMe } from "../services/auth.service";

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const checkAuth = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        if (mounted) {
          setLoading(false);
        }
        return;
      }

      try {
        const data = await getMe();

        if (mounted) {
          setUser(data.user);
        }
      } catch (error) {
        console.error("Authentication error:", error);
        localStorage.removeItem("token");

        if (mounted) {
          setUser(null);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    checkAuth();

    return () => {
      mounted = false;
    };
  }, []);

  const login = async (token) => {
    localStorage.setItem("token", token);

    try {
      const data = await getMe();
      setUser(data.user);
    } catch (error) {
      console.error("Login error:", error);
      localStorage.removeItem("token");
      setUser(null);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}