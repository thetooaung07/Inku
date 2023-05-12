import Link from "next/link";
import React from "react";
import { PostMetadata } from "./PostMetadata";

export default function PostPreview(props: PostMetadata) {
  return (
    <div className="bg-slate-600 text-white my-4">
      <Link href={`/posts/${props.slug}`}>
        <h2>{props.title}</h2>
        <p>{props.date}</p>
        <p>{props.subtitle}</p>
      </Link>
    </div>
  );
}
