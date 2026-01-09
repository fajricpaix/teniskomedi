'use client';

import React, { useState, useEffect } from 'react';

const Banners = () => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    left: string;
    top: string;
    delay: string;
    duration: string;
  }>>([]);

  // Generate particles only on client side to avoid hydration mismatch
  useEffect(() => {
    const generatedParticles = [...Array(20)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${5 + Math.random() * 10}s`
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <>
      <section className="relative w-full h-125 lg:h-150 overflow-hidden flex items-center justify-center text-white">
        {/* Animated Background Image with Multiple Effects */}
        <div className="absolute inset-0">
          {/* Ken Burns Effect (Zoom + Pan) */}
          <div 
            className="absolute inset-0 bg-cover bg-center kenburns-animation"
            style={{ 
              backgroundImage: "url('/images/banner.jpg')"
            }}
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black/60" />
          
          {/* Animated Particles/Dots - Only render after client mount */}
          <div className="absolute inset-0 opacity-20">
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute w-2 h-2 bg-white rounded-full float-animation"
                style={{
                  left: particle.left,
                  top: particle.top,
                  animationDelay: particle.delay,
                  animationDuration: particle.duration
                }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-20 text-center p-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight fade-in-up">
            TENNIS KOMEDI
          </h1>
          <p className="mt-4 text-lg md:text-2xl max-w-2xl mx-auto italic fade-in-up-delay">
            Menang itu Bonus, Keringetan itu Harus,
            <br />
            Foto estetik itu Kudus
          </p>
        </div>
      </section>

      {/* Global Styles for Animations */}
      <style jsx global>{`
        @keyframes kenburns {
          0% {
            transform: scale(1) translate(0, 0);
          }
          50% {
            transform: scale(1.1) translate(-2%, -2%);
          }
          100% {
            transform: scale(1.15) translate(2%, 2%);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .kenburns-animation {
          animation: kenburns 20s ease-in-out infinite alternate;
        }

        .float-animation {
          animation: float linear infinite;
        }

        .fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        .fade-in-up-delay {
          animation: fadeInUp 1s ease-out 0.3s forwards;
          opacity: 0;
        }

        .fade-in-up-delay-2 {
          animation: fadeInUp 1s ease-out 0.6s forwards;
          opacity: 0;
        }
      `}</style>
    </>
  );
};

export default Banners;