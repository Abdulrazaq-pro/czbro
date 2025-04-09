"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("Home");

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const menuItems = ["Hero", "About", "CA"];

  // Random positions for the collage images
  const collageImages = [
    {
      top: "15%",
      left: "5%",
      rotate: "-5deg",
      zIndex: 1,
      width: "60px",
      src: "/images/pic1.png",
    },
    {
      top: "25%",
      right: "10%",
      rotate: "3deg",
      zIndex: 2,
      width: "60px",
      src: "/images/pic2.jpg",
    },
    {
      top: "80%",
      left: "15%",
      rotate: "7deg",
      zIndex: 10,
      width: "60px",
      src: "/images/pic3.png",
    },
  ];
  return (
    <div id="Hero" className="bg-black relative overflow-hidden">
      {/* Collage Images */}
      {/* {collageImages.map((style, index) => (
        <div
          key={index}
          className="absolute  rounded-lg shadow-lg  bg-white/5 backdrop-blur-sm"
          style={{
            top: style.top,
            bottom: style.bottom,
            left: style.left,
            right: style.right,
            transform: `rotate(${style.rotate})`,
            zIndex: style.zIndex,
            width: style.width,
          }}
        >
          <img
            src={style.src}
            alt={`Decorative image ${index + 1}`}
            className="w-full h-auto rounded-lg opacity-90 hover:opacity-100 size-7 transition-opacity"
          />
        </div>
      ))} */}

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all bg-black/80 duration-500 ${
          isScrolled ? "bg-black/80 backdrop-blur-md  border-amber-500/10" : ""
        }`}
      >
        <nav className="container mx-auto flex items-center justify-between h-20 px-5">
          <a
            href="#"
            className="group relative flex items-center font-bold text-xl lg:text-3xl tracking-tighter hover:scale-105 transition-all duration-300"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 mr-1">
              BNB
            </span>
            <span className="relative">
              <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-amber-500/20 to-yellow-500/20 blur-sm group-hover:blur-md transition-all duration-300"></span>
              <span className="relative bg-black px-2 py-1 rounded-md text-amber-400 border-t border-amber-500/30">
                LAUNCH
              </span>
            </span>
            <div className="absolute -right-4 -top-1">
              <div className="relative w-6 h-6">
                <div
                  className="absolute inset-0 bg-amber-400 rounded-full opacity-70 animate-ping"
                  style={{ animationDuration: "3s" }}
                ></div>
                <div className="absolute inset-0.5 bg-gradient-to-br from-amber-300 to-amber-500 rounded-full"></div>
              </div>
            </div>
          </a>

          <button
            className="md:hidden relative w-10 h-10 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
              <span
                className={`w-6 h-0.5 bg-amber-500 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-amber-500 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-amber-500 transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>

          {/* Mobile navigation  */}
          <div
            className={`fixed inset-0 bg-gradient-to-br from-black/90 via-neutral-900/80 to-black/90 backdrop-blur-xl transition-all duration-700 md:hidden z-50 ${
              isMenuOpen
                ? "opacity-100 visible"
                : "opacity-0 invisible pointer-events-none"
            }`}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <div className="absolute top-6 right-6">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-amber-400 transition-colors"
                  aria-label="Close menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-50"></div>

              <ul className="flex flex-col items-center gap-12 py-8">
                {menuItems.map((item) => (
                  <li
                    key={item}
                    className="relative group    px-4 py-2 bg-black/30  rounded-lg  hover:bg-amber-400/10 transition-all duration-300"
                  >
                    <a
                      href={`#${item}`}
                      className={`text-2xl font-medium transition-all duration-300 ${
                        activeMenuItem === item
                          ? "text-amber-400"
                          : "text-white/90 hover:text-amber-400"
                      }`}
                      onClick={() => {
                        setActiveMenuItem(item);
                        setIsMenuOpen(false);
                      }}
                    >
                      {item}
                      <span
                        className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full ${
                          activeMenuItem === item ? "w-full" : "w-0"
                        }`}
                      ></span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* <div className="mt-12 flex gap-4">
                <button className="px-4 py-2 bg-black/30 border border-amber-400/30 rounded-lg text-amber-400 hover:bg-amber-400/10 transition-all duration-300">
                  Connect
                </button>
              </div> */}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {menuItems.map((item) => (
                <li key={item} className="relative group">
                  <a
                    href={`#${item}`}
                    className={`text-xl transition-colors ${
                      activeMenuItem === item
                        ? "text-amber-500"
                        : "text-white hover:text-amber-500"
                    }`}
                    onClick={() => setActiveMenuItem(item)}
                  >
                    {item}
                  </a>
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-amber-500 transform origin-left transition-transform duration-300 ${
                      activeMenuItem === item
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </li>
              ))}
            </ul>

            <Button className="bg-amber-500 hover:bg-amber-400 text-black text-lg font-medium px-8 py-6 transition-all duration-300 hover:scale-105">
              Discover
            </Button>
          </div>
        </nav>
      </header>

      <main className="pt-12 md:px-20">
        <section className="container mx-auto px-5 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-[1fr,max-content] items-center gap-12 lg:gap-16">
            <div className="flex flex-col items-start gap-8">
              <div className="flex items-center gap-4 justify-center">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-500/10 text-amber-500 text-lg font-medium">
                  Memecoin <span className="animate-pulse">●</span>
                </div>
                {/* <img
                  style={{
                    width: "60px",
                  }}
                  src={`${collageImages[1]?.src}`}
                  alt={`Decorative image`}
                  className="w-full h-auto rounded-lg opacity-90 hover:opacity-100 size-3 transition-opacity"
                /> */}
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight text-white">
                Czbro <span className="text-amber-500">4</span>
              </h1>
              <p className="text-gray-300 text-balance text-xl">
                CZ Bro is a popular meme character on the BNB Chain, instantly
                recognizable by his iconic hand gesture showing the number 4.
                This gesture has become a symbol of CZ , one of the greatest and
                most influential figures in the crypto world.
              </p>
              <Button className="bg-amber-500 hover:bg-amber-400 text-black text-xl font-medium px-10 py-8 group transition-all duration-300 hover:scale-105">
                Explore Solutions
                <ChevronRight className="w-6 h-6 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-amber-500/20 rounded-full blur-3xl animate-pulse" />
              <img
                // src={`${collageImages[1]?.src}`}
                src="/hero.jpg"
                alt="AI IoT Blockchain Integration"
                className="relative rounded-lg justify-self-center w-96 md:w-[440px] lg:w-[520px] mt-8 md:mt-0 md:order-1 animate-float"
              />
            </div>

            <div className="hidden lg:flex flex-col fixed right-8 top-1/3 gap-6 items-center">
              <div className="w-px h-16 bg-amber-500/20" />
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-white/60 hover:text-amber-500 transition-colors duration-300 hover:scale-110 transform"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
              <div className="w-px h-16 bg-amber-500/20" />
            </div>
          </div>
        </section>
      </main>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
