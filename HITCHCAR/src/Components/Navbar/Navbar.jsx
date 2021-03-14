// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './Navbar.css'; 



// const Navbar = () => {

//     return (

//         <>
//             <div className="menu_style">
//                 <NavLink exact activeClassName="active_class" to="/">Home</NavLink>
//                 <NavLink exact activeClassName="active_class" to="/Form">Form</NavLink>
//                 <NavLink exact activeClassName="active_class" to="/Signin">Sign in</NavLink>
//                 <NavLink exact activeClassName="active_class" to="/Signup">Sign up</NavLink>
//                 <NavLink exact activeClassName="active_class" to="/CarRental">CarRental</NavLink>
//             </div>
//         </>

//     );

// }

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../Button/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useAuth } from "../Context/AuthContext";
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';



const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const { currentUser, logout } = useAuth();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  }

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);
  useEffect(() => {
    showButton();
  }, []);

  return (
    <>
      <nav className="navbar">

        <div className='navbar-container'>

          <NavLink to='/' className='navbar-logo' onClick={closeMobileMenu} >
            HitchCar
       </NavLink>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'} >

            <li>

              <NavLink to='/Main' className='nav-links' onClick={closeMobileMenu}>
                Rental
              </NavLink>
            </li>
            <li>

              <NavLink to='/ShowPooled' className='nav-links' onClick={closeMobileMenu}>
                Pooling
              </NavLink>
            </li>
            <li>

              {!currentUser ? "" : <DropdownButton style={{background:"transparent"}} title={<AccountCircleIcon style={{ fontSize: "2rem" }} />} >

                <Dropdown.Item ><NavLink to="/Form" style={{textDecoration: "none"}} >Add Car</NavLink></Dropdown.Item>
                <Dropdown.Item ><NavLink to="/UserAds" style={{textDecoration: "none"}} >Ads Posted By you</NavLink></Dropdown.Item>
                <Dropdown.Item ><NavLink to="/PendingBookings" style={{textDecoration: "none"}} >Pending Bookings</NavLink></Dropdown.Item>
                <Dropdown.Item onClick={handleLogout} style={{textDecoration: "none"}} >Sign out</Dropdown.Item>

              </DropdownButton>

              }


            </li>

          </ul>

          {currentUser ?  
            <Button buttonStyle='btn--outline'>Hi,{currentUser.displayName}</Button> : 
            <NavLink to='/Signin'>
            {button && <Button buttonStyle='btn--outline'>SIGN IN</Button>}
          </NavLink>
          }


        </div>

      </nav>
    </>
  )
}

export default Navbar;
