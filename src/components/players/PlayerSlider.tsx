"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Props {
  images: string[];
  interval?: number;
}

const PlayerSlider = ({ images, interval = 3000 }: Props) => {
  const sliderImages = [
    images[images.length - 1],
    ...images,
    images[0],
  ];

  const [current, setCurrent] = useState(1);
  const [isTransition, setIsTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const startX = useRef(0);
  const diffX = useRef(0);

  /* ================= AUTOPLAY ================= */
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      next();
    }, interval);

    return () => clearInterval(timer);
  }, [current, isPaused]);

  /* ================= INFINITE FIX ================= */
  const handleTransitionEnd = () => {
    if (current === sliderImages.length - 1) {
      setIsTransition(false);
      setCurrent(1);
    }
    if (current === 0) {
      setIsTransition(false);
      setCurrent(sliderImages.length - 2);
    }
  };

  useEffect(() => {
    if (!isTransition) {
      requestAnimationFrame(() => setIsTransition(true));
    }
  }, [isTransition]);

  const next = () => setCurrent((c) => c + 1);
  const prev = () => setCurrent((c) => c - 1);

  /* ================= SWIPE ================= */
  const onTouchStart = (e: any) => {
    startX.current = e.touches?.[0]?.clientX ?? e.clientX;
  };

  const onTouchMove = (e: any) => {
    const x = e.touches?.[0]?.clientX ?? e.clientX;
    diffX.current = startX.current - x;
  };

  const onTouchEnd = () => {
    if (diffX.current > 50) next();
    if (diffX.current < -50) prev();
    diffX.current = 0;
  };

  /* ================= DOT ================= */
  const goTo = (index: number) => {
    setCurrent(index + 1);
  };

  return (
    <>
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onTouchStart}
        onMouseMove={onTouchMove}
        onMouseUp={onTouchEnd}
      >
        {/* SLIDER */}
        <div
          className={`flex ${
            isTransition ? "transition-transform duration-700 ease-in-out" : ""
          }`}
          style={{
          transform: isDesktop
            ? `translateX(-${current * 33.3333}%)`
            : `translateX(-${current * 100}%)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {sliderImages.map((img, index) => {
            const isActive = index === current;
            return (
              <div
                key={index}
                className={`shrink-0 w-full lg:w-1/3 px-2 lg:px-0 transition-all duration-700 
                  ${isActive ? "scale-100 opacity-100" : "scale-75 opacity-60"}`}
              >
                <Image
                  src={`/players/${img}`}
                  width={600}
                  height={700}
                  alt="Player"
                  className="mx-auto rounded-xl select-none pointer-events-none"
                />
              </div>
            );
          })}
        </div>

      </div>
      
      {/* DOT INDICATOR */}
      <div className="flex justify-center gap-2 mt-6">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 w-2 rounded-full transition-all ${
              current === i + 1 ? "bg-primary w-6" : "bg-white/80"
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default PlayerSlider;
