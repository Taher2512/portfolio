"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import CarouselComponent from "./CarouselComponent";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrls: string[];
  isReversed?: boolean;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  imageUrls,
  isReversed = false,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
        isReversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Project image/carousel section */}
      <div className={`lg:col-span-7 ${isReversed ? "lg:order-2" : ""}`}>
        <CarouselComponent images={imageUrls} />
      </div>

      {/* Project details section */}
      <div
        className={`lg:col-span-5 ${
          isReversed ? "lg:order-1 lg:text-right" : ""
        }`}
      >
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className="bg-card p-5 rounded-lg shadow-lg mb-4">
          <p>{description}</p>
        </div>

        <div className="flex flex-wrap mb-4 gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className={`flex gap-4 ${isReversed ? "lg:justify-end" : ""}`}>
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
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
              aria-label={`Live demo for ${title}`}
            >
              <FiExternalLink /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
