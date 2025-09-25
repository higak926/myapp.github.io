"use client";
import { useState } from "react";
import "./Footer.css";

function Footer() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        className="absolute bottom-0 p-5 w-full bg-stone-300/30"
        onClick={() => setCount(count + 1)}
      >
        <span className="flex justify-center text-gray-700">@cat-scraping</span>
      </div>
    </>
  );
}

export default Footer;
