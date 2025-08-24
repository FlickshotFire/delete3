import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import GlassCard from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';

const currentProjects = [
  {
    id: "cp-01",
    title: "Neural Trading Engine",
    description: "Revolutionary AI-powered trading platform using deep reinforcement learning for autonomous portfolio management.",
    status: "In Development",
    progress: 75,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Advanced neural network trading algorithms visualization",
    technologies: ["Python", "PyTorch", "FastAPI", "WebSocket", "Redis"],
    timeline: "Q2 2024",
    priority: "High",
    features: [
      "Real-time market analysis",
      "Risk management algorithms",
      "Portfolio optimization"
    ]
  },
  {
    id: "cp-02",
    title: "Quantum Cloud Platform",
    description: "Next-generation cloud infrastructure leveraging quantum computing capabilities for enterprise solutions.",
    status: "Research Phase",
    progress: 35,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Quantum computing cloud infrastructure visualization",
    technologies: ["Qiskit", "Kubernetes", "Go", "GraphQL", "PostgreSQL"],
    timeline: "Q4 2024",
    priority: "Medium",
    features: [
      "Quantum algorithm optimization",
      "Hybrid classical-quantum workflows",
      "Enterprise security protocols"
    ]
  },
  {
    id: "cp-03",
    title: "Immersive AR Workspace",
    description: "Revolutionary augmented reality platform transforming remote collaboration with spatial computing.",
    status: "Prototyping",
    progress: 60,
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Augmented reality workspace collaboration interface",
    technologies: ["Unity", "ARCore", "WebRTC", "Node.js", "Socket.io"],
    timeline: "Q3 2024",
    priority: "High",
    features: [
      "Spatial object manipulation",
      "Real-time collaboration",
      "Cross-platform compatibility"
    ]
  }
];

export default function CurrentProjects() {
  const { elementRef, isVisible } = useIntersectionObserver();
  

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Development":
        return "text-green-400 bg-green-400/20 border-green-400/40";
      case "Research Phase":
        return "text-blue-400 bg-blue-400/20 border-blue-400/40";
      case "Prototyping":
        return "text-yellow-400 bg-yellow-400/20 border-yellow-400/40";
      default:
        return "text-gray-400 bg-gray-400/20 border-gray-400/40";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "text-red-400 bg-red-400/20 border-red-400/40";
      case "Medium":
        return "text-orange-400 bg-orange-400/20 border-orange-400/40";
      case "Low":
        return "text-green-400 bg-green-400/20 border-green-400/40";
      default:
        return "text-gray-400 bg-gray-400/20 border-gray-400/40";
    }
  };

  return (
    <section id="current-projects" className="py-32 relative" ref={elementRef}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-20 section-enter ${isVisible ? "visible" : ""}`}>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-gradient">Current Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge innovations currently in development, pushing the boundaries
            of technology and setting new industry standards.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`section-enter ${isVisible ? "visible" : ""}`}
              initial={{ opacity: 0, y: 100 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotateY: 8,
                  rotateX: 5
                }}
                transition={{ duration: 0.4 }}
                style={{ perspective: "1000px" }}
                className="relative group"
              >

                <GlassCard className="p-6 h-full relative overflow-hidden transition-all duration-300 group-hover:backdrop-blur-sm">
                  {/* Premium 3D hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-luxury-gold/5 to-luxury-platinum/5 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Status and Priority Badges */}
                  <div className="flex justify-between items-start mb-4">
                    <motion.span
                      className={`px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-sm ${getStatusColor(project.status)}`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.status}
                    </motion.span>
                    <motion.span
                      className={`px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-sm ${getPriorityColor(project.priority)}`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.priority} Priority
                    </motion.span>
                  </div>

                  <motion.img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-48 object-cover rounded-xl mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />

                  <motion.h3
                    className="text-2xl font-bold mb-3 text-gradient"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>

                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">Progress</span>
                      <span className="text-sm font-bold text-luxury-gold">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-luxury-gold to-luxury-platinum rounded-full relative"
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: `${project.progress}%` } : {}}
                        transition={{ duration: 1.5, delay: index * 0.3 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/30"
                          animate={{
                            x: ["-100%", "100%"]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-2 py-1 bg-luxury-gold/10 border border-luxury-gold/30 text-luxury-gold text-xs rounded-md font-medium backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + techIndex * 0.1 }}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgba(255, 215, 0, 0.2)",
                          borderColor: "rgba(255, 215, 0, 0.5)"
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-gray-400 mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          className="text-xs text-gray-300 flex items-center"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isVisible ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.3 + featureIndex * 0.1 }}
                        >
                          <motion.span
                            className="w-1.5 h-1.5 bg-luxury-gold rounded-full mr-2"
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.5, 1, 0.5]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: featureIndex * 0.2
                            }}
                          />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Timeline and Action */}
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-xs text-gray-400">Target:</span>
                      <span className="text-sm font-bold text-luxury-gold ml-1">{project.timeline}</span>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        className="premium-button px-4 py-2 rounded-lg text-sm font-bold"
                        size="sm"
                      >
                        View Details
                      </Button>
                    </motion.div>
                  </div>

                  {/* Floating decorative elements */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 bg-luxury-gold/30 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.7, 0.3],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                  />

                  <motion.div
                    className="absolute -bottom-2 -left-2 w-4 h-4 bg-luxury-platinum/40 rounded-full"
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                  />
                </GlassCard>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="premium-button px-12 py-6 rounded-full transition-all duration-500 transform hover:scale-105 animate-glow font-bold text-xl tracking-wide shadow-2xl relative overflow-hidden"
            whileHover={{ 
              scale: 1.08,
              boxShadow: "0 20px 40px rgba(255, 215, 0, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0"
              animate={{
                x: ["-100%", "100%"],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            Let's Collaborate
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}