"use client";
import { useState } from "react";
import "./MainContents.css";

function MainContents() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="p-5 min-h-auto" onClick={() => setCount(count + 1)}>
        今週のトピック
        <div className="p-3 text-sky-800">
          <a href="/nekomatsuri">・スーパー猫祭り2025 開催！！</a>
          <br />
          <a href="/meerkat">・ミーアキャットは猫？！その生態の謎に迫る！！</a>
          <br />
          <a href="/meerkat">・ムササビ VS 猫、今宵勝者が決まる！！！</a>
        </div>
      </div>
    </>
  );
}

export default MainContents;
