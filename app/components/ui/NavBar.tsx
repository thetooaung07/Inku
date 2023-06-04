"use client";

import React, { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../globals.css";

export default function NavBar() {
  const navRef = useRef<HTMLDivElement | null>(null);

  const showNavbar = () => {
    navRef.current?.classList.toggle("responsive_nav");
  };
  return (
    <div className="bg-mainColor">
      <header className="mx-auto container">
        <h3 className="uppercase">Inku</h3>
        <nav ref={navRef} className="z-10">
          <a href="/#">Home</a>
          <a href="/#">My work</a>
          <a href="/#">Blog</a>
          <a href="/#">About me</a>
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
