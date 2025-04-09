"use client";

import Link from "next/link";
import React from "react";

const Test5 = () => {
  return (
    <div
      id="About"
      className="flex flex-col items-center m-0 bg-black text-[#d5d5d5] text-[1.2rem] font-['IBM_Plex_Sans'] font-light "
    >
      <footer id="footer" className="w-full px-4 md:px-12 py-8 relative">
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black -z-10" />
        <div className="absolute inset-0 backdrop-blur-[40px] mask-gradient -z-10" /> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Brand Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-[2.4rem] font-medium m-0">CZBRO</h3>
            <p>
              Made with <span className="text-[#BA6573]">❤</span> by czbro
            </p>
            <div className="flex flex-row gap-4">
              {[
                {
                  href: "https://codepen.io/Juxtopposed",
                  img: "https://assets.codepen.io/9051928/codepen_1.png",
                },
                {
                  href: "https://twitter.com/juxtopposed",
                  img: "https://assets.codepen.io/9051928/x.png",
                },
                {
                  href: "https://youtube.com/@juxtopposed",
                  img: "https://assets.codepen.io/9051928/youtube_1.png",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  // href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 rounded flex justify-center items-center hover:bg-white/20 transition-colors"
                >
                  <img src={social.img} alt="" className="h-3 object-cover" />
                </a>
              ))}
            </div>
            <p className="text-[#818181] text-sm">2025 © All Rights Reserved</p>
          </div>

          {/* About Section */}
          <div className="flex flex-col space-y-2 bg-[#121212] rounded-2xl p-4">
            <Link href="/about" className="hover:text-white cursor-pointer">
              <p className="font-medium">About</p>
            </Link>
            <p className="hover:text-white cursor-pointer">Our mission</p>
            {/* <p className="hover:text-white cursor-pointer">Privacy Policy</p> */}
            {/* <p className="hover:text-white cursor-pointer">Terms of service</p> */}
          </div>

          {/* Services Section */}
          <div className="flex flex-col space-y-2 bg-[#121212] rounded-2xl p-4">
            {/* <p className="font-medium">Services</p> */}
            {/* <p className="hover:text-white cursor-pointer">Products</p> */}
            <p className="hover:text-white cursor-pointer">Join our team</p>
            <p className="hover:text-white cursor-pointer">Partner with us</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Test5;
