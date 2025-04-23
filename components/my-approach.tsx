import React from "react";
import { IoGitBranchOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { RiChatVoiceAiLine } from "react-icons/ri";
import FeatureCard from "./ui/feature-card";

const features = [
  {
    title: "Coding",
    titleBottom: "Standards",
    description:
      "I adhere to best coding practices, staying current with the latest updates to deliver fully optimized, bug-free code.",
    id: 1,
    icon: <IoGitBranchOutline />,
  },
  {
    title: "Clear &",
    titleBottom: "Transparent",
    description:
      "My React applications are optimized for speed and performance, ensuring fast load times and a smooth user experience.",
    id: 2,
    icon: <RiChatVoiceAiLine />,
  },
  {
    title: "Continuous",
    titleBottom: "Support",
    description:
      "I provide 1 month of free support after closing the deal, ensuring a smooth transition and ongoing assistance as needed.",
    id: 3,
    icon: <BiSupport />,
  },
];

const MyApproachSection = () => {
  return (
    <section id="my-approach" className="py-10 md:py-20">
      <h1 className="heading pb-5">
        Why choose <span className="text-purple">me?</span>
      </h1>
      <div className="pt-10 lg:pt-20">
        <div className="group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4 max-w-7xl mx-auto">
          {features.map((feature, i) => {
            const skewStyles =
              i === 0
                ? "lg:rotate-[-6deg] lg:translate-x-6"
                : i === 2
                ? "lg:rotate-[6deg] lg:-translate-x-6"
                : "";

            const zIndex = i === 1 ? "lg:z-10" : "lg:z-0";

            return (
              <div
                key={feature.id}
                className={`
                  transform transition-transform duration-300 ease-out
                  group-hover:rotate-0 group-hover:translate-x-0
                  ${skewStyles} ${zIndex}
                `}
              >
                <FeatureCard {...feature} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MyApproachSection;
