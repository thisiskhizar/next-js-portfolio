import { education, experience } from "@/data";

const TimelineItem = ({
  year,
  title,
  description,
  isLast = false,
}: {
  year: string;
  title: string;
  description: string;
  isLast?: boolean;
}) => (
  <div className="relative flex gap-6 group">
    <div className="flex flex-col items-center">
      <div className="w-3 h-3 bg-purple rounded-full z-10" />
      {!isLast && <div className="w-px flex-1 bg-white/10" />}
    </div>

    <div className="w-full pb-8">
      <div className="relative rounded-xl group-hover:border-purple/30 transition-all duration-200">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl bg-gradient-to-r from-purple/20 to-transparent pointer-events-none z-0" />

        <div className="relative z-10 bg-black-100/60 border border-white/10 backdrop-blur-md p-4 rounded-xl">
          <h4 className="text-purple font-semibold text-sm mb-1">{year}</h4>
          <h3 className="text-white font-bold text-base md:text-lg mb-2 md:mb-1">{title}</h3>
          <p className="text-white-100 text-sm">{description}</p>
        </div>
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-10 md:py-20">
      <h1 className="heading">
        My <span className="text-purple">Journey</span>
      </h1>
      <div className="max-w-7xl mx-auto md:px-4 mt-10 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            {education.map((item, i) => (
              <TimelineItem key={i} {...item} />
            ))}
          </div>

          {/* Experience */}
          <div>
            {experience.map((item, i) => (
              <TimelineItem key={i} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
