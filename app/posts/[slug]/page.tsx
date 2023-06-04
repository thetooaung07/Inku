import getPostMetadata from "@/app/posts/components/getPostMetadata";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import React from "react";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;

  const content = fs.readFileSync(file, "utf-8");
  const matterResult = matter(content);
  return matterResult;
};

export async function generateStaticParams() {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const PostsPage = (props: any) => {
  const slug = props.params.slug;
  const matterResult = getPostContent(slug);

  return (
    <div className="mt-8">
      {/* <h2 className="text-4xl text-center">{matterResult.data.title}</h2>
      <h6 className="text-xl text-slate-400 text-center">
        {matterResult.data.date}
      </h6> */}
      <article className="prose xl:prose-xl mx-auto">
        <Markdown>{matterResult.content}</Markdown>
      </article>
    </div>
  );
};

export default PostsPage;
