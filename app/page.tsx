import fs from "fs";
import Link from "next/link";
import PostPreview from "./components/PostPreview";
import getPostMetadata from "./components/getPostMetadata";

export default function Home() {
  const postMetaData = getPostMetadata();
  const postPreviews = postMetaData.map((post, index) => (
    <PostPreview {...post} key={index}></PostPreview>
  ));

  return (
    <main className="App">
      <div>{postPreviews}</div>
    </main>
  );
}
