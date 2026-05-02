import React, { createContext, useState, useEffect } from 'react';

const defaultData = {
  about: {
    title: "About",
    titleHighlight: "Me",
    subtitle: "More Than 3+ Years Ui Ux Designer",
    paragraphs: [
      "Et blanditiis sit neque provident soluta quibusdam. Ut optio nobis. Eligendi voluptas qui maxime id quo culpa qui. Nihil error necessitatibus distinctio explicabo et.",
      "Voluptas quas placeat. Quia aut aut vel harum ullam eum. Nihil minima fugit fuga tempore eum aut consequatur. Dolores iusto minus ab soluta in temporibus fuga.",
      "Quaerat sit sequi temporibus voluptatem. Dolore aut rerum enim aut suscipit facere. Libero ."
    ]
  },
  skills: {
    title: "Our",
    titleHighlight: "Skills",
    expTitle: "Creative and professional Experience",
    expDesc: "Lorem ipsum dolor sit amet consectetur. Amet justo laoreet quis felis. Vitae pellentesque mauris",
    skillsList: [
      { name: "Ui Ux", value: 95 }
    ]
  },
  services: {
    title: "Awesome",
    titleHighlight: "Services For You",
    list: [
      {
        id: 1,
        title: "UX/UI Designer",
        desc: "Et blanditiis sit neque provident soluta quibusdam. Ut optio nobis. Eligendi voluptas qui maxime id quo culpa qui. Nihil error necessitatibus distinctio"
      }
    ]
  },
  portfolio: {
    title: "portfolio",
    categories: ["All", "App Design", "Web Design"]
  }
};

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('portfolioData');
    return savedData ? JSON.parse(savedData) : defaultData;
  });

  useEffect(() => {
    localStorage.setItem('portfolioData', JSON.stringify(data));
  }, [data]);

  const updateData = (section, newData) => {
    setData(prev => ({
      ...prev,
      [section]: newData
    }));
  };

  return (
    <DataContext.Provider value={{ data, updateData }}>
      {children}
    </DataContext.Provider>
  );
};
