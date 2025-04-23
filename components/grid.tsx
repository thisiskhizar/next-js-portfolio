import { ProfileCard } from "./cards/ProfileCard";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { CallToActionCard } from "./cards/CallToActionCard";
import MobileShowcase from "./cards/MobileShowcase";
import GlobeCard from "./cards/GlobeCard";
import TechStackGrid from "./cards/TechStackCard";
import ServicesCard from "./cards/ServicesCard";

const Grid = () => {
  return (
    <section id="about" className="relative my-20">
      <BentoGrid className="w-full">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            header={item.header}
            className={item.className}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const items = [
  {
    title: "Profile Card Top Left",
    description: "",
    header: <ProfileCard />,
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Globe Card Top Middle",
    description: "",
    header: <GlobeCard />,
    className: "md:col-span-1",
  },
  {
    title: "Mobile Showcase Top Right",
    description: "",
    header: <MobileShowcase />,
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Tech Stack Grid",
    description: "",
    header: <TechStackGrid />,
    className: "md:col-span-1",
  },
  {
    title: "Call To Action Card",
    description: "",
    header: <CallToActionCard />,
    className: "md:col-span-1",
  },
  {
    title: "Services Card",
    description: "",
    header: <ServicesCard />,
    className: "md:col-span-2",
  },
];

export default Grid;
