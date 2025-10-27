import { motion } from "framer-motion"; // Import Framer Motion for animations
import { features } from "../constants";

const FeatureSection = () => {
  // Animation variants for feature cards
  const featureVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.2, ease: "easeOut" },
    }),
  };

  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[600px] py-12">
      {/* Header */}
      <div className="text-center">
        <motion.span
          className="bg-neutral-900 text-green-500 rounded-full h-6 text-sm font-medium px-3 py-1 uppercase"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Features
        </motion.span>
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl mt-6 lg:mt-10 tracking-wide font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Empower Your Voice with{" "}
          <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
            CIVCON
          </span>
        </motion.h2>
      </div>

      {/* Feature Cards */}
      <div className="flex flex-wrap mt-10 lg:mt-16 px-4 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 p-4"
            variants={featureVariants}
            initial="hidden"
            animate="visible"
            custom={index}
          >
            <div className="flex items-start">
              <div className="flex mx-4 h-12 w-12 p-3 bg-neutral-900 text-green-600 justify-center items-center rounded-full shadow-md shadow-green-400/50">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-2 mb-4 text-xl font-semibold text-neutral-200">
                  {feature.text}
                </h5>
                <p className="text-md text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;