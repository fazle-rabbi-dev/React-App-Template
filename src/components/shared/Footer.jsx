import { useState, useEffect } from "react";

export const Footer = () => {
  return (
    <footer className="body-text border-t-[.5px] border-gray-50 text-center text-sm px-6 py-8 space-y-1 font-medium">
      <p>
        Released under the MIT License.
      </p>
      <p className="leading-6">
        ORN is made with ❤️ in <span className="font-bold">Bangladesh</span> by {" "}
        <a
          className="underline font-bold"
          target="_blank"
          href="https://fazle-rabbi-dev.vercel.app?source=orn"
        >
          Fazle Rabbi,{" "}
        </a>
        <span>Copyright © 2024-Present ({new Date().getFullYear()})</span>
        <span> This site does not track you. </span> 
      </p>
    </footer>
  );
};
