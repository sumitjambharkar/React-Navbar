import { useState } from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className='navbar'>
      <div className='brand'>
        <h1>Sumit</h1>
      </div>
      <div className={`drawer ${drawerOpen ? 'open' : ''}`} id="appDrawer">
        <li>
          <Link onClick={toggleDrawer} to="/">Home</Link>
        </li>
        <li>
          <Link onClick={toggleDrawer} to="/sale-report">Today Sale Report</Link>
        </li>
        <li>
          <Link onClick={toggleDrawer} to="/add-products">Add Products</Link>
        </li>
      </div>
      <ul className='mobile-support'>
        <div onClick={toggleDrawer}>
          {drawerOpen?<div class="hamburger-menu">
            <div class="hamburger-line"></div>
            <div class="hamburger-line"></div>
            <div class="hamburger-line"></div>
          </div>:<div class="hamburger-menu">
            <div class="hamburger-line"></div>
            <div class="hamburger-line"></div>
            <div class="hamburger-line"></div>
          </div>}

        </div>
      </ul>
    </div>
  );
}

export default Navbar;
