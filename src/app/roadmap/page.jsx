import React from 'react';
import { Clock, ArrowUpRight } from 'lucide-react';


const RoadmapPage = () => {
  const collageImages = [
    {
      top: "15%",
      left: "5%",
      rotate: "-5deg",
      zIndex: 1,
      width: "60px",
      src: "/images/pic8.png"
    },
    {
      top: "25%",
      right: "10%",
      rotate: "3deg",
      zIndex: 2,
      width: "60px",
      src: "/images/pic8.png"

    },
    {
      top: "80%",
      left: "15%",
      rotate: "7deg",
      zIndex: 10,
      width: "60px",
      src: "/images/pic8.png"

    },
    {
      top: "60%",
      left: "45%",
      rotate: "7deg",
      zIndex: 10,
      width: "60px",
      src: "/images/pic8.png"

    }
  ];

  const phases = [
    {
      number: 1,
      title: 'Phase 1: The Birth of CZBro 4',
      timeline: 'Q3 2024',
      items: [
        { 
          title: 'Meme Creation', 
          description: 'CZBro 4 meme is born on BNB Chain, symbolizing crypto prosperity.' 
        },
        { 
          title: 'Community Formation', 
          description: 'Early adopters recognize the power of the 4 hand sign.' 
        },
        { 
          title: 'Token Launch', 
          description: '$CZ4 token deployed with fair distribution to honor CZ legacy.' 
        }
      ]
    },
    {
      number: 2,
      title: 'Phase 2: Spreading the 4 Culture',
      timeline: 'Q4 2024',
      items: [
        { 
          title: 'BNB Chain Integration', 
          description: 'Deep integration with BNB Chain ecosystem.' 
        },
        { 
          title: 'Merchandise Launch', 
          description: 'CZBro 4 hand sign merch available for true believers.' 
        },
        { 
          title: 'Influencer Adoption', 
          description: 'Key figures in crypto start using the 4 sign in their content.' 
        }
      ]
    },
    {
      number: 3,
      title: 'Phase 3: Crypto Dominance',
      timeline: 'Q1 2025',
      items: [
        { 
          title: 'CEX Listings', 
          description: 'Top exchanges recognize the power of 4.' 
        },
        { 
          title: 'BNB Chain Partnerships', 
          description: 'Official collaborations with BNB Chain projects.' 
        },
        { 
          title: 'CZ Recognition', 
          description: 'CZ himself acknowledges the CZBro 4 movement.' 
        }
      ]
    },
    {
      number: 4,
      title: 'Phase 4: Eternal Legacy',
      timeline: 'Q2 2025',
      items: [
        { 
          title: 'CZBro DAO', 
          description: 'Community takes over governance of the movement.' 
        },
        { 
          title: 'Global Meetups', 
          description: 'CZBro 4 hand signs seen at crypto events worldwide.' 
        },
        { 
          title: 'Historical Status', 
          description: 'The 4 becomes a permanent symbol in crypto culture.' 
        }
      ]
    }
  ];

  return (
    <div className="bg-neutral-950 text-white min-h-screen py-8 md:py-20 px-4 md:px-0 relative">
      {/* Collage Images */}
      {collageImages.map((style, index) => (
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
            alt={`CZBro 4 image ${index + 1}`}
            className="w-full h-auto rounded-lg opacity-90 hover:opacity-100 size-7 transition-opacity"
          />
        </div>
      ))}
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8 md:mb-16">
          <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
            <div className="w-2 h-2 md:w-3 md:h-3 bg-amber-500 rounded-full shadow-[0_0_8px_#82ff1f80] md:shadow-[0_0_13px_#82ff1f80]"></div>
            <div className="text-white/50 text-xs md:text-sm">{`{02} — The Path`}</div>
          </div>
          <h1 className="text-4xl md:text-8xl font-normal tracking-tighter">Roadmap to 4</h1>
        </div>

        {/* Phases */}
        <div className="space-y-6 md:space-y-0">
          {phases.map((phase) => (
            <RoadmapPhase 
              key={phase.number} 
              {...phase} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};


const RoadmapPhase = ({ phase, number, title, timeline, items, isActive = false }) => {
  const phaseColors = {
    1: 'Genesis',
    2: 'Growth',
    3: 'Dominance',
    4: 'Legacy'
  };

  return (
    <div 
      className="border-b border-white/10 py-6 md:py-12 flex flex-col md:flex-row md:items-center"
    >
      {/* Phase Label - Top on mobile */}
      <div className="w-full md:w-1/4 mb-4 md:mb-0 md:pr-8">
        <div 
          className={`px-3 py-1 md:px-4 md:py-2 rounded-full border border-white/20 text-xs md:text-sm font-semibold text-white/50 uppercase`}
        >
          {phaseColors[number]}
        </div>
      </div>

      {/* Phase Details - Stacked on mobile */}
      <div className="w-full md:w-3/4 flex flex-col md:flex-row md:items-start">
        <div className="flex-grow">
          <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-4">
            <div className="text-white/50">/</div>
            <div className="text-white text-xl md:text-3xl font-semibold">{`0${number}`}</div>
          </div>

          <h3 className="text-lg md:text-2xl font-semibold text-white mb-3 md:mb-4">{title}</h3>

          <ul className="space-y-2 md:space-y-3">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-2 md:gap-4">
                <ArrowUpRight className="text-amber-500 mt-1 flex-shrink-0" size={14} />
                <div>
                  <span className="text-sm md:text-base font-medium md:font-semibold text-white mr-1 md:mr-2">{item.title}:</span>
                  <span className="text-white/50 text-xs md:text-sm">{item.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Timeline - Right on desktop, bottom on mobile */}
        <div className="flex items-center gap-2 text-white/50 mt-3 md:mt-0">
          <Clock size={14} className="opacity-20" />
          <span className="text-xs md:text-sm opacity-50">{timeline}</span>
        </div>
      </div>
    </div>
  );
};


export default RoadmapPage;