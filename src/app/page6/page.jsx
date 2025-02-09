import React from "react";
import { GlobeIcon, SparklesIcon, CubeIcon } from "lucide-react";

const Test6 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br p-8">
      <div className="max-w-6xl mx-auto">
        {/* Glass card effect */}
        <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4">
              About Us
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full" />
          </div>

          {/* Main content */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-6">
                Innovating the Future
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                The meme celebrates CZ's impact on the blockchain and
                cryptocurrency space, highlighting his role in shaping the
                industry and his connection to the BNB Chain ecosystem. The "4"
                hand sign not only represents CZ's influence but also serves as
                a playful nod to his legacy and the community's admiration for
                his contributions.
              </p>
            </div>

            {/* Feature cards */}
            <div className="grid gap-6">
              {[
                {
                  icon: <GlobeIcon className="w-8 h-8" />,
                  title: "Global Reach",
                  description:
                    "Connected across borders, powered by blockchain",
                },
                {
                  icon: <SparklesIcon className="w-8 h-8" />,
                  title: "Innovation First",
                  description: "Pushing boundaries of what's possible",
                },
                {
                  icon: <SparklesIcon className="w-8 h-8" />,
                  title: "Web3 Native",
                  description: "Built for the decentralized future",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-yellow-600">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test6;
