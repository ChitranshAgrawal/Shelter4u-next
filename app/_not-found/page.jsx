"use client";

import dynamic from "next/dynamic";

const Footer = dynamic(() => import("../footer/page.jsx"), { ssr: false });

export default function NotFound() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Footer />
    </div>
  );
}
