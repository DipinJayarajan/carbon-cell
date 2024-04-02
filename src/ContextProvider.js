import { createContext, useContext, useEffect, useState } from "react";

// Create a ThemeContext
const ThemeContext = createContext();

export const ThemeProvider = ({ children, keycloak }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isLogged, setIsLogged] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const loginFun = () => {
    setIsLogged(true);
    localStorage.setItem("IsLogged", "yes");
  };
  const logoutFun = () => {
    setIsLogged(false);
    localStorage.removeItem("userName");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.setItem("IsLogged", "no");

    window.location.href = "/kdesk";
  };
  const SideBarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  useEffect(() => {
    if (localStorage.getItem("IsLogged") == "yes") {
      setIsLogged(true);
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        logoutFun,
        loginFun,
        isLogged,
        keycloak,
        isSidebarOpen,
        SideBarToggle,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
