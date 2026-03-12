import React from 'react';
import { LayoutGrid, Zap, PieChart, Users, Target, TrendingUp } from 'lucide-react';

const Badge = ({ baseColor, topColor }) => (
  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center z-10">
    <div className={`w-8 h-8 rounded-full ${baseColor} absolute ml-2 mt-2 shadow-sm`}></div>
    <div className={`w-8 h-8 rounded-full ${topColor} absolute shadow-sm border border-white/20`}></div>
  </div>
);

const FeatureCard = ({ title, description, icon: Icon, badgeColors, innerBg, textColor, iconColor, transform }) => (
  <div className={`relative w-full max-w-[340px] ${transform} transition-transform hover:scale-105 duration-300 bg-white p-3 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100/80 bg-opacity-95 backdrop-blur-sm z-10`}>
    <Badge baseColor={badgeColors.base} topColor={badgeColors.top} />
    <div className={`${innerBg} p-8 rounded-[1.5rem] min-h-[260px] flex flex-col`}>
      <div className="mb-5">
        <Icon className={`w-7 h-7 ${iconColor}`} strokeWidth={2.5} />
      </div>
      <h3 className={`text-[22px] font-bold ${textColor} mb-3 tracking-tight`}>
        {title}
      </h3>
      <p className="text-gray-500/90 leading-relaxed text-[15px] font-medium">
        {description}
      </p>
    </div>
  </div>
);

const SevenFigureAgencyClone = () => {
  const features = [
    {
      title: "Expertise",
      description: "We leverage over 15 years of experience to deliver high-quality, tailored solutions for every client.",
      icon: LayoutGrid,
      badgeColors: { base: "bg-yellow-500", top: "bg-yellow-300" },
      innerBg: "bg-amber-50/70",
      textColor: "text-gray-900",
      iconColor: "text-yellow-600",
      transform: "-rotate-[3deg] translate-y-0"
    },
    {
      title: "Custom Solutions",
      description: "Each solution is personalized, ensuring that your business gets the exact tools it needs to succeed.",
      icon: Zap,
      badgeColors: { base: "bg-purple-700", top: "bg-purple-500" },
      innerBg: "bg-purple-50/70",
      textColor: "text-gray-900",
      iconColor: "text-purple-600",
      transform: "rotate-[2deg] translate-y-[40px]"
    },
    {
      title: "Customer-Focused",
      description: "We prioritize your satisfaction and aim to exceed your expectations in every project we take on.",
      icon: PieChart,
      badgeColors: { base: "bg-pink-600", top: "bg-pink-400" },
      innerBg: "bg-pink-50/70",
      textColor: "text-gray-900",
      iconColor: "text-pink-500",
      transform: "rotate-[2deg] translate-y-[-10px]"
    },
    {
      title: "Proven Results",
      description: "Our track record speaks for itself. We've helped hundreds of businesses scale to new heights.",
      icon: Users,
      badgeColors: { base: "bg-blue-700", top: "bg-blue-500" },
      innerBg: "bg-blue-50/70",
      textColor: "text-gray-900",
      iconColor: "text-blue-500",
      transform: "-rotate-[2deg] translate-y-[30px]"
    },
    {
      title: "Strategic Clarity",
      description: "We eliminate guesswork, providing clear roadmaps and actionable data for your growth.",
      icon: Target,
      badgeColors: { base: "bg-emerald-600", top: "bg-emerald-400" },
      innerBg: "bg-emerald-50/70",
      textColor: "text-gray-900",
      iconColor: "text-emerald-500",
      transform: "-rotate-[3deg] translate-y-[-20px]"
    },
    {
      title: "Growth Driven",
      description: "Everything we build is engineered to increase your bottom line and expand your market share.",
      icon: TrendingUp,
      badgeColors: { base: "bg-orange-600", top: "bg-orange-400" },
      innerBg: "bg-orange-50/70",
      textColor: "text-gray-900",
      iconColor: "text-orange-500",
      transform: "rotate-[2deg] translate-y-[20px]"
    }
  ];

  return (
    <section className="relative min-h-screen  py-24 px-4  overflow-hidden z-0">
      
      {/* 1. Faint Horizontal Background Lines (Notebook effect) */}


      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-24 relative z-10">
        <h2 className="text-5xl md:text-[3.5rem]  font-semibold text-slate-900 mb-6 tracking-tight">
          Why <span className="italic text-[#F39838] ">Choose</span> VRS?
        </h2>
        <p className="text-xl text-gray-600/90 font-medium">
          Here's why businesses choose us to handle their interior needs:
        </p>
      </div>

      {/* Grid Section containing the exact mapped lines */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto items-center justify-items-center z-10 pb-20">
        
        {/* 2. Strict Card-to-Card Dashed Connections */}
        {/* Hidden on mobile to prevent layout breaking, visible on md+ screens */}
        <svg className="absolute inset-0 w-full h-full hidden md:block -z-10 pointer-events-none opacity-60">
          {/* Yellow to Purple (Row 1) */}
          <line x1="25%" y1="16.6%" x2="75%" y2="16.6%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="8 8" />
          {/* Yellow to Pink (Col 1, Row 1 to Row 2) */}
          <line x1="25%" y1="16.6%" x2="25%" y2="50%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="8 8" />
          {/* Pink to Blue (Row 2) */}
          <line x1="25%" y1="50%" x2="75%" y2="50%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="8 8" />
          {/* Pink to Emerald (Col 1, Row 2 to Row 3) */}
          <line x1="25%" y1="50%" x2="25%" y2="83.3%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="8 8" />
          {/* Emerald to Orange (Row 3) */}
          <line x1="25%" y1="83.3%" x2="75%" y2="83.3%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="8 8" />
        </svg>

        {/* Render Cards */}
        {features.map((f, i) => (
          <FeatureCard key={i} {...f} />
        ))}
      </div>
    </section>
  );
};

export default SevenFigureAgencyClone;