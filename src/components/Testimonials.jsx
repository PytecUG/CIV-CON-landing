import { motion, useInView } from "framer-motion"; // Import Framer Motion for animations and scroll detection
import { testimonials } from "../constants";
import { useRef } from "react";

const Testimonials = () => {
  // Ref for scroll-based animation trigger
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Animation variants for title
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Animation variants for testimonial cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.2, ease: "easeOut" },
    }),
  };

  return (
    <div className="mt-20 tracking-wide py-12" ref={ref}>
      {/* Header */}
      <motion.h2
        className="text-3xl sm:text-4xl lg:text-5xl text-center my-8 lg:my-16 font-bold"
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        What Ugandans Are Saying About{" "}
        <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
          CIVCON
        </span>
      </motion.h2>

      {/* Testimonial Cards */}
      <div className="flex flex-wrap justify-center max-w-6xl mx-auto px-4">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 px-4 py-3"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={index}
          >
            <div className="bg-neutral-900 rounded-lg p-6 text-md border border-green-600 shadow-md shadow-green-400/30">
              <p className="text-neutral-300">{testimonial.text}</p>
              <div className="flex mt-6 items-start">
                <img
                  className="w-12 h-12 mr-4 rounded-full border border-green-500"
                  src={testimonial.image}
                  alt={`${testimonial.user}'s profile`}
                />
                <div>
                  <h6 className="text-neutral-200 font-semibold">{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-500">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;