const experiences = [
  {
    year: "Jan 2026 -",
    duration: "Present",
    company: "GarudaUAV Soft Solutions Pvt Ltd.",
    role: "Software Trainee ",
    tech: " Angular & Python & Streamlit & Redis",
    active: false,
  },
  {
    year: "July 2024 - August 2024",
    duration: "2 months",
    company: "National Informatics Centre",
    role: "Summer intern ",
    tech: " Docker & PHP",
    active: false,
  },
];

export default function WorkExp() {
  return (
    <>
      <h1 className="font-heading text-[100px] text-right pr-32">
        <b>Work</b>
      </h1>
      <div className=" font-heading text-white w-full border border-zinc-800">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`
            grid grid-cols-[140px_1fr_2fr]
            items-center
            px-8 py-5
            border-b border-zinc-800
            transition-all duration-300
            ${exp.active ? "bg-body text-primary" : "bg-primary hover:bg-body hover:text-tertiary"}
          `}
          >
            {/* Left */}
            <div>
              <p className="text-lg font-medium">{exp.year}</p>
              <p className="text-sm opacity-70">{exp.duration}</p>
            </div>

            {/* Middle */}
            <div className="text-lg">{exp.company}</div>

            {/* Right */}
            <div className="text-lg tracking-wide">
              {exp.role}
              <span className="mx-3 opacity-60">|</span>
              {exp.tech}
            </div>
          </div>
        ))}
        <div
          className="
    px-8 py-6 text-right
    relative
    after:absolute
    after:bottom-0
    after:left-0
    after:w-full
    after:h-px
    after:bg-white/10
    after:shadow-[0_2px_10px_rgba(255,255,255,0.12)]
  "
        >
          <p className="text-zinc-400 text-lg">Work experience</p>
          <p className="italic text-2xl">0 years 7 months</p>
        </div>
      </div>
    </>
  );
}
