import { motion, useInView } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const location = useLocation();
  const navigate = useNavigate();

  const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);

  // ✅ Smooth scroll for internal sections (JS-safe)
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // adjust for navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // ✅ Handle navigation links (JS-safe)
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileDrawerOpen(false);

    if (href.startsWith("#")) {
      const id = href.replace("#", "");
      if (location.pathname !== "/") {
        navigate(`/${href}`);
      } else {
        scrollToSection(id);
      }
    } else {
      navigate(href);
    }
  };

  // ✅ Auto scroll after navigation when hash exists
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => scrollToSection(id), 300);
    }
  }, [location]);

  // === Motion Variants ===
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const drawerVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.2, ease: "easeIn" } },
  };

  return (
    <motion.nav
      className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-green-700/80"
      variants={navbarVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      ref={ref}
    >
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          {/* === Logo === */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="CIVCON Logo" />
            <span className="text-xl tracking-tight text-neutral-100">CIVCON</span>
          </div>

          {/* === Desktop Nav === */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <motion.li key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-neutral-300 hover:text-green-400 transition-colors duration-200"
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* === Desktop CTA Buttons === */}
          <div className="hidden lg:flex justify-center space-x-6 items-center">
            <motion.a
              href="https://app.civ-con.org/signin"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-4 border border-green-700 rounded-md text-neutral-300 hover:bg-green-700/20 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign In
            </motion.a>
            <motion.a
              href="https://app.civ-con.org/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-800 py-2 px-4 rounded-md text-white hover:from-green-600 hover:to-green-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Now
            </motion.a>
          </div>

          {/* === Mobile Toggle === */}
          <div className="lg:hidden flex flex-col justify-end">
            <motion.button
              onClick={toggleNavbar}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {mobileDrawerOpen ? (
                <X className="text-neutral-300 h-6 w-6" />
              ) : (
                <Menu className="text-neutral-300 h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* === Mobile Drawer === */}
        {mobileDrawerOpen && (
          <motion.div
            className="fixed right-0 top-0 z-20 bg-neutral-900 w-full h-full p-12 flex flex-col justify-center items-center lg:hidden"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul>
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  className="py-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-neutral-300 text-lg hover:text-green-400 transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}

              {/* Mobile CTA buttons */}
              <div className="flex flex-col space-y-6 mt-6">
                <a
                  href="https://app.civ-con.org/signin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-green-700 text-neutral-300 rounded-md py-2 px-6 text-center hover:bg-green-700/20 transition-colors"
                >
                  Sign In
                </a>
                <a
                  href="https://app.civ-con.org/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-500 to-green-800 text-white rounded-md py-2 px-6 text-center hover:from-green-600 hover:to-green-700 transition-colors"
                >
                  Join Now
                </a>
              </div>
            </ul>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
