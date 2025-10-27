import { motion, useInView } from "framer-motion"; // Framer Motion for animations
import { Menu, X } from "lucide-react";
import { useState, useRef } from "react";
import logo from "../assets/logo.png"; // Placeholder for CIVCON logo
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 }); // Low threshold for visibility

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  // Check active link using window.location.hash
  const isActive = (href) => window.location.hash === href;

  // Animation variants for navbar
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // Animation variants for mobile drawer
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
          {/* Logo and Brand */}
          <div className="flex items-center flex-shrink-0">
            <img
              className="h-10 w-10 mr-2"
              src={logo}
              alt="CIVCON Logo"
            />
            <span className="text-xl tracking-tight text-neutral-100">CIVCON</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={item.href}
                  className={`text-neutral-300 hover:text-green-400 transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-green-400 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-green-400 relative"
                      : ""
                  }`}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <motion.a
              href="#signin"
              className="py-2 px-3 border border-green-700 rounded-md text-neutral-300 hover:bg-green-700/20 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign In
            </motion.a>
            <motion.a
              href="#signup"
              className="bg-gradient-to-r from-green-500 to-green-800 py-2 px-3 rounded-md text-white hover:bg-green-600 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Now
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <motion.button
              onClick={toggleNavbar}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={mobileDrawerOpen ? "Close mobile menu" : "Open mobile menu"}
            >
              {mobileDrawerOpen ? (
                <X className="text-neutral-300 h-6 w-6" />
              ) : (
                <Menu className="text-neutral-300 h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <motion.div
            className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden"
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
                    className={`text-neutral-300 text-lg hover:text-green-400 transition-colors duration-200 ${
                      isActive(item.href) ? "text-green-400 underline underline-offset-4" : ""
                    }`}
                    onClick={toggleNavbar}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="flex space-x-6 mt-6">
              <motion.a
                href="#signin"
                className="py-2 px-3 border border-green-700 rounded-md text-neutral-300 hover:bg-green-700/20 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign In
              </motion.a>
              <motion.a
                href="#signup"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-green-500 to-green-800 text-white hover:bg-green-600 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;