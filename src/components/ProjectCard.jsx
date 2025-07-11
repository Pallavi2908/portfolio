// components/ProjectCard.jsx
import { FiGithub, FiArrowUpRight } from "react-icons/fi";

const ProjectCard = ({
  title,
  techStack,
  description,
  githubLink,
  liveLink,
  videoEmbedUrl,
}) => {
  return (
    <div className="text-body px-10 flex w-full py-8">
      {/* Left Section - 40% */}
      <div className="w-[40%] flex flex-col gap-6 p-4">
        <h1 className="font-heading tracking-widest text-xl font-semibold pl-4">
          # {title}
        </h1>

        <div className="flex flex-row flex-wrap gap-2 p-4 font-heading">
          {techStack.map((tech) => (
            <div
              key={tech}
              className="border border-body rounded-full px-4 py-2"
            >
              {tech}
            </div>
          ))}
        </div>

        <p className="font-body tracking-wide whitespace-pre-line">
          {description}
        </p>

        <div className="flex items-center gap-2">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative"
          >
            <button className="p-4 rounded-full border border-body bg-body hover:bg-gray-700 transition-colors duration-300 cursor-pointer">
              <FiGithub
                size={30}
                className="text-[color:var(--color-primary)]"
              />
            </button>
          </a>
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <button className="border p-4 border-body rounded-full relative -left-4 z-10">
              <FiArrowUpRight size={30} />
            </button>
          </a>
        </div>
      </div>

      {/* Right Section - 60% */}
      <div className="w-[60%] aspect-video pl-4">
        <iframe
          className="w-full h-full rounded-lg"
          src={videoEmbedUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ProjectCard;
