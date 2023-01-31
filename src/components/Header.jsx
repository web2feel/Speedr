import React from "react";

function Header() {
  return (
    <div className="py-6">
      <a href="/">
        <h1 className="flex text-4xl font-bold justify-center items-center text-indigo-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-10 h-10 text-orange-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
            />
          </svg>{" "}
          <span>SPEEDR</span>
        </h1>
      </a>
      <p className="text-xl text-center my-4 text-indigo-900/60 px-8">
        A simple playback speed calculator for your audiobooks, youtube videos
        or netflix shows
      </p>
    </div>
  );
}

export default Header;
