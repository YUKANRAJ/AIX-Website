import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle.jsx";
import CoordinatorCard from "../components/CoordinatorCard.jsx";
import AIBackground from "../components/AIBackground.jsx";

import {
  facultyCoordinators,
  president,
  executiveCommittee,
} from "../data/coordinators.js";

export default function Coordinators() {
  return (
    <div className="flex flex-col bg-[#02050c]">
      {/* =====================================================
          PAGE HERO
      ====================================================== */}
      <section className="relative overflow-hidden border-b border-white/5">
        <AIBackground variant="network" />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(30,94,255,0.07),transparent_35%),linear-gradient(90deg,#02050c_0%,rgba(2,5,12,0.75)_60%,rgba(2,5,12,0.35)_100%)]" />

        <div className="section relative z-10 flex min-h-[360px] items-center py-20 sm:min-h-[430px]">
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="max-w-3xl"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />

              <span className="eyebrow">
                AIX Leadership
              </span>
            </div>

            <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-[-0.035em] text-ivory sm:text-6xl lg:text-7xl">
              Club
              <span className="block text-gold">
                Coordinators.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-relaxed text-ivory/55 sm:text-lg">
              The faculty guidance and student leadership
              driving AIX forward through ideas,
              collaboration and innovation.
            </p>

            <div className="mt-8 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.25em] text-ivory/25">
              <span className="h-px w-8 bg-white/20" />
              People behind the ecosystem
            </div>
          </motion.div>
        </div>

        {/* Technical footer */}
        <div className="relative z-10 border-t border-white/5 bg-black/20">
          <div className="section flex items-center justify-between py-3 font-mono text-[8px] uppercase tracking-[0.22em] text-white/20">
            <span>AIX / PEOPLE</span>
            <span>LEADERSHIP SYSTEM</span>
            <span>2026</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          FACULTY
      ====================================================== */}
      <section className="border-b border-white/5 py-20 sm:py-24">
        <div className="section flex flex-col gap-12">
          <SectionTitle
            eyebrow="Guidance"
            title="Faculty Coordinators"
            description="The faculty mentors providing direction, support and continuity to the AIX ecosystem."
          />

          <div className="grid gap-7 sm:grid-cols-3">
            {facultyCoordinators.map((coordinator) => (
              <CoordinatorCard
                key={coordinator.name}
                {...coordinator}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          STUDENT LEADERSHIP
      ====================================================== */}
      <section className="py-20 sm:py-24">
        <div className="section flex flex-col gap-14">
          <SectionTitle
            eyebrow="Student Leadership"
            title="Executive Committee"
            description="The student leaders turning the AIX vision into events, projects, collaborations and experiences."
          />

          {/* President */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-gold">
                01 / President
              </span>

              <span className="h-px flex-1 bg-white/[0.06]" />
            </div>

            <CoordinatorCard
              {...president}
              featured
            />
          </div>

          {/* Executive committee */}
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-gold">
                02 / Executive Team
              </span>

              <span className="h-px flex-1 bg-white/[0.06]" />
            </div>

            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {executiveCommittee.map((coordinator) => (
                <CoordinatorCard
                  key={coordinator.name}
                  {...coordinator}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CLOSING STATEMENT
      ====================================================== */}
      <section className="border-t border-white/5 py-20 sm:py-24">
        <div className="section">
          <motion.div
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
            }}
            className="relative overflow-hidden rounded-3xl border border-gold/15 bg-[#050914] p-8 sm:p-12 lg:p-16"
          >
            {/* Ambient glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-blue-500/[0.06] blur-3xl" />

            <div className="relative max-w-2xl">
              <span className="eyebrow">
                The AIX Community
              </span>

              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ivory sm:text-4xl">
                Ideas need people
                <span className="text-gold">
                  {" "}to become real.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-ivory/50 sm:text-base">
                AIX is built by students and faculty who
                believe that curiosity becomes meaningful
                when it is shared, challenged and turned
                into action.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}