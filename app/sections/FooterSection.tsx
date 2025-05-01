"use client";

import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiHeart,
} from "react-icons/fi";
import Link from "next/link";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  // Background blob animation variants
  const blobVariants = {
    initial: {
      scale: 0.85,
      opacity: 0.15,
      borderRadius: "40% 60% 70% 30% / 60% 40% 30% 70%",
    },
    animate: {
      scale: 1,
      opacity: 0.08,
      borderRadius: "50% 50% 40% 60% / 30% 70% 60% 40%",
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    },
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FiGithub />,
      url: "https://github.com/Taher2512",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      url: "https://www.linkedin.com/in/taherk18/",
    },
    {
      name: "Twitter",
      icon: <FiTwitter />,
      url: "https://x.com/taherk18",
    },
    {
      name: "Email",
      icon: <FiMail />,
      url: "mailto:taherabbkhasamwala@gmail.com",
    },
  ];

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Expertise", href: "#expertise" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-card py-12 px-6 md:px-12 relative overflow-hidden">
      {/* Enhanced Background blobs */}
      <motion.div
        className="absolute left-1/4 top-20 w-[500px] h-[500px] bg-blue-500/15 dark:bg-blue-500/10 blur-[90px] rounded-full -z-10"
        variants={blobVariants}
        initial="initial"
        animate="animate"
      />

      <motion.div
        className="absolute right-1/3 bottom-10 w-[450px] h-[450px] bg-purple-500/15 dark:bg-purple-500/10 blur-[80px] rounded-full -z-10"
        variants={{
          initial: {
            scale: 0.9,
            opacity: 0.12,
            borderRadius: "60% 40% 50% 50% / 40% 60% 40% 60%",
          },
          animate: {
            scale: 1,
            opacity: 0.15,
            borderRadius: "40% 60% 30% 70% / 60% 40% 70% 30%",
            transition: {
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 1.5,
            },
          },
        }}
        initial="initial"
        animate="animate"
      />

      {/* Additional blob animations */}
      <motion.div
        className="absolute left-10 bottom-20 w-[400px] h-[400px] bg-teal-500/10 dark:bg-teal-500/8 blur-[85px] rounded-full -z-10"
        variants={{
          initial: {
            scale: 0.85,
            opacity: 0.08,
            borderRadius: "40% 60% 50% 50% / 60% 40% 50% 50%",
          },
          animate: {
            scale: 1.05,
            opacity: 0.12,
            borderRadius: "60% 40% 70% 30% / 40% 60% 30% 70%",
            transition: {
              duration: 14,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 2.5,
            },
          },
        }}
        initial="initial"
        animate="animate"
      />

      <motion.div
        className="absolute right-10 top-1/3 w-[380px] h-[380px] bg-amber-500/10 dark:bg-amber-500/8 blur-[75px] rounded-full -z-10"
        variants={{
          initial: {
            scale: 0.9,
            opacity: 0.07,
            borderRadius: "50% 50% 60% 40% / 40% 60% 50% 50%",
          },
          animate: {
            scale: 1.1,
            opacity: 0.1,
            borderRadius: "40% 60% 50% 50% / 60% 40% 40% 60%",
            transition: {
              duration: 16,
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

      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-purple-500/[0.04] to-teal-500/[0.03] dark:from-blue-500/[0.02] dark:via-purple-500/[0.03] dark:to-teal-500/[0.02] -z-20"></div>

      {/* New subtle noise texture */}
      <motion.div
        className="absolute inset-0 opacity-20 dark:opacity-30 -z-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 0.2 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      ></motion.div>

      {/* New subtle grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMzMjMyMzIiIGZpbGwtb3BhY2l0eT0iMC4wMSIgZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDJ2NGgtMnYtNHptMi0xaDJ2MWgtMnYtMXptLTIgMGgydjFoLTJ2LTF6Ii8+PC9nPjwvc3ZnPg==')] opacity-30 dark:opacity-40 -z-20"></div>

      {/* New environment */}
      <motion.div
        className="absolute -top-20 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-card opacity-50 blur-2xl -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-10"
        >
          {/* Logo and tagline */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#home"
                className="font-mono font-bold text-2xl hover:text-primary transition-colors inline-block"
              >
                <motion.span
                  initial={{ opacity: 0.8 }}
                  whileHover={{
                    opacity: 1,
                    textShadow: "0 0 8px rgba(124, 58, 237, 0.5)",
                  }}
                >
                  <span className="text-primary">&lt;</span>TK
                  <span className="text-primary">/&gt;</span>
                </motion.span>
              </Link>
            </motion.div>
            <motion.p
              className="mt-4 text-muted-foreground"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Full Stack Developer specializing in building exceptional digital
              experiences for web, mobile, and blockchain platforms.
            </motion.p>

            {/* Social links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + index * 0.1,
                  }}
                  whileHover={{
                    y: -4,
                    color: "rgb(124, 58, 237)",
                    scale: 1.1,
                  }}
                  className="text-xl text-muted-foreground hover:text-primary transition-colors relative"
                  aria-label={link.name}
                >
                  {link.icon}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary origin-left rounded-full"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + index * 0.1,
                  }}
                >
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors relative group inline-block"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <motion.span
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary scale-0 origin-left group-hover:scale-100 transition-transform duration-300 rounded-full"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileHover={{ x: 3 }}
              >
                Kolkata, India
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                whileHover={{ x: 3 }}
              >
                <a
                  href="mailto:taherabbkhasamwala@gmail.com"
                  className="hover:text-primary transition-colors relative inline-block group"
                >
                  <span className="relative z-10">
                    taherabbkhasamwala@gmail.com
                  </span>
                  <motion.span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary scale-0 origin-left group-hover:scale-100 transition-transform duration-300 rounded-full" />
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                whileHover={{ x: 3 }}
              >
                <a
                  href="tel:+1234567890"
                  className="hover:text-primary transition-colors relative inline-block group"
                >
                  <span className="relative z-10">+91 827-497-6907</span>
                  <motion.span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary scale-0 origin-left group-hover:scale-100 transition-transform duration-300 rounded-full" />
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.hr
          className="border-border my-8"
          initial={{ opacity: 0, width: "0%" }}
          animate={{ opacity: 1, width: "100%" }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />

        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {currentYear} Taher Khasamwala. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
