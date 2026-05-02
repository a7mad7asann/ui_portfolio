//style
import "./style/App.css";
//pages
import Home from         "./pages/Home";
import NavBar from       "./component/NavBar";
import ImageGallery from "./component/ImageGallery";
import WebProject from   "./component/WebProject";
import AppProject from   "./component/AppProject.jsx";
import Footer from       "./component/Footer.jsx";


//lib
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <NavBar />
     
      <Routes>

        <Route path="/"           element={<Home />} />
        <Route path="/Gallary"     element={<ImageGallery />} />
        <Route path="/Web_Project" element={<WebProject   />} />
        <Route path="/App_Project" element={<AppProject   />} />

      </Routes>

      <Footer/>
    

    </>
  );
}

export default App;
