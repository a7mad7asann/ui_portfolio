import React, { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';

const Dashboard = () => {
  const { data, updateData } = useContext(DataContext);
  const [activeTab, setActiveTab] = useState('about');

  const [aboutData, setAboutData] = useState(data.about);
  const [skillsData, setSkillsData] = useState(data.skills);

  const handleSaveAbout = (e) => {
    e.preventDefault();
    updateData('about', aboutData);
    alert('About section updated!');
  };

  const handleSaveSkills = (e) => {
    e.preventDefault();
    updateData('skills', skillsData);
    alert('Skills section updated!');
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#1a1d21] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 flex flex-col gap-2">
            <button 
              onClick={() => setActiveTab('about')}
              className={`p-3 text-left rounded-lg transition-colors ${activeTab === 'about' ? 'bg-[#007bff]' : 'bg-[#212529] hover:bg-gray-800'}`}
            >
              About Section
            </button>
            <button 
              onClick={() => setActiveTab('skills')}
              className={`p-3 text-left rounded-lg transition-colors ${activeTab === 'skills' ? 'bg-[#007bff]' : 'bg-[#212529] hover:bg-gray-800'}`}
            >
              Skills Section
            </button>
            {/* Add more tabs for Services, Portfolio, etc. */}
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-[#212529] p-6 rounded-xl border border-gray-800">
            {activeTab === 'about' && (
              <form onSubmit={handleSaveAbout}>
                <h2 className="text-2xl font-bold mb-6">Edit About</h2>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Title</label>
                  <input 
                    type="text" 
                    value={aboutData.title}
                    onChange={(e) => setAboutData({...aboutData, title: e.target.value})}
                    className="w-full bg-[#1a1d21] border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-[#007bff]"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Title Highlight</label>
                  <input 
                    type="text" 
                    value={aboutData.titleHighlight}
                    onChange={(e) => setAboutData({...aboutData, titleHighlight: e.target.value})}
                    className="w-full bg-[#1a1d21] border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-[#007bff]"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Subtitle</label>
                  <input 
                    type="text" 
                    value={aboutData.subtitle}
                    onChange={(e) => setAboutData({...aboutData, subtitle: e.target.value})}
                    className="w-full bg-[#1a1d21] border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-[#007bff]"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Paragraphs (separated by double newlines)</label>
                  <textarea 
                    rows="6"
                    value={aboutData.paragraphs.join('\n\n')}
                    onChange={(e) => setAboutData({...aboutData, paragraphs: e.target.value.split('\n\n')})}
                    className="w-full bg-[#1a1d21] border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-[#007bff]"
                  ></textarea>
                </div>
                <button type="submit" className="bg-[#007bff] hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300">
                  Save Changes
                </button>
              </form>
            )}

            {activeTab === 'skills' && (
              <form onSubmit={handleSaveSkills}>
                <h2 className="text-2xl font-bold mb-6">Edit Skills</h2>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Experience Title</label>
                  <input 
                    type="text" 
                    value={skillsData.expTitle}
                    onChange={(e) => setSkillsData({...skillsData, expTitle: e.target.value})}
                    className="w-full bg-[#1a1d21] border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-[#007bff]"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Experience Description</label>
                  <textarea 
                    rows="3"
                    value={skillsData.expDesc}
                    onChange={(e) => setSkillsData({...skillsData, expDesc: e.target.value})}
                    className="w-full bg-[#1a1d21] border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-[#007bff]"
                  ></textarea>
                </div>
                {/* Simplified skills list editor for now */}
                <button type="submit" className="bg-[#007bff] hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300">
                  Save Changes
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
