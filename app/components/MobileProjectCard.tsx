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
      className="flex flex-col items-center gap-6 p-6 bg-card rounded-lg shadow-lg"
    >
      <h3 className="text-2xl font-bold">{title}</h3>

      {/* Mobile mockup with carousel */}
      <div className="relative w-full max-w-[280px] pt-10 bg-secondary rounded-t-xl overflow-hidden">
        {/* Phone frame top bar */}
        <div className="absolute top-0 left-0 right-0 h-10 bg-foreground flex justify-center items-center rounded-t-xl">
          <div className="w-1/3 h-4 rounded-full bg-muted/50"></div>
        </div>

        {/* Phone screen content */}
        <div className="w-full overflow-hidden">
          <CarouselComponent images={imageUrls} isMobile={true} />
        </div>

        {/* Phone frame bottom bar */}
        <div className="w-full h-12 bg-foreground flex justify-center items-center rounded-b-xl">
          <div className="w-10 h-4 rounded-full bg-muted/50"></div>
        </div>
      </div>

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
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
              aria-label={`GitHub repo for ${title}`}
            >
              <FiGithub /> Code
            </a>
          )}
          {storeUrl && (
            <a
              href={storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
              aria-label={`App Store link for ${title}`}
            >
              <FiExternalLink /> Download
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default MobileProjectCard;
