import { motion, useInView } from "framer-motion"; // Import Framer Motion for animations and scroll detection
import { CheckCircle2 } from "lucide-react";
import communityImg from "../assets/civcon.png"; // Placeholder for a CIVCON-specific image
import { checklistItems } from "../constants";
import { useRef } from "react";

const HowItWorks = () => {
  // Ref for scroll-based animation trigger
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Animation variants for title
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Animation variants for image and checklist items
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: index * 0.2, ease: "easeOut" },
    }),
  };

  return (
    <div className="mt-20 py-12" ref={ref}>
      {/* Header */}
      <motion.h2
        className="text-3xl sm:text-4xl lg:text-5xl text-center mt-6 tracking-wide font-bold"
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        How CIVCON{" "}
        <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
          Empowers Uganda
        </span>
      </motion.h2>

      {/* Content */}
      <div className="flex flex-wrap justify-center max-w-6xl mx-auto mt-10 px-4">
        {/* Image Section */}
        <motion.div
          className="p-4 w-full lg:w-1/2"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
        >
          <img
            src={communityImg}
            alt="Ugandan community engaging with CIVCON"
            className="rounded-lg shadow-md shadow-green-400/50 w-full object-cover"
          />
        </motion.div>

        {/* Checklist Section */}
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex mb-10"
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={index + 1}
            >
              <div className="text-green-500 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full shadow-sm shadow-green-400/50">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl font-semibold text-neutral-200">
                  {item.title}
                </h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;