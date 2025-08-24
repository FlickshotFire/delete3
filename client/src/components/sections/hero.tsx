import { useEffect, useRef } from "react";
import HeroScene from "@/components/3d/hero-scene";
import FloatingElements from "@/components/3d/floating-elements";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollIndicatorRef.current) {
        const scrollY = window.scrollY;
        const opacity = Math.max(0, 1 - scrollY / 300);
        scrollIndicatorRef.current.style.opacity = opacity.toString();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* 3D Background Scene */}
      <div className="absolute inset-0">
        <HeroScene />
      </div>

      {/* Premium Gradient Overlay */}
      <div className="premium-gradient absolute inset-0 opacity-60"></div>

      {/* Floating 3D Elements */}
      <FloatingElements />

      {/* Hero Content */}
      <div className="container mx-auto px-6 text-center z-10 relative">
        <motion.div 
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h1 
            className="text-8xl md:text-10xl lg:text-11xl font-black mb-10 tracking-tight relative"
            initial={{ y: 80, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1 
            }}
          >
            <span className="text-gradient drop-shadow-2xl relative">
              Alex Chen
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-luxury-gold/10 via-transparent to-luxury-platinum/10 blur-2xl -z-10"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 0.8, 0.4, 0.8, 0],
                  scale: [0.9, 1.02, 1.05, 1.02, 0.9]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              />
            </span>
          </motion.h1>
          
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.9, 
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="mb-8"
          >
            <motion.p 
              className="text-4xl md:text-5xl text-luxury-champagne mb-6 font-extralight tracking-wider"
              initial={{ letterSpacing: "0.1em", opacity: 0.8 }}
              animate={{ letterSpacing: "0.15em", opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Premium Software Engineer
            </motion.p>
            <motion.div
              className="h-1 bg-gradient-to-r from-luxury-gold to-luxury-platinum mx-auto rounded-full"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 128, opacity: 1 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.7,
                ease: [0.22, 1, 0.36, 1]
              }}
            />
          </motion.div>

          <motion.div 
            className="text-xl md:text-2xl text-luxury-platinum mb-16 max-w-5xl mx-auto leading-relaxed font-light"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <motion.p 
              className="mb-6 text-2xl md:text-3xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Crafting exceptional digital experiences through{" "}
              <motion.span 
                className="text-luxury-gold font-medium"
                initial={{ color: "#E5E4E2" }}
                animate={{ color: "#FFD700" }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                innovative code
              </motion.span>,{" "}
              <motion.span 
                className="text-luxury-champagne font-medium"
                initial={{ color: "#E5E4E2" }}
                animate={{ color: "#F7E7CE" }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                sophisticated architecture
              </motion.span>, and{" "}
              <motion.span 
                className="text-luxury-platinum font-medium"
                initial={{ color: "#E5E4E2" }}
                animate={{ color: "#E5E4E2" }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                cutting-edge technology
              </motion.span> solutions.
            </motion.p>
            <motion.p 
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.9,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              Transforming complex challenges into elegant, scalable solutions that drive business growth and user satisfaction.
            </motion.p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-12"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.8,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <motion.button
              className="premium-button px-12 py-6 rounded-full font-bold text-xl tracking-wide shadow-2xl relative overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 1.0,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 215, 0, 0.3)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ 
                scale: 0.98,
                transition: { duration: 0.1 }
              }}
              onClick={() => {
                const projectsSection = document.getElementById("projects");
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              data-testid="button-explore-work"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: "-100%", opacity: 0 }}
                whileHover={{ 
                  x: "100%",
                  opacity: 1,
                  transition: { duration: 0.6 }
                }}
              />
              <span className="relative z-10">Explore My Work</span>
            </motion.button>
            
            <motion.button
              className="outline-button px-12 py-6 rounded-full font-bold text-xl tracking-wide relative overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 1.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgba(255, 215, 0, 0.6)",
                boxShadow: "0 15px 30px rgba(255, 215, 0, 0.2)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ 
                scale: 0.98,
                transition: { duration: 0.1 }
              }}
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              data-testid="button-connect"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-luxury-gold/5 via-luxury-platinum/5 to-luxury-gold/5"
                initial={{ opacity: 0 }}
                whileHover={{ 
                  opacity: 1,
                  transition: { duration: 0.3 }
                }}
              />
              <span className="relative z-10">Let's Connect</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Floating Code Snippets */}

        {/* Snippet 1 - Magic Function */}
        <div
          className="absolute top-1/4 right-16 animate-luxury-float hidden xl:block z-10 opacity-80"
          style={{
            animationDelay: "2s",
            perspective: "1000px",
            transformStyle: "preserve-3d"
          }}
        >
          <div className="glass-morphism p-6 rounded-2xl transform -rotate-12 shadow-2xl backdrop-blur-md border border-luxury-gold/30 hover:border-luxury-gold/60 transition-all duration-700 hover:scale-110 group">
            <code className="text-luxury-champagne font-mono text-sm block leading-relaxed">
              <span className="text-luxury-purple">const</span> <span className="text-luxury-bright-gold">magic</span> = () =&gt; &#123;
              <br />
              &nbsp;&nbsp;<span className="text-luxury-purple">return</span> <span className="text-luxury-teal">'innovation'</span>;
              <br />
              &#125;;
            </code>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-luxury-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Snippet 2 - Ideas Map */}
        <div
          className="absolute top-1/4 left-16 animate-float hidden lg:block z-10 opacity-60"
          style={{
            animationDelay: "4s",
            perspective: "1000px",
            transformStyle: "preserve-3d"
          }}
        >
          <div className="glass-morphism p-5 rounded-xl transform rotate-6 shadow-xl backdrop-blur-sm border border-luxury-gold/20 hover:border-luxury-gold/40 transition-all duration-600">
            <code className="text-luxury-gold font-mono text-sm block leading-relaxed">
              <span className="text-luxury-silver">[...ideas]</span>.<span className="text-luxury-gold">map</span>(<span className="text-white">code</span>)
            </code>
          </div>
        </div>

        {/* Snippet 3 - API Call */}
        <div
          className="absolute top-2/3 right-20 animate-luxury-float hidden xl:block z-10 opacity-50"
          style={{
            animationDelay: "6s",
            perspective: "1000px",
            transformStyle: "preserve-3d"
          }}
        >
          <div className="glass-morphism p-4 rounded-lg transform -rotate-3 shadow-lg backdrop-blur-sm border border-luxury-gold/15 hover:border-luxury-gold/30 transition-all duration-500">
            <code className="text-luxury-champagne font-mono text-xs block leading-relaxed">
              <span className="text-luxury-purple">await</span> <span className="text-luxury-teal">fetch</span>(<span className="text-luxury-bright-gold">'/api/magic'</span>)
              <br />
              &nbsp;&nbsp;.<span className="text-luxury-gold">then</span>(<span className="text-white">transform</span>)
            </code>
          </div>
        </div>

        {/* Snippet 4 - Component */}
        <div
          className="absolute bottom-1/3 left-20 animate-float hidden lg:block z-10 opacity-45"
          style={{
            animationDelay: "8s",
            perspective: "1000px",
            transformStyle: "preserve-3d"
          }}
        >
          <div className="glass-morphism p-4 rounded-lg transform rotate-12 shadow-lg backdrop-blur-sm border border-luxury-gold/12 hover:border-luxury-gold/25 transition-all duration-500">
            <code className="text-luxury-gold font-mono text-xs block leading-relaxed">
              <span className="text-luxury-purple">const</span> <span className="text-white">App</span> = () =&gt; &#123;
              <br />
              &nbsp;&nbsp;<span className="text-luxury-purple">return</span> <span className="text-luxury-teal">&lt;Magic /&gt;</span>;
              <br />
              &#125;
            </code>
          </div>
        </div>

        {/* Snippet 5 - Data Flow */}
        <div
          className="absolute top-3/4 right-32 animate-luxury-float hidden xl:block z-10 opacity-40"
          style={{
            animationDelay: "10s",
            perspective: "1000px",
            transformStyle: "preserve-3d"
          }}
        >
          <div className="glass-morphism p-4 rounded-lg transform -rotate-6 shadow-lg backdrop-blur-sm border border-luxury-gold/10 hover:border-luxury-gold/20 transition-all duration-500">
            <code className="text-luxury-gold font-mono text-xs block leading-relaxed">
              <span className="text-white">data</span>.<span className="text-luxury-gold">filter</span>(<span className="text-luxury-silver">premium</span>)
              <br />
              &nbsp;&nbsp;.<span className="text-luxury-gold">map</span>(<span className="text-luxury-teal">enhance</span>)
            </code>
          </div>
        </div>

        {/* Optimized floating particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full will-change-transform"
            initial={{ 
              opacity: 0,
              scale: 0,
              y: 50
            }}
            animate={{
              y: [0, -60 - (i * 8), -20, 0],
              x: [0, Math.sin(i * 0.8) * 25, Math.cos(i * 0.8) * 20, 0],
              scale: [0, 1.2, 0.9, 0.6],
              opacity: [0, 0.7, 0.3, 0],
              rotate: [0, 90, 180, 270]
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              delay: i * 1.2 + 2,
              ease: [0.22, 1, 0.36, 1]
            }}
            style={{
              width: `${4 + (i % 2)}px`,
              height: `${4 + (i % 2)}px`,
              left: `${15 + (i * 8)}%`,
              top: `${25 + (i * 6)}%`,
              background: i % 3 === 0 ? '#FFD700' : i % 3 === 1 ? '#E5E4E2' : '#CD7F32',
              boxShadow: `0 0 ${6 + (i % 2) * 3}px ${
                i % 3 === 0 
                  ? 'rgba(255, 215, 0, 0.4)' 
                  : i % 3 === 1 
                  ? 'rgba(229, 228, 226, 0.3)' 
                  : 'rgba(205, 127, 50, 0.3)'
              }`,
              filter: 'blur(0.5px)'
            }}
          />
        ))}

        {/* Optimized ambient glow effects */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-luxury-gold/3 rounded-full blur-2xl will-change-transform"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.8, 1.1, 0.9, 1],
            opacity: [0, 0.4, 0.2, 0.3],
            x: [0, 30, -10, 0],
            y: [0, -20, 10, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: [0.22, 1, 0.36, 1],
            delay: 2
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-luxury-platinum/3 rounded-full blur-2xl will-change-transform"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{
            scale: [0.9, 1.2, 0.95, 1],
            opacity: [0, 0.3, 0.15, 0.25],
            x: [0, -25, 15, 0],
            y: [0, 25, -15, 0]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: [0.22, 1, 0.36, 1],
            delay: 4
          }}
        />

      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={scrollToAbout}
        data-testid="scroll-indicator"
      >
        <svg
          className="w-6 h-6 text-luxury-gold"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </section>
  );
}