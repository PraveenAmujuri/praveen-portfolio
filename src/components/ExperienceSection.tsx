import { useScrollFade } from "@/hooks/useScrollFade";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Machine Learning Intern",
    company: "SkillDzire",
    type: "Remote",
    duration: "May 2025 – Jun 2025",
    points: [
      "Worked on ML pipelines using CNNs for image classification and TF-IDF for recommendation systems.",
      "Optimized models like Random Forest and SVM achieving ~92% accuracy.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Krify",
    type: "Onsite",
    duration: "Aug 2022 – Jan 2023",
    points: [
      "Built MERN stack applications using React, Node.js, Express, and MongoDB.",
      "Implemented REST APIs, JWT authentication, and database schema design.",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useScrollFade();

  return (
    <section id="experience" ref={ref} className="border-t border-border opacity-0">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">Professional experience and internships.</p>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="p-6 rounded-lg border border-border bg-card hover:border-accent/30 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 rounded-md bg-secondary">
                  <Briefcase size={16} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{exp.role}</h3>
                   <p className="text-xs text-muted-foreground font-mono mt-0.5">
                     {exp.company} · {exp.type}
                   </p>
                   <p className="text-xs text-muted-foreground mt-0.5">
                     {exp.duration}
                   </p>
                  <ul className="mt-3 space-y-2">
                    {exp.points.map((p, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-accent mt-1.5 shrink-0">▹</span>
                        {p}
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

export default ExperienceSection;
