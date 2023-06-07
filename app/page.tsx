import PostPreview from "./blog/posts/components/PostPreview";
import { getPostMetadata } from "./blog/posts/components/getPostMetadata";
import TypingAnimation from "./components/TypingAnimation";
import "./globals.css";

const typedData = [
  // "I craft digital experiences.",
  'check out the <a href="/uses" class="underline text-purple-700">tools I use</a>',
  'develope into my <a href="/" class="underline text-purple-700" rel="noopener noreferrer">GitHub</a>',
  'follow me on <a href="/" class="underline text-purple-700" rel="noopener noreferrer">Twitter</a>',
];

export default async function Home() {
  return (
    <main className="App">
      <span className="flex my-8 font-jetbrains" aria-hidden="true">
        <div className="px-2 mr-2 bg-mainColor text-white rounded-lg">
          {" "}
          {"> ~ %"}{" "}
        </div>
        <TypingAnimation data={typedData} />
      </span>
    </main>
  );
}
