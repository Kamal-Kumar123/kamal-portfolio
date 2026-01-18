import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
    
    {
        id: 1,
        role: "Software Development Intern",
        company: "LastAppStanding LLP, Casper, Wyoming, USA",
        location: "Remote",
        duration: "March 2025 - September 2025",
        type: "Internship",
        description:
            "Completed a 6-month remote internship at LastAppStanding LLP (USA), contributing to the development of a social media marketing automation platform with real-world product and business impact",
        responsibilities: [
            "Developed a Social Media Marketing Bot (AdBot) using Python and Streamlit",
            "Integrated third-party APIs including Meta, TikTok, Snapchat, and Anthropic",
            "Implemented authentication workflows and automated ad generation with direct publishing",
            "Collaborated with the product team to improve UX, optimize features, and reduce marketing costs",
        ],
        technologies: ["Python", "Streamlit", "Meta Ads API", "TikTok API", "Snapchat API", "Anthropic API", "Automation", "Git"],
        link: "https://www.linkedin.com/posts/kamal-nits_internship-webdevelopment-python-activity-7370763054780809217-Tibt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExM94UB4MVMu4-x72xRBr7GbjE6sdQ-Fzc",
    },
    {
        id: 2,
        role: "Deep Learning Intern",
        company: "Indian Institute of Technology Roorkee (Uttarakhand), India",
        location: "Hybrid",
        duration: "October 2024 - February 2025",
        type: "Research Internship",
        description:
            "Completed a 4-month on-site winter research internship at IIT Roorkee under the Department of Computer Science and Engineering, focusing on transformer-based remote sensing image captioning and deep learning research",
        responsibilities: [
            "Researched transformer-based architectures for Remote Sensing Image Captioning (RSIC)",
            "Evaluated and compared multiple CNN backbones within a transformer encoder framework",
            "Implemented, trained, and analyzed deep learning models using Python",
            "Conducted experiments and documentation using Jupyter Notebook and remote servers",
            "Contributed to an academic research project and collaborated with PhD scholar",
        ],
        technologies: ["Python", "Deep Learning", "Machine Learning", "Computer Vision", "Transformers", "CNN Architectures", "Remote Sensing", "Jupyter Notebook", "Remote Servers (AnyDesk)"
],
        link: "https://www.linkedin.com/posts/kamal-nits_iitroorkee-internship-machinelearning-activity-7305643606315360257-Opmq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExM94UB4MVMu4-x72xRBr7GbjE6sdQ-Fzc",
    },
    {
        id: 3,
        role: "Computer Vision Intern",
        company: "Motilal Nehru National Institute of Technology Allahabad (U.P), India",
        location: "On-site",
        duration: "July 2024 - September 2024",
        type: "Research Internship",
        description:
            "Completed a 2-month internship at MNNIT Allahabad, working on dynamic object detection using Haar Cascade Classifiers under the Computer Science and Engineering Department",
        responsibilities: [
            "Implemented face and eye detection using OpenCV and Haar Cascade",
            "Performed image and video preprocessing tasks",
            "Annotated datasets for object detection and trained a basic detection model",
            
        ],
        technologies: ["Python and its Libraries","Haar Cascade Classifiers", "YOLO", "CVAT", "LabelImg", "Anaconda", "Jupyter-Notebook", "Spyder", "Google Colab"],

        link: "https://www.linkedin.com/posts/kamal-nits_technology-objectdetection-spyder-activity-7241796451482165248-sYXV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExM94UB4MVMu4-x72xRBr7GbjE6sdQ-Fzc",
    },
    
];

export const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Work <span className="text-primary">Experience</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    My professional journey through internships and research positions,
                    where I've applied my skills in real-world projects.
                </p>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div
                                key={exp.id}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Timeline dot */}
                                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1">
                                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-background" />
                                </div>

                                {/* Content */}
                                <div className="flex-1 md:w-1/2">
                                    <div
                                        className={`gradient-border p-6 card-hover bg-card ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                                            }`}
                                    >
                                        <div className="flex items-start justify-between gap-4 mb-4">
                                            <div className="flex items-start gap-3">
                                                <div className="p-2 rounded-full bg-primary/10 mt-1">
                                                    <Briefcase className="h-5 w-5 text-primary" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-semibold text-left">
                                                        {exp.role}
                                                    </h3>
                                                    <p className="text-lg text-primary font-medium text-left">
                                                        {exp.company}
                                                    </p>
                                                </div>
                                            </div>
                                            {exp.link !== "#" && (
                                                <a
                                                    href={exp.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-muted-foreground hover:text-primary transition-colors"
                                                >
                                                    <ExternalLink className="h-5 w-5" />
                                                </a>
                                            )}
                                        </div>

                                        <div className="ml-0 md:ml-11 space-y-4">
                                            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="h-4 w-4" />
                                                    <span>{exp.duration}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="h-4 w-4" />
                                                    <span>{exp.location}</span>
                                                </div>
                                                <span className="px-2 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
                                                    {exp.type}
                                                </span>
                                            </div>

                                            <p className="text-muted-foreground text-left">
                                                {exp.description}
                                            </p>

                                            <div>
                                                <h4 className="font-semibold text-sm mb-2 text-left">
                                                    Key Responsibilities:
                                                </h4>
                                                <ul className="space-y-1 text-left">
                                                    {exp.responsibilities.map((resp, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="text-sm text-muted-foreground flex items-start gap-2"
                                                        >
                                                            <span className="text-primary mt-1">•</span>
                                                            <span>{resp}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div>
                                                <h4 className="font-semibold text-sm mb-2 text-left">
                                                    Technologies Used:
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {exp.technologies.map((tech, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="px-3 py-1 text-xs font-medium border rounded-full bg-secondary/50 text-secondary-foreground"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Empty space for timeline alignment */}
                                <div className="hidden md:block flex-1 md:w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
