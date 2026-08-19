import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../assets/aix-logo.png";
import panimalarLogos from "../assets/panimalar-logos.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/coordinators", label: "Club Coordinators" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, []);

  const linkClass = ({ isActive }) =>
    `relative px-1 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
      isActive
        ? "text-gold"
        : "text-ivory/80 hover:text-ivory"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-navy-deep/90 backdrop-blur-md"
          : "border-b border-transparent bg-navy-deep/40 backdrop-blur-sm"
      }`}
    >
      <nav
        className="section flex h-16 items-center justify-between sm:h-20"
        aria-label="Primary"
      >
        {/* ================================
            AIX BRAND
        ================================= */}
        <NavLink
          to="/"
          className="flex shrink-0 items-center gap-3"
          aria-label="AIX home"
        >
          <img
            src={logo}
            alt="AIX logo"
            className="h-9 w-9 rounded-full object-cover sm:h-11 sm:w-11"
          />

          <span className="font-display text-lg font-semibold tracking-wide text-ivory sm:text-xl">
            AIX
          </span>
        </NavLink>

        {/* ================================
            DESKTOP NAVIGATION
        ================================= */}
        <div className="hidden items-center md:flex">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={linkClass}
                >
                  {({ isActive }) => (
                    <>
                      {link.label}

                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute -bottom-1 left-0 h-[2px] w-full bg-gold"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* ================================
              PANIMALAR LOGOS
          ================================= */}
          {/* <div className="ml-6 flex items-center border-l border-white/10 pl-5">
            <img
              src={panimalarLogos}
              alt="Panimalar Engineering College - 26 Years"
              className="h-20 w-auto object-contain"
            />
          </div> */}
        </div>

        {/* ================================
            MOBILE MENU BUTTON
        ================================= */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-ivory md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* ================================
          MOBILE MENU
      ================================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            className="overflow-hidden border-b border-white/10 bg-navy-deep/95 backdrop-blur-md md:hidden"
          >
            <ul className="section flex flex-col gap-1 py-3">
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-3 text-base font-medium ${
                        isActive
                          ? "bg-white/5 text-gold"
                          : "text-ivory/85"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Mobile college branding */}
            <div className="section flex items-center justify-center border-t border-white/5 py-4">
              <img
                src={panimalarLogos}
                alt="Panimalar Engineering College - 26 Years"
                className="h-20 w-auto object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}