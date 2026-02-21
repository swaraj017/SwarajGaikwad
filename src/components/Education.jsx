import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
      <p className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-4">Education</p>

      <div className="space-y-4">
        {[
          { d: 'B.E. Engineering', s: 'MET Bhujbal Knowledge City, IOE Nashik' },
          { d: 'Diploma in IT', s: 'KK Wagh Polytechnic Institute, Nashik' }
        ].map((e, i) => (
          <div key={i} className="flex gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <GraduationCap size={13} className="text-slate-500" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800">{e.d}</p>
              <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{e.s}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}