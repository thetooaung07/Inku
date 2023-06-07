import Link from "next/link";
import React from "react";

export default function PostPreview(props: PostMetaData) {
  return (
    <Link
      href={`/blog/posts/${props.slug}`}
      className="bg-slate-600 text-white p-6 rounded-xl relative z-0"
    >
      <h2 className="font-bold text-xl pb-2">{props.title}</h2>
      <p className="pb-2">{props.subtitle}</p>
      <p className="absolute bottom-2 right-4 block">{props.date}</p>
    </Link>
  );
}
