"use client";

import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import React from "react";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex items-center space-x-2">
      <Switch
        checked={theme === "dark"}
        id="theme-switch"
        onClick={() => {
          console.log(theme);
          setTheme(theme === "light" ? "dark" : "light");
        }}
      />
    </div>
  );
}
export default React.memo(ThemeToggle);
