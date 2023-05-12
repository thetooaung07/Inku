import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import React from "react";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;

  const content = fs.readFileSync(file, "utf-8");
  const matterResult = matter(content);
  return matterResult.content;
};

export async function generateStaticParams() {
  return [{ slug: "aws-quickstart" }];
}

const PostsPage = (props: any) => {
  const slug = props.params.slug;
  const content = getPostContent(slug);

  return (
    <div>
      <h2>{slug}</h2>
      <Markdown>{content}</Markdown>
    </div>
  );
};

export default PostsPage;
