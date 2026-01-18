import { Code,BarChart3,Brain } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Aspiring Software Developer & Tech Creator
            </h3>

            <p className="text-muted-foreground">
              I am a BTech Information Technology student at NIT Srinagar, focused on building strong software engineering fundamentals through regular practice of Data Structures and Algorithms.

            </p>

            <p className="text-muted-foreground">
             
              Alongside this, I am learning AI and Machine Learning, including Data Science, Deep Learning, and Computer Vision, by working on small projects and hands-on experiments.

           
            </p>

            <p className="text-muted-foreground">
              
              I have gained experience through both research and industry internships, including work in computer vision, deep learning, and AI-based full-stack applications. These experiences have helped me understand real-world data, collaborative development, and scalable system design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1eGXmM8S0DOJxzeWL_GjR2187dL2JOKyB/view?usp=sharing"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Data Structure and Algorithms</h4>
                  <p className="text-muted-foreground">
                    Building strong problem-solving skills through consistent practice of data structures and algorithms.

                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Analytics</h4>
                  <p className="text-muted-foreground">
                    Working with data to clean, analyze, and visualize information to extract meaningful insights.

                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Machine Learning</h4>
                  <p className="text-muted-foreground">
                    Learning machine learning concepts and models, and applying them through hands-on projects.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
