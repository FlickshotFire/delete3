import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import GlassCard from "@/components/ui/glass-card";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const skillCategories = [
  {
    icon: "⚛️",
    title: "Frontend",
    skills: ["React/Next.js", "TypeScript", "Three.js/WebGL", "Tailwind CSS"],
    delay: "0s",
  },
  {
    icon: "⚙️",
    title: "Backend",
    skills: ["Node.js/Python", "GraphQL/REST", "Microservices", "PostgreSQL/MongoDB"],
    delay: "0.2s",
  },
  {
    icon: "☁️",
    title: "Cloud",
    skills: ["AWS/GCP", "Docker/Kubernetes", "Serverless", "CI/CD Pipelines"],
    delay: "0.4s",
  },
  {
    icon: "🧠",
    title: "AI/ML",
    skills: ["TensorFlow/PyTorch", "Computer Vision", "NLP/LLMs", "MLOps"],
    delay: "0.6s",
  },
];

export default function Skills() {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section id="skills" className="py-32 relative" ref={elementRef}>
      <div className="premium-gradient absolute inset-0 opacity-30"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-20 section-enter ${isVisible ? "visible" : ""}`}>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-gradient">Technical Arsenal</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and methodologies,
            refined through years of premium project delivery.
          </p>
        </div>

        {/* Ultra-Premium 3D Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className={`section-enter ${
                isVisible ? "visible" : ""
              }`}
              initial={{ opacity: 0, y: 100, rotateX: -15 }}
              animate={isVisible ? { 
                opacity: 1, 
                y: 0, 
                rotateX: 0,
                transition: { 
                  duration: 0.8, 
                  delay: index * 0.1,
                  type: "spring",
                  bounce: 0.3
                }
              } : {}}
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                rotateX: 5,
                z: 50,
                transition: { duration: 0.3 }
              }}
              style={{ 
                perspective: "1000px",
                transformStyle: "preserve-3d"
              }}
            >
              <GlassCard className="p-8 relative overflow-hidden group">
                {/* Luxury background gradient overlay */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(135deg, ${category.title === 'Frontend' ? '#FFD700' : category.title === 'Backend' ? '#E5E4E2' : category.title === 'Cloud' ? '#FFA500' : '#FF8C00'}20 0%, transparent 100%)`
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Premium floating icon */}
                <motion.div 
                  className="text-6xl mb-6 relative z-10"
                  animate={{
                    rotateY: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut"
                  }}
                  whileHover={{
                    scale: 1.3,
                    rotateZ: 15,
                    transition: { duration: 0.2 }
                  }}
                >
                  {category.icon}
                </motion.div>
                
                {/* Luxury title with gradient */}
                <motion.h3 
                  className="text-2xl font-bold mb-6 relative z-10" 
                  data-testid={`skill-category-${category.title.toLowerCase()}`}
                  style={{
                    background: `linear-gradient(135deg, ${category.title === 'Frontend' ? '#FFD700' : category.title === 'Backend' ? '#E5E4E2' : category.title === 'Cloud' ? '#FFA500' : '#FF8C00'} 0%, #FFFFFF 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {category.title}
                </motion.h3>
                
                {/* Premium skills list */}
                <ul className="space-y-3 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li 
                      key={skill} 
                      className="flex items-center text-gray-300 group-hover:text-white"
                      data-testid={`skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isVisible ? {
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 0.5,
                          delay: index * 0.1 + skillIndex * 0.1
                        }
                      } : {}}
                      whileHover={{ 
                        x: 10, 
                        scale: 1.05,
                        color: category.title === 'Frontend' ? '#FFD700' : category.title === 'Backend' ? '#E5E4E2' : category.title === 'Cloud' ? '#FFA500' : '#FF8C00'
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.span
                        className="w-3 h-3 rounded-full mr-4 flex-shrink-0"
                        style={{
                          background: `linear-gradient(135deg, ${category.title === 'Frontend' ? '#FFD700' : category.title === 'Backend' ? '#E5E4E2' : category.title === 'Cloud' ? '#FFA500' : '#FF8C00'} 0%, #FFFFFF 100%)`
                        }}
                        animate={{
                          scale: [1, 1.3, 1],
                          boxShadow: [
                            `0 0 5px ${category.title === 'Frontend' ? '#FFD700' : category.title === 'Backend' ? '#E5E4E2' : category.title === 'Cloud' ? '#FFA500' : '#FF8C00'}50`,
                            `0 0 20px ${category.title === 'Frontend' ? '#FFD700' : category.title === 'Backend' ? '#E5E4E2' : category.title === 'Cloud' ? '#FFA500' : '#FF8C00'}80`,
                            `0 0 5px ${category.title === 'Frontend' ? '#FFD700' : category.title === 'Backend' ? '#E5E4E2' : category.title === 'Cloud' ? '#FFA500' : '#FF8C00'}50`
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: skillIndex * 0.2
                        }}
                      />
                      <span className="font-medium">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
                
                {/* Luxury floating particles for each category */}
                <motion.div
                  className="absolute top-2 right-2 w-4 h-4 rounded-full opacity-40"
                  style={{
                    background: category.title === 'Frontend' ? '#FFD700' : category.title === 'Backend' ? '#E5E4E2' : category.title === 'Cloud' ? '#FFA500' : '#FF8C00'
                  }}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.4, 0.8, 0.4],
                    scale: [1, 1.5, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />
                
                <motion.div
                  className="absolute bottom-2 left-2 w-3 h-3 rounded-full opacity-30"
                  style={{
                    background: category.title === 'Frontend' ? '#FFA500' : category.title === 'Backend' ? '#FFD700' : category.title === 'Cloud' ? '#E5E4E2' : '#C0C0C0'
                  }}
                  animate={{
                    x: [0, 10, 0],
                    rotate: [0, 180, 360],
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.4
                  }}
                />
                
                {/* Premium border glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                  style={{
                    border: `2px solid ${category.title === 'Frontend' ? '#FFD700' : category.title === 'Backend' ? '#E5E4E2' : category.title === 'Cloud' ? '#FFA500' : '#FF8C00'}`,
                    boxShadow: `0 0 30px ${category.title === 'Frontend' ? '#FFD700' : category.title === 'Backend' ? '#E5E4E2' : category.title === 'Cloud' ? '#FFA500' : '#FF8C00'}40`
                  }}
                  transition={{ duration: 0.3 }}
                />
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
