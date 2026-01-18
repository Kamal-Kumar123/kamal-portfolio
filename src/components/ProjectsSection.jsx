import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI-Powered Meeting Summarizer Agent(KR.AI)",
    description: "Converts audio meeting recordings into structured text summaries by transcribing speech, identifying key topics, decisions, and presenting them in a clear and readable format.",

    image: "/public/images/project1-image.png",
    tags: ["ReactJS", "Tailwind CSS", "FastAPI", "API Integration"],
    demoUrl: "https://frontend-git-main-kamal-kumars-projects-103176a1.vercel.app/",
    githubUrl: "https://github.com/Kamal-Kumar123/NEURAL_NINJAS_MEETING_BOT",
  },
  
  {
    id: 2,
    title: "Social Media Marketing Bot(AdBot)",
    description:
      "A Streamlit-based Social Media Marketing Bot that directly generates image ads using image-generation LLMs and publishes them to social media platforms, providing ready-to-use ad creatives as the final output.",
    image: "public/images/project2-image.png",
    tags: ["Python and its Standard Libraries", "Streamlit","Object Oriented Programming","API Integration"],
    demoUrl: "",
    githubUrl: "https://github.com/Kamal-Kumar123/Social_Media_Marketing_Bot",
  },
  {
    id: 3,
    title: "Suspicious Transaction Detection System",
    description:
      "A comprehensive machine learning-based fraud detection system with a React frontend and Python Flask backend, specifically designed for credit card transaction analysis.",
    image: "public/images/project3-image.png",
    tags: ["Python and its Libraries", "ReactJS", "Data Analysis","Machine Learning"],
    demoUrl: "https://hack-ws41-fijdmtwyd-kamal-kumars-projects-103176a1.vercel.app/",
    githubUrl: "https://github.com/Kamal-Kumar123/hack",
  },
  {
    id: 4,
    title: "Football Player Tracking System",
    description:
      "A video-based player tracking project using YOLOv8 and centroid logic to track players by position, jersey color, and height, producing annotated videos and CSV logs with consistent IDs.",
    image: "public/images/project4-image.png",
    tags: ["Python and its Libraries","Data Analysis","Machine Learning","Computer Vision"],
    demoUrl: "",
    githubUrl: "https://github.com/Kamal-Kumar123/StealthModeAssignment",
  },
  {
    id: 5,
    title: "Digital Signal Generator",
    description:
      "A project focused on converting analog and digital data into digital signals and decoding them back into original bits, using sampling techniques for analog signals.",
    image: "",
    tags: ["Python and its Libraries","C++ (MathGL)","Object Oriented Programming"],
    demoUrl: "",
    githubUrl: "https://github.com/Kamal-Kumar123/Digital_Signal_Generator/",
  },
  {
    id: 6,
    title: "Natural Language based Algorithmic Trading System",
    description:
      "An end-to-end trading system that converts natural language strategies into a custom DSL, parses them into an AST, generates executable trading signals, and backtests strategies on historical market data.",
    image: "",
    tags: ["Python and its Libraries","Object Oriented Programming","Basic Compiler Design","Data Analysis"],
    demoUrl: "",
    githubUrl: "https://github.com/Kamal-Kumar123/Strategic_NLP_DSL",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden bg-muted">
  {project.image && (
    <img
      src={project.image}
      alt={project.title}
      loading="lazy"
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
  )}

</div>


              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                )}
              </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};
