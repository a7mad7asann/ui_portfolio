import React from 'react'

//pages
import Header     from  './Header';
import Information from './About';
import Project     from './Project';
import Services    from './Services';
import Contact     from './Contact';

const Home = () => {
  return (
    <>
      <Header/>
      
      <Information/>
      
      <Services/>
      
      <Project/>

      <Contact/>
      
    </>
  )
}

export default Home
