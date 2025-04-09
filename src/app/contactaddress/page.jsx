"use client";
import React, { useState, useEffect } from "react";
import { ClipboardCheck, Copy, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ContactAddress = () => {
  const [copied, setCopied] = useState(false);
  const [truncatedAddress, setTruncatedAddress] = useState("");
  const address = "0xe2bb9655bba8c50370207a03e46b9e952cbcd17a";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setTruncatedAddress(`${address.slice(0, 12)}...${address.slice(-8)}`);
      } else {
        setTruncatedAddress(address);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [address]);

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="CA"
      className="bg-gradient-to-b from-gray-900/10 to-black relative my-12"
    >
      <div className="px-4 py-8 md:py-16">
        <motion.div className="relative flex flex-col items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 text-amber-300 text-3xl md:text-6xl font-bold"
          >
            <Sparkles className="w-8 h-8 md:w-12 md:h-12" />
            $CZBRO Token Address
          </motion.div>

          <motion.div
            className="w-full mt-8 md:mt-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="w-full md:flex-1 p-4 bg-amber-500/5 backdrop-blur-xl rounded-xl border border-amber-500/20 shadow-xl hover:shadow-amber-500/10 transition-all duration-300">
                <div className="flex items-center gap-2 md:gap-4">
                  <span className="px-2 py-1 text-xs md:text-sm font-medium text-amber-300 bg-amber-400/10 rounded-md">
                    CA
                  </span>
                  <code className="flex-1 font-mono text-xs md:text-base text-gray-200 overflow-hidden whitespace-nowrap">
                    {truncatedAddress}
                  </code>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-2 text-xs md:text-sm font-medium text-black bg-amber-400 rounded-lg hover:bg-amber-300 transition-colors whitespace-nowrap shadow-lg hover:shadow-amber-400/50"
                    onClick={handleCopy}
                  >
                    <AnimatePresence mode="wait">
                      {copied ? (
                        <motion.div
                          key="copied"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-1 md:gap-2"
                        >
                          <ClipboardCheck className="w-3 h-3 md:w-4 md:h-4" />
                          <span>Copied!</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="copy"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="flex items-center gap-1 md:gap-2"
                        >
                          <Copy className="w-3 h-3 md:w-4 md:h-4" />
                          <span>Copy</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
              </div>
              <motion.a
                href="https://dexscreener.com/bsc/0x2fA03d0deAFBe824A3aeBA5944EF421eD18050aC"
                className="px-6 py-3 text-sm md:text-base font-semibold text-black bg-gradient-to-r from-amber-400 to-amber-300 rounded-xl hover:from-amber-300 hover:to-amber-200 transition-all shadow-lg hover:shadow-amber-400/25"
                whileHover={{ scale: 1.02, rotate: 1 }}
                whileTap={{ scale: 0.98 }}
              >
                Buy Now
              </motion.a>
            </div>
          </motion.div>

          {/* <motion.div
            className="flex items-center gap-4 mt-8 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className="text-sm md:text-base">Buy Easily with</span>
            <div className="flex items-center gap-2 px-4 py-2 bg-amber-500/5 rounded-xl backdrop-blur-sm border border-amber-500/20 hover:bg-amber-500/10 transition-all duration-300">
              <img
                className="w-6 h-6 rounded-lg"
                src="/logo.png"
                alt="czbnb logo"
              />
              <span className="font-bold text-amber-300">CZBNB</span>
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactAddress;
