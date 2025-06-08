"use client";

import React, { useState, useEffect } from 'react';
import { Github, Instagram, Linkedin, MessageCircle, Code, Database, Palette, Smartphone, Globe, Server } from 'lucide-react';
import Image from 'next/image';

const Portfolio = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const skills = [
    { name: 'Java', icon: '☕', color: 'from-orange-400 to-amber-500', level: 90 },
    { name: 'JavaScript', icon: '⚡', color: 'from-yellow-400 to-orange-400', level: 85 },
    { name: 'Python', icon: '🐍', color: 'from-green-400 to-emerald-500', level: 80 },
    { name: 'HTML5', icon: '🌐', color: 'from-red-400 to-rose-500', level: 95 },
    { name: 'Bootstrap', icon: '🎨', color: 'from-purple-400 to-violet-500', level: 88 },
    { name: 'PHP', icon: '🐘', color: 'from-indigo-400 to-blue-500', level: 75 },
    { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-teal-500', level: 82 },
    { name: 'Laravel', icon: '🔥', color: 'from-rose-400 to-pink-500', level: 78 },
    { name: 'Tailwind CSS', icon: '💨', color: 'from-teal-400 to-cyan-400', level: 90 },
    { name: 'SQL Server', icon: '🗄️', color: 'from-slate-400 to-gray-500', level: 70 },
    { name: 'MySQL', icon: '🐬', color: 'from-blue-400 to-sky-500', level: 85 },
    { name: 'GitHub', icon: '🐙', color: 'from-gray-600 to-slate-600', level: 88 }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/alvnzzz_', color: 'from-pink-400 to-rose-500' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/alvnz/', color: 'from-blue-500 to-indigo-600' },
    { name: 'WhatsApp', icon: MessageCircle, url: 'https://wa.me/+62895360215603', color: 'from-green-400 to-emerald-500' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/alvnz11', color: 'from-gray-600 to-slate-700' }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-40 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="text-center mb-6 sm:mb-8">
            <div className="relative inline-block mb-6 sm:mb-8">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-1 shadow-xl">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image
                    src="/alvn_foto.jpg"
                    alt="Alvanza Saputra Yudha"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-4 border-white animate-ping"></div>
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent px-4">
            Alvanza Saputra Yudha
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
              A passionate Informatics Engineering student in the 4th semester with a strong interest in Full-Stack Web Development. 
              Highly motivated to explore the latest web technologies, from front-end to back-end development. 
              Always eager to learn new technologies and expand my skill set. Adaptable and committed to self-improvement in a fast-evolving technological landscape.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-16 px-4">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                className={`group relative p-4 rounded-2xl bg-gradient-to-r ${social.color} shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 backdrop-blur-sm`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <IconComponent className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {social.name}
                </span>
              </a>
            );
          })}
        </div>

        {/* Skills Section */}
        <div className="mb-12 sm:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8 sm:mb-12">Tech Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`group relative p-3 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-200 hover:bg-white/90 transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md`}
                onMouseEnter={() => setActiveSkill(skill.name)}
                onMouseLeave={() => setActiveSkill(null)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-center">
                  <div className="text-xl sm:text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="text-gray-800 font-medium text-xs sm:text-sm mb-2">{skill.name}</h3>
                  

                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
        </div>


      </div>

      {/* Footer */}
      <div className="relative z-10 py-6 sm:py-8">
      </div>
    </div>
  );
};

export default Portfolio;