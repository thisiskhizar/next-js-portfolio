const leftLists = ["ReactJS", "NextJS", "Typescript"];
const rightLists = ["NodeJS", "ExpressJS", "NuxtJS"];

const TechStackCard = () => {
  return (
    <div className="relative w-full h-full min-h-52 px-6 py-8 overflow-hidden">
      {/* Title */}
      <div className="z-10 relative flex items-center h-full">
        <div className="transition duration-200 group-hover/bento:translate-x-2">
          <h2 className="font-sans text-2xl lg:text-3xl font-bold pointer-events-none bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/100 to-white/50">
            My Stack
          </h2>
        </div>
      </div>

      {/* Tech stack lists (floating columns) */}
      <div className="flex gap-3 absolute top-4 right-4 sm:right-6">
        {/* Left Column */}
        <div className="flex gap-3 lg:gap-4 w-fit absolute -right-3 lg:-right-2">
          {/* tech stack lists */}
          <div className="flex flex-col gap-3 lg:gap-4">
            {leftLists.map((item, i) => (
              <span
                key={i}
                className="py-4 px-4 text-xs lg:text-base opacity-50 
                  lg:opacity-100 rounded-lg text-center bg-[#10132E]
                  flex items-center justify-center transition duration-200 group-hover/bento:scale-105 group-hover/bento:bg-[#151934]"
              >
                {item}
              </span>
            ))}
            <span className="px-4 py-4 rounded-lg text-center bg-[#10132E]"></span>
          </div>
          <div className="flex flex-col gap-3 lg:gap-4">
            <span className="px-4 py-4 rounded-lg text-center bg-[#10132E]"></span>
            {rightLists.map((item, i) => (
              <span
                key={i}
                className="py-4 px-4 text-xs lg:text-base opacity-50 
                  lg:opacity-100 rounded-lg text-center bg-[#10132E]
                  flex items-center justify-center transition duration-200 group-hover/bento:scale-105 group-hover/bento:bg-[#151934]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackCard;
