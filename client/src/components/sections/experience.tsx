import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import GlassCard from "@/components/ui/glass-card";
import { motion } from "framer-motion"; // Assuming framer-motion is used for animations

const experiences = [
  {
    year: "2024",
    title: "Senior Software Architect",
    company: "TechCorp Industries",
    description:
      "Leading architecture decisions for a $500M+ fintech platform, managing a team of 12 engineers, and driving digital transformation initiatives.",
    tags: ["Team Leadership", "System Architecture", "Cloud Migration"],
  },
  {
    year: "2021",
    title: "Full-Stack Developer",
    company: "Innovation Labs",
    description:
      "Developed cutting-edge AI-powered applications, implemented microservices architecture, and contributed to open-source projects with 50K+ stars.",
    tags: ["AI/ML", "Microservices", "Open Source"],
  },
  {
    year: "2019",
    title: "Software Engineer",
    company: "StartupHub",
    description:
      "Built scalable web applications from ground up, implemented DevOps practices, and contributed to 300% user growth through performance optimizations.",
    tags: ["Full-Stack", "DevOps", "Performance"],
  },
];

export default function Experience() {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section id="experience" className="py-32 relative" ref={elementRef}>
      <div className="premium-gradient absolute inset-0 opacity-20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-20 section-enter ${isVisible ? "visible" : ""}`}>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-gradient">Professional Journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A timeline of innovation, growth, and technical excellence across
            industry-leading organizations.
          </p>
        </div>

        {/* 3D Interactive Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            {experiences.map((experience, index) => (
              <div
                key={experience.year}
                className={`section-enter ${
                  isVisible ? "visible" : ""
                } flex items-center relative`}
              >
                {/* Timeline Line */}
                <div className="absolute left-8 top-16 w-px h-32 bg-gradient-to-b from-luxury-gold to-transparent opacity-80"></div>

                {/* Year Badge */}
                <div className="w-16 h-16 glass-morphism rounded-full flex items-center justify-center mr-8 animate-glow">
                  <span className="text-luxury-gold font-bold text-sm" data-testid={`year-${experience.year}`}>
                    {experience.year}
                  </span>
                </div>

                {/* Experience Card */}
                <div className="flex-1">
                  <GlassCard className="p-8 hover:bg-luxury-dark transition-all duration-500">
                    <h3 className="text-2xl font-bold mb-2 text-luxury-gold" data-testid={`title-${experience.year}`}>
                      {experience.title}
                    </h3>
                    <p className="text-xl text-gray-300 mb-4" data-testid={`company-${experience.year}`}>
                      {experience.company}
                    </p>
                    <p className="text-gray-400 mb-4">{experience.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {experience.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          className="px-4 py-2 bg-luxury-gold/30 border border-luxury-gold/50 text-luxury-gold text-sm rounded-full font-medium backdrop-blur-sm shadow-lg"
                          data-testid={`tag-${tag.toLowerCase().replace(/\s+/g, '-')}-${experience.year}`}
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "rgba(255, 215, 0, 0.4)",
                            borderColor: "rgba(255, 215, 0, 0.8)",
                            boxShadow: "0 0 15px rgba(255, 215, 0, 0.3)"
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}