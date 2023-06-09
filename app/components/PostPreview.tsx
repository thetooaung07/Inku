import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PostPreview(props: ArticleMetaData) {
  return (
    <Link
      href={`/blog/posts/${props.slug}`}
      className="bg-gray-800 text-white p-6 rounded-xl relative z-0 cursor-pointer"
    >
      <div className="relative w-full h-60">
        <Image src={props.thumbnail} fill alt="" className=" rounded-xl" />
      </div>

      <div className="py-2 flex items-center">
        <Image
          src={props.author.profileUrl}
          alt=""
          width={30}
          height={30}
          className="rounded-full"
        />
        <p className="mx-2">{props.author.name}</p>
        <div className="w-[2px] rounded-lg h-full bg-white mr-4">&nbsp;</div>
        <p> {props.createdAt}</p>
      </div>
      <h2 className="font-bold text-xl pt-4">{props.title}</h2>
      <p className="line-clamp-2 text-ellipsis">{props.description}</p>
    </Link>
  );
}
