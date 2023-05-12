import fs from "fs";
import Link from "next/link";
import getPostMetadata from "./components/getPostMetadata";

export default function Home() {
  const postMetaData = getPostMetadata();
  const postPreviews = postMetaData.map((post, index) => (
    <div className="bg-slate-600 text-white my-4" key={index}>
      <Link href={`/posts/${post.slug}`}>
        <h2>{post.title}</h2>
        <p>{post.date}</p>
        <p>{post.subtitle}</p>
      </Link>
    </div>
  ));

  return (
    <main className="App">
      <div>{postPreviews}</div>
    </main>
  );
}
