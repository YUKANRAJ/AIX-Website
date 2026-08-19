import { motion } from "framer-motion";

export default function SectionTitle({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`flex max-w-2xl flex-col gap-3 ${alignment}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
      {description && (
        <p className="text-base leading-relaxed text-ivory/65 sm:text-lg">{description}</p>
      )}
    </motion.div>
  );
}
