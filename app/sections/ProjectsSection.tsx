"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectCard from "../components/ProjectCard";
import MobileProjectCard from "../components/MobileProjectCard";
// import Link from "next/link";

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("all");
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
      scale: 0.8,
      opacity: 0.4,
      borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
    },
    animate: {
      scale: 1,
      opacity: 0.35,
      borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
      transition: {
        duration: 8,
        repeat: isMobile ? 0 : Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    },
    // Static state for mobile
    static: {
      scale: 0.9,
      opacity: 0.35,
      borderRadius: "45% 55% 50% 50% / 55% 45% 50% 50%",
    },
  };

  // Example project data - replace with your actual projects
  const webProjects = [
    {
      title: "Portfolio Website",
      description:
        "A clean, modern portfolio website built with Next.js and Tailwind CSS featuring responsive design, animations, and dark mode support.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
      githubUrl: "#",
      liveUrl: "#",
      imageUrls: ["/bg-temp.jpg", "/bg-temp.jpg", "/bg-temp.jpg"],
    },
    {
      title: "E-commerce Platform",
      description:
        "A fully-featured e-commerce platform with product listings, shopping cart, user authentication, and payment processing.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      githubUrl: "#",
      liveUrl: "#",
      imageUrls: ["/bg-temp.jpg", "/bg-temp.jpg"],
    },
  ];

  const mobileProjects = [
    {
      title: "Fitness Tracker App",
      description:
        "A cross-platform mobile app for tracking workouts, setting fitness goals, and monitoring progress over time.",
      technologies: ["React Native", "Redux", "Firebase", "Expo"],
      githubUrl: "#",
      storeUrl: "#",
      imageUrls: ["/bg-temp.jpg", "/bg-temp.jpg", "/bg-temp.jpg"],
    },
    {
      title: "Food Delivery App",
      description:
        "A mobile app that allows users to browse restaurants, order food, and track delivery in real-time.",
      technologies: ["React Native", "Context API", "Node.js", "MongoDB"],
      githubUrl: "#",
      storeUrl: "#",
      imageUrls: ["/bg-temp.jpg", "/bg-temp.jpg"],
    },
  ];

  const web3Projects = [
    {
      title: "NFT Marketplace",
      description:
        "A decentralized marketplace for minting, buying, and selling NFTs using Ethereum smart contracts.",
      technologies: ["Solidity", "React", "Ethers.js", "IPFS", "Hardhat"],
      githubUrl: "#",
      liveUrl: "#",
      imageUrls: ["/bg-temp.jpg", "/bg-temp.jpg"],
    },
    {
      title: "DeFi Dashboard",
      description:
        "A dashboard for monitoring DeFi investments across multiple protocols with real-time data visualization.",
      technologies: ["React", "Web3.js", "Solidity", "The Graph", "ChainLink"],
      githubUrl: "#",
      liveUrl: "#",
      imageUrls: ["/bg-temp.jpg", "/bg-temp.jpg", "/bg-temp.jpg"],
    },
    {
      title: "Solana Staking Platform",
      description:
        "A platform for staking SOL tokens and earning rewards with a user-friendly interface.",
      technologies: ["Rust", "React", "Anchor", "Solana Web3.js"],
      githubUrl: "#",
      liveUrl: "#",
      imageUrls: ["/bg-temp.jpg", "/bg-temp.jpg"],
    },
  ];

  const tabs = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Projects" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "web3", label: "Web3 Projects" },
  ];

  const filteredProjects = () => {
    switch (activeTab) {
      case "web":
        return { webProjects, mobileProjects: [], web3Projects: [] };
      case "mobile":
        return { webProjects: [], mobileProjects, web3Projects: [] };
      case "web3":
        return { webProjects: [], mobileProjects: [], web3Projects };
      default:
        return { webProjects, mobileProjects, web3Projects };
    }
  };

  const {
    webProjects: filteredWeb,
    mobileProjects: filteredMobile,
    web3Projects: filteredWeb3,
  } = filteredProjects();

  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Background blobs */}
      <motion.div
        className="absolute -right-64 top-96 w-[600px] h-[600px] bg-rose-500/10 dark:bg-rose-500/5 blur-[90px] rounded-full -z-10"
        variants={blobVariants}
        initial="initial"
        animate={isMobile ? "static" : "animate"}
      />

      <motion.div
        className="absolute -left-96 top-40 w-[650px] h-[650px] bg-amber-500/10 dark:bg-amber-500/5 blur-[100px] rounded-full -z-10"
        variants={{
          initial: {
            scale: 0.85,
            opacity: 0.15,
            borderRadius: "60% 40% 30% 70% / 40% 50% 60% 40%",
          },
          animate: {
            scale: 1,
            opacity: 0.1,
            borderRadius: "40% 60% 70% 30% / 60% 40% 30% 70%",
            transition: {
              duration: 10,
              repeat: isMobile ? 0 : Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 2,
            },
          },
          static: {
            scale: 0.9,
            opacity: 0.1,
            borderRadius: "50% 50% 50% 50% / 50% 50% 50% 50%",
          },
        }}
        initial="initial"
        animate={isMobile ? "static" : "animate"}
      />

      <motion.div
        className="absolute right-1/4 bottom-96 w-[350px] h-[350px] bg-fuchsia-500/10 dark:bg-fuchsia-500/5 blur-[70px] rounded-full -z-10"
        variants={{
          initial: {
            scale: 0.7,
            opacity: 0.12,
            borderRadius: "50% 50% 40% 60% / 60% 40% 50% 50%",
          },
          animate: {
            scale: 0.9,
            opacity: 0.08,
            borderRadius: "40% 60% 50% 50% / 40% 60% 40% 60%",
            transition: {
              duration: 8,
              repeat: isMobile ? 0 : Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 1,
            },
          },
          static: {
            scale: 0.8,
            opacity: 0.08,
            borderRadius: "50% 50% 50% 50% / 50% 50% 50% 50%",
          },
        }}
        initial="initial"
        animate={isMobile ? "static" : "animate"}
      />

      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-rose-500/[0.02] to-amber-500/[0.03] dark:from-transparent dark:via-rose-500/[0.03] dark:to-amber-500/[0.04] -z-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">Projects</h2>

          {/* Project category tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full transition-all relative overflow-hidden ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/20"
                }`}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">{tab.label}</span>
                {activeTab !== tab.id && (
                  <motion.span
                    className="absolute inset-0 bg-primary opacity-0 transition-opacity"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.05 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Web Projects */}
          {filteredWeb.length > 0 && (
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center md:text-left">
                Web Applications
              </h3>
              <div className="space-y-20">
                {filteredWeb.map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    {...project}
                    isReversed={index % 2 !== 0}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Mobile Projects */}
          {filteredMobile.length > 0 && (
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center md:text-left">
                Mobile Applications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredMobile.map((project) => (
                  <MobileProjectCard key={project.title} {...project} />
                ))}
              </div>
            </motion.div>
          )}

          {/* Web3 Projects */}
          {filteredWeb3.length > 0 && (
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center md:text-left">
                Web3 Projects
              </h3>
              <div className="space-y-20">
                {filteredWeb3.map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    {...project}
                    isReversed={index % 2 !== 0}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
