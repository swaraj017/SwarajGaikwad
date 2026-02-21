import { Mail, Phone, MapPin } from "lucide-react";

export default function ConnectCard() {
  return (
    <div className="rounded-2xl p-6 border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="display text-slate-900 font-bold text-xl mb-1">Let's work together.</p>
                  <p className="text-slate-400 text-sm">Open to internship and full-time opportunities.</p>
                </div>
                <a href="mailto:swarajgaikwad019@gmail.com" className="flex-shrink-0 flex items-center gap-2 bg-slate-900 hover:bg-slate-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors">
                  <Mail size={14} /> Contact Me
                </a>
              </div>
            </div>
  );
}