import Button from "../components/Button";
import SocialLinks from "../components/SocialLinks";
import AboutMe from "../components/AboutMe";
import ProjectsPrev from "../components/ProjectsPreview";
import EmblaCarousel from "../components/Carousel";
import { useRef } from "react";

const OPTIONS = { dragFree: true, loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
function Home() {
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      {/* Hero section */}
      <div className="grid grid-cols-[1.25fr_1fr] gap-4  px-4 pt-1  text-white font-sans ">
        <div className="flex flex-col gap-4 pt-2 ">
          <h1 className="text-[108px] font-bold font-heading">
            Full<span className="text-white">–</span>stack
          </h1>
          <div>
            <p className="mt-4 p-2 text-gray-400 font-body max-w-md tracking-wider  font-bold">
              A <em className="italic text-white">builder at heart</em> who
              writes
              <em className="italic text-white"> clean, scalable code</em> to
              solve real-world problems—without losing sight of good design.
            </p>
          </div>
          <SocialLinks />
        </div>

        {/* Right Column */}
        <div className=" flex flex-col  ">
          <div className="pl-6 pt-22 font-medium italic font-body">
            <Button
              label="Projects"
              onClick={scrollToProjects}
              className="w-52"
            />
          </div>
          <h1 className="text-[108px] font-bold">Developer.</h1>
        </div>
      </div>

      {/* Carousel project showcase */}
      <div className="pt-16">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
      {/* About me section */}
      <div className="">
        <AboutMe />
      </div>
      {/* Projects preview */}
      <div ref={projectsRef} className="pt-6">
        <h2 className="text-center pb-6 font-heading tracking-widest text-body font-semibold">
          .../Projects...
        </h2>
        <ProjectsPrev />
      </div>
    </>
  );
}
export default Home;
