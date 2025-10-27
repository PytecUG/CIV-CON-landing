import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Users, Target, Heart, Globe, X } from "lucide-react";
import { Bar } from "react-chartjs-2";
import teamImage from "../assets/team.jpg";
import impactImage from "../assets/impact.png";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AboutContent = () => {
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const historyRef = useRef(null);
  const teamRef = useRef(null);
  const impactRef = useRef(null);
  const ctaRef = useRef(null);

  const missionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const visionInView = useInView(visionRef, { once: true, amount: 0.3 });
  const historyInView = useInView(historyRef, { once: true, amount: 0.3 });
  const teamInView = useInView(teamRef, { once: true, amount: 0.3 });
  const impactInView = useInView(impactRef, { once: true, amount: 0.3 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const teamCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.2, ease: "easeOut" },
    }),
  };

  const impactData = {
    labels: ["Users Connected", "Town Halls", "Communities Engaged", "Policy Proposals"],
    datasets: [
      {
        label: "CIVCON Impact",
        data: [15000, 750, 200, 10],
        backgroundColor: ["#10b981", "#059669", "#047857", "#065f46"],
        borderColor: ["#10b981", "#059669", "#047857", "#065f46"],
        borderWidth: 1,
      },
    ],
  };

  const impactOptions = {
    scales: { y: { beginAtZero: true } },
    plugins: {
      legend: { display: false },
      title: { display: true, text: "Our Impact in Numbers", color: "#e5e7eb" },
    },
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
            CIVCON (Civic Connection Uganda) is a pioneering platform launched in 2023 to
            revolutionize civic engagement in Uganda. With over 15,000 active users across all
            146 districts, we connect citizens, local leaders, and organizations to foster
            transparency, accountability, and community-driven progress. Our mission is rooted in
            empowering Ugandans to shape their nation’s future through technology and dialogue.
          </p>
          <p className="text-sm text-neutral-400 mt-4">
            Tugatte ku CIVCON – Join us in building a stronger Uganda!
          </p>
        </motion.section>

        {/* ... Mission, Vision, History, Team sections as before ... */}

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
            Since launching in 2023, CIVCON has connected over 15,000 Ugandans, facilitated 750+
            virtual town halls, and empowered 200+ communities to tackle challenges like clean
            water access, education, and youth employment. Our platform has driven 10 local policy
            proposals, amplifying voices from Kampala to Arua and beyond.
          </p>
          <motion.img
            src={impactImage}
            alt="CIVCON Community Impact"
            className="rounded-lg shadow-md shadow-green-400/30 max-w-full mx-auto mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="max-w-3xl mx-auto">
            <Bar data={impactData} options={impactOptions} />
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="py-16 text-center"
          variants={sectionVariants}
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}
          ref={ctaRef}
        >
          <h2 className="text-3xl font-semibold mb-4">Join the CIVCON Movement</h2>
          <p className="text-neutral-300 mb-6">
            Be part of a growing community transforming Uganda. Sign up today to connect with
            fellow citizens, share ideas, and shape a brighter future for our nation.
          </p>
          <motion.a
            href="#signup"
            className="bg-gradient-to-r from-green-500 to-green-800 py-3 px-6 rounded-md text-white hover:bg-green-600 transition-colors duration-200 inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Now <X className="w-5 h-5 inline-block ml-2" />
          </motion.a>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutContent;
