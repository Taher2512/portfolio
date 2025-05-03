"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiGlobe,
  FiLayers,
  FiSmartphone,
  FiServer,
  FiCpu,
} from "react-icons/fi";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiTailwindcss,
  SiSolidity,
  SiRust,
  SiEthereum,
  SiSolana,
  SiFirebase,
  SiGit,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiSass,
  SiPhp,
  SiMysql,
  SiFramer,
  SiExpo,
} from "react-icons/si";

const ExpertiseSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile on component mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Clean up
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Background blob animation variants
  const blobVariants = {
    initial: {
      scale: 0.9,
      opacity: 0.15,
      borderRadius: "60% 40% 60% 40% / 50% 60% 40% 50%",
    },
    animate: {
      scale: 1,
      opacity: 0.1,
      borderRadius: "40% 60% 40% 60% / 40% 40% 60% 60%",
      transition: {
        duration: 10,
        repeat: isMobile ? 0 : Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    },
    // Static state for mobile
    static: {
      scale: 0.9,
      opacity: 0.2,
      borderRadius: "45% 55% 50% 50% / 55% 45% 50% 50%",
    },
  };

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FiGlobe />,
      skills: [
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "React.js", icon: <SiReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Framer Motion", icon: <SiFramer /> },
        { name: "Redux", icon: <SiRedux /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "HTML5", icon: <SiHtml5 /> },
        { name: "CSS3", icon: <SiCss3 /> },
        { name: "SASS", icon: <SiSass /> },
      ],
    },
    {
      title: "Backend Development",
      icon: <FiServer />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "PHP", icon: <SiPhp /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],
    },
    {
      title: "Mobile Development",
      icon: <FiSmartphone />,
      skills: [
        { name: "React Native", icon: <SiReact /> },
        { name: "Expo", icon: <SiExpo /> },
        { name: "NativeWind", icon: <SiTailwindcss /> },
      ],
    },
    {
      title: "Blockchain Development",
      icon: <FiCpu />,
      skills: [
        { name: "Solidity", icon: <SiSolidity /> },
        { name: "Rust", icon: <SiRust /> },
        { name: "Ethereum", icon: <SiEthereum /> },
        { name: "Solana", icon: <SiSolana /> },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: <FiLayers />,
      skills: [{ name: "Git", icon: <SiGit /> }],
    },
  ];

  return (
    <section
      id="expertise"
      className="py-20 px-6 md:px-12 bg-card/30 relative overflow-hidden"
    >
      {/* Background blobs */}
      <motion.div
        className="absolute -right-96 top-20 w-[700px] h-[700px] bg-blue-500/10 dark:bg-blue-500/5 blur-[100px] rounded-full -z-10"
        variants={blobVariants}
        initial="initial"
        animate={isMobile ? "static" : "animate"}
      />

      <motion.div
        className="absolute -left-96 bottom-32 w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-500/5 blur-[90px] rounded-full -z-10"
        variants={{
          initial: {
            scale: 0.8,
            opacity: 0.15,
            borderRadius: "70% 30% 50% 50% / 50% 60% 40% 50%",
          },
          animate: {
            scale: 0.9,
            opacity: 0.1,
            borderRadius: "40% 60% 30% 70% / 40% 40% 60% 60%",
            transition: {
              duration: 8,
              repeat: isMobile ? 0 : Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 1,
            },
          },
          static: {
            scale: 0.9,
            opacity: 0.2,
            borderRadius: "45% 55% 50% 50% / 55% 45% 50% 50%",
          },
        }}
        initial="initial"
        animate={isMobile ? "static" : "animate"}
      />

      <motion.div
        className="absolute left-1/3 top-1/4 w-[300px] h-[300px] bg-teal-500/10 dark:bg-teal-500/5 blur-[70px] rounded-full -z-10"
        variants={{
          initial: {
            scale: 0.7,
            opacity: 0.1,
            borderRadius: "50% 50% 30% 70% / 60% 40% 50% 50%",
          },
          animate: {
            scale: 0.8,
            opacity: 0.08,
            borderRadius: "30% 70% 60% 40% / 40% 60% 40% 60%",
            transition: {
              duration: 6,
              repeat: isMobile ? 0 : Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 3,
            },
          },
          static: {
            scale: 0.9,
            opacity: 0.2,
            borderRadius: "45% 55% 50% 50% / 55% 45% 50% 50%",
          },
        }}
        initial="initial"
        animate={isMobile ? "static" : "animate"}
      />

      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/[0.02] to-indigo-500/[0.03] dark:from-transparent dark:via-blue-500/[0.03] dark:to-indigo-500/[0.04] -z-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">Expertise</h2>

          <p className="mb-10 max-w-3xl">
            With expertise in full-stack, mobile, and blockchain development, I
            bring a comprehensive skill set to every project. Here&apos;s a
            breakdown of my technical proficiencies:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg shadow-lg backdrop-blur-sm bg-opacity-80 hover:shadow-xl transition-all relative overflow-hidden group"
              >
                {/* Subtle glow on hover */}
                <motion.div
                  className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                ></motion.div>

                <div className="flex items-center space-x-2 mb-6 relative z-10">
                  <span className="text-primary text-xl">{category.icon}</span>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{
                        y: -5,
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + skillIndex * 0.05 }}
                      className="flex flex-col items-center bg-secondary/60 backdrop-blur-sm rounded-lg p-3 transition-all hover:bg-primary/10"
                    >
                      <span className="text-2xl mb-2 text-primary">
                        {skill.icon}
                      </span>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
