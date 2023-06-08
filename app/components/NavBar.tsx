"use client";

import Link from "next/link";
import React, { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export const NavBar = () => {
  const navRef = useRef<HTMLDivElement | null>(null);

  const showNavbar = () => {
    navRef.current?.classList.toggle("responsive_nav");
  };
  return (
    <div className="bg-mainColor">
      <header className="container">
        <Link href={"/"}>
          <h3 className="uppercase">Inku</h3>
        </Link>
        <nav ref={navRef} className="z-10">
          <Link href="/blog">Blog</Link>
          <Link href="/about-me">About Me</Link>
          <ThemeToggle />
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
};

export const MobileNavBar = () => {
  return (
    <header className="container my-4 fixed md:top-0 md:bottom-full bottom-0 left-0 right-0 text-white z-10">
      <nav className="md:container bg-gray-800 h-16 rounded-xl w-full">
        <div className="h-full flex justify-center md:justify-between items-center">
          <Link href={"/"} className="hidden md:block">
            <h3 className="uppercase">Inku</h3>
          </Link>
          <nav className="z-10 flex gap-8">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about-me">About</Link>
            <ThemeToggle />
          </nav>
        </div>
      </nav>
    </header>
  );
};
