"use client";

import React, { useEffect } from "react";
import Typed from "typed.js";

interface Options {
  strings: string[];
  cursorChar: string;
  startDelay: number;
  typeSpeed: number;
  backSpeed: number;
  backDelay: number;
  loop: boolean;
}

const TypingAnimation = ({ data }: { data: string[] }) => {
  useEffect(() => {
    const options: Options = {
      strings: [...data],
      cursorChar: "▌",
      startDelay: 500,
      typeSpeed: 90,
      backSpeed: 30,
      backDelay: 4800,
      loop: true,
    };

    const typed = new Typed(".typingAnimation", options);

    return () => {
      typed.destroy();
    };
  }, [data]);

  return (
    <span className="flex my-8 font-jetbrains" aria-hidden="true">
      <div className="px-2 mr-2 bg-mainColor text-white rounded-lg">
        {" "}
        {"> ~ %"}{" "}
      </div>
      <span className="typingAnimation font-bold text-xs md:text-base flex items-center" />
    </span>
  );
};

export default React.memo(TypingAnimation);
