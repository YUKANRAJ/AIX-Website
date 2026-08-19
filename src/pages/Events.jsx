import EventCard from "../components/EventCard.jsx";
import AIBackground from "../components/AIBackground.jsx";
import events from "../data/events.js";

export default function Events() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden border-b border-white/5 py-16 sm:py-20">
        <AIBackground variant="data" />
        <div className="section relative flex flex-col gap-4">
          <span className="eyebrow">Events</span>
          <h1 className="font-display text-4xl font-bold sm:text-5xl">AIX Events</h1>
          <p className="text-lg font-medium text-ivory/70">Explore. Build. Innovate.</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="section flex flex-col gap-10">
          <h2 className="font-display text-2xl font-semibold text-ivory sm:text-3xl">
            Upcoming Events
          </h2>

          {events.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <p className="text-ivory/60">
              No events are scheduled right now. Check back soon.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
