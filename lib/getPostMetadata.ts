import { log } from "console";
import fs from "fs";
import matter from "gray-matter";

export const getPostMetadata = (): ArticleMetaData[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // convert with gray-matter
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);

    return {
      author: {
        profileUrl: matterResult.data.profileUrl,
        name: matterResult.data.name,
      },
      createdAt: matterResult.data.createdAt,
      title: matterResult.data.title,
      description: matterResult.data.description,
      tag: matterResult.data.tag,
      viewCount: matterResult.data.viewCount,
      readTime: matterResult.data.readTime,
      slug: fileName.replace(".md", ""),
      thumbnail: matterResult.data.thumbnail,
    };
  });

  return posts;
};

export const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;

  const content = fs.readFileSync(file, "utf-8");
  const matterResult = matter(content);
  return matterResult;
};

/* 


author Profile url
author name

article create date
article title
article description
article tag
article view count
article read time





*/
