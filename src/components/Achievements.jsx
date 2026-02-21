import { Rocket, Trophy, Zap } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      icon: <Rocket size={20} className="text-indigo-500" />,
      bg: "bg-indigo-50",
      title: "NASA Space Apps 2025",
      desc: "Built a Space Biology Knowledge Engine in a 48-hour global hackathon, processing 500+ experiment records."
    },
    {
      icon: <Trophy size={20} className="text-amber-500" />,
      bg: "bg-amber-50",
      title: "National TechnoThon Runner-Up",
      desc: "Developed a tourism website with 360° virtual destination views and booking functionality."
    },
    {
      icon: <Zap size={20} className="text-rose-500" />,
      bg: "bg-rose-50",
      title: "6+ Hackathons",
      desc: "Participated in national and inter-college hackathons, shipping functional products under pressure."
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
      <p className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-5">Achievements & Activities</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {achievements.map((a, i) => (
          <div key={i} className={`${a.bg} rounded-xl p-4`}>
            <div className="mb-3">{a.icon}</div>
            <p className="text-sm font-bold text-slate-800 mb-2 leading-snug">{a.title}</p>
            <p className="text-xs text-slate-500 leading-relaxed">{a.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}