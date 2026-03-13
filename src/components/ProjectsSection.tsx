import { useScrollFade } from "@/hooks/useScrollFade";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "LunaBot",
    subtitle: "Autonomous Lunar Rover",
    description:
      "Built an autonomous robotics pipeline integrating Unity simulation, ROS Noetic, YOLOv8 object detection, and RTAB-Map SLAM for navigation and semantic mapping in a simulated lunar environment.",
    tech: ["Unity", "ROS Noetic", "Python", "C#", "YOLOv8"],
    github: "https://github.com/PraveenAmujuri/LunaBot_Prototype",
    demo: null,
  },
  {
    title: "ZeroTouch",
    subtitle: "Touchless Medical Interface",
    description:
      "Developed a gesture-based medical interface using computer vision and MediaPipe hand tracking to enable sterile interaction with medical imaging systems.",
    tech: ["Python", "OpenCV", "MediaPipe"],
    github: "https://github.com/PraveenAmujuri/ZeroTouch",
    demo: null,
  },
  {
    title: "MediStream AI",
    subtitle: "AI Hospital Booking Platform",
    description:
      "Built a full-stack AI hospital triage platform that analyzes patient symptoms using generative AI and dynamically prioritizes appointment scheduling.",
    tech: ["React", "FastAPI", "MongoDB", "Gemini API"],
    github: "https://github.com/PraveenAmujuri/medistream-ai-hospital-booking",
    demo: "https://med.praveenai.tech/",
  },
];

const ProjectsSection = () => {
  const ref = useScrollFade();

  return (
    <section id="projects" ref={ref} className="border-t border-border opacity-0">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Selected work and side projects.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="flex flex-col p-6 rounded-lg border border-border bg-card hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="mb-4">
                <h3 className="font-semibold text-foreground">{proj.title}</h3>
                <p className="text-xs text-accent font-mono">{proj.subtitle}</p>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {proj.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-[11px] font-mono rounded bg-secondary text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 mt-auto">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github size={14} />
                  Code
                </a>
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
