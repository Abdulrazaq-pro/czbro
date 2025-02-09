import React from "react";

const Test3 = () => {
const cards = [
  {
    title: "Introduction",
    description:
      "CZ Bro is a well-known meme character on the BNB Chain, instantly recognized for his signature hand gesture showing the number 4.",
    imageUrl: "/hero.jpg",
  },
  {
    title: "Symbolism of the '4' Gesture",
    description:
      "The '4' hand sign has become a symbol of CZ, one of the most influential figures in the crypto world, representing his impact and legacy.",
    imageUrl: "/hero.jpg",
  },
  {
    title: "CZ’s Influence in Crypto",
    description:
      "The meme highlights CZ’s significant role in shaping the blockchain and cryptocurrency industry, emphasizing his contributions.",
    imageUrl: "/hero.jpg",
  },
  {
    title: "Community Connection",
    description:
      "The gesture not only represents CZ’s influence but also serves as a fun tribute to his legacy and the admiration of the BNB Chain community.",
    imageUrl: "/hero.jpg",
  },
];

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">
          CZ BRO 
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl backdrop-blur-lg bg-gradient-to-br from-white/10 to-yellow-500/10 transition-transform duration-300 hover:scale-105"
            >
              <div className="p-6">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h2 className="text-2xl font-semibold text-white mb-4">
                  {card.title}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test3;
