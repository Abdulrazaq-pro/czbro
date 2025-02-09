import React from "react";

const ScrollAnimation = () => {
  const words = ["influence.", "legacy.", "community.", "symbolism."];

  return (
    <div
     
      className="relative w-full grid grid-rows-[auto_1fr] gap-4 bg-black text-white"
    >
      {/* Grid background */}
      <div
        className="fixed inset-0 pointer-events-none -z-10"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgb(255 255 255 / 0.1) 1px, transparent 1px),
            linear-gradient(rgb(255 255 255 / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "45px 45px",
          maskImage: "linear-gradient(-20deg, transparent 50%, black)",
        }}
      />

      {/* Header */}
      <header className=" w-full grid place-items-center">
        <div className="w-full max-w-7xl px-6 md:px-20">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold leading-tight">
            you can
            <br />
            scroll.
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full grid grid-rows-[auto_1fr]">
        {/* Scrolling Section */}
        <section className="w-full grid">
          <div className="w-full max-w-7xl px-6 md:px-20 mx-auto">
            <div className="sticky top-[40vh] sm:top-[calc(50%-0.5lh)] text-3xl sm:text-4xl md:text-6xl font-semibold">
              <h2 className="m-0 inline-block bg-gradient-to-b from-white from-50% to-white/25 bg-clip-text text-transparent">
                <span aria-hidden="true">you can&nbsp;</span>
                <span className="sr-only">you can ship things.</span>
              </h2>
              <ul
                aria-hidden="true"
                className="p-0 m-0 list-none font-semibold space-y-4 sm:space-y-6"
                style={{ "--count": words.length }}
              >
                {words.map((word, index) => (
                  <li
                    key={word}
                    className="opacity-20 transition-all duration-300 hover:opacity-100 hover:scale-105"
                    style={{
                      color: `oklch(75% 0.3 ${
                        (360 / (words.length - 1)) * index
                      })`,
                      scrollSnapAlign: "center",
                    }}
                  >
                    {word}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Final Section */}
        {/* <section className="min-h-[100svh] w-full grid place-items-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold bg-gradient-to-b from-white from-60% to-white/50 bg-clip-text text-transparent">
            fin.
          </h2>
        </section> */}
      </main>

      {/* Footer */}
      {/* <footer className="fixed bottom-0 left-0 w-full py-4 px-6 text-center text-sm opacity-50">
        ʕ⊙ᴥ⊙ʔ jh3yy © 2024
      </footer> */}

      {/* Twitter Link */}
      
    </div>
  );
};

export default ScrollAnimation;
