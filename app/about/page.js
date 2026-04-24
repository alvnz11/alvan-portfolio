"use client";

import { Award, Briefcase, GraduationCap, Code2, Wrench, Users, MonitorSmartphone } from "lucide-react";

const experiences = [
  {
    role: "Backend Developer",
    company: "PT Dutakom Wibawa Putra",
    year: "Internship",
    description: "Gained hands-on experience as a backend developer, focusing on building and optimizing back-end systems.",
  },
];

const education = [
  {
    degree: "Applied Bachelor in Informatics Engineer",
    school: "Politeknik Negeri Malang",
    year: "2023 - Present",
    description: "Current GPA: 3.85 / 4.00",
  },
  {
    degree: "Mathematics and Science (MIPA)",
    school: "SMA Negeri 1 Lawang",
    year: "2020 - 2023",
    description: "Final Score: 91.03 / 100.00",
  },
];

const certifications = [
  "Junior Web Developer (Vocational School Graduate Academy) – Digitalent Scholarship",
  "Belajar Dasar AI – Dicoding Indonesia",
  "Memulai Pemrograman Dengan Java – Dicoding Indonesia"
];

const skillCategories = [
  {
    title: "Hard Skills",
    icon: <Code2 className="w-5 h-5" />,
    items: ["HTML", "CSS", "Javascript", "REST API", "GraphQL", "Ruby", "Rails", "React", "Tailwind CSS", "Bootstrap", "PHP", "Laravel", "Dart", "Flutter", "MySQL", "SQL Server", "PostgreSQL"]
  },
  {
    title: "Tools & Environment",
    icon: <Wrench className="w-5 h-5" />,
    items: ["Git", "Github", "Postman", "Visual Studio Code", "Android Studio"]
  },
  {
    title: "Soft Skills",
    icon: <Users className="w-5 h-5" />,
    items: ["Problem Solving", "Time Management", "Team Work", "Collaboration"]
  },
  {
    title: "Languages",
    icon: <MonitorSmartphone className="w-5 h-5" />,
    items: ["Indonesian (Native)", "English (Beginner)"]
  }
];

export default function AboutPage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
      {/* Page title */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#212529] mb-2">
          About Me
        </h1>
        <p className="text-gray-500 text-sm uppercase tracking-widest font-semibold">Know more about me</p>
      </div>

      {/* Experience */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#212529] mb-4 flex items-center gap-2">
          <Briefcase className="w-6 h-6" /> Experience
        </h2>
        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl border border-gray-100 p-5 flex flex-col sm:flex-row gap-4 items-start hover:shadow-xl hover:-translate-y-1 hover:bg-white transition-all duration-300">
              <div className="p-3 bg-white rounded-xl shadow-sm hidden sm:block">
                <Briefcase className="w-6 h-6 text-[#212529]" />
              </div>
              <div>
                <h3 className="font-bold text-[#212529] text-lg">{exp.role}</h3>
                <p className="text-[#2563EB] font-medium text-sm mb-2">{exp.company} <span className="text-gray-400 mx-1">•</span> <span className="text-gray-500">{exp.year}</span></p>
                <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#212529] mb-4 flex items-center gap-2">
          <GraduationCap className="w-6 h-6" /> Education
        </h2>
        <div className="space-y-4">
          {education.map((edu, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl border border-gray-100 p-5 flex flex-col sm:flex-row gap-4 items-start hover:shadow-xl hover:-translate-y-1 hover:bg-white transition-all duration-300">
              <div className="p-3 bg-white rounded-xl shadow-sm hidden sm:block">
                <GraduationCap className="w-6 h-6 text-[#212529]" />
              </div>
              <div>
                <h3 className="font-bold text-[#212529] text-lg">{edu.school}</h3>
                <p className="text-gray-600 font-medium text-sm mb-1">{edu.degree} <span className="text-gray-400 mx-1">•</span> <span className="text-gray-500">{edu.year}</span></p>
                <p className="text-gray-500 text-sm font-semibold">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#212529] mb-4 flex items-center gap-2">
          <Award className="w-6 h-6" /> Certifications
        </h2>
        <div className="grid grid-cols-1 gap-3">
          {certifications.map((cert, i) => (
            <div key={i} className="bg-gray-50 rounded-xl border border-gray-100 p-4 flex items-center gap-3 hover:bg-white hover:shadow-md hover:scale-[1.02] transition-all duration-300">
              <Award className="w-5 h-5 text-[#E1306C]" />
              <span className="text-gray-700 text-sm font-medium">{cert}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-2xl font-bold text-[#212529] mb-4 flex items-center gap-2">
          <Code2 className="w-6 h-6" /> Skills & Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillCategories.map((cat, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl border border-gray-100 p-5 hover:shadow-xl hover:-translate-y-1 hover:bg-white transition-all duration-300">
              <h3 className="font-bold text-[#212529] mb-4 flex items-center gap-2">
                {cat.icon} {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, j) => (
                  <span key={j} className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 text-xs font-medium rounded-lg shadow-sm hover:scale-110 hover:-translate-y-1 hover:bg-[#212529] hover:text-white hover:border-[#212529] transition-all duration-300 cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
