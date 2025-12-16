import React from 'react';
import { Github, Mail, Phone, ExternalLink, Code2, GraduationCap } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      name: "Codeverse",
      tagline: "Live Pair Programming Platform",
      description:
        "Built a real-time collaborative IDE with a built-in code compiler using Monaco Editor and Socket.IO. Enabled multiple users to write, edit, and share code simultaneously in a live coding environment.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Socket.IO", "WebRTC"],
      link: "https://codeverse-v1.onrender.com/",
      icon: "💻"
    },
    {
      name: "Calistaa",
      tagline: "Tour and Travel Booking Platform",
      description:
        "Designed a user-centric full-stack platform for booking curated travel experiences using the MERN stack. Integrated Razorpay for secure online payments and instant booking confirmations.",
      tech: ["React", "Node.js", "MongoDB", "Express.js", "Razorpay", "Cloudinary"],
      link: "https://calistaa.onrender.com/",
      icon: "✈️"
    },
    {
      name: "PrepXpert",
      tagline: "AI Interview Prep Platform",
      description:
        "AI-driven platform using Gemini to prepare for interview Q&A with deep explanations. Session-based personalized UI with inputs like role, experience, and topics.",
      tech: ["React", "TailwindCSS", "Clerk", "Gemini API"],
      link: "https://prepxpert-frontend.onrender.com/",
      icon: "🎯"
    }
  ];

  const skills = {
    Languages: ["JavaScript", "Python", "SQL"],
    Frontend: ["React.js", "Tailwind CSS", "React Router"],
    Backend: ["Node.js", "Express.js", "MongoDB", "Mongoose", "MySQL", "RESTful APIs", "JWT", "WebSockets"],
    Tools: ["Git", "GitHub", "Cloudinary", "Clerk.dev", "Razorpay", "Vercel", "Render"]
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <div className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
            {/* Avatar */}
            <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-700 flex-shrink-0 flex items-center justify-center text-white text-4xl font-bold">
              SG
            </div>

            {/* Info */}
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl font-bold mb-2 sm:mb-3 text-gray-900">Swaraj Gaikwad</h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-4">Full Stack Developer</p>
              <p className="text-gray-700 mb-6 leading-relaxed max-w-full sm:max-w-2xl">
                Engineering student with a strong foundation in full-stack web development and problem-solving. Passionate about building scalable, user-centric solutions using modern technologies.
              </p>

              {/* Contact Links */}
              <div className="flex flex-wrap gap-4 mb-6">
                <a
                  href="mailto:swarajgaikwad017@gmail.com"
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <Mail size={18} />
                  <span className="text-sm">swarajgaikwad019@gmail.com</span>
                </a>
                <a
                  href="tel:+918446266017"
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <Phone size={18} />
                  <span className="text-sm">+91 8446266017</span>
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/swaraj017"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors flex items-center gap-2 text-sm font-medium"
                >
                  <Github size={18} /> GitHub
                </a>
                <a
                  href="https://leetcode.com/SwarajGaikwad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors flex items-center gap-2 text-sm font-medium"
                >
                  <Code2 size={18} /> LeetCode
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-12 sm:space-y-16">

        {/* Projects Section */}
        <section>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-0">Current Projects</h2>
            <a
              href="https://github.com/swaraj017?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 sm:px-5 sm:py-2.5 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors flex items-center gap-2 text-sm sm:text-sm font-medium"
            >
              <Github size={18} /> Explore More
            </a>
          </div>
          <div className="space-y-4 sm:space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow bg-white">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4">
                  <div className="flex items-start gap-4 mb-2 sm:mb-0">
                    <div className="text-3xl sm:text-4xl">{project.icon}</div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-1 text-gray-900">{project.name}</h3>
                      <p className="text-gray-600 font-medium">{project.tagline}</p>
                    </div>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-900 transition-colors mt-2 sm:mt-0"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 sm:px-3 sm:py-1.5 bg-gray-100 text-gray-700 rounded-lg text-xs sm:text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-900">Skills</h2>
          <div className="border border-gray-200 rounded-2xl p-4 sm:p-8 bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
              {Object.entries(skills)
                .flatMap(([category, items]) => items)
                .map((skill, i) => (
                  <div
                    key={i}
                    className="border border-gray-200 rounded-xl p-3 sm:p-4 text-center hover:border-gray-900 hover:shadow-md transition-all bg-gray-50"
                  >
                    <p className="font-medium text-gray-900 text-sm sm:text-base">{skill}</p>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Achievements & Education Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-900">Extracurricular Activities & Education</h2>
          <div className="space-y-4 sm:space-y-6">
            {/* NASA Challenge */}
            <div className="border border-gray-200 rounded-2xl p-6 sm:p-8 bg-white hover:shadow-lg transition-shadow">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="text-3xl sm:text-4xl">🚀</div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">NASA Space Apps Challenge 2025</h3>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    Built a <strong>Space Biology Knowledge Engine</strong> during a 48-hour hackathon. Processed <strong>500+ biological experiment records</strong> to create a searchable interface. Collaborated in a <strong>3-member team</strong> using <strong>React.js, Node.js, Python, NASA APIs</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Hackathon / Achievements */}
            <div className="border border-gray-200 rounded-2xl p-6 sm:p-8 bg-white hover:shadow-lg transition-shadow">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="text-3xl sm:text-4xl">🏆</div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">Runner-Up - National Level TechnoThon</h3>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    Awarded second place in a project competition - Diploma final year project on Environmental Garbage Detection using Raspberry Pi.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-2xl p-6 sm:p-8 bg-white hover:shadow-lg transition-shadow">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="text-3xl sm:text-4xl">💡</div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">6+ Hackathon Participations</h3>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    Participated in national and inter-college hackathons.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="border border-gray-200 rounded-2xl p-6 sm:p-8 bg-white">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">Education</h3>
                  <div className="space-y-2 sm:space-y-4 text-sm sm:text-base">
                    <div>
                      <p className="font-semibold text-gray-900">Bachelor of Engineering</p>
                      <p className="text-gray-600">MET Bhujbal Knowledge City, IOE Nashik</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Diploma in Information Technology</p>
                      <p className="text-gray-600">KK Wagh Polytechnic Institute, Nashik</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hire Me / Contact Section */}
        <section className="border border-gray-200 rounded-2xl p-6 sm:p-8 bg-white hover:shadow-lg transition-shadow text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="text-4xl sm:text-5xl">💼</div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Looking for Internship or Job Opportunities</h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Ready to transform ideas into real-world applications.
            </p>
            <a
              href="mailto:swarajgaikwad017@gmail.com"
              className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-colors text-sm sm:text-lg"
            >
              <Mail size={20} />
              Contact Me
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
