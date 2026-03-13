import { useScrollFade } from "@/hooks/useScrollFade";
import { Code2, Layout, Server, Database, Wrench, Brain } from "lucide-react";

const categories = [
  {
    title: "AI / Machine Learning",
    icon: Brain,
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "Computer Vision", "Natural Language Processing", "YOLOv8"],
  },
  {
    title: "Languages",
    icon: Code2,
    items: ["Python", "Java", "C", "C++", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    icon: Layout,
    items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS", "Material UI"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Express.js", "FastAPI", "Flask", "REST APIs", "JWT Auth", "Socket.io"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["MongoDB", "Firebase", "SQL"],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["AWS EC2", "Git", "GitHub", "Docker", "Vercel", "Render"],
  },
];

const SkillsSection = () => {
  const ref = useScrollFade();

  return (
    <section id="skills" ref={ref} className="border-t border-border opacity-0">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Technologies and tools I work with.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="p-5 rounded-lg border border-border bg-card hover:border-accent/30 transition-colors group"
            >
              <div className="flex items-center gap-2 mb-4">
                <cat.icon size={16} className="text-accent" />
                <h3 className="text-sm font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-md bg-secondary text-xs text-muted-foreground font-mono"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
