type ArticleMetaData = {
  author: {
    profileUrl: string;
    name: string;
  };
  createdAt: string;
  title: string;
  description: string;
  tag: string[];
  viewCount: number;
  readTime: number;
  slug: string;
  thumbnail: string;
};

type Theme = "light" | "dark";
