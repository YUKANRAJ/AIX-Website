import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="section flex min-h-[70vh] flex-col items-center justify-center gap-6 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center gap-4"
      >
        <span className="font-display text-7xl font-bold text-gold sm:text-8xl">404</span>
        <h1 className="font-display text-2xl font-semibold sm:text-3xl">Page Not Found</h1>
        <p className="max-w-md text-ivory/60">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <Link to="/" className="btn-primary mt-2">
          <Home size={16} aria-hidden="true" />
          Back Home
        </Link>
      </motion.div>
    </div>
  );
}
