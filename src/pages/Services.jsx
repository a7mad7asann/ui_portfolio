import React, { useEffect, useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const { data } = useContext(DataContext);
  const { skills, services } = data;

  return (
    <section className="py-20 bg-[#1a1d21] text-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Skills Section */}
        <div className="mb-32">
          <div className="text-center mb-16 relative">
            {/* Glow effect behind title */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-16 bg-[#007bff] blur-[60px] opacity-20 z-0"></div>
            <h2 className="text-4xl font-bold relative z-10">
              {skills.title} <span className="text-[#007bff]">{skills.titleHighlight}</span>
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-16">
            <div className="flex-1" data-aos="fade-right">
              <h3 className="text-3xl font-bold mb-4 leading-tight whitespace-pre-line">
                {skills.expTitle.replace('and ', 'and\n')}
              </h3>
              <p className="text-gray-300 text-sm mb-8 max-w-md leading-relaxed">
                {skills.expDesc}
              </p>
              <button className="bg-[#007bff] hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(0,123,255,0.6)]">
                Get Any Project
              </button>
            </div>
            
            <div className="flex-1 w-full" data-aos="fade-left">
              {skills.skillsList.map((skill, idx) => (
                <div key={idx} className="mb-6">
                  <div className="mb-2 flex justify-between">
                    <span className="font-bold text-lg">{skill.name}</span>
                    <span className="font-bold text-[#007bff]">{skill.value}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-[#007bff] h-1.5 rounded-full" style={{ width: `${skill.value}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-32">
          <div className="text-center mb-16 relative">
             {/* Glow effect behind title */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-16 bg-[#007bff] blur-[60px] opacity-20 z-0"></div>
            <h2 className="text-3xl md:text-4xl font-bold relative z-10">
              {services.title} <span className="text-[#007bff]">{services.titleHighlight}</span>
            </h2>
          </div>

          <div className="flex justify-center" data-aos="fade-up">
            {services.list.map(service => (
              <div key={service.id} className="bg-[#181a1f] p-10 rounded-2xl w-full max-w-sm text-center shadow-lg hover:shadow-[0_0_30px_rgba(0,123,255,0.2)] transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full border border-gray-800 bg-[#1f2228] flex items-center justify-center">
                    <FontAwesomeIcon icon={faPaintBrush} className="text-2xl text-[#007bff]" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-8 leading-relaxed">
                  {service.desc}
                </p>
                <button className="bg-[#007bff] hover:bg-blue-600 text-white font-medium py-2.5 px-6 rounded-lg text-sm transition-all duration-300 shadow-[0_0_15px_rgba(0,123,255,0.4)]">
                  Explore Service
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-12 border-t border-b border-gray-800 mt-16" data-aos="fade-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="text-4xl md:text-5xl font-bold text-[#007bff] mb-2">50</h4>
              <p className="text-[#007bff] font-medium">Happy Clients</p>
            </div>
            <div>
              <h4 className="text-4xl md:text-5xl font-bold text-[#007bff] mb-2">3</h4>
              <p className="text-[#007bff] font-medium">Years Experience</p>
            </div>
            <div>
              <h4 className="text-4xl md:text-5xl font-bold text-[#007bff] mb-2">15K</h4>
              <p className="text-[#007bff] font-medium">Hours Worked</p>
            </div>
            <div>
              <h4 className="text-4xl md:text-5xl font-bold text-[#007bff] mb-2">8</h4>
              <p className="text-[#007bff] font-medium">Awards Won</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
