export default function Skills() {
  const skills = [
    { category: "Languages", items: ["JavaScript", "C++", "SQL", "HTML5"], bg: "bg-orange-100 text-orange-700" },
    { category: "Backend", items: ["Node.js", "Express.js", "MongoDB", "Mongoose", "MySQL", "REST APIs", "WebSockets", "JWT", "Bcrypt", "Backblaze B2"], bg: "bg-green-100 text-green-700" },
    { category: "Frontend", items: ["React.js", "Tailwind CSS", "React Router"], bg: "bg-blue-100 text-blue-700" },
    { category: "Tools", items: ["Git", "GitHub", "Cloudinary", "Clerk.dev", "Razorpay", "Vercel", "Render", "Requestly"], bg: "bg-purple-100 text-purple-700" }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
      <p className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-4">Skills</p>

      <div className="space-y-4">
        {skills.map(({ category, items, bg }) => (
          <div key={category}>
            <p className="text-xs font-semibold text-slate-500 mb-2">{category}</p>
            <div className="flex flex-wrap gap-1.5">
              {items.map(s => (
                <span key={s} className={`text-xs font-medium px-2.5 py-1 rounded-lg ${bg}`}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}