import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
//font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

//style 
import '../style/App.css';
import '../style/ToggleButton.css';



const ToggleButton = () => {
  // State to manage the visibility of the offcanvas menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu open/closed
  const handleToggle = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <div className="navbar-wrapper">
      {/* Main Navbar */}
      <nav className="navbar">
        <div className="container">
          {/* Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
            aria-label="Toggle navigation"
          >
            {/* Display the appropriate icon based on the menu state */}
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>

          {/* Offcanvas Menu */}
          <div
            className={`offcanvas offcanvas-end ${isMenuOpen ? 'show' : ''}`}
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            {/* Offcanvas Header */}
            <div className="offcanvas-header">
            <HashLink to="/" class="brand-name">
              <h1>
                H M
              </h1>
            </HashLink>

              <button
                type="button"
                className="btn-close"
                onClick={handleToggle}
                aria-label="Close"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            {/* Offcanvas Body */}
            <div className="offcanvas-body">
              <ul class="navbar-nav-toogle ">
                <li className="nav-item">
                  <HashLink to="/"  className="nav-link" active>
                    Home
                  </HashLink>
                </li>
              
                <li class="nav-item">
                  <HashLink to='/#about'  className="nav-link">
                    About
                  </HashLink>     
                </li>

                <li className="nav-item">
                  <HashLink to='/#services' className="nav-link">
                    services
                  </HashLink>
                </li>

                <li className="nav-item">
                  <HashLink to='/#project' className="nav-link">
                  protofolio
                  </HashLink>
                </li>

                <li className="nav-item">
                  <HashLink to='/#contact' className="nav-link">
                    contact
                  </HashLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ToggleButton;
