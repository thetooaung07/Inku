import { MarkdownRenderer } from "@/app/components/MarkdownRenderer";
import React from "react";
import {
  getPostContent,
  getPostMetadata,
} from "../../../../lib/getPostMetadata";

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
      <article className="prose xl:prose-xl mx-auto dark:prose-invert">
        <MarkdownRenderer>{matterResult.content}</MarkdownRenderer>
      </article>
    </div>
  );
};

export default PostsPage;
