export default function Experience() {
  const experience = [
    {
      company: "Sofsyst Software-System Pvt Ltd",
      role: "Web Dev Intern",
      abbr: "SS",
      color: "bg-emerald-600",
      points: [
        "Developed backend modules using Node.js and MongoDB for scalable performance.",
        "Implemented and tested backend endpoints; deployed services to production on Render."
      ]
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
      <p className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-5">Work Experience</p>

      <div className="space-y-5">
        {experience.map((exp, i) => (
          <div key={i}>
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 rounded-xl ${exp.color} flex items-center justify-center text-white text-xs font-bold`}>
                {exp.abbr}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">{exp.company}</p>
                <p className="text-xs text-slate-400 font-medium">{exp.role}</p>
              </div>
            </div>

            <div className="space-y-2">
              {exp.points.map((pt, pi) => (
                <div key={pi} className="flex gap-2.5">
                  <span className="text-slate-300 mt-2 text-xs">▸</span>
                  <p className="text-sm text-slate-500 leading-relaxed">{pt}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
