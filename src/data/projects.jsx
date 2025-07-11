// data/projects.js (or inside your component file)

export const projects = [
  {
    title: "Semantra",
    techStack: [
      "Python",
      "FastAPI",
      "LangChain",
      "SPECTER2",
      "Mistral 7B",
      "Qdrant",
      "React.js",
      "TailwindCSS",
      "Figma",
    ],
    description: (
      <>
        <b>Semantra</b> is an <em>AI-powered medical insight tool</em> that
        leverages
        <b> FastAPI, LangChain, Mistral 7B and SPECTER2 embedding model</b> to
        decode complex medical documents and instantly answer user queries.
        <br></br>
        <br></br>
        With Qdrant vector search and real-time LLM reasoning, it transforms
        dense reports into simple summaries.
      </>
    ),
    githubLink: "https://github.com/Pallavi2908/Semantra",
    liveLink: "https://semantra-s9mw.onrender.com/static",
    videoEmbedUrl:
      "https://www.youtube.com/embed/y3ERG1dG8Vw?si=QXbnrQjrzB522gcf",
  },

  {
    title: "PsyFer",
    techStack: ["React.js", "TailwindCSS", "Figma", "Collaboration-based"],
    description: (
      <>
        A blend of Graphology and Large Language Models, letting users explore
        their personality traits via clean UI.
        <br></br>
        <b>Role : </b>
        <em>Web developer and UI/UX designer</em>
      </>
    ),
    githubLink: "https://github.com/Pallavi2908/Graphology-Website",
    liveLink: "https://psyfer.netlify.app/",
    videoEmbedUrl:
      "https://www.youtube.com/embed/FLpdbzGGmm4?si=O6HxlHs-x3u94soq",
  },
  {
    title: "WebWhiz",
    techStack: [
      "Claude-Haiku",
      "PlayWright",
      "all-MiniLM-L6-v2",
      "Python",
      "ChromaDB",
      "BeautifulSoup",
    ],
    description: (
      <>
        An <b>AI-powered web query agent</b> that classifies,
        <em>semantically matches, scrapes, summarizes, and caches</em> search
        results using <b>Anthropic's Claude 3.5 Haiku LLM</b>, embeddings
        generated by the
        <b> all-MiniLM-L6-v2 model</b>, and browser automation with Playwright
        and BeautifulSoup for extracting data.
        <br></br>
      </>
    ),
    githubLink: "https://github.com/Pallavi2908/WebWhiz",
    liveLink: "https://github.com/Pallavi2908/WebWhiz",
    videoEmbedUrl:
      "https://www.youtube.com/embed/HRpcYGBvlqs?si=epB041yLSj15U-Zi",
  },
  // Add more projects here...
];
