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
        className="relative w-full max-w-[280px] overflow-hidden rounded-[36px]"
        whileHover={{
          y: -5,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Device frame - more premium design with subtle border and notch */}
        <div className="relative pt-8 border-[6px] border-foreground rounded-[36px] bg-foreground overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.1)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.1)]">
          {/* Phone notch */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-foreground flex justify-center items-center rounded-t-[28px] overflow-hidden">
            <div className="w-28 h-5 bg-background/10 rounded-[12px] flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-primary/30 mr-1 backdrop-blur-sm"></div>
            </div>
          </div>

          {/* Phone screen content */}
          <div className="w-full overflow-hidden bg-gradient-to-br from-background/90 to-background">
            <CarouselComponent images={imageUrls} isMobile={true} />
          </div>

          {/* Subtle home indicator - modern touch */}
          <div className="w-full h-10 bg-foreground flex justify-center items-center rounded-b-[28px]">
            <div className="w-1/3 h-1 rounded-full bg-primary/20 backdrop-blur-sm"></div>
          </div>
        </div>

        {/* Device reflection overlay */}
        <div className="absolute inset-[8px] rounded-[28px] pointer-events-none overflow-hidden">
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
