import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// style
import "./index.css";

// components
import NavBar from "./component/NavBar";
const Footer = lazy(() => import("./component/Footer.jsx"));

// Lazy load pages and heavy route components
const Home = lazy(() => import("./pages/Home"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const ImageGallery = lazy(() => import("./component/ImageGallery"));
const WebProject = lazy(() => import("./component/WebProject"));
const AppProject = lazy(() => import("./component/AppProject.jsx"));

// Fallback loader
const PageFallback = () => <div className="min-h-screen flex items-center justify-center bg-[#212529] text-white">Loading...</div>;

function App() {
  useEffect(() => {
    // Dynamically import AOS only on mount
    const initAOS = async () => {
      const AOS = (await import('aos')).default;
      await import('aos/dist/aos.css');
      AOS.init({ duration: 1000, once: true });
    };
    
    const timer = setTimeout(() => {
      initAOS();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#212529] min-h-screen text-white font-sans selection:bg-[#007bff] selection:text-white">
      <NavBar />
      <main id="main-content" className="flex-grow">
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Gallary" element={<ImageGallery />} />
            <Route path="/Web_Project" element={<WebProject />} />
            <Route path="/App_Project" element={<AppProject />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          </Routes>
        </Suspense>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
