import { useEffect, useState } from "react";
type Theme = "light" | "dark";

export const useThemeContext = () => {
  const [theme, setTheme] = useState<Theme>("light");
  const setMode = (mode: Theme) => {
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches &&
      !localTheme
    ) {
      setMode("dark");
    } else if (localTheme) {
      setMode(localTheme);
    }
  }, []);

  return [theme, toggleTheme];
};
