import React from "react";
import {
  GlobeIcon,
  SparklesIcon,
  CubeIcon,
  RocketIcon,
  UsersIcon,
  CodeIcon,
} from "lucide-react";

const About = () => {
  const collageImages = [
    {
      top: "15%",
      left: "5%",
      rotate: "-5deg",
      zIndex: 1,
      width: "60px",
      src: "/images/pic4.png",
    },
    {
      top: "25%",
      right: "10%",
      rotate: "3deg",
      zIndex: 2,
      width: "60px",
      src: "/images/pic5.png",
    },
    {
      top: "80%",
      left: "15%",
      rotate: "7deg",
      zIndex: 10,
      width: "60px",
      src: "/images/pic6.png",
    },
  ];
  return (
    <div className=" p-4 md:p-8 relative overflow-hidden">
      {/* Collage Images */}
      {/* {collageImages.map((style, index) => (
        <div
          key={index}
          className="absolute rounded-lg shadow-lg bg-white/5 backdrop-blur-sm z-50"
          style={{
            top: style.top,
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

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-amber-500 blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-purple-500 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Glass card effect with asymmetrical shape */}
        <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-6 md:p-8 shadow-2xl border border-white/10 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
          {/* Header with diagonal separation */}
          <div className="text-center mb-8 md:mb-16 relative">
            <div className="absolute -bottom-6 md:-bottom-8 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent transform -rotate-3"></div>
            <div className="flex items-center justify-center gap-4">
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600 mb-2 md:mb-4">
                Our Vision
              </h1>
              <img
                style={{
                  width: "60px",
                }}
                src={`${collageImages[1]?.src}`}
                alt="CZBro 4 hand sign"
                className="w-full h-auto rounded-lg opacity-90 hover:opacity-100 size-7 transition-opacity"
              />
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
              Redefining blockchain culture through memes and community
            </p>
          </div>

          {/* Main content with staggered layout */}
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {/* Left column - text content */}
            <div className="lg:col-span-2 space-y-6 md:space-y-8">
              <div className="bg-black/30 p-4 md:p-6 rounded-2xl border border-white/10">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                  More Than Just a Meme
                </h2>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-3 md:mb-4">
                  The "4" hand sign has become a cultural phenomenon in the
                  crypto space, representing not just CZ's influence but the
                  entire community's spirit of innovation and resilience.
                </p>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  We're building tools and platforms that leverage this cultural
                  momentum to create real utility and foster genuine connections
                  across the BNB Chain ecosystem.
                </p>
              </div>

              {/* Diagonal feature card */}
              <div className="relative mt-8 md:mt-12">
                <div className="absolute -top-4 md:-top-6 -left-4 md:-left-6 w-full h-full bg-amber-500/20 rounded-2xl -z-10 transform rotate-3"></div>
                <div className="bg-gradient-to-br from-black to-gray-900 p-4 md:p-6 rounded-2xl border border-white/10 relative">
                  <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <RocketIcon className="w-6 h-6 md:w-8 md:h-8 text-amber-500" />
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm md:text-base">
                    To bridge meme culture with blockchain utility, creating
                    projects that entertain while delivering real value to the
                    community.
                  </p>
                </div>
              </div>
            </div>

            {/* Right column - feature cards in staggered layout */}
            <div className="space-y-4 md:space-y-6 relative">
              <div className="absolute -top-6 md:-top-8 -right-6 md:-right-8 w-24 md:w-32 h-24 md:h-32 bg-purple-500/10 rounded-full blur-xl"></div>

              {[
                {
                  icon: <UsersIcon className="w-6 h-6 md:w-8 md:h-8" />,
                  title: "Community First",
                  description: "Governed by and for our holders",
                  color: "text-purple-500",
                },
                {
                  icon: <CodeIcon className="w-6 h-6 md:w-8 md:h-8" />,
                  title: "Open Source",
                  description: "Transparent development process",
                  color: "text-blue-500",
                },
                {
                  icon: <CodeIcon className="w-6 h-6 md:w-8 md:h-8" />,
                  title: "Multi-chain",
                  description: "Designed for interoperability",
                  color: "text-amber-500",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`p-4 md:p-6 rounded-2xl bg-gradient-to-br from-black to-gray-900 border border-white/10 transform hover:-translate-y-2 transition-all duration-300 ${
                    index % 2 === 0 ? "ml-0" : "ml-4 md:ml-8"
                  }`}
                  style={{
                    boxShadow: `0 10px 30px -10px ${feature.color
                      .replace("text-", "")
                      .replace("-500", "")}500/30`,
                  }}
                >
                  <div className={`${feature.color} mb-3 md:mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-1 md:mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating badge */}
        <div className="mt-8 md:mt-12 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full bg-amber-500/10 text-amber-500 text-sm md:text-lg font-medium border border-amber-500/20 animate-pulse">
            <SparklesIcon className="w-4 h-4 md:w-5 md:h-5" />
            <span>Built on BNB Chain</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
