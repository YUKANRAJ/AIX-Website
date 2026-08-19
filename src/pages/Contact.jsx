  import { motion } from "framer-motion";
import { Building2, Clock, MapPin } from "lucide-react";
import AIBackground from "../components/AIBackground.jsx";

export default function Contact() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden border-b border-white/5 py-16 sm:py-20">
        <AIBackground variant="minimal" />
        <div className="section relative flex flex-col gap-4">
          <span className="eyebrow">Contact</span>
          <h1 className="font-display text-4xl font-bold sm:text-5xl">Contact AIX</h1>
          <p className="max-w-2xl text-base leading-relaxed text-ivory/65 sm:text-lg">
            Reach out through the department, or watch this page for official
            AIX contact details as they become available.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="section grid gap-6 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="card-surface flex flex-col gap-4 p-7"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold/10 text-gold">
              <Building2 size={20} aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-medium text-ivory/50">Institution</p>
              <p className="mt-1 text-lg font-semibold text-ivory">
                Panimalar Engineering College
              </p>
              <p className="mt-1 text-sm text-ivory/65">
                Artificial Intelligence and Machine Learning Department
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
            className="card-surface flex flex-col gap-4 p-7"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold/10 text-gold">
              <MapPin size={20} aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-medium text-ivory/50">Address</p>
              <p className="mt-1 text-base leading-relaxed text-ivory">
                Bangalore Trunk Road, Varadharajapuram,
                <br />
                Poonamallee, Chennai – 600 123
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.16, ease: "easeOut" }}
            className="card-surface flex flex-col gap-4 p-7 sm:col-span-2"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold/10 text-gold">
              <Clock size={20} aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-medium text-ivory/50">Direct Contact</p>
              <p className="mt-1 text-base text-ivory/70">Coming Soon</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
