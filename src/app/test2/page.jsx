import React from "react";

const ScrollAnimation = () => {
  const words = ["influence.", "legacy.", "community.", "symbolism."];

  return (
   <div
  className={`fixed inset-0 bg-gradient-to-br from-black/90 via-neutral-900/80 to-black/90 backdrop-blur-xl transition-all duration-700 md:hidden z-50 ${
    isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
  }`}
>
  <div className="flex flex-col items-center justify-center h-full">
    <div className="absolute top-6 right-6">
      <button 
        onClick={() => setIsMenuOpen(false)}
        className="text-white hover:text-neutral-400 transition-colors"
        aria-label="Close menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
    
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neutral-400 to-transparent opacity-50"></div>
    
    <ul className="flex flex-col items-center gap-6 py-8 w-64">
      {menuItems.map((item) => (
        <li key={item} className="relative w-full">
          <a
            href={`#${item}`}
            className={`flex justify-center py-3 px-6 border rounded-lg transition-all duration-300 w-full ${
              activeMenuItem === item
                ? "bg-black/30 border-neutral-400 text-neutral-400 shadow-lg shadow-neutral-400/10"
                : "bg-black/20 border-white/10 text-white/90 hover:border-neutral-400/50 hover:text-neutral-400 hover:bg-black/30"
            }`}
            onClick={() => {
              setActiveMenuItem(item);
              setIsMenuOpen(false);
            }}
          >
            <span className="text-lg font-medium">{item}</span>
          </a>
        </li>
      ))}
    </ul>
    
    <div className="mt-8">
      <button className="px-8 py-3 bg-black/30 border border-neutral-400/70 rounded-lg text-neutral-400 hover:bg-neutral-400/10 transition-all duration-300 font-medium">
        Connect
      </button>
    </div>
  </div>
</div>
  );
};

export default ScrollAnimation;
