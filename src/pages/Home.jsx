import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  Lightbulb,
  Users2,
} from "lucide-react";

import logo from "../assets/aix-logo.png";
import EventCard from "../components/EventCard.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import AIBackground from "../components/AIBackground.jsx";
import events from "../data/events.js";

const pillars = [
  {
    icon: Cpu,
    label: "Artificial Intelligence",
    text: "The technical foundation — the algorithms, models and systems that power everything AIX builds.",
  },
  {
    icon: Lightbulb,
    label: "Innovation",
    text: "Transforming ideas into impactful solutions through hands-on projects and applied research.",
  },
  {
    icon: Users2,
    label: "eXchange",
    text: "An ecosystem where students, faculty, alumni, researchers and industry professionals exchange knowledge, mentor, collaborate and inspire innovation.",
  },
];

const reasons = [
  "Bridge the gap between classroom learning and industry expectations.",
  "Provide hands-on exposure through projects, hackathons and workshops.",
  "Build a strong AI community within the department.",
  "Encourage research, open-source contributions and innovation.",
  "Develop leadership, teamwork, communication and entrepreneurship.",
];

export default function Home() {
  const upcoming = events.slice(0, 3);

  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative min-h-[88vh] overflow-hidden border-b border-white/5">
        <AIBackground variant="hero" />

        {/* Dark readability layer */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_45%,rgba(30,94,255,0.07),transparent_34%),linear-gradient(90deg,rgba(2,5,12,0.96)_0%,rgba(2,5,12,0.78)_45%,rgba(2,5,12,0.28)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[88vh] w-full max-w-content items-center px-5 py-20 sm:px-8 lg:px-10">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-4">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="relative z-20 max-w-2xl"
            >
              {/* Brand */}
              <div className="mb-8 flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gold/10 blur-xl" />

                  <img
                    src={logo}
                    alt="AIX - AI Innovation eXchange"
                    className="relative h-16 w-16 rounded-full object-cover shadow-gold sm:h-20 sm:w-20"
                  />
                </div>

                <div>
                  <p className="eyebrow mb-1">
                    AI Innovation eXchange
                  </p>

                  <p className="text-xs text-ivory/40">
                    Artificial Intelligence & Machine Learning
                  </p>
                </div>
              </div>

              {/* Main heading */}
              <h1 className="font-display text-5xl font-bold leading-[0.98] tracking-[-0.04em] text-ivory sm:text-6xl lg:text-7xl xl:text-8xl">
                Where Curiosity
                <span className="block text-ivory/80">
                  Becomes
                </span>

                <span className="block text-gold">
                  Innovation.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-xl text-base leading-relaxed text-ivory/60 sm:text-lg">
                A student-driven AI ecosystem focused on
                learning, experimentation, collaboration and
                innovation.
              </p>

              {/* Buttons */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/events"
                  className="btn-primary"
                >
                  Explore Events
                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                  />
                </Link>

                <Link
                  to="/about"
                  className="btn-secondary"
                >
                  Discover AIX
                </Link>
              </div>

              {/* Tiny technical marker */}
              <div className="mt-10 flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.25em] text-ivory/25">
                <span className="h-px w-10 bg-gold/40" />
                Building intelligent futures
              </div>
            </motion.div>

            {/* RIGHT AI VISUAL */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="relative hidden h-[520px] lg:block"
            >
              {/* Visual framing ring */}
              <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.035]" />

              <div className="absolute left-1/2 top-1/2 h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/[0.025]" />

              {/* Small technical labels */}
              <div className="absolute right-4 top-16 font-mono text-[9px] uppercase tracking-[0.28em] text-ivory/20">
                Neural system // 01
              </div>

              <div className="absolute bottom-16 left-10 font-mono text-[9px] uppercase tracking-[0.28em] text-ivory/20">
                AIX // intelligence layer
              </div>

              {/* Core glow */}
              <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[80px]" />

              {/* Core nucleus */}
              {/* <motion.div
                animate={{
                  scale: [1, 1.04, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-300/30 bg-black/40 shadow-[0_0_60px_rgba(70,180,255,0.18)] backdrop-blur-sm"
              >
                <div className="h-3 w-3 rounded-full bg-cyan-100 shadow-[0_0_25px_rgba(100,220,255,0.9)]" />
              </motion.div> */}
            </motion.div>
          </div>
        </div>

        {/* Bottom technical strip */}
        <div className="absolute bottom-0 left-0 right-0 z-20 hidden border-t border-white/5 bg-black/20 backdrop-blur-sm lg:block">
          <div className="mx-auto flex max-w-content items-center justify-between px-10 py-3 font-mono text-[9px] uppercase tracking-[0.25em] text-ivory/25">
            <span>AI / RESEARCH / INNOVATION</span>
            <span>CHENNAI • INDIA</span>
            <span>EST. 2026</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT AIX
      ====================================================== */}
      <section className="border-t border-white/5 py-20 sm:py-24">
        <div className="section flex flex-col gap-12">
          <SectionTitle
            eyebrow="About AIX"
            title="Three ideas, one ecosystem."
            description="AIX represents a foundation, a mindset and a community — built together within the AIML department."
          />

          <div className="grid gap-6 sm:grid-cols-3">
            {pillars.map(
              ({ icon: Icon, label, text }) => (
                <motion.div
                  key={label}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-60px",
                  }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                  }}
                  className="card-surface flex flex-col gap-4 p-6 sm:p-7"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <Icon
                      size={20}
                      aria-hidden="true"
                    />
                  </span>

                  <h3 className="font-display text-lg font-semibold text-ivory">
                    {label}
                  </h3>

                  <p className="text-sm leading-relaxed text-ivory/65">
                    {text}
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          UPCOMING EVENTS
      ====================================================== */}
      <section className="border-t border-white/5 py-20 sm:py-24">
        <div className="section flex flex-col gap-12">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionTitle
              eyebrow="What's Next"
              title="Upcoming Events"
              description="Tech talks, seminars, workshops and a flagship hackathon — designed to turn learning into building."
            />

            <Link
              to="/events"
              className="btn-secondary shrink-0"
            >
              View All Events
              <ArrowRight
                size={16}
                aria-hidden="true"
              />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((event) => (
              <EventCard
                key={event.id}
                event={event}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY AIX
      ====================================================== */}
      <section className="border-t border-white/5 py-20 sm:py-24">
        <div className="section flex flex-col gap-12">
          <SectionTitle
            eyebrow="Why AIX?"
            title="Built for what comes after class."
          />

          <ul className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, i) => (
              <motion.li
                key={reason}
                initial={{
                  opacity: 0,
                  x: -12,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-60px",
                }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.05,
                  ease: "easeOut",
                }}
                className="card-surface flex items-start gap-4 p-5"
              >
                <span className="font-mono text-sm text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <p className="text-sm leading-relaxed text-ivory/75 sm:text-base">
                  {reason}
                </p>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{
              opacity: 0,
              y: 16,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-60px",
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="card-surface flex flex-col items-center gap-5 border-gold/20 p-8 text-center sm:p-12"
          >
            <h3 className="font-display text-2xl font-semibold text-ivory sm:text-3xl">
              Ready to build with AIX?
            </h3>

            <p className="max-w-md text-sm text-ivory/65 sm:text-base">
              Join the department's AI community and
              start turning curiosity into real,
              working innovation.
            </p>

            <Link
              to="/events"
              className="btn-primary"
            >
              Explore Events
              <ArrowRight
                size={16}
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}