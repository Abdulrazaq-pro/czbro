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
// import { Button } from "@/components/ui/button";


const Test = () => {
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

  return (
    <div id="Hero" className="bg-black">
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-md border-b border-yellow-500/10"
            : ""
        }`}
      >
        <nav className="container mx-auto flex items-center justify-between h-20 px-5">
          <a
            href="#"
            className="text-3xl font-bold tracking-tight text-yellow-500 hover:text-yellow-400 transition-colors"
          >
            BNB-LAUNCH
          </a>

          <button
            className="md:hidden relative w-10 h-10 rounded-lg bg-yellow-500/10 hover:bg-yellow-500/20 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
              <span
                className={`w-6 h-0.5 bg-yellow-500 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-yellow-500 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-yellow-500 transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>

          <div
            className={`fixed inset-0 bg-black/95 backdrop-blur-lg transition-all duration-500 md:hidden ${
              isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <ul className="flex flex-col items-center gap-8">
                {menuItems.map((item) => (
                  <li key={item} className="relative">
                    <a
                      href={`#${item}`}
                      className={`text-3xl font-medium transition-colors ${
                        activeMenuItem === item
                          ? "text-yellow-500"
                          : "text-white hover:text-yellow-500"
                      }`}
                      onClick={() => {
                        setActiveMenuItem(item);
                        setIsMenuOpen(false);
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
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
                        ? "text-yellow-500"
                        : "text-white hover:text-yellow-500"
                    }`}
                    onClick={() => setActiveMenuItem(item)}
                  >
                    {item}
                  </a>
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-500 transform origin-left transition-transform duration-300 ${
                      activeMenuItem === item
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </li>
              ))}
            </ul>

            <Button className="bg-yellow-500 hover:bg-yellow-400 text-black text-lg font-medium px-8 py-6 transition-all duration-300 hover:scale-105">
              Discover
            </Button>
          </div>
        </nav>
      </header>

      <main className="pt-32 md:px-20">
        <section className="container mx-auto px-5 py-16">
          {/* Insert */}
          <div className="grid md:grid-cols-2 lg:grid-cols-[1fr,max-content] items-center gap-12 lg:gap-16">
            <div className="flex flex-col items-start gap-8">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-yellow-500/10 text-yellow-500 text-lg font-medium">
                Memecoin <span className="animate-pulse">●</span>
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight text-white">
                Czbro <span className="text-yellow-500">4</span>
              </h1>
              <p className="text-gray-300 text-balance text-xl">
                CZ Bro is a popular meme character on the BNB Chain, instantly
                recognizable by his iconic hand gesture showing the number 4.
                This gesture has become a symbol of CZ , one of the greatest and
                most influential figures in the crypto world.
              </p>
              <Button className="bg-yellow-500 hover:bg-yellow-400 text-black text-xl font-medium px-10 py-8 group transition-all duration-300 hover:scale-105">
                Explore Solutions
                <ChevronRight className="w-6 h-6 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
              <img
                src="/hero.jpg"
                alt="AI IoT Blockchain Integration"
                className="relative rounded-lg justify-self-center w-96 md:w-[440px] lg:w-[520px] mt-8 md:mt-0 md:order-1 animate-float"
              />
            </div>

            <div className="hidden lg:flex flex-col fixed right-8 top-1/3 gap-6 items-center">
              <div className="w-px h-16 bg-yellow-500/20" />
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-white/60 hover:text-yellow-500 transition-colors duration-300 hover:scale-110 transform"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
              <div className="w-px h-16 bg-yellow-500/20" />
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

export default Test;
