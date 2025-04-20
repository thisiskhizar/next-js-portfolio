"use client";

import { IoCopyOutline } from "react-icons/io5";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import MagicButton from "../ui/magic-button";
import { useState } from "react";

// components/cards/CallToActionCard.tsx
export const CallToActionCard = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "khizar.ofc@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div className="h-full md:h-full min-h-48">
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-5 md:px-6 text-2xl md:text-3xl text-center">
          <p className="pointer-events-none bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/100 to-white/50 group-hover/bento:translate-x-2 transition duration-200 relative">
            Have a Project in Mind? Let’s Build It Together.
          </p>
          <div className="mt-6 md:mt-3 px-5">
            <MagicButton
              title={copied ? "Email is Copied!" : "Copy my email address"}
              icon={<IoCopyOutline />}
              position="left"
              handleClick={handleCopy}
              otherClasses="!bg-[#161A31]"
            />
          </div>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
};
