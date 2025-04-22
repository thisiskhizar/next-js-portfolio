import React from "react";
import GridBackground from "./grid-bg";

interface FeatureCardProps {
  id: number;
  title: string;
  titleBottom: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard = ({
  id,
  title,
  titleBottom,
  description,
  icon,
}: FeatureCardProps) => {
  return (
    <div className="relative text-center flex flex-col items-center justify-center p-8 md:p-12 rounded-3xl overflow-hidden border border-white/[0.09] bg-black-100 mx-4 md:mx-1">
      <GridBackground size={30} />
      <span className="font-bold text-white mb-8 tracking-[0.3em]">[{id}]</span>
      <p className="text-2xl md:text-3xl font-bold pointer-events-none bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/100 to-white/50 relative z-20">
        {title} <br /> {titleBottom}
      </p>
      <div className="text-[4rem] md:text-[6rem] text-white-200 my-10 z-20">
        {icon}
      </div>
      <p className="dark:text-white-100 text-sm md:text-base font-medium mt-4 relative z-20">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
