"use client";

import React, { useState, useEffect } from 'react';
import { Code, Database, Palette, Smartphone, Globe, Server } from 'lucide-react';

const Portfolio = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const skills = [
    { name: 'Java', icon: '☕', level: 90 },
    { name: 'JavaScript', icon: '⚡', level: 85 },
    { name: 'Python', icon: '🐍', level: 80 },
    { name: 'HTML5', icon: '🌐', level: 95 },
    { name: 'Bootstrap', icon: '🎨', level: 88 },
    { name: 'PHP', icon: '🐘', level: 75 },
    { name: 'React', icon: '⚛️', level: 82 },
    { name: 'Laravel', icon: '🔥', level: 78 },
    { name: 'Tailwind CSS', icon: '💨', level: 90 },
    { name: 'SQL Server', icon: '🗄️', level: 70 },
    { name: 'MySQL', icon: '🐬', level: 85 },
    { name: 'GitHub', icon: '🐙', level: 88 }
  ];

  return (
    <div className="animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#212529] mb-4">
          Hi, I'm Alvanza 👋
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            A passionate Informatics Engineering student in the 4th semester with a strong interest in Full-Stack Web Development. 
            Highly motivated to explore the latest web technologies, from front-end to back-end development. 
            Always eager to learn new technologies and expand my skill set. Adaptable and committed to self-improvement in a fast-evolving technological landscape.
        </p>
      </div>

      {/* Skills Section */}
      <div>
        <h2 className="text-2xl font-bold text-[#212529] mb-6 flex items-center gap-2">
          <Code className="w-6 h-6" /> Tech Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-[#212529] hover:text-white transition-all duration-300 cursor-pointer shadow-sm"
              onMouseEnter={() => setActiveSkill(skill.name)}
              onMouseLeave={() => setActiveSkill(null)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-center">
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="font-medium text-sm">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;