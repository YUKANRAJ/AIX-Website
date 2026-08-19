import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle.jsx";
import AIBackground from "../components/AIBackground.jsx";

const meanings = [
  {
    label: "Artificial Intelligence",
    text: "The technical foundation of AIX — the algorithms, models and systems students learn to build and apply.",
  },
  {
    label: "Innovation",
    text: "Transforming ideas into impactful solutions through experimentation, projects and problem solving.",
  },
  {
    label: "eXchange",
    text: "An ecosystem where students, faculty, alumni, researchers and industry professionals exchange knowledge, mentor, collaborate and inspire innovation.",
  },
];

const mission = [
  "Create an innovation-first culture through practical learning, experimentation and collaboration.",
  "Organize workshops, seminars, hackathons, paper presentations and technical challenges that develop industry-ready AI skills.",
  "Promote interdisciplinary projects, research, open-source contributions and real-world problem solving.",
  "Build strong connections with industry experts, startups, alumni and academic researchers.",
  "Develop leadership, communication, ethics and teamwork alongside technical excellence.",
  "Establish AIX as a recognized center for AI innovation within and beyond the institution.",
];

export default function About() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden border-b border-white/5 py-16 sm:py-20">
        <AIBackground variant="section" />
        <div className="section relative flex flex-col gap-4">
          <span className="eyebrow">About AIX</span>
          <h1 className="font-display text-4xl font-bold sm:text-5xl">About AIX</h1>
          <p className="max-w-2xl text-base leading-relaxed text-ivory/65 sm:text-lg">
            AIX — AI Innovation eXchange — is the student-driven AI club of the
            Department of Artificial Intelligence and Machine Learning at
            Panimalar Engineering College.
          </p>
        </div>
      </section>

      {/* What is AIX */}
      <section className="border-b border-white/5 py-16 sm:py-20">
        <div className="section flex flex-col gap-12">
          <SectionTitle
            eyebrow="What is AIX?"
            title="AI Innovation eXchange"
            description="Three ideas define what AIX stands for and how it operates within the department."
          />

          <div className="grid gap-6 sm:grid-cols-3">
            {meanings.map((m) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="card-surface flex flex-col gap-3 p-6 sm:p-7"
              >
                <h3 className="font-display text-lg font-semibold text-gold">{m.label}</h3>
                <p className="text-sm leading-relaxed text-ivory/70">{m.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="border-b border-white/5 py-16 sm:py-20">
        <div className="section flex flex-col gap-8">
          <SectionTitle eyebrow="Vision" title="Our Vision" />
          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="card-surface border-l-4 border-l-gold p-7 text-lg font-medium leading-relaxed text-ivory/85 sm:p-10 sm:text-xl"
          >
            "To build a world-class student-driven AI ecosystem where curiosity
            becomes innovation, ideas become intelligent solutions, and every
            member is empowered to lead the future of technology."
          </motion.blockquote>
          <p className="max-w-2xl text-sm leading-relaxed text-ivory/60 sm:text-base">
            This vision guides every initiative AIX undertakes — from tech talks
            and seminars to hands-on workshops and the flagship Techathon —
            each designed to move members from curiosity to capability.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-20">
        <div className="section flex flex-col gap-12">
          <SectionTitle eyebrow="Mission" title="Our Mission" />

          <div className="grid gap-5 sm:grid-cols-2">
            {mission.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: "easeOut" }}
                className="card-surface flex items-start gap-4 p-5 sm:p-6"
              >
                <span className="font-mono text-sm text-gold">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-relaxed text-ivory/75 sm:text-base">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
