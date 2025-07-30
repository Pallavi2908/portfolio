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
    <div className="w-full overflow-x-hidden">
      {/* grid-cols-1 is now our default and for md: and higher we added the 1.25 hting */}
      <div className="grid grid-cols-1 md:grid-cols-[1.25fr_1fr] gap-4 px-4 pt-1 text-white font-sans">
        {/* Left Column */}
        <div className="flex flex-col gap-4 pt-2 items-center md:items-start text-center md:text-left">
          <h1 className="text-5xl md:text-[108px] font-bold font-heading leading-tight">
            Full<span className="text-white">–</span>stack
          </h1>

          {/* Mobile-only Developer title */}
          <h1 className="text-4xl font-bold italic block md:hidden">
            Developer.
          </h1>

          <p className="mt-4 p-2 text-gray-400 font-body md:text-lg text-sm max-w-md tracking-wider font-bold">
            A <em className="italic text-white">builder at heart</em> who writes
            <em className="italic text-white"> clean, scalable code</em> to
            solve real-world problems—without losing sight of good design.
          </p>

          <SocialLinks />
        </div>

        {/* Right Column - Developer title on larger screens */}
        {/* Projects button - visible on all screens */}
        <div className="flex justify-center italic font-body mt-6 md:hidden">
          <Button
            label="Projects"
            onClick={scrollToProjects}
            className="w-52"
          />
        </div>

        {/* Info text - only shown on md and up */}
        <div className="hidden md:flex flex-col items-start justify-center pl-6 pt-6 md:pt-22 font-medium italic font-body">
          <Button
            label="Projects"
            onClick={scrollToProjects}
            className="w-52 mb-6"
          />
          {/* Other text content */}
          <h1 className="text-[108px] font-bold">Developer.</h1>
        </div>
      </div>

      {/* Carousel */}
      <div className="pt-16  ">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>

      {/* About Me */}
      <div className=" pt-12">
        <AboutMe />
      </div>

      {/* Projects Preview */}
      <div ref={projectsRef} className="pt-6 ">
        <h2 className="text-center pb-6 font-heading tracking-widest text-body font-semibold">
          .../Projects...
        </h2>
        <ProjectsPrev />
      </div>
    </div>
  );
}
export default Home;
