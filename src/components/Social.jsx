import { Github, Linkedin, Code2 } from "lucide-react";

export default function Social() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
      <p className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-4">Connect</p>

      <div className="flex flex-col gap-2">
        {[
          { icon: <Github size={13} />, label: 'github.com/swaraj017', href: 'https://github.com/swaraj017' },
          { icon: <Linkedin size={13} />, label: 'LinkedIn', href: 'https://linkedin.com/in/Gaikwad-Swaraj' },
          { icon: <Code2 size={13} />, label: 'LeetCode', href: 'https://leetcode.com/SwarajGaikwad' }
        ].map(({ icon, label, href }) => (
          <a key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-sm font-medium bg-slate-50">
            {icon} {label}
          </a>
        ))}
      </div>
    </div>
  );
}