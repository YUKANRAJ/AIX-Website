import { Link } from "react-router-dom";
import logo from "../assets/aix-logo.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy-deep">
      <div className="section grid gap-10 py-12 sm:py-14 md:grid-cols-3">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="AIX logo" className="h-10 w-10 rounded-full object-cover" />
            <span className="font-display text-lg font-semibold text-ivory">
              AIX — AI Innovation eXchange
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/60">
            A student-driven AI ecosystem in the Department of Artificial
            Intelligence and Machine Learning, where curiosity becomes
            innovation.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Navigate</p>
          <ul className="space-y-2.5 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/events", label: "Events" },
              { to: "/coordinators", label: "Club Coordinators" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-ivory/70 transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Department</p>
          <p className="text-sm leading-relaxed text-ivory/70">
            Artificial Intelligence and Machine Learning
            <br />
            Panimalar Engineering College
            <br />
            Bangalore Trunk Road, Varadharajapuram,
            <br />
            Poonamallee, Chennai – 600 123
          </p>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="section flex flex-col items-center justify-between gap-2 py-5 text-xs text-ivory/45 sm:flex-row">
          <p>&copy; {year} AIX — AI Innovation eXchange. All rights reserved.</p>
          <p>Department of Artificial Intelligence and Machine Learning</p>
        </div>
      </div>
    </footer>
  );
}
