import { motion } from "framer-motion"; // Import Framer Motion for animations
import video1 from "../assets/video1.mp4"; // Placeholder for CIVCON demo video
import video2 from "../assets/video2.mp4"; // Placeholder for community engagement video

const HeroSection = () => {
  // Animation variants for text and buttons
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.4 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  const videoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.6 } },
  };

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 px-4">
      {/* Main Headline */}
      <motion.h1
        className="text-4xl sm:text-5xl lg:text-6xl text-center tracking-wide font-bold"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        CIVCON: Connect, Share, Shape Uganda
        <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
          {" "}
          for a Better Future
        </span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="mt-6 text-lg text-center text-neutral-600 max-w-3xl"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        Join CIVCON to engage with leaders, raise community issues, and drive
        transparency and accountability across Uganda. Your voice matters—start
        making a difference today!
      </motion.p>

      {/* Call-to-Action Buttons */}
      <motion.div
        className="flex justify-center my-8 space-x-4"
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.a
          href="#signup"
          className="bg-gradient-to-r from-green-500 to-green-700 text-white py-3 px-6 rounded-md shadow-md"
          variants={buttonVariants}
          whileHover="hover"
        >
          Join for Free
        </motion.a>
        <motion.a
          href="#features"
          className="py-3 px-6 rounded-md border border-green-600 text-green-600 hover:bg-green-50"
          variants={buttonVariants}
          whileHover="hover"
        >
          Explore Features
        </motion.a>
      </motion.div>

      {/* Video Showcase */}
      <div className="flex flex-col sm:flex-row mt-10 justify-center gap-4 w-full max-w-5xl">
        <motion.video
          autoPlay
          loop
          muted
          className="rounded-lg w-full sm:w-1/2 border border-green-600 shadow-sm shadow-green-400"
          variants={videoVariants}
          initial="hidden"
          animate="visible"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
        <motion.video
          autoPlay
          loop
          muted
          className="rounded-lg w-full sm:w-1/2 border border-green-600 shadow-sm shadow-green-400"
          variants={videoVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      </div>
    </div>
  );
};

export default HeroSection;