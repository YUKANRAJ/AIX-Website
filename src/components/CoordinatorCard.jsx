import { motion } from "framer-motion";
import { ScanLine } from "lucide-react";

export default function CoordinatorCard({
  name,
  role,
  classSection,
  image,
  featured = false,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        ease: "easeOut",
      }}
      whileHover={{ y: -6 }}
      className={[
        "group relative overflow-hidden rounded-2xl",
        "border border-white/[0.08]",
        "bg-[#050914]/80",
        "backdrop-blur-md",
        "transition-all duration-500",
        "hover:border-gold/30",
        "hover:shadow-[0_20px_70px_rgba(0,0,0,0.35)]",
        featured
          ? "sm:col-span-2"
          : "",
      ].join(" ")}
    >
      {/* Decorative corner system */}
      <div className="pointer-events-none absolute left-0 top-0 z-20 h-16 w-16 border-l border-t border-gold/20 transition-all duration-500 group-hover:h-20 group-hover:w-20 group-hover:border-gold/50" />

      <div className="pointer-events-none absolute bottom-0 right-0 z-20 h-16 w-16 border-b border-r border-blue-400/10 transition-all duration-500 group-hover:h-20 group-hover:w-20 group-hover:border-blue-400/30" />

      {/* Technical marker */}
      <div className="absolute right-4 top-4 z-30 flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.25em] text-white/25">
        <ScanLine size={11} />
        AIX
      </div>

      <div
        className={
          featured
            ? "grid sm:grid-cols-[280px_1fr]"
            : ""
        }
      >
        {/* Portrait */}
        <div
          className={[
            "relative overflow-hidden bg-[#030711]",
            featured
              ? "aspect-[3/4] sm:aspect-auto sm:min-h-[360px]"
              : "aspect-[3/4]",
          ].join(" ")}
        >
          <img
            src={image}
            alt={`Portrait of ${name}`}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />

          {/* Image gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030711] via-transparent to-transparent opacity-80" />

          {/* Technical scan line */}
          <div className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-gold shadow-[0_0_12px_rgba(201,162,39,0.7)] transition-all duration-700 group-hover:w-full" />

          {/* Gold image glow */}
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(201,162,39,0.08),transparent_55%)]" />
          </div>
        </div>

        {/* Information */}
        <div
          className={[
            "relative flex flex-col justify-end p-6",
            featured
              ? "sm:p-10"
              : "",
          ].join(" ")}
        >
          {/* Small role marker */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-gold/60" />

            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-gold">
              {featured
                ? "Executive Leadership"
                : role}
            </span>
          </div>

          <h3
            className={[
              "font-display font-semibold leading-tight text-ivory",
              featured
                ? "text-3xl sm:text-4xl"
                : "text-xl",
            ].join(" ")}
          >
            {name}
          </h3>

          <p className="mt-2 text-sm font-medium text-gold/90">
            {role}
          </p>

          <p className="mt-1 text-sm text-ivory/45">
            {classSection}
          </p>

          {/* Bottom identity */}
          <div className="mt-7 flex items-center justify-between border-t border-white/[0.07] pt-4">
            <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/20">
              AI Innovation eXchange
            </span>

            <span className="font-mono text-[8px] text-white/15">
              2026
            </span>
          </div>

          {/* Background technical lines */}
          <div className="pointer-events-none absolute bottom-8 right-6 h-20 w-20 opacity-10">
            <div className="absolute right-0 top-0 h-px w-12 bg-blue-400" />
            <div className="absolute right-0 top-0 h-12 w-px bg-blue-400" />
            <div className="absolute bottom-0 left-0 h-px w-8 bg-gold" />
            <div className="absolute bottom-0 left-0 h-8 w-px bg-gold" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}