import ExperienceSection from "@/components/experience";
import Grid from "@/components/grid";
import Hero from "@/components/hero";
import MyApproachSection from "@/components/my-approach";
import Projects from "@/components/projects";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto px-5 sm:px-10">
      <div className="max-w-7xl w-full">
        <Hero/>
        <Grid/>
        <Projects/>
        <ExperienceSection/>
        <MyApproachSection/>
        <Testimonials/>
      </div>
    </main>
  );
}
