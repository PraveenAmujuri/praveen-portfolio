import { useScrollFade } from "@/hooks/useScrollFade";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech – Artificial Intelligence & Machine Learning",
    school: "ANITS College, Visakhapatnam",
    years: "2024 – 2027",
  },
  {
    degree: "Diploma – Computer Science & Engineering",
    school: "Andhra Polytechnic College, Kakinada",
    years: "2020 – 2024",
  },
];

const EducationSection = () => {
  const ref = useScrollFade();

  return (
    <section id="education" ref={ref} className="border-t border-border opacity-0">
      <div className="section-container">
        
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">Academic background.</p>

        <div className="space-y-4">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="flex items-start gap-4 p-5 rounded-lg border border-border bg-card"
            >
              <div className="p-2 rounded-md bg-secondary shrink-0 mt-0.5">
                <GraduationCap size={16} className="text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">{edu.degree}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{edu.school}</p>
                <p className="text-xs font-mono text-muted-foreground mt-2">{edu.years}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
