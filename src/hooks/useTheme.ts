import { useState, useEffect } from "react";

type Theme = "light" | "dark" | "system";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    try {
      // Get initial theme from localStorage or default to 'dark'
      const savedTheme = (localStorage.getItem("theme") as Theme) || "dark";
      setTheme(savedTheme);

      // Apply theme to document
      applyTheme(savedTheme);
    } catch (error) {
      console.error("Error initializing theme:", error);
      // Fallback to dark theme
      setTheme("dark");
      applyTheme("dark");
    }
  }, []);

  useEffect(() => {
    // Update resolved theme when theme changes
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      setResolvedTheme(systemTheme);
    } else {
      setResolvedTheme(theme);
    }

    applyTheme(theme);
  }, [theme]);

  const applyTheme = (newTheme: Theme) => {
    try {
      const root = document.documentElement;

      if (newTheme === "system") {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
          .matches
          ? "dark"
          : "light";
        root.classList.toggle("dark", systemTheme === "dark");
      } else {
        root.classList.toggle("dark", newTheme === "dark");
      }

      localStorage.setItem("theme", newTheme);
    } catch (error) {
      console.error("Error applying theme:", error);
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return {
    theme: resolvedTheme,
    setTheme,
    toggleTheme,
  };
}
