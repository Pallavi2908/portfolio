import img1 from "../assets/6.png";
// import img from "../assets/pfp.jpg";

const AboutMe = () => {
  return (
    <>
      <div>
        {/* about me upper lines */}
        <div className=" flex justify-around px-6 py-4">
          <div className=" pl-24 flex-1/2 pt-4">
            <h2 className="  font-heading tracking-widest text-body font-semibold">
              .../About me...
            </h2>
          </div>
          <div className=" flex-1/2">
            <p className="font-heading text-gray-400 md tracking-wide text-lg font-medium">
              Hello! I am Pallavi, a recent engineering graduate <br />
              passionate about all things tech, especially{" "}
              <em className="text-body">web development</em>
            </p>
          </div>
        </div>

        {/* skill section */}
        <div className="flex justify-around px-6 py-8 gap-6">
          {/* Left Column */}
          <div className=" flex flex-col gap-8 w-full max-w-[700px] p-6">
            {/* Front-end */}
            <div className="bg-body font-heading text-tertiary rounded-3xl  p-6">
              <h1 className="text-lg">Front-end</h1>
              <h3 className="font-mono font-bold tracking-wide text-sm mt-2">
                <br></br>
                HTML / CSS / TailwindCSS / React.js / JavaScript / TypeScript /
                Figma
              </h3>
            </div>

            {/* Programming + AI */}
            <div className="flex flex-wrap gap-4 justify-between">
              <div className="border-secondary border-1 dark-cards">
                <h1 className="text-base font-heading mb-1">
                  Programming Languages
                </h1>
                <br></br>
                <h3 className="font-mono font-bold tracking-wide text-sm">
                  C / C++ / Python / JavaScript
                </h3>
              </div>
              <div className="border-secondary border-1  dark-cards">
                <h1 className="text-base font-heading mb-1">AI/ML</h1>
                <h3 className="font-mono font-bold tracking-wide text-sm">
                  <br></br>
                  LangChain / Mistral7B LLM / Qdrant, ChromaDB / SPECTER2
                </h3>
              </div>
            </div>

            <div className="font-heading flex gap-4 justify-between">
              {/* Back-end */}
              <div className=" dark-cards">
                <p className=" italic text-sm  tracking-wide ">
                  Always in to learn more ...
                </p>
              </div>
              <div className="bg-body text-tertiary rounded-3xl text-secondaryz p-6">
                <h1 className="text-lg">Back-end & DevOps</h1>
                <h3 className="font-mono font-bold tracking-wide text-sm mt-2">
                  <br></br>
                  Node.js / FastAPI / REST API / MySQL / MongoDB / Mongoose /
                  Docker
                </h3>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="border-2 border-secondary rounded-3xl h-[500px] w-[300px]">
            <img
              src={img1}
              alt="About me"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
