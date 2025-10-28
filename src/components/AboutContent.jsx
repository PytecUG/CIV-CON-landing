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
  // Refs for scroll-based animation
  const sections = {
    hero: useRef(null),
    mission: useRef(null),
    history: useRef(null),
    team: useRef(null),
    impact: useRef(null),
    cta: useRef(null),
  };

  const inViews = Object.fromEntries(
    Object.entries(sections).map(([key, ref]) => [key, useInView(ref, { once: true, amount: 0.25 })])
  );

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: "easeOut" },
    }),
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (delay = 0) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay, ease: "easeOut" },
    }),
  };

  const impactData = {
    labels: ["Users Connected", "Town Halls", "Communities Engaged", "Policy Proposals"],
    datasets: [
      {
        label: "CIVCON Impact",
        data: [15000, 750, 200, 10],
        backgroundColor: ["#10b981", "#059669", "#047857", "#065f46"],
      },
    ],
  };

  const impactOptions = {
    scales: {
      y: { beginAtZero: true, ticks: { color: "#a3a3a3" } },
      x: { ticks: { color: "#a3a3a3" } },
    },
    plugins: {
      legend: { display: false },
      title: { display: true, text: "Our Impact in Numbers", color: "#e5e7eb", font: { size: 18 } },
    },
  };

  return (
    <div className="py-12 bg-neutral-950 text-neutral-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Hero Section */}
        <motion.section
          ref={sections.hero}
          variants={fadeUp}
          initial="hidden"
          animate={inViews.hero ? "visible" : "hidden"}
          className="text-center py-20 px-2"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Empowering Uganda Through{" "}
            <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
              Civic Connection
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            <strong>CIVCON</strong> is Uganda’s civic technology hub, connecting citizens with
            leaders, organizations, and communities to co-create sustainable change. We believe in
            informed voices, transparent governance, and inclusive growth through digital engagement.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm sm:text-base text-green-400/90">
            <div className="backdrop-blur-md border border-green-800/50 px-4 py-2 rounded-md">15,000+ Users</div>
            <div className="backdrop-blur-md border border-green-800/50 px-4 py-2 rounded-md">146 Districts</div>
            <div className="backdrop-blur-md border border-green-800/50 px-4 py-2 rounded-md">200+ Communities</div>
          </div>
        </motion.section>

        {/* Gradient Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-green-800 to-transparent my-16" />

        {/* Mission & Vision */}
        <motion.section
          ref={sections.mission}
          variants={fadeUp}
          initial="hidden"
          animate={inViews.mission ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-10 items-stretch"
        >
          {[
            {
              icon: <Target className="w-10 h-10 text-green-500 mb-4" />,
              title: "Our Mission",
              text: "To empower Ugandans to voice their concerns, collaborate on civic challenges, and engage transparently with local leaders. CIVCON gives every citizen a seat at the digital roundtable.",
            },
            {
              icon: <Globe className="w-10 h-10 text-green-500 mb-4" />,
              title: "Our Vision",
              text: "A united, informed, and empowered Uganda where technology bridges governance and the people — promoting shared accountability and innovation for every community.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={scaleUp}
              initial="hidden"
              animate={inViews.mission ? "visible" : "hidden"}
              custom={index * 0.2}
              className="bg-neutral-800/30 rounded-2xl border border-green-900/40 p-8 shadow-md backdrop-blur-lg hover:shadow-green-600/20 transition-shadow"
            >
              {item.icon}
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-neutral-400 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* History */}
        <motion.section
          ref={sections.history}
          variants={fadeUp}
          initial="hidden"
          animate={inViews.history ? "visible" : "hidden"}
          className="py-20 text-center"
        >
          <MapPin className="mx-auto text-green-500 w-10 h-10 mb-4" />
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Our Journey</h2>
          <p className="text-neutral-400 max-w-4xl mx-auto leading-relaxed text-base sm:text-lg">
            Founded in 2023, CIVCON began as a vision to amplify Ugandan voices through civic
            technology. In just two years, we’ve grown into a trusted platform connecting citizens,
            leaders, and civil society across all 146 districts — creating meaningful dialogue and
            action that transforms lives.
          </p>
        </motion.section>

        {/* Team Section */}
        <motion.section
          ref={sections.team}
          variants={fadeUp}
          initial="hidden"
          animate={inViews.team ? "visible" : "hidden"}
          className="py-20"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12">Meet the Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {["Leadership", "Technology", "Community Engagement"].map((role, index) => (
              <motion.div
                key={role}
                variants={scaleUp}
                initial="hidden"
                animate={inViews.team ? "visible" : "hidden"}
                custom={index * 0.3}
                className="bg-neutral-800/40 rounded-2xl border border-green-900/30 p-6 text-center shadow-md hover:shadow-green-600/20 transition-all"
              >
                <img
                  src={teamImage}
                  alt={role}
                  className="rounded-full w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-4 object-cover border-2 border-green-700"
                />
                <h3 className="font-semibold text-lg mb-2">{role}</h3>
                <p className="text-neutral-400 text-sm">
                  Our {role.toLowerCase()} team drives innovation, collaboration, and civic growth
                  through empathy and technology.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Impact */}
        <motion.section
          ref={sections.impact}
          variants={fadeUp}
          initial="hidden"
          animate={inViews.impact ? "visible" : "hidden"}
          className="py-20 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8 flex items-center justify-center">
            <Heart className="w-8 h-8 mr-2 text-green-500" /> Our Impact
          </h2>
          <p className="text-neutral-300 max-w-3xl mx-auto mb-10 text-base sm:text-lg">
            Through CIVCON, communities are addressing real challenges — from clean water access to
            youth employment — by collaborating directly with decision-makers. Together, we’re
            shaping policy, amplifying local innovation, and building accountability at scale.
          </p>
          <motion.img
            src={impactImage}
            alt="CIVCON Community Impact"
            className="rounded-xl shadow-lg shadow-green-700/30 max-w-full mx-auto mb-10"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="max-w-3xl mx-auto">
            <Bar data={impactData} options={impactOptions} />
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          ref={sections.cta}
          variants={fadeUp}
          initial="hidden"
          animate={inViews.cta ? "visible" : "hidden"}
          className="py-20 text-center bg-gradient-to-r from-green-900/30 to-transparent rounded-2xl border border-green-800/40 shadow-inner mt-20 px-6"
        >
          <h2 className="text-3xl font-semibold mb-4">Join the CIVCON Movement</h2>
          <p className="text-neutral-300 max-w-2xl mx-auto mb-8 text-base sm:text-lg">
            Be part of the movement transforming Uganda’s civic space.  
            <span className="block mt-2 text-green-500 font-medium">
              Connect. Share. Shape Uganda for a Better Future.
            </span>
          </p>
          <motion.a
            href="#signup"
            className="bg-gradient-to-r from-green-500 to-green-800 py-3 px-8 rounded-md text-white font-semibold hover:shadow-lg hover:shadow-green-600/30 transition-transform duration-300 inline-flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Now <X className="w-5 h-5 ml-2" />
          </motion.a>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutContent;
