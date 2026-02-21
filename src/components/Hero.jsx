import { Mail, Phone, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #60a5fa, transparent)', transform: 'translate(30%,-30%)' }} />
      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #a78bfa, transparent)', transform: 'translate(-30%,30%)' }} />

      <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full inline-block animate-pulse"></span>
            Available for Internship & Full-time
          </div>

          <h1 className="display text-white font-bold leading-none mb-3"
            style={{ fontSize: 'clamp(2.8rem,7vw,5rem)' }}>
            Swaraj Gaikwad
          </h1>

          <p className="text-slate-400 text-lg font-medium mb-5">
            Full Stack Developer · Backend Developer
          </p>

          <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
            Engineering student with hands-on experience building scalable Node.js systems,
            real-time applications, and API-driven architectures.
          </p>
        </div>

        <div className="flex gap-4 md:flex-col md:items-end">
          {[['9+', 'Projects'], ['6+', 'Hackathons']].map(([n, l]) => (
            <div key={l} className="bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-center">
              <div className="display text-white font-bold text-2xl">{n}</div>
              <div className="text-slate-500 text-xs font-semibold tracking-widest uppercase mt-0.5">{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-3">
        <a href="mailto:swarajgaikwad019@gmail.com"
          className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors">
          <Mail size={13} /> swarajgaikwad019@gmail.com
        </a>

        <a href="tel:+918446266017"
          className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors">
          <Phone size={13} /> +91 8446266017
        </a>

        <span className="flex items-center gap-2 text-slate-500 text-sm">
          <MapPin size={13} /> Nashik, India
        </span>
      </div>
    </div>
  );
}