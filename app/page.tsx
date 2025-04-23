import ExperienceSection from "@/components/experience";
import Footer from "@/components/footer";
import Grid from "@/components/grid";
import Hero from "@/components/hero";
import MyApproachSection from "@/components/my-approach";
import Projects from "@/components/projects";
import Questions from "@/components/questions";
import Testimonials from "@/components/testimonials";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { faqs, navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto px-5 sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Projects />
        <ExperienceSection />
        <MyApproachSection />
        <Testimonials />
        <Questions faqs={faqs} />
        <Footer />
      </div>
    </main>
  );
}
