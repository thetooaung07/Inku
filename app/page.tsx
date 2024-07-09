import { RecentArticles } from "./components/RecentArticles";
import TypingAnimation from "./components/TypingAnimation";
import "./globals.css";

import "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow.css";

const typedData = [
  // "I craft digital experiences.",
  'check out the&nbsp;<a href="/uses" class="underline text-purple-700">tools I use</a>',
  'develope into my&nbsp;<a href="/" class="underline text-purple-700" rel="noopener noreferrer">GitHub</a>',
  'follow me on&nbsp;<a href="/" class="underline text-purple-700" rel="noopener noreferrer">Twitter</a>',
];

export default async function Home() {
  return (
    <main className="App">
      <TypingAnimation data={typedData} />
      <RecentArticles></RecentArticles>
    </main>
  );
}
