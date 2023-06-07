// import fs from "fs";
// import matter from "gray-matter";
// import path from "path";
// import { remark } from "remark";
// import html from "remark-html";

// const postsDirectory = path.join(process.cwd(), "posts");

// export function getSortedPostsData() {
//   // Get file names under /posts
//   const fileNames = fs.readdirSync(postsDirectory);

//   const allPostsData = fileNames.map((fileName) => {
//     // remove .md from file name to get id.
//     const id = fileName.replace(/\.md$/, "");

//     // read markdown file as a string
//     const fullPath = path.join(postsDirectory, fileName);
//     const fileContents = fs.readFileSync(fullPath, "utf-8");

//     // use gray-matter to parse the post metadata section
//     const matterResult = matter(fileContents);

//     const blogPosts: PostMetaData = {
//       id,
//       title: matterResult.data.title,
//       subtitle: matterResult.data.subtitle,
//       date: matterResult.data.date,
//     };

//     return blogPosts;
//   });

//   return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
// }

// export async function getPostData(id: string) {
//   const fullPath = path.join(postsDirectory, `${id}.md`);
//   const fileContents = fs.readFileSync(fullPath, "utf-8");

//   const matterResult = matter(fileContents);
//   const processedContent = await remark()
//     .use(html)
//     .process(matterResult.content);

//   const contentHtml = processedContent.toString();
//   const blogPostWithHtml: PostMetaData & { contentHtml: string } = {
//     id,
//     title: matterResult.data.title,
//     subtitle: matterResult.data.subtitle,
//     date: matterResult.data.date,
//     contentHtml,
//   };

//   return blogPostWithHtml;
// }
