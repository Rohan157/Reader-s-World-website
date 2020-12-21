import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { ReactComponent as Logo } from '../booo.svg';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Reader's World <Logo className='logo'/>
            
            {/* <i class='fab fa-typo3' /> */}
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            {/* <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> */}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
              <Link
                to='/New-Arrivals'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                New Arrivals
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Fiction' className='nav-links' onClick={closeMobileMenu}>
                Fiction
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/biograpies'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Biographies
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/About'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Contact Us</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
