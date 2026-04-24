"use client";

import React from 'react';
import { LayoutTemplate, Layout, Server, Smartphone } from 'lucide-react';

const Portfolio = () => {
  const services = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces using React and Next.js.",
      icon: <Layout className="w-7 h-7 text-[#2563EB]" />
    },
    {
      title: "Backend Development",
      description: "Designing robust APIs and database architectures with Node.js and Laravel.",
      icon: <Server className="w-7 h-7 text-[#E1306C]" />
    },
    {
      title: "Responsive Design",
      description: "Ensuring applications look great and function perfectly on all devices and screen sizes.",
      icon: <Smartphone className="w-7 h-7 text-[#25D366]" />
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#212529] mb-4">
          Hi, I&apos;m Alvanza 
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            A passionate Informatics Engineering student in the 5th semester with a strong interest in Full-Stack Web Development and Machine Learning. 
            Highly motivated to explore the latest web technologies, from front-end to back-end development. 
            Always eager to learn new technologies and expand my skill set. Adaptable and committed to self-improvement in a fast-evolving technological landscape.
        </p>
      </div>

      {/* What I Do Section */}
      <div>
        <h2 className="text-2xl font-bold text-[#212529] mb-6 flex items-center gap-2">
          <LayoutTemplate className="w-6 h-6" /> What I Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 p-3 bg-white rounded-2xl shadow-sm inline-block group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-[#212529] mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;