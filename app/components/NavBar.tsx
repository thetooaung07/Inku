"use client";

import Link from "next/link";
import React, { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../globals.css";

export default function NavBar() {
  const navRef = useRef<HTMLDivElement | null>(null);

  const showNavbar = () => {
    navRef.current?.classList.toggle("responsive_nav");
  };
  return (
    <div className="bg-mainColor">
      <header className="mx-auto container">
        <Link href={"/"}>
          <h3 className="uppercase">Inku</h3>
        </Link>
        <nav ref={navRef} className="z-10">
          <Link href="/blog">Blog</Link>
          <Link href="/about-me">About Me</Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}
