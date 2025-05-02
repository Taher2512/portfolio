"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { FiFileText } from "react-icons/fi";

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Background blob animation variants
  const blobVariants = {
    initial: {
      scale: 0.8,
      opacity: 0.2,
      borderRadius: "70% 30% 50% 50% / 50% 50% 40% 60%",
    },
    animate: {
      scale: 1,
      opacity: 0.15,
      borderRadius: "40% 60% 60% 40% / 60% 40% 50% 50%",
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
      id="about"
      className="py-20 px-6 md:px-12 bg-secondary/30 relative overflow-hidden"
    >
      {/* Background blobs */}
      <motion.div
        className="absolute -right-64 top-1/4 w-[500px] h-[500px] bg-purple-500/20 dark:bg-purple-500/10 blur-[80px] rounded-full -z-10"
        variants={blobVariants}
        initial="initial"
        animate="animate"
      />

      <motion.div
        className="absolute -left-64 bottom-1/4 w-[400px] h-[400px] bg-cyan-500/15 dark:bg-cyan-500/10 blur-[60px] rounded-full -z-10"
        variants={{
          initial: {
            scale: 0.7,
            opacity: 0.15,
            borderRadius: "50% 50% 70% 30% / 30% 50% 50% 70%",
          },
          animate: {
            scale: 0.9,
            opacity: 0.1,
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
            transition: {
              duration: 6,
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

      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-indigo-500/[0.03] to-purple-500/[0.03] dark:from-transparent dark:via-indigo-500/[0.04] dark:to-purple-500/[0.04] -z-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">About Me</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <div className="space-y-4">
              <p className="text-lg">
                I&apos;m a dedicated and innovative software developer with
                experience in developing comprehensive software solutions and a
                passion for blockchain technology.
              </p>

              <p>
                I specialize in developing CRM systems, Inventory Management
                solutions, Auction platforms, and Work Management Systems.
                I&apos;ve played a pivotal role in developing smart water meter
                projects, showcasing skills in both web and mobile app
                development.
              </p>

              <p>
                As a co-founder of a digital agency, I focus on delivering
                tailored software solutions and building strong client
                relationships. I&apos;m actively expanding my expertise in
                blockchain technology through ongoing learning initiatives,
                having successfully developed DApps and smart contracts.
              </p>

              <p>
                I&apos;m currently studying Computer Science and Engineering at
                Amity University, Kolkata, where I continue to hone my technical
                skills and knowledge.
              </p>

              <div className="mt-6">
                <Link
                  href="/my_resume.pdf"
                  target="_blank"
                  className="bg-primary px-5 py-3 text-primary-foreground rounded-md hover:brightness-110 transition-all inline-flex items-center gap-2 relative overflow-hidden group"
                >
                  <FiFileText className="text-primary-foreground" />
                  <span className="relative z-10">View Resume</span>
                  <motion.span
                    className="absolute inset-0 bg-white dark:bg-black opacity-0 group-hover:opacity-20 transition-opacity"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <motion.div
                className="relative w-full max-w-md aspect-square bg-primary/10 rounded-lg overflow-hidden border-2 border-primary p-4"
                whileHover={{
                  boxShadow: "0 0 25px rgba(124, 58, 237, 0.15)",
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/profile-image.jpg"
                  alt="Taher Khasamwala"
                  fill
                  className="object-cover rounded"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
