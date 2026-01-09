"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Headers() {
  const [open, setOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <Link href="/" className="flex gap-x-3 items-center">
          <figure>
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={56} 
              height={56} />
          </figure>
          <div className="text-white">
            <p className="text-lg font-semibold">Tenis Komedi</p>
            <p className="text-xs italic">Komunitas Tenis Serpong Lagoon</p>
          </div>
        </Link>
      </div>
    </header>
  );
}
