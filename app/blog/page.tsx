import React from "react";
import { getPostMetadata } from "../../lib/getPostMetadata";
import PostPreview from "../components/PostPreview";

export default function page() {
  const postMetaData = getPostMetadata();
  const postPreviews = postMetaData.map((post, index) => (
    <PostPreview {...post} key={index}></PostPreview>
  ));
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
      {postPreviews}
    </div>
  );
}
