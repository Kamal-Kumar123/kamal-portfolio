import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    id: 1,
    degree: "Bachelor of Technology in Information Technology",
    institution: "National Institute of Technology, Srinagar",
    location: "Srinagar, Jammu & Kashmir, India",
    duration: "2023 - 2027",
    description:
      "Pursuing B.Tech in Information Technology with focus on Data Structures, Algorithms, Machine Learning, and Software Development.",
    highlights: [
      "Core coursework: DSA, DBMS, Operating Systems, Computer Networks",
      "Active participation in coding competitions and hackathons",
      "Member of technical clubs and societies",
    ],
  },
  {
    id: 2,
    degree: "Senior Secondary (XII)",
    institution: "Maa Bharti Sr. Sec Public School",
    location: "Kota, Rajasthan, India",
    duration: "2021 - 2022",
    description:
      "Completed senior secondary education with focus on Physics, Chemistry, and Mathematics.",
    highlights: [
      "Strong foundation in mathematics and science",
    ],
  },

  {
    id: 3,
    degree: "Secondary (X)",
    institution: "Maa Bharti Sr. Sec Public School",
    location: "Kota, Rajasthan, India",
    duration: "2019 - 2020",
    
    description:
      "Completed secondary education with focus on Science and Mathematics",
    highlights: [
      "Strong foundation in mathematics and science",
    ],
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Education</span>
        </h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className="gradient-border p-6 md:p-8 card-hover bg-card"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="p-2 rounded-full bg-primary/10 mt-1">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-left">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-primary font-medium text-left">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 text-sm text-muted-foreground md:text-right">
                  <div className="flex items-center gap-2 md:justify-end">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 md:justify-end">
                    <MapPin className="h-4 w-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              <div className="ml-0 md:ml-11">
               
                <p className="text-muted-foreground mb-4 text-left">
                  {edu.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-left">
                    Key Highlights:
                  </h4>
                  <ul className="space-y-1 text-left">
                    {edu.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
