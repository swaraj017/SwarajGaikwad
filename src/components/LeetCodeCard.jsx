import { Code2, ArrowUpRight } from "lucide-react";

export default function LeetCodeCard() {
  const stats = {
    totalSolved: 120,
    totalProblems: 3846,
    easy: { solved: 65, total: 927 },
    medium: { solved: 53, total: 2010 },
    hard: { solved: 2, total: 909 },
    acceptance: 55.77,
    rank: "1,234,840",
    submissions: 260,
  };

  const diffConfig = [
    { label: "Easy", solved: stats.easy.solved, total: stats.easy.total, color: "#22c55e", beat: "82.51%" },
    { label: "Medium", solved: stats.medium.solved, total: stats.medium.total, color: "#f59e0b", beat: "75.17%" },
    { label: "Hard", solved: stats.hard.solved, total: stats.hard.total, color: "#ef4444", beat: "20.56%" },
  ];

  const radius = 52;
  const circ = 2 * Math.PI * radius;

  const easyFrac = stats.easy.solved / stats.totalProblems;
  const medFrac = stats.medium.solved / stats.totalProblems;
  const hardFrac = stats.hard.solved / stats.totalProblems;
  const gap = 0.012;

  const easyDash = circ * easyFrac;
  const medDash = circ * medFrac;
  const hardDash = circ * hardFrac;

  const easyOffset = 0;
  const medOffset = -(easyDash + circ * gap);
  const hardOffset = -(easyDash + circ * gap + medDash + circ * gap);

  return (
    <div className="bg-slate-900 rounded-3xl p-8 relative overflow-hidden border border-white/10">

      {/* Glow Effects (same as Hero) */}
      <div
        className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-5"
        style={{
          background: "radial-gradient(circle, #f59e0b, transparent)",
          transform: "translate(30%,-30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-5"
        style={{
          background: "radial-gradient(circle, #22c55e, transparent)",
          transform: "translate(-30%,30%)",
        }}
      />

      <div className="relative">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
              <Code2 size={16} className="text-amber-400" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold">LeetCode Stats</p>
              <p className="text-slate-400 text-xs">@SwarajGaikwad</p>
            </div>
          </div>

          <a
            href="https://leetcode.com/SwarajGaikwad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Content */}
        <div className="flex flex-col sm:flex-row gap-8">

          {/* Donut */}
          <div className="flex flex-col items-center gap-3">
            <div className="relative">
              <svg width="140" height="140" viewBox="0 0 140 140">
                <circle
                  cx="70"
                  cy="70"
                  r={radius}
                  fill="none"
                  stroke="#1e293b"
                  strokeWidth="14"
                />

                <circle
                  cx="70"
                  cy="70"
                  r={radius}
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="14"
                  strokeDasharray={`${easyDash} ${circ}`}
                  strokeDashoffset={easyOffset}
                  strokeLinecap="round"
                  style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
                />

                <circle
                  cx="70"
                  cy="70"
                  r={radius}
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="14"
                  strokeDasharray={`${medDash} ${circ}`}
                  strokeDashoffset={medOffset}
                  strokeLinecap="round"
                  style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
                />

                <circle
                  cx="70"
                  cy="70"
                  r={radius}
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="14"
                  strokeDasharray={`${hardDash} ${circ}`}
                  strokeDashoffset={hardOffset}
                  strokeLinecap="round"
                  style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-white">
                  {stats.totalSolved}
                </span>
                <span className="text-xs text-slate-400">Solved</span>
              </div>
            </div>

            <div className="flex gap-4 text-xs font-semibold">
              <span className="text-green-400">Easy {stats.easy.solved}</span>
              <span className="text-amber-400">Med {stats.medium.solved}</span>
              <span className="text-red-400">Hard {stats.hard.solved}</span>
            </div>
          </div>

          {/* Stats + Bars */}
          <div className="flex-1 flex flex-col gap-4 justify-center">
            {diffConfig.map(({ label, solved, total, color, beat }) => (
              <div key={label}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-400">
                    {label} {solved} / {total}
                  </span>
                  <span className="text-slate-500">
                    Beats <span style={{ color }}>{beat}</span>
                  </span>
                </div>

                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${(solved / total) * 100}%`,
                      backgroundColor: color,
                      transition: "width 1s ease",
                    }}
                  />
                </div>
              </div>
            ))}

            {/* Quick Stats */}
            <div className="flex gap-4 mt-3">
              {[
                { label: "Rank", value: `#${stats.rank}` },
                { label: "Acceptance", value: `${stats.acceptance}%` },
                { label: "Submissions", value: stats.submissions },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-center"
                >
                  <p className="text-white font-semibold text-sm">{value}</p>
                  <p className="text-slate-500 text-xs mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}