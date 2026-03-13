import { useScrollFade } from "@/hooks/useScrollFade";

const AboutSection = () => {
  const ref = useScrollFade();

  return (
    <section id="about" ref={ref} className="border-t border-border opacity-0">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="max-w-2xl space-y-5 text-muted-foreground text-sm md:text-base leading-relaxed">
          <p>
            I am a B.Tech student specializing in Artificial Intelligence and Machine Learning at ANITS College, Visakhapatnam. I focus on building AI-powered applications and scalable full-stack systems that integrate machine learning into real-world products.
          </p>
          <p>
            My interests lie at the intersection of Artificial Intelligence, Robotics, and Full-Stack Development, where I enjoy designing systems that combine machine learning models, real-time data processing, and modern web technologies.
          </p>
          <p>
            I have experience working on projects involving computer vision, robotics simulation, and AI-driven web platforms, with the goal of building intelligent systems that solve practical problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
