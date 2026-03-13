import { ArrowDown, Github, Linkedin, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-14">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="section-container text-center relative z-10">
        <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <p className="font-mono text-accent text-sm mb-4">Hi, I'm</p>
        </div>

        <h1 className="opacity-0 animate-fade-up text-5xl md:text-7xl font-bold tracking-tight mb-4" style={{ animationDelay: "0.2s" }}>
          Amujuri Sai Praveen
        </h1>

        <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-6">
            Applied AI & Full Stack Engineer
          </p>
        </div>

        <div className="opacity-0 animate-fade-up max-w-2xl mx-auto" style={{ animationDelay: "0.4s" }}>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-10">
            B.Tech student specializing in Artificial Intelligence and Machine Learning, focused on building AI-powered applications, robotics systems, and scalable full-stack platforms that integrate machine learning with real-world products.
          </p>
        </div>

        <div className="opacity-0 animate-fade-up flex items-center justify-center gap-3 flex-wrap" style={{ animationDelay: "0.5s" }}>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
          >
            View Projects
            <ArrowDown size={14} />
          </a>
          <a
            href="https://github.com/PraveenAmujuri"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sai-praveen-amujuri-738bb4358/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            download="Amujuri_Sai_Praveen_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
