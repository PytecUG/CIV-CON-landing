import { motion, useInView } from "framer-motion"; // Import Framer Motion for animations and scroll detection
import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import { useRef } from "react";

const Footer = () => {
  // Ref for scroll-based animation trigger
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Animation variants for footer sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.2, ease: "easeOut" },
    }),
  };

  return (
    <footer className="mt-20 border-t py-12 border-green-600 bg-neutral-900/50" ref={ref}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {/* Resources Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
        >
          <h3 className="text-lg font-semibold mb-4 text-neutral-200">Resources</h3>
          <ul className="space-y-3">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-green-400 transition-colors duration-200"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Platform Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={1}
        >
          <h3 className="text-lg font-semibold mb-4 text-neutral-200">Platform</h3>
          <ul className="space-y-3">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-green-400 transition-colors duration-200"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Community Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={2}
        >
          <h3 className="text-lg font-semibold mb-4 text-neutral-200">Community</h3>
          <ul className="space-y-3">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-green-400 transition-colors duration-200"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Additional Footer Content */}
      <motion.div
        className="mt-12 text-center text-neutral-400 text-sm"
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={3}
      >
        <p>
          &copy; {new Date().getFullYear()} CIVCON. All rights reserved. |{" "}
          <a href="#privacy" className="hover:text-green-400">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#terms" className="hover:text-green-400">
            Terms of Service
          </a>
        </p>
        <p className="mt-2">
          Connecting Ugandans for a transparent and accountable future.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;