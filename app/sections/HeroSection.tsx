"use client";

import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiCode,
  FiTerminal,
  FiDatabase,
} from "react-icons/fi";
import Link from "next/link";

const HeroSection = () => {
  // Text animation for the typing effect - made faster
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 120,
      },
    },
  };

  const sentence = "I build things for the web & mobile.";

  // Background blob animation
  const blobVariants = {
    initial: {
      scale: 0.8,
      opacity: 0.4,
      borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
    },
    animate: {
      scale: 1,
      opacity: 0.3,
      borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-20 pb-8 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Animated background blobs with increased opacity */}
      <motion.div
        className="absolute -right-64 md:-right-96 top-1/3 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-primary/40 dark:bg-primary/20 blur-[80px] rounded-full -z-10"
        variants={blobVariants}
        initial="initial"
        animate="animate"
      />

      <motion.div
        className="absolute -left-96 bottom-1/4 w-[600px] h-[600px] bg-indigo-500/25 dark:bg-indigo500/15 blur-[100px] rounded-full -z-10"
        variants={{
          initial: {
            scale: 0.7,
            opacity: 0.3,
            borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
          },
          animate: {
            scale: 1,
            opacity: 0.25,
            borderRadius: "50% 40% 30% 70% / 60% 40% 60% 30%",
            transition: {
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 1,
            },
          },
        }}
        initial="initial"
        animate="animate"
      />

      <motion.div
        className="absolute left-1/3 top-32 w-[300px] h-[300px] bg-cyan-500/25 dark:bg-cyan-500/15 blur-[80px] rounded-full -z-10"
        variants={{
          initial: {
            scale: 0.6,
            opacity: 0.25,
            borderRadius: "30% 70% 50% 50% / 50% 50% 70% 30%",
          },
          animate: {
            scale: 0.8,
            opacity: 0.2,
            borderRadius: "50% 50% 30% 70% / 30% 70% 50% 50%",
            transition: {
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 2,
            },
          },
        }}
        initial="initial"
        animate="animate"
      />

      {/* Background tech icons - increased opacity for better visibility */}
      <motion.div
        className="absolute inset-0 w-full h-full -z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        {/* Terminal symbol top left */}
        <motion.div
          className="absolute top-32 left-20 text-5xl md:text-7xl text-primary/40 dark:text-primary/35 select-none hidden md:block"
          initial={{ opacity: 0 }}
          animate={{
            y: [0, -15, 0],
            opacity: 0.4,
            transition: {
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
              opacity: {
                duration: 2,
              },
            },
          }}
        >
          <FiTerminal />
        </motion.div>

        {/* Database symbol top right */}
        <motion.div
          className="absolute top-40 right-32 text-5xl md:text-7xl text-primary/40 dark:text-primary/35 select-none hidden md:block"
          initial={{ opacity: 0 }}
          animate={{
            y: [0, -10, 0],
            opacity: 0.4,
            transition: {
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              },
              opacity: {
                duration: 2,
              },
            },
          }}
        >
          <FiDatabase />
        </motion.div>

        {/* Code symbol bottom left */}
        <motion.div
          className="absolute bottom-40 left-1/4 text-5xl md:text-7xl text-primary/40 dark:text-primary/35 select-none hidden md:block"
          initial={{ opacity: 0 }}
          animate={{
            y: [0, 15, 0],
            opacity: 0.4,
            transition: {
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              },
              opacity: {
                duration: 2,
              },
            },
          }}
        >
          <FiCode />
        </motion.div>

        {/* Code closing tag bottom right - kept original position, size, and opacity */}
        <motion.div
          className="absolute -right-10 md:right-10 bottom-10 font-mono text-4xl md:text-6xl text-primary/15 dark:text-primary/15 select-none hidden md:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          &lt;/&gt;
        </motion.div>
      </motion.div>

      {/* Subtle gradient background - increased opacity */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/[0.05] to-blue-500/[0.05] dark:from-transparent dark:via-purple-500/[0.06] dark:to-blue-500/[0.06] -z-20"></div>

      {/* Enhanced grid pattern with animation and higher opacity */}
      <motion.div
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMzMjMyMzIiIGZpbGwtb3BhY2l0eT0iMC4wNSIgZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0xaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6Ii8+PC9nPjwvc3ZnPg==')] opacity-50 dark:opacity-60 -z-20"
        initial={{ scale: 1.05, opacity: 0.4 }}
        animate={{
          scale: [1.05, 1, 1.05],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      ></motion.div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4"
        >
          <motion.h2
            className="text-lg md:text-xl text-primary font-mono"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hello, my name is
          </motion.h2>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Taher Khasamwala.
          </motion.h1>

          <motion.div
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.04, delayChildren: 0.8 }}
          >
            {sentence.split("").map((char, index) => (
              <motion.span
                key={`${char}-${index}`}
                variants={letterVariants}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>

          <motion.p
            className="text-lg max-w-2xl mt-4 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            I&apos;m a full-stack developer specializing in building exceptional
            digital experiences. With expertise in web, mobile, and blockchain
            technologies, I craft powerful and user-friendly applications.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.7 }}
          >
            <Link
              href="#projects"
              className="bg-primary px-5 py-3 text-primary-foreground rounded-md hover:brightness-110 transition-all relative overflow-hidden group"
            >
              <span className="relative z-10">View My Work</span>
              <motion.span
                className="absolute inset-0 bg-white dark:bg-black opacity-0 group-hover:opacity-20 transition-opacity"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>

            <Link
              href="#contact"
              className="border border-primary px-5 py-3 text-foreground rounded-md hover:bg-primary/10 transition-all relative overflow-hidden group"
            >
              <span className="relative z-10">Contact Me</span>
              <motion.span
                className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>

          <motion.div
            className="flex gap-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.9 }}
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="text-2xl text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <FiGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="text-2xl text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </motion.a>
            <motion.a
              href="mailto:taherabbkhasamwala@gmail.com"
              whileHover={{ y: -4 }}
              className="text-2xl text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <FiMail />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
