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
    threshold: 0.2, // Increased threshold for better mobile detection
    rootMargin: "50px 0px", // Add margin to trigger earlier
  });

  // Fall back to showing content after 1 second regardless of scroll position
  const [forceShow, setForceShow] = useState(false);

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

  // Fallback to show projects if intersection observer fails
  useEffect(() => {
    const timer = setTimeout(() => {
      setForceShow(true);
    }, 1000);

    return () => clearTimeout(timer);
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

  // Project data with actual images from public/projects directory
  const webProjects = [
    {
      title: "SynapsisUI",
      description:
        "A comprehensive UI design system featuring modern components and utilities for building responsive web applications.",
      technologies: ["React", "TypeScript", "CSS Modules", "Storybook"],
      githubUrl: "#",
      liveUrl: "https://www.synapsisui.com",
      imageUrls: [
        "/projects/synapsisui/1.png",
        "/projects/synapsisui/2.png",
        "/projects/synapsisui/3.png",
        "/projects/synapsisui/4.png",
        "/projects/synapsisui/5.png",
        "/projects/synapsisui/6.png",
        "/projects/synapsisui/7.png",
        "/projects/synapsisui/8.png",
        "/projects/synapsisui/9.png",
      ],
    },
    {
      title: "Promptopia",
      description:
        "A platform for sharing AI prompts, allowing users to discover, create, and share creative prompts for AI tools.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "MongoDB",
      ],
      githubUrl: "#",
      liveUrl: "https://promptopia-six-ruddy.vercel.app",
      imageUrls: ["/projects/promptopia/1.png", "/projects/promptopia/2.png"],
    },
    {
      title: "DokLink",
      description:
        "A document management and collaboration platform for teams to organize, share, and work with documents seamlessly.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
      githubUrl: "#",
      liveUrl: "https://www.doklink.in",
      imageUrls: [
        "/projects/doklink/1.png",
        "/projects/doklink/2.png",
        "/projects/doklink/3.png",
        "/projects/doklink/4.png",
        "/projects/doklink/5.png",
        "/projects/doklink/6.png",
        "/projects/doklink/7.png",
        "/projects/doklink/8.png",
        "/projects/doklink/9.png",
        "/projects/doklink/10.png",
        "/projects/doklink/11.png",
      ],
    },
  ];

  const mobileProjects = [
    {
      title: "Food Delivery App",
      description:
        "A modern food delivery application with real-time order tracking, restaurant discovery, and seamless payment integration.",
      technologies: [
        "React Native",
        "Redux",
        "Firebase",
        "Google Maps API",
        "Stripe",
      ],
      githubUrl: "#",
      storeUrl: "#",
      imageUrls: [
        "/projects/food-delivery-app/1.jpg",
        "/projects/food-delivery-app/2.jpg",
        "/projects/food-delivery-app/3.jpg",
        "/projects/food-delivery-app/4.jpg",
        "/projects/food-delivery-app/5.jpg",
        "/projects/food-delivery-app/6.jpg",
      ],
    },
    {
      title: "DokLink Mobile",
      description:
        "Mobile application for accessing and managing documents on the go, with offline support and push notifications.",
      technologies: ["React Native", "Redux", "Firebase", "Expo"],
      githubUrl: "#",
      storeUrl: "#",
      imageUrls: [
        "/projects/doklink-app/1.jpeg",
        "/projects/doklink-app/2.jpeg",
        "/projects/doklink-app/3.jpeg",
        "/projects/doklink-app/4.jpeg",
        "/projects/doklink-app/5.jpeg",
        "/projects/doklink-app/6.jpeg",
        "/projects/doklink-app/7.jpeg",
        "/projects/doklink-app/8.jpeg",
        "/projects/doklink-app/9.jpeg",
        "/projects/doklink-app/10.jpeg",
        "/projects/doklink-app/11.jpeg",
        "/projects/doklink-app/12.jpeg",
        "/projects/doklink-app/13.jpeg",
        "/projects/doklink-app/14.jpeg",
      ],
    },
    {
      title: "DCS App",
      description:
        "A field service management application for maintenance technicians to track work orders and report on completed jobs.",
      technologies: ["React Native", "Context API", "Node.js", "MongoDB"],
      githubUrl: "#",
      storeUrl: "#",
      imageUrls: [
        "/projects/dcs-app/1.jpg",
        "/projects/dcs-app/2.jpg",
        "/projects/dcs-app/3.jpg",
        "/projects/dcs-app/4.jpg",
        "/projects/dcs-app/5.jpg",
        "/projects/dcs-app/6.jpg",
        "/projects/dcs-app/7.jpg",
        "/projects/dcs-app/8.jpg",
        "/projects/dcs-app/9.jpg",
        "/projects/dcs-app/10.jpg",
      ],
    },
    {
      title: "SynapsisUI Mobile",
      description:
        "The mobile companion to SynapsisUI, providing native components for building cross-platform mobile applications.",
      technologies: ["React Native", "TypeScript", "Expo", "Jest"],
      githubUrl: "#",
      storeUrl: "#",
      imageUrls: [
        "/projects/synapsisui-app/1.png",
        "/projects/synapsisui-app/2.png",
        "/projects/synapsisui-app/3.png",
      ],
    },
    // {
    //   title: "SuperSteel",
    //   description:
    //     "A manufacturing management system for steel production companies, tracking inventory, production, and sales.",
    //   technologies: [
    //     "React Native",
    //     "Redux",
    //     "Node.js",
    //     "Firebase",
    //     "Chart.js",
    //   ],
    //   githubUrl: "#",
    //   storeUrl: "#",
    //   imageUrls: [
    //     "/projects/supersteel-app/1.png",
    //     "/projects/supersteel-app/2.png",
    //     "/projects/supersteel-app/3.png",
    //     "/projects/supersteel-app/4.png",
    //     "/projects/supersteel-app/5.png",
    //   ],
    // },
    {
      title: "DeDocs",
      description:
        "A decentralized document verification and storage solution with blockchain-based proof of existence.",
      technologies: ["Flutter", "Dart", "Firebase", "Solidity"],
      githubUrl: "#",
      storeUrl: "#",
      imageUrls: [
        "/projects/dedocs-app/1.jpeg",
        "/projects/dedocs-app/2.jpeg",
        "/projects/dedocs-app/3.jpeg",
        "/projects/dedocs-app/4.jpeg",
        "/projects/dedocs-app/5.jpeg",
        "/projects/dedocs-app/6.jpeg",
      ],
    },
    {
      title: "HICF App",
      description:
        "A healthcare information collection framework for medical professionals to gather and analyze patient data securely.",
      technologies: ["React Native", "Redux Toolkit", "Node.js", "MongoDB"],
      githubUrl: "#",
      storeUrl: "#",
      imageUrls: [
        "/projects/hicf-app/1.jpg",
        "/projects/hicf-app/2.jpg",
        "/projects/hicf-app/3.jpg",
        "/projects/hicf-app/4.jpg",
        "/projects/hicf-app/5.jpg",
        "/projects/hicf-app/6.jpg",
      ],
    },
    {
      title: "Scrapify",
      description:
        "An application for recycling centers and users to manage and track recyclable materials with reward incentives.",
      technologies: ["React Native", "Redux", "Firebase", "Maps API"],
      githubUrl: "#",
      storeUrl: "#",
      imageUrls: [
        "/projects/scrapify-app/1.jpeg",
        "/projects/scrapify-app/2.jpeg",
        "/projects/scrapify-app/3.jpeg",
        "/projects/scrapify-app/4.jpeg",
        "/projects/scrapify-app/5.jpeg",
        "/projects/scrapify-app/6.jpeg",
        "/projects/scrapify-app/7.jpeg",
      ],
    },
  ];

  const web3Projects = [
    {
      title: "CarbonDEX Exchange",
      description:
        "A decentralized exchange specifically designed for trading carbon credits and environmental assets with real-time pricing.",
      technologies: ["React", "Web3.js", "Solidity", "The Graph", "ChainLink"],
      githubUrl: "#",
      liveUrl: "https://carbon-dex.vercel.app",
      imageUrls: [
        "/projects/carbondex/1.png",
        "/projects/carbondex/2.png",
        "/projects/carbondex/3.png",
        "/projects/carbondex/4.png",
        "/projects/carbondex/5.png",
        "/projects/carbondex/6.png",
        "/projects/carbondex/7.png",
        "/projects/carbondex/8.png",
      ],
    },
    {
      title: "DigiVote DAO",
      description:
        "A decentralized autonomous organization platform for community governance with transparent voting and proposal systems.",
      technologies: ["React", "Solidity", "The Graph", "IPFS", "Ethers.js"],
      githubUrl: "#",
      liveUrl: "#",
      imageUrls: [
        "/projects/digivote/1.jpeg",
        "/projects/digivote/2.jpeg",
        "/projects/digivote/3.jpeg",
        "/projects/digivote/4.jpeg",
        "/projects/digivote/5.jpeg",
      ],
    },
    {
      title: "Merit Mint",
      description:
        "An NFT platform for issuing verifiable credentials and certificates as digital badges on blockchain.",
      technologies: ["Solidity", "React", "Ethers.js", "IPFS", "Hardhat"],
      githubUrl: "#",
      liveUrl: "#",
      imageUrls: [
        "/projects/merit-mint/1.jpeg",
        "/projects/merit-mint/2.png",
        "/projects/merit-mint/3.jpeg",
        "/projects/merit-mint/4.jpeg",
        "/projects/merit-mint/5.png",
        "/projects/merit-mint/6.jpeg",
      ],
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
          animate={
            inView || forceShow ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
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
                {/* Display all projects on both mobile and desktop */}
                {filteredMobile.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <MobileProjectCard {...project} />
                  </motion.div>
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
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <ProjectCard {...project} isReversed={index % 2 !== 0} />
                  </motion.div>
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
