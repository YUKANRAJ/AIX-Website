import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CalendarDays, ArrowUpRight } from "lucide-react";

const statusStyles = {
  Upcoming: "bg-electric/15 text-electric-soft border-electric/30",
  "Coming Soon": "bg-gold/10 text-gold border-gold/30",
  Closed: "bg-white/5 text-ivory/50 border-white/10",
};

export default function EventCard({ event }) {
  const { id, title, type, date, description, outcome, status } = event;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="card-surface group flex h-full flex-col justify-between gap-6 p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-gold sm:p-7"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <span className="eyebrow">{type}</span>
          <span
            className={`rounded-full border px-3 py-1 text-[11px] font-medium ${
              statusStyles[status] || statusStyles["Closed"]
            }`}
          >
            {status}
          </span>
        </div>

        <h3 className="font-display text-xl font-semibold leading-snug text-ivory sm:text-2xl">
          {title}
        </h3>

        <div className="flex items-center gap-2 text-sm text-ivory/55">
          <CalendarDays size={16} className="text-gold" aria-hidden="true" />
          <span>{date}</span>
        </div>

        <p className="text-sm leading-relaxed text-ivory/65">{description}</p>

        <p className="text-sm text-ivory/50">
          <span className="font-medium text-ivory/75">Outcome:</span> {outcome}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <Link
          to={`/events/${id}`}
          className="btn-secondary w-full sm:w-auto"
        >
          View Details
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
        <Link to={`/events/${id}/register`} className="btn-primary w-full sm:w-auto">
          Register Now
        </Link>
      </div>
    </motion.article>
  );
}
