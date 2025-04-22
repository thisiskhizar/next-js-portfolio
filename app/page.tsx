import ExperienceSection from "@/components/experience";
import Grid from "@/components/grid";
import Hero from "@/components/hero";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto px-5 sm:px-10">
      <div className="max-w-7xl w-full">
        <Hero/>
        <Grid/>
        <Projects/>
        <ExperienceSection/>
      </div>
    </main>
  );
}
