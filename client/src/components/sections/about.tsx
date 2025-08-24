import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import GlassCard from "@/components/ui/glass-card";

export default function About() {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section id="about" className="py-32 relative" ref={elementRef}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`section-enter ${isVisible ? "visible" : ""}`}>
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              <span className="text-gradient">About Me</span>
            </h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              I'm a passionate software engineer with over 7 years of experience
              crafting premium digital solutions. My expertise spans full-stack
              development, cloud architecture, and emerging technologies.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              I believe in the intersection of aesthetics and functionality,
              creating software that not only performs exceptionally but also
              provides delightful user experiences.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <GlassCard className="p-6">
                <h3
                  className="text-2xl font-bold text-luxury-gold mb-2"
                  data-testid="text-projects-count"
                >
                  50+
                </h3>
                <p className="text-gray-400">Projects Completed</p>
              </GlassCard>
              <GlassCard className="p-6">
                <h3
                  className="text-2xl font-bold text-luxury-gold mb-2"
                  data-testid="text-experience-years"
                >
                  7+
                </h3>
                <p className="text-gray-400">Years Experience</p>
              </GlassCard>
            </div>
          </div>

          <div
            className={`section-enter ${isVisible ? "visible" : ""} relative`}
          >
            <GlassCard className="p-8">
              <div className="w-full h-96 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Premium modern office workspace with high-end technology"
                  className="w-full h-full object-cover"
                  data-testid="img-workspace"
                />
              </div>
              {/* Floating skill badges */}
              <div className="absolute -top-4 -right-4 glass-morphism p-3 rounded-full animate-float">
                <span className="text-luxury-gold font-mono font-bold">AI</span>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
