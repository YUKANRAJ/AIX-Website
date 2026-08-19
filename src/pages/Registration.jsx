import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CalendarDays, ExternalLink, Clock } from "lucide-react";
import AIBackground from "../components/AIBackground.jsx";
import events from "../data/events.js";

export default function Registration() {
  const { eventId } = useParams();
  const event = events.find((e) => e.id === eventId);

  if (!event) {
    return (
      <div className="section flex min-h-[50vh] flex-col items-center justify-center gap-6 py-24 text-center">
        <h1 className="font-display text-4xl font-bold">Event Not Found</h1>
        <p className="max-w-md text-ivory/60">
          The event you're trying to register for doesn't exist or may have
          been removed.
        </p>
        <Link to="/events" className="btn-primary">
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Events
        </Link>
      </div>
    );
  }

  const { title, date, registrationUrl } = event;

  return (
    <div className="section relative flex min-h-[70vh] flex-col items-center justify-center gap-8 overflow-hidden py-20 text-center">
      <AIBackground variant="minimal" />
      <Link
        to={`/events/${event.id}`}
        className="inline-flex items-center gap-2 self-start text-sm font-medium text-ivory/60 transition-colors hover:text-gold"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        Back to Event
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="card-surface flex w-full max-w-lg flex-col items-center gap-6 border-gold/20 p-8 sm:p-12"
      >
        <span className="eyebrow">Registration</span>
        <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
          Register for {title}
        </h1>

        <div className="flex items-center gap-2 text-sm text-ivory/60">
          <CalendarDays size={16} className="text-gold" aria-hidden="true" />
          <span>{date}</span>
        </div>

        <div className="h-px w-full bg-white/10" />

        <div className="flex flex-col items-center gap-3">
          <p className="text-base font-medium text-ivory/85">Ready to Join AIX?</p>

          {registrationUrl ? (
            <a
              href={registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Register via Google Form
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-medium text-gold">
                <Clock size={16} aria-hidden="true" />
                Registration will open soon.
              </span>
              <p className="max-w-sm text-sm text-ivory/55">
                We'll share the official Google Form link here as soon as
                registration opens for this event.
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
