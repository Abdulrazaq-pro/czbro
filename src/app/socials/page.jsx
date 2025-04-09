import React from 'react';
import Link from 'next/link';
import { 
  X, 
  Instagram, 
  Youtube, 
  Send 
} from 'lucide-react';

const SocialCard = ({ 
  platform, 
  link, 
  icon: Icon, 
  isLarge = false, 
  isTelegram = false 
}) => {
  return (
    <Link 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`
        group relative overflow-hidden rounded-xl md:rounded-2xl 
        ${isLarge ? 'md:col-span-2' : 'col-span-3 md:col-span-1'}
        ${isTelegram ? 'bg-amber-500 text' : 'bg-neutral-800'}
        transition-all duration-300 ease-in-out
        hover:scale-[1.03] hover:shadow-xl md:hover:shadow-2xl hover:shadow-amber-500/20
        focus:outline-none focus:ring-2 focus:ring-amber-500
        transform will-change-transform
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative p-4 md:p-6 lg:p-8 h-full flex flex-col justify-between">
        <div className={`
          text-lg md:text-xl lg:text-2xl font-semibold tracking-tight
          ${isTelegram ? 'text-black' : 'text-white'}
        `}>
          {platform}
        </div>
        
        <div className={`
          w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mt-2
          ${isTelegram ? 'bg-black/10' : 'bg-amber-500'}
          transition-transform duration-300 group-hover:rotate-12
          self-end
        `}>
          <Icon 
            className={`
              w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8
              ${isTelegram ? 'text-black' : 'text-black'}
              opacity-70
            `}
          />
        </div>
      </div>
    </Link>
  );
};

const SocialGrid = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-4 md:p-6 lg:p-8">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="mb-8 md:mb-12 lg:mb-16 space-y-2 md:space-y-3 lg:space-y-4">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-2 h-2 md:w-3 md:h-3 bg-amber-500 rounded-full animate-pulse"></div>
            <span className="text-xs md:text-sm text-white/50">{`{04} — Catch me`}</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-light text-white tracking-tighter">
            Dominating socials
          </h1>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
          <SocialCard 
            platform="Twitter/X" 
            link="https://x.com/" 
            icon={X}
          />
          <SocialCard 
            platform="Instagram" 
            link="https://instagram.com/AI_" 
            icon={Instagram}
          />
          <SocialCard 
            platform="TikTok" 
            link="https://tiktok.com/.ai" 
            icon={() => (
              <svg 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
              >
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.56-3.32-5.61.07-1.42.54-2.82 1.37-3.93 1.31-1.94 3.61-3.11 5.83-3.11.35.02.69.08 1.02.14.24 1.43.59 2.85 1.1 4.21.17.46.45.87.77 1.24.64-.57 1.26-1.17 1.77-1.84.42-.55.81-1.17 1.07-1.83-.02-2.93-.01-5.86 0-8.79zM19.41 7c0 .51.34.97.66 1.34.86.91 1.75 1.8 2.67 2.66 1.07-1.04 2.03-2.19 3.07-3.26-1.11-.96-2.2-1.94-3.2-3-.32-.33-.67-.71-.33-1.19.34-.48.99-.42 1.5-.13.78.43 1.52.93 2.28 1.4V1.71c-1.63-.61-3.37-.47-4.81.64-1.45 1.11-2.09 2.87-1.96 4.65z" />
              </svg>
            )}
          />
          <SocialCard 
            platform="YouTube" 
            link="https://www.youtube.com/@AI-2025"
            icon={Youtube}
            isLarge
          />
          <SocialCard 
            platform="Join us on Telegram!" 
            link="https://t.me/AI"
            icon={Send}
            isLarge
            isTelegram
          />
        </div>
      </div>
    </div>
  );
};

export default SocialGrid;