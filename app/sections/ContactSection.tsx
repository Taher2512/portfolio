"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiMail,
  FiSend,
  FiMapPin,
  FiPhone,
  FiAlertCircle,
} from "react-icons/fi";
import { submitContactForm } from "../firebase/contactService";

const ContactSection = () => {
  // const [ref, inView] = useInView({
  //   triggerOnce: true,
  //   threshold: 0.1,
  // });

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

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const result = await submitContactForm(formState);

      if (result.success) {
        setIsSubmitted(true);
        setFormState({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setError("There was a problem sending your message. Please try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again later.");
      console.error("Contact form error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants for background blobs
  const blobVariants = {
    initial: {
      scale: 0.8,
      opacity: 0.45,
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

  const contactInfo = [
    {
      icon: <FiMail className="h-5 w-5" />,
      title: "Email",
      content: "taherabbkhasamwala@gmail.com",
      link: "mailto:taherabbkhasamwala@gmail.com",
    },
    {
      icon: <FiMapPin className="h-5 w-5" />,
      title: "Location",
      content: "Kolkata, India",
      link: "https://maps.google.com/?q=Kolkata,India",
    },
    {
      icon: <FiPhone className="h-5 w-5" />,
      title: "Phone",
      content: "+91 827-497-6907",
      link: "tel:+1234567890",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Background blobs */}
      <motion.div
        className="absolute left-0 top-20 w-[400px] h-[400px] bg-blue-500/10 dark:bg-blue-500/5 blur-[80px] rounded-full -z-10"
        variants={blobVariants}
        initial="initial"
        animate={isMobile ? "static" : "animate"}
      />

      <motion.div
        className="absolute right-0 bottom-10 w-[450px] h-[450px] bg-purple-500/10 dark:bg-purple-500/5 blur-[90px] rounded-full -z-10"
        variants={{
          initial: {
            scale: 0.9,
            opacity: 0.1,
            borderRadius: "60% 40% 50% 50% / 40% 60% 40% 60%",
          },
          animate: {
            scale: 1,
            opacity: 0.12,
            borderRadius: "40% 60% 30% 70% / 60% 40% 70% 30%",
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
            opacity: 0.12,
            borderRadius: "45% 55% 50% 50% / 55% 45% 50% 50%",
          },
        }}
        initial="initial"
        animate={isMobile ? "static" : "animate"}
      />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/[0.03] to-purple-500/[0.03] dark:from-transparent dark:via-blue-500/[0.03] dark:to-purple-500/[0.03] -z-20"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get In <span className="text-primary">Touch</span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            I&apos;m always interested in hearing about new projects and
            opportunities. Feel free to reach out if you want to connect!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact cards */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                target={info.title === "Location" ? "_blank" : undefined}
                rel={
                  info.title === "Location" ? "noopener noreferrer" : undefined
                }
                className="bg-card p-6 rounded-lg border border-border flex items-start gap-4 hover:border-primary/50 transition-colors group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "rgba(124, 58, 237, 0.03)",
                }}
              >
                <motion.div
                  className="p-3 bg-primary/10 rounded-full text-primary"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {info.icon}
                </motion.div>
                <div>
                  <h3 className="font-semibold mb-1">{info.title}</h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {info.content}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            className="lg:col-span-3 bg-card p-8 rounded-lg border border-border relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Small decorative blob for the form */}
            <motion.div
              className="absolute -top-10 -right-10 w-[150px] h-[150px] bg-primary/10 dark:bg-primary/5 blur-[40px] rounded-full -z-10"
              animate={{
                scale: [1, 1.1, 1],
                borderRadius: [
                  "60% 40% 30% 70% / 60% 30% 70% 40%",
                  "40% 60% 70% 30% / 40% 70% 30% 60%",
                  "60% 40% 30% 70% / 60% 30% 70% 40%",
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />

            {isSubmitted ? (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-primary/10 rounded-full text-primary"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  <FiSend size={24} />
                </motion.div>
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thank you for your message. I&apos;ll get back to you as soon
                  as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>

                {/* Error message display */}
                {error && (
                  <motion.div
                    className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center text-red-500"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiAlertCircle className="mr-2 shrink-0" />
                    <p className="text-sm">{error}</p>
                  </motion.div>
                )}

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <motion.div
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-lg bg-background border border-border focus:border-primary focus:ring focus:ring-primary/25 transition-all outline-none"
                        placeholder="Your name"
                      />
                    </motion.div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <motion.div
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-lg bg-background border border-border focus:border-primary focus:ring focus:ring-primary/25 transition-all outline-none"
                        placeholder="Your email"
                      />
                    </motion.div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <motion.div
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full p-3 rounded-lg bg-background border border-border focus:border-primary focus:ring focus:ring-primary/25 transition-all outline-none resize-none"
                        placeholder="Your message"
                      ></textarea>
                    </motion.div>
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                    whileHover={{ y: -2, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <span>Send Message</span>
                        <FiSend className="ml-2" />
                      </div>
                    )}
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
