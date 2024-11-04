import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import * as SecureStore from "expo-secure-store";

interface AuthContextProps {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);

  const login = async (token: string) => {
    await SecureStore.setItemAsync("token", token);
    setToken(token);
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync("token");
    setToken(null);
  };

  const getTokenFromStorage = async () => {
    const token = await SecureStore.getItemAsync("token");

    setToken(token);
  };

  useEffect(() => {
    getTokenFromStorage();
  }, []);

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
