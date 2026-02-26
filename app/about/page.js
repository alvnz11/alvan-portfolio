"use client";

import { useState } from "react";

const skills = [
  { name: "Java", icon: "☕", level: 90 },
  { name: "JavaScript", icon: "⚡", level: 85 },
  { name: "Python", icon: "🐍", level: 80 },
  { name: "HTML5", icon: "🌐", level: 95 },
  { name: "Bootstrap", icon: "🎨", level: 88 },
  { name: "PHP", icon: "🐘", level: 75 },
  { name: "React", icon: "⚛️", level: 82 },
  { name: "Laravel", icon: "🔥", level: 78 },
  { name: "Tailwind CSS", icon: "💨", level: 90 },
  { name: "SQL Server", icon: "🗄️", level: 70 },
  { name: "MySQL", icon: "🐬", level: 85 },
  { name: "GitHub", icon: "🐙", level: 88 },
];

const education = [
  {
    degree: "S1 Teknik Informatika",
    school: "Universitas XYZ",
    year: "2023 – Present",
    description: "Currently in the 4th semester, focusing on software engineering and web development.",
  },
];

export default function AboutPage() {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <div className="animate-in fade-in duration-500">
      {/* Page title */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#212529] mb-2">
          About Me
        </h1>
        <p className="text-gray-500 text-sm uppercase tracking-widest font-semibold">Know more about me</p>
      </div>

      {/* Bio */}
      <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 mb-8">
        <h2 className="text-xl font-bold text-[#212529] mb-4">Who Am I?</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Hi! I&apos;m <span className="font-semibold text-[#212529]">Alvanza Saputra Yudha</span>, a passionate Informatics Engineering student
          currently in my 4th semester. I have a strong interest in Full-Stack Web Development and love building
          things for the web — from polished user interfaces to robust back-end systems.
        </p>
        <p className="text-gray-600 leading-relaxed">
          I&apos;m highly motivated to explore the latest web technologies and am always eager to take on new challenges.
          Adaptable and committed to continuous self-improvement, I thrive in fast-evolving technological environments.
        </p>
      </div>

      {/* Education */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#212529] mb-4">Education</h2>
        <div className="space-y-4">
          {education.map((edu, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl border border-gray-100 p-5 flex gap-4 items-start">
              <div className="text-3xl">🎓</div>
              <div>
                <h3 className="font-bold text-[#212529]">{edu.degree}</h3>
                <p className="text-gray-600 font-medium text-sm">{edu.school} · {edu.year}</p>
                <p className="text-gray-500 text-sm mt-1">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-2xl font-bold text-[#212529] mb-4">Tech Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-[#212529] hover:text-white transition-all duration-300 cursor-pointer shadow-sm"
              onMouseEnter={() => setActiveSkill(skill.name)}
              onMouseLeave={() => setActiveSkill(null)}
              style={{ animationDelay: `${index * 40}ms` }}
            >
              <div className="text-center mb-2">
                <div className="text-2xl mb-1 group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
                <h3 className="font-medium text-sm">{skill.name}</h3>
              </div>
              {/* Progress bar */}
              <div className="h-1.5 rounded-full bg-gray-200 overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#212529] group-hover:bg-white transition-all duration-500"
                  style={{ width: activeSkill === skill.name ? `${skill.level}%` : "0%" }}
                />
              </div>
              {activeSkill === skill.name && (
                <span className="block text-center text-xs mt-1 opacity-80">{skill.level}%</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
