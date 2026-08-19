import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CalendarDays, MapPin, Sparkles, Users } from "lucide-react";
import AIBackground from "../components/AIBackground.jsx";
import events from "../data/events.js";

const statusStyles = {
  Upcoming: "bg-electric/15 text-electric-soft border-electric/30",
  "Coming Soon": "bg-gold/10 text-gold border-gold/30",
  Closed: "bg-white/5 text-ivory/50 border-white/10",
};

export default function EventDetails() {
  const { eventId } = useParams();
  const event = events.find((e) => e.id === eventId);

  if (!event) {
    return (
      <div className="section flex min-h-[50vh] flex-col items-center justify-center gap-6 py-24 text-center">
        <h1 className="font-display text-4xl font-bold">Event Not Found</h1>
        <p className="max-w-md text-ivory/60">
          The event you're looking for doesn't exist or may have been removed.
        </p>
        <Link to="/events" className="btn-primary">
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Events
        </Link>
      </div>
    );
  }

  const { title, type, date, venue, description, outcome, eligibility, status } = event;

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden border-b border-white/5 py-16 sm:py-20">
        <AIBackground variant="data" />
        <div className="section relative flex flex-col gap-6">
          <Link
            to="/events"
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-ivory/60 transition-colors hover:text-gold"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to Events
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="eyebrow">{type}</span>
              <span
                className={`rounded-full border px-3 py-1 text-[11px] font-medium ${
                  statusStyles[status] || statusStyles["Closed"]
                }`}
              >
                {status}
              </span>
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
              {title}
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="section grid gap-10 lg:grid-cols-3">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <h2 className="font-display text-xl font-semibold text-ivory">About this Event</h2>
            <p className="text-base leading-relaxed text-ivory/70 sm:text-lg">{description}</p>

            <div className="card-surface flex items-start gap-4 p-6">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                <Sparkles size={18} aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-medium text-ivory/50">Outcome</p>
                <p className="mt-1 text-base text-ivory/85">{outcome}</p>
              </div>
            </div>
          </div>

          <aside className="flex flex-col gap-4">
            <div className="card-surface flex flex-col gap-5 p-6">
              <div className="flex items-start gap-3">
                <CalendarDays size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-ivory/45">Date</p>
                  <p className="text-sm font-medium text-ivory/85">{date}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-ivory/45">Venue</p>
                  <p className="text-sm font-medium text-ivory/85">{venue}</p>
                </div>
              </div>

              {eligibility && (
                <div className="flex items-start gap-3">
                  <Users size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <p className="text-xs uppercase tracking-wide text-ivory/45">Eligibility</p>
                    <p className="text-sm font-medium text-ivory/85">{eligibility}</p>
                  </div>
                </div>
              )}

              <Link to={`/events/${event.id}/register`} className="btn-primary mt-2 w-full">
                Register Now
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
