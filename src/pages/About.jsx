

import Navbar from "../components/Navbar";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <AboutContent />
      </div>
    </>
  );
};

export default About;