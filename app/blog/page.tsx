import React from "react";
import PostPreview from "./posts/components/PostPreview";
import { getPostMetadata } from "./posts/components/getPostMetadata";

export default function page() {
  const postMetaData = getPostMetadata();
  const postPreviews = postMetaData.map((post, index) => (
    <PostPreview {...post} key={index}></PostPreview>
  ));
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
      {postPreviews}
    </div>
  );
}
