import { motion, useInView } from "framer-motion"; // Import Framer Motion for animations and scroll detection
import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";
import { useRef } from "react";

const Pricing = () => {
  // Ref for scroll-based animation trigger
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Animation variants for title
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Animation variants for pricing cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.2, ease: "easeOut" },
    }),
  };

  return (
    <div className="mt-20 py-12" ref={ref}>
      {/* Header */}
      <motion.h2
        className="text-3xl sm:text-4xl lg:text-5xl text-center my-8 tracking-wide font-bold"
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        Pricing for{" "}
        <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
          Every Ugandan
        </span>
      </motion.h2>

      {/* Pricing Cards */}
      <div className="flex flex-wrap justify-center max-w-6xl mx-auto px-4">
        {pricingOptions.map((option, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 p-4"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={index}
          >
            <div className="p-8 border border-green-600 rounded-xl bg-neutral-900/50 shadow-md shadow-green-400/30">
              <p className="text-3xl mb-6">
                {option.title}
                {option.title === "Leader" && (
                  <span className="bg-gradient-to-r from-green-500 to-green-700 text-transparent bg-clip-text text-lg ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-6">
                <span className="text-4xl mr-2">{option.price}</span>
                {option.price !== "Free" && (
                  <span className="text-neutral-400 tracking-tight">/Month</span>
                )}
              </p>
              <ul>
                {option.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="mt-6 flex items-center">
                    <CheckCircle2 className="text-green-500 h-5 w-5" />
                    <span className="ml-3 text-neutral-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.a
                href="#signup"
                className="inline-flex justify-center items-center text-center w-full h-12 p-4 mt-12 tracking-tight text-lg bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg hover:bg-green-600 border border-green-600 transition duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {option.title === "Citizen" ? "Join Now" : "Subscribe"}
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;