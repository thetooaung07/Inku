"use client";

import TypingAnimation from "./components/TypingAnimation";
import "./globals.css";
import { useThemeContext } from "./hooks/useThemeContext";

const typedData = [
  // "I craft digital experiences.",
  'check out the <a href="/uses" class="underline text-purple-700">tools I use</a>',
  'develope into my <a href="/" class="underline text-purple-700" rel="noopener noreferrer">GitHub</a>',
  'follow me on <a href="/" class="underline text-purple-700" rel="noopener noreferrer">Twitter</a>',
];

export default async function Home() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <main className="App">
      <span className="flex my-8 font-jetbrains" aria-hidden="true">
        <div className="px-2 mr-2 bg-mainColor text-white rounded-lg">
          {" "}
          {"> ~ %"}{" "}
        </div>
        <TypingAnimation data={typedData} />
      </span>

      <div className="bg-purple-600 dark:bg-red-700 w-20 h-20">Hello</div>
    </main>
  );
}
