"use client";

import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import React, { useMemo } from "react";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark = localStorage.getItem("theme") === "dark";

  return (
    <div className="flex items-center space-x-2">
      <Switch
        checked={isDark}
        id="theme-switch"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      />
    </div>
  );
}
export default React.memo(ThemeToggle);
