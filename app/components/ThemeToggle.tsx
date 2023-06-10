"use client";

import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(
      typeof window !== "undefined" && window.localStorage
        ? localStorage.getItem("theme") === "dark"
        : true
    );
  }, []);

  return (
    <div className="flex items-center space-x-2">
      <Switch
        checked={isDark}
        id="theme-switch"
        onClick={() => {
          setIsDark(!isDark);
          setTheme(theme === "light" ? "dark" : "light");
        }}
      />
    </div>
  );
}
export default React.memo(ThemeToggle);
