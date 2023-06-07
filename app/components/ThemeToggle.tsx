"use client";

import { Switch } from "@/components/ui/switch";
import React, { useState } from "react";
import { useThemeContext } from "../hooks/useThemeContext";

type ThemeToggleProps = {
  toggleTheme: () => void;
};

function ThemeToggle() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="theme-switch"
        onClick={() => {
          console.log("Toggle Switch");
        }}
      />
    </div>
  );
}
export default React.memo(ThemeToggle);
