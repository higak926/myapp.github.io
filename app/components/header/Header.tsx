"use client";
import { useState } from "react";
import "./Header.css";
import catBeerUrl from "./cat_beer.png";

function Header() {
  const [count, setCount] = useState(0);
  console.log("hello");

  // const beforeStyles = [
  //   "whitespace-nowrap",
  //   "rounded",
  //   "bg-black",
  //   "px-2",
  //   "py-1",
  //   "text-white",
  //   "absolute",
  //   "-top-12",
  //   "left-1/2",
  //   "-translate-x-1/2",
  //   "before:content-['']",
  //   "before:absolute",
  //   "before:-translate-x-1/2",
  //   "before:left-1/2",
  //   "before:top-full",
  //   "before:border-4",
  //   "before:border-transparent",
  //   "before:border-t-black",
  // ].join(" ");

  return (
    <>
      <div className="p-3 flex items-center">
        <a href="/">
          <img src={catBeerUrl.src} className="w-24 rounded-full"></img>
        </a>
        <div
          className="ml-3 p-2 border border-cyan-500 tooltip-arrow"
          onClick={() => setCount(count + 1)}
        >
          <span>猫の猫による猫のための</span>
          <br />
          <span>スクレイピングサイトだにゃー</span>
        </div>
      </div>
    </>
  );
}

export default Header;
