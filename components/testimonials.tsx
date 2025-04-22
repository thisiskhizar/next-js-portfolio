import { testimonials } from "@/data";
import ReviewCard from "./ui/review-card";

interface Testimonial {
  name: string;
  quote: string;
}

const splitIntoColumns = (data: Testimonial[], count: number) => {
  const columns: Testimonial[][] = Array.from({ length: count }, () => []);
  data.forEach((item, i) => {
    columns[i % count].push(item);
  });
  return columns;
};

const Testimonials = () => {
  const columns = splitIntoColumns(testimonials, 3);

  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading pb-5">
        Kind words from <span className="text-purple">satisfied clients</span>
      </h1>

      <div className="relative mt-16 flex gap-x-4 gap-y-3 overflow-hidden md:px-4 h-[50rem]">
        {columns.map((column, i) => (
          <div
            key={i}
            className={`
              group relative w-full h-full overflow-hidden
              ${
                i === 0
                  ? "block"
                  : i === 1
                  ? "md:block hidden"
                  : "lg:block hidden"
              }
            `}
          >
            <div
              className={`
                absolute top-0 left-0 flex flex-col gap-4 min-h-[200%]
                ${
                  i === 0
                    ? "animate-vertical-marquee-slowest group-hover:animation-pause"
                    : i === 1
                    ? "animate-vertical-marquee-slow group-hover:animation-pause"
                    : "animate-vertical-marquee-slower group-hover:animation-pause"
                }
              `}
            >
              {[...column, ...column].map((item, idx) => (
                <ReviewCard
                  key={`${i}-${idx}`}
                  name={item.name}
                  username={"khizar.ofc"}
                  quote={item.quote}
                  img={"/profile.svg"}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Top Fade */}
        <div className="pointer-events-none absolute top-0 left-0 w-full h-28 bg-gradient-to-b from-[#000319] to-transparent z-10" />

        {/* Bottom Fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-[#000319] to-transparent z-10" />
      </div>
    </section>
  );
};

export default Testimonials;
