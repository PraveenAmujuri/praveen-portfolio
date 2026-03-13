import { useScrollFade } from "@/hooks/useScrollFade";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { useState, FormEvent } from "react";

const ContactSection = () => {
  const ref = useScrollFade();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" ref={ref} className="border-t border-border opacity-0">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Feel free to reach out for collaborations or opportunities.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Info */}
          <div className="space-y-4">
            <a
              href="mailto:saipraveenamujuri@gmail.com"
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail size={16} className="text-accent" />
              saipraveenamujuri@gmail.com
            </a>
            <a
              href="tel:+918367279433"
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone size={16} className="text-accent" />
              +91 8367279433
            </a>

            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/PraveenAmujuri"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md border border-border hover:border-accent/30 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/sai-praveen-amujuri-738bb4358/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md border border-border hover:border-accent/30 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full px-4 py-2.5 rounded-lg bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full px-4 py-2.5 rounded-lg bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
            />
            <textarea
              placeholder="Message"
              required
              rows={4}
              className="w-full px-4 py-2.5 rounded-lg bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent resize-none"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
            >
              {submitted ? "Message Sent ✓" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
