import { useScrollFade } from "@/hooks/useScrollFade";
import { Award, ShieldCheck, Cpu } from "lucide-react";

const certs = [
  { name: "NVIDIA CUDA Python Certification", icon: Cpu },
  { name: "Postman Student Expert", icon: Award },
];

const CertificationsSection = () => {
  const ref = useScrollFade();

  return (
    <section ref={ref} className="border-t border-border opacity-0">
      <div className="section-container">
        <h2 className="section-title">Certifications</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {certs.map((cert) => (
            <div
              key={cert.name}
              className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:border-accent/30 transition-colors"
            >
              <cert.icon size={16} className="text-accent shrink-0" />
              <span className="text-sm text-foreground">{cert.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
