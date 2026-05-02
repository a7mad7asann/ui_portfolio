import React, { Suspense, lazy } from 'react';
import DeferredMount from '../component/DeferredMount';

//pages
import Header from './Header';

// Lazy load below-the-fold components
const About = lazy(() => import('./About'));
const Services = lazy(() => import('./Services'));
const Project = lazy(() => import('./Project'));
const Contact = lazy(() => import('./Contact'));

// Fallback skeleton or loader
const Fallback = () => <div className="py-20 text-center text-gray-500">Loading section...</div>;

const Home = () => {
  return (
    <>
      <Header/>
      <Suspense fallback={<Fallback />}>
        <DeferredMount>
          <About/>
        </DeferredMount>
        <DeferredMount>
          <Services/>
        </DeferredMount>
        <DeferredMount>
          <Project/>
        </DeferredMount>
        <DeferredMount>
          <Contact/>
        </DeferredMount>
      </Suspense>
    </>
  )
}

export default Home;
