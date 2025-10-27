import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Users, Target, Heart } from "lucide-react"; // Icons for sections
import teamImage from "../assets/team.jpg"; // Placeholder for team image
import impactImage from "../assets/impact.png"; // Placeholder for impact image

const About = () => {
  // Refs for scroll-based animations
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const teamRef = useRef(null);
  const impactRef = useRef(null);

  const missionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const visionInView = useInView(visionRef, { once: true, amount: 0.3 });
  const teamInView = useInView(teamRef, { once: true, amount: 0.3 });
  const impactInView = useInView(impactRef, { once: true, amount: 0.3 });

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Animation variants for staggered team cards
  const teamCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.2, ease: "easeOut" },
    }),
  };

  return (
    <div className="py-12 bg-neutral-900 text-neutral-200">
      <div className="container px-4 mx-auto max-w-6xl">
        {/* Hero Section */}
        <motion.section
          className="text-center py-16"
          variants={sectionVariants}
          initial="hidden"
          animate={missionInView ? "visible" : "hidden"}
          ref={missionRef}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
              CIVCON
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl mx-auto">
            CIVCON is Uganda’s leading platform for civic engagement, connecting citizens, leaders, and communities to foster transparency, accountability, and progress.
          </p>
        </motion.section>

        {/* Mission Section */}
        <motion.section
          className="py-16 flex flex-col md:flex-row items-center gap-8"
          variants={sectionVariants}
          initial="hidden"
          animate={missionInView ? "visible" : "hidden"}
          ref={missionRef}
        >
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4 flex items-center">
              <Target className="w-8 h-8 mr-2 text-green-500" /> Our Mission
            </h2>
            <p className="text-neutral-300">
              To empower every Ugandan to actively participate in shaping their community through open dialogue, accessible information, and collaborative decision-making.
            </p>
          </div>
          <div className="md:w-1/2">
            <motion.img
              src="https://via.placeholder.com/600x400?text=Mission"
              alt="CIVCON Mission"
              className="rounded-lg shadow-md shadow-green-400/30"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.section>

        {/* Vision Section */}
        <motion.section
          className="py-16 flex flex-col md:flex-row-reverse items-center gap-8"
          variants={sectionVariants}
          initial="hidden"
          animate={visionInView ? "visible" : "hidden"}
          ref={visionRef}
        >
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4 flex items-center">
              <MapPin className="w-8 h-8 mr-2 text-green-500" /> Our Vision
            </h2>
            <p className="text-neutral-300">
              A Uganda where every voice is heard, every idea matters, and every community thrives through transparent and inclusive governance.
            </p>
          </div>
          <div className="md:w-1/2">
            <motion.img
              src="https://via.placeholder.com/600x400?text=Vision"
              alt="CIVCON Vision"
              className="rounded-lg shadow-md shadow-green-400/30"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          className="py-16"
          variants={sectionVariants}
          initial="hidden"
          animate={teamInView ? "visible" : "hidden"}
          ref={teamRef}
        >
          <h2 className="text-3xl font-semibold mb-8 text-center flex items-center justify-center">
            <Users className="w-8 h-8 mr-2 text-green-500" /> Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Aisha Nakimuli", role: "Founder & CEO", image: teamImage },
              { name: "James Okello", role: "Lead Developer", image: teamImage },
              { name: "Sarah Mutebi", role: "Community Manager", image: teamImage },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-neutral-800 rounded-lg p-6 text-center border border-green-600/50"
                variants={teamCardVariants}
                initial="hidden"
                animate={teamInView ? "visible" : "hidden"}
                custom={index}
              >
                <img
                  src={member.image}
                  alt={`${member.name}'s profile`}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border border-green-500"
                />
                <h3 className="text-xl font-semibold text-neutral-200">{member.name}</h3>
                <p className="text-neutral-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Impact Section */}
        <motion.section
          className="py-16 text-center"
          variants={sectionVariants}
          initial="hidden"
          animate={impactInView ? "visible" : "hidden"}
          ref={impactRef}
        >
          <h2 className="text-3xl font-semibold mb-8 flex items-center justify-center">
            <Heart className="w-8 h-8 mr-2 text-green-500" /> Our Impact
          </h2>
          <p className="text-neutral-300 max-w-3xl mx-auto mb-8">
            CIVCON has connected over 10,000 Ugandans, facilitated 500+ virtual town halls, and empowered communities to address local issues collaboratively.
          </p>
          <motion.img
            src={impactImage}
            alt="CIVCON Community Impact"
            className="rounded-lg shadow-md shadow-green-400/30 max-w-full mx-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="py-16 text-center"
          variants={sectionVariants}
          initial="hidden"
          animate={impactInView ? "visible" : "hidden"}
        >
          <h2 className="text-3xl font-semibold mb-4">Join the CIVCON Movement</h2>
          <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
            Be part of a community driving change in Uganda. Sign up today to connect, share, and shape the future.
          </p>
          <motion.a
            href="#signup"
            className="bg-gradient-to-r from-green-500 to-green-800 py-3 px-6 rounded-md text-white hover:bg-green-600 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Now
          </motion.a>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutSection;