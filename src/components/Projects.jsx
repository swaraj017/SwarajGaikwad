import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      name: "CloudShare",
      tagline: "Secure Cloud Storage",
      description: "Cloud storage with file upload, public/private sharing, real-time search. Reduced storage cost by 30% with Backblaze B2.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Backblaze B2"],
      link: "https://cloud-share-sys.vercel.app/",
      emoji: "☁️",
      color: "bg-violet-50 border-violet-100"
    },
    {
      name: "Codeverse",
      tagline: "Live Pair Programming",
      description: "Real-time collaborative IDE with live coding and video conferencing. Integrated WebRTC for peer-to-peer video communication.",
      tech: ["React", "Node.js", "MongoDB", "WebSockets", "WebRTC", "JWT"],
      link: "https://codeverse-v1.onrender.com/",
      emoji: "💻",
      color: "bg-blue-50 border-blue-100"
    },
    {
      name: "Calistaa",
      tagline: "Travel Booking Platform",
      description: "Full-stack travel booking with curated experiences. Razorpay for payments, Cloudinary for media.",
      tech: ["React", "Node.js", "MongoDB", "Express.js", "Razorpay", "Cloudinary"],
      link: "https://calistaa.onrender.com/",
      emoji: "✈️",
      color: "bg-emerald-50 border-emerald-100"
    },
    {
      name: "PrepXpert",
      tagline: "AI Interview Prep",
      description: "AI-driven interview prep with structured Q&A and deep explanations. Boosted engagement by 30%.",
      tech: ["React", "Tailwind CSS", "Clerk", "Gemini API", "Node.js", "MongoDB"],
      link: "https://prepxpert-frontend.onrender.com/",
      emoji: "🎯",
      color: "bg-amber-50 border-amber-100"
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
      <p className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-5">Projects</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((p, i) => (
          <div key={i} className={`border rounded-xl p-4 ${p.color}`}>
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <span className="text-xl">{p.emoji}</span>
                <div>
                  <p className="text-sm font-bold text-slate-800">{p.name}</p>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">{p.tagline}</p>
                </div>
              </div>
              <a href={p.link} target="_blank" rel="noopener noreferrer"
                className="w-7 h-7 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-400">
                <ArrowUpRight size={12} />
              </a>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed mb-3">{p.description}</p>

            <div className="flex flex-wrap gap-1">
              {p.tech.slice(0, 4).map(t => (
                <span key={t} className="text-xs bg-white/80 text-slate-600 font-medium px-2 py-0.5 rounded-md border border-white">
                  {t}
                </span>
              ))}
              {p.tech.length > 4 && (
                <span className="text-xs bg-white/80 text-slate-400 font-medium px-2 py-0.5 rounded-md border border-white">
                  +{p.tech.length - 4}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}