import Link from "next/link";
import React from "react";
import { PostMetadata } from "./PostMetadata";

export default function PostPreview(props: PostMetadata) {
  return (
    <div className="bg-slate-600 text-white p-6 rounded-xl relative z-0">
      <Link href={`/posts/${props.slug}`}>
        <h2 className="font-bold text-xl pb-2">{props.title}</h2>
        <p className="pb-2">{props.subtitle}</p>
        <p className="absolute bottom-2 right-4 block">{props.date}</p>
      </Link>
    </div>
  );
}
