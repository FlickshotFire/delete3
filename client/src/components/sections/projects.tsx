import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import GlassCard from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const projects = [
  {
    id: "01",
    title: "FinTech Revolution",
    description:
      "A cutting-edge financial platform that revolutionizes digital banking through AI-powered insights and premium user experience.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Premium fintech dashboard interface with luxury design elements",
    technologies: [
      "React + TypeScript + Next.js",
      "Node.js + GraphQL + PostgreSQL",
      "AWS + Kubernetes + Redis",
    ],
    stats: [
      { value: "99.9%", label: "Uptime" },
      { value: "10M+", label: "Users" },
      { value: "$2B+", label: "Processed" },
    ],
  },
  {
    id: "02",
    title: "AI Vision Platform",
    description:
      "Advanced computer vision platform leveraging deep learning for real-time object detection and analysis.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Advanced AI neural network visualization with premium tech aesthetics",
    technologies: [
      "Python + TensorFlow + OpenCV",
      "FastAPI + MongoDB + Redis",
      "Docker + GCP + MLOps",
    ],
    stats: [
      { value: "96.8%", label: "Accuracy" },
      { value: "45ms", label: "Latency" },
    ],
  },
  {
    id: "03",
    title: "Luxury E-Commerce",
    description:
      "Premium e-commerce platform with immersive 3D product visualization and intelligent recommendation engine.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Luxury e-commerce platform interface with premium design elements",
    technologies: [
      "Vue.js + Three.js + WebGL",
      "Django + PostgreSQL + Elasticsearch",
      "AWS + CDN + Analytics",
    ],
    stats: [],
  },
];

export default function Projects() {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section id="projects" className="py-32 relative" ref={elementRef}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-20 section-enter ${isVisible ? "visible" : ""}`}>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A curated selection of premium projects that showcase innovation,
            technical excellence, and exceptional user experience.
          </p>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`section-enter ${isVisible ? "visible" : ""}`}
              initial={{ opacity: 0, y: 100 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  className={`${
                    index % 2 === 0
                      ? "order-2 lg:order-1"
                      : "order-1 lg:order-2"
                  }`}
                  whileHover={{
                    scale: 1.02,
                    rotateY: index % 2 === 0 ? 5 : -5,
                    rotateX: 2
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ perspective: "1000px" }}
                >
                  <GlassCard className="p-8 relative overflow-hidden">
                    {/* Premium 3D hover effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-luxury-gold/10 to-luxury-platinum/10 opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    <motion.img
                      src={project.image}
                      alt={project.alt}
                      className="w-full h-64 object-cover rounded-xl mb-6"
                      data-testid={`img-project-${project.id}`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Luxury 3D Project Stats */}
                    {project.stats.length > 0 && (
                      <div className={`grid grid-cols-${project.stats.length} gap-4`}>
                        {project.stats.map((stat, statIndex) => (
                          <motion.div
                            key={stat.label}
                            className="text-center"
                            whileHover={{ scale: 1.1, y: -5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <motion.div
                              className="text-2xl font-bold text-luxury-gold"
                              data-testid={`stat-${stat.label.toLowerCase()}-${project.id}`}
                              animate={{
                                textShadow: [
                                  "0 0 10px rgba(255, 215, 0, 0.5)",
                                  "0 0 20px rgba(255, 215, 0, 0.8)",
                                  "0 0 10px rgba(255, 215, 0, 0.5)"
                                ]
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              {stat.value}
                            </motion.div>
                            <div className="text-sm text-gray-400">
                              {stat.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {project.id === "03" && (
                      <motion.div
                        className="relative"
                        animate={{
                          rotateY: [0, 360],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        <div className="absolute -top-4 -right-4 w-12 h-12 glass-morphism rounded-full flex items-center justify-center">
                          <span className="text-luxury-gold text-xl">💎</span>
                        </div>
                      </motion.div>
                    )}

                    {/* Luxury floating elements for each project */}
                    <motion.div
                      className="absolute -top-2 -left-2 w-8 h-8 bg-luxury-gold rounded-full opacity-20"
                      animate={{
                        y: [0, -10, 0],
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.6, 0.2]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    />

                    <motion.div
                      className="absolute -bottom-2 -right-2 w-6 h-6 bg-luxury-platinum rounded-full opacity-30"
                      animate={{
                        x: [0, 10, 0],
                        rotate: [0, 180, 360],
                        opacity: [0.3, 0.7, 0.3]
                      }}
                      transition={{ duration: 4, repeat: Infinity, delay: index * 0.3 }}
                    />
                  </GlassCard>
                </motion.div>

                <motion.div
                  className={`${
                    index % 2 === 0
                      ? "order-1 lg:order-2"
                      : "order-2 lg:order-1"
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                >
                  <motion.span
                    className="text-luxury-gold font-mono text-sm"
                    animate={{
                      textShadow: [
                        "0 0 5px rgba(255, 215, 0, 0.5)",
                        "0 0 15px rgba(255, 215, 0, 0.8)",
                        "0 0 5px rgba(255, 215, 0, 0.5)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {project.id}
                  </motion.span>

                  <motion.h3
                    className="text-4xl font-black mb-6 text-gradient"
                    data-testid={`title-project-${project.id}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    className="text-xl text-gray-300 mb-6"
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.4 }}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-luxury-gold/20 border border-luxury-gold/40 text-luxury-gold text-sm rounded-full font-medium backdrop-blur-sm"
                        data-testid={`tech-${tech.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${project.id}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + techIndex * 0.1 }}
                        whileHover={{ 
                          scale: 1.05, 
                          backgroundColor: "rgba(255, 215, 0, 0.3)",
                          borderColor: "rgba(255, 215, 0, 0.7)",
                          boxShadow: "0 0 10px rgba(255, 215, 0, 0.4)"
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.div
                    className="flex gap-6">
                    <motion.div
                      whileHover={{ scale: 1.05, rotateX: -10, rotateY: -5 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ perspective: "1000px" }}
                    >
                      <Button
                        className="premium-button px-8 py-4 rounded-full transition-all duration-500 font-bold text-base tracking-wide shadow-lg relative overflow-hidden"
                        data-testid={`button-demo-${project.id}`}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                        {project.id === "01" || project.id === "02"
                          ? "Live Demo"
                          : "Explore Store"}
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05, rotateX: -10, rotateY: -5 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ perspective: "1000px" }}
                    >
                      <Button
                        className="outline-button px-8 py-4 rounded-full transition-all duration-500 font-bold text-base tracking-wide relative overflow-hidden"
                        data-testid={`button-code-${project.id}`}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-l from-luxury-gold/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-600"
                          initial={{ x: "100%" }}
                          whileHover={{ x: "-100%" }}
                          transition={{ duration: 0.6 }}
                        />
                        {project.id === "01"
                          ? "View Code"
                          : project.id === "02"
                          ? "Technical Details"
                          : "Case Study"}
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}