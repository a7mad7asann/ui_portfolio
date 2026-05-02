import React from 'react'

//style 
import '../style/App.css';
import '../style/NavBar.css';
import '../style/Media/NavBarMedia.css'

//lib
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars , faXmark  } from '@fortawesome/free-solid-svg-icons';



const NavBar = () => {
  return (
    <>
      <nav class="navbar">
        <div class="container">
          <div class="contain ">
            <HashLink to="/" class="brand-name">
              <h1>
                H M
              </h1>
            </HashLink>

            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
              <span class="navbar-toggler-icon"><i className='Icon-nav-Custom'><FontAwesomeIcon icon={faBars} /></i></span>
            </button>

                <div class="offcanvas offcanvas-end bg-dark " tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                  <div class="offcanvas-header">
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><FontAwesomeIcon icon={faXmark} /></button>
              </div>
                            
              <ul class="navbar-nave ">
              <li className="nav-item">
                <HashLink to="/" smooth className="nav-link" active>
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

            <ul class="navbar-nav ">
              <li className="nav-item">
                <HashLink to="/" smooth className="nav-link" active>
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
      </nav>
    </>
  )
}

 export default NavBar
