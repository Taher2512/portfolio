"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import CarouselComponent from "./CarouselComponent";

interface MobileProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  storeUrl?: string;
  imageUrls: string[];
}

const MobileProjectCard = ({
  title,
  description,
  technologies,
  githubUrl,
  storeUrl,
  imageUrls,
}: MobileProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col items-center gap-6 p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-all"
    >
      <h3 className="text-2xl font-bold">{title}</h3>

      {/* Mobile mockup with carousel */}
      <motion.div
        className="relative w-full max-w-[280px] overflow-hidden rounded-[24px]"
        whileHover={{
          y: -5,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Device frame - even bezels on all sides */}
        <div className="relative border-[8px] border-foreground rounded-[24px] bg-foreground overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.1)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.1)]">
          {/* Phone screen content */}
          <div className="w-full aspect-[9/16] overflow-hidden bg-gradient-to-br from-background/90 to-background rounded-[16px]">
            <CarouselComponent images={imageUrls} isMobile={true} />
          </div>
        </div>

        {/* Device reflection overlay */}
        <div className="absolute inset-[8px] rounded-[16px] pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-20"></div>
        </div>
      </motion.div>

      <div className="w-full">
        <p className="mb-4">{description}</p>

        <div className="flex flex-wrap mb-4 gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-4">
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
              aria-label={`GitHub repo for ${title}`}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <FiGithub /> Code
            </motion.a>
          )}
          {storeUrl && (
            <motion.a
              href={storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
              aria-label={`App Store link for ${title}`}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <FiExternalLink /> Download
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default MobileProjectCard;
