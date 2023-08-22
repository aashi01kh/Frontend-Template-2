import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCreditCard, faCalendar, faUsers, faCog } from '@fortawesome/free-solid-svg-icons';
import './Mainpage.css';
import Dashboard from '../Dashboard/Dashboard';



const MainPage = () => {
  const [selectedItem, setSelectedItem] = useState('Dashboard');

  const handleMenuItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  return (

    <div className='main'>
        

        <div className="main-page">
      <h1 className="heading">Board.</h1>
      <div className="sub-items-container">
        <ul className="sub-items">
          <li
            className={selectedItem === 'Dashboard' ? 'selected' : ''}
            onClick={() => handleMenuItemClick('Dashboard')}
          >
            <FontAwesomeIcon icon={faHome} /> Dashboard
          </li>
          <li><FontAwesomeIcon icon={faCreditCard} /> Transaction</li>
          <li><FontAwesomeIcon icon={faCalendar} /> Schedule</li>
          <li><FontAwesomeIcon icon={faUsers} /> Users</li>
          <li><FontAwesomeIcon icon={faCog} /> Settings</li>
        </ul>
      </div>

      <div className="bottom-text">
        <p>Help</p>
        <p>Contact Us</p>
      </div>
    </div>



       <div className="dashboard-content-container">
        {selectedItem === 'Dashboard' ? <Dashboard /> : null}
      </div>
    </div>

    
  );
};

export default MainPage;