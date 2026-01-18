import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [

  // Programming and dsa 
  { name: "C++ (Data Structures and Algorithms)", level: 50, category: "Programming" },
  { name: "Python", level: 80, category: "Programming" },
  { name: "C", level: 80, category: "Programming" },
  { name: "Java", level: 70, category: "Programming" },

  // Frontend
  { name: "HTML/CSS", level: 80, category: "Frontend" },
  { name: "JavaScript", level: 70, category: "Frontend" },
  { name: "React", level: 70, category: "Frontend" },
  { name: "Tailwind CSS", level: 70, category: "Frontend" },
  
  //AI, ML and DATA ANALYTICS
  { name: "Machine Learning & Deep Learning", level: 50, category: "AI/ML" },
  { name: "Data Analytics & Visualization", level: 45, category: "AI/ML" },
  { name: "Computer Vision", level: 50, category: "AI/ML" },
  { name: "Natural Language Processing", level: 45, category: "AI/ML" },

  // libraries and frameworks
  { name: "PyTorch, TensorFlow", level: 45, category: "Libraries" },
  { name: "scikit-learn, OpenCV", level: 70, category: "Libraries" },
  { name: "Pandas, NumPy, Matplotlib", level: 80, category: "Libraries" },

  // Tools
  { name: "Git & GitHub", level: 80, category: "Tools" },
  { name: "Jupyter Notebook, Google Colab", level: 90, category: "Tools" },
  { name: "VS Code, Anaconda (Spyder)", level: 90, category: "Tools" },

];

const categories = ["All", "Programming", "Frontend", "AI/ML","Libraries","Tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
