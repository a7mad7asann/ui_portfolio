import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// We'll use placeholders if the specific images aren't available, but we'll point to banner images for now
import banner1 from '../images/banner/banner1.webp';
import banner2 from '../images/banner/banner2.webp';
import banner3 from '../images/banner/banner3.webp';

const Project = () => {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'App Design', 'Web Design'];

  const projects = [
    { id: 1, title: 'Web Project 1', category: 'Web Design', img: banner1 },
    { id: 2, title: 'App Project 1', category: 'App Design', img: banner2 },
    { id: 3, title: 'Web Project 2', category: 'Web Design', img: banner3 },
    { id: 4, title: 'App Project 2', category: 'App Design', img: banner1 },
  ];

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section className="py-20 bg-[#1c1f24] text-white" id="project">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-8">portfolio</h2>
          
          <div className="flex justify-center space-x-8">
            {tabs.map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-semibold transition-colors duration-300 ${
                  activeTab === tab ? 'text-[#007bff]' : 'text-gray-300 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="group relative rounded-2xl overflow-hidden bg-[#1e2227] aspect-video cursor-pointer"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              {/* Image */}
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e2227] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-[#007bff] font-medium mb-1">{project.category}</p>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
              </div>

              {/* Top-left icon placeholder (like figma icon in design) */}
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-black rounded-md flex items-center justify-center shadow-lg opacity-80">
                 <span className="text-white text-xs font-bold">F</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Project;
