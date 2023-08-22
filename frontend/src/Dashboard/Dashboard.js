import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';
import ChartComponent from './ChartComponent'; // Update the path as needed
import  Pie  from './Piechart';
import { FaChartLine, FaExchangeAlt, FaThumbsUp, FaUsers } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import Logout from './Logout/Logout';
const Dashboard = () => {
  const [userData, setUserData] = useState([]);
  const yAxesTicks = [0, 100, 200, 300, 400, 500];

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get('https://boardd.onrender.com/api/userdata');
      console.log('Fetched User Data:', response.data);
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const chartData = {
    labels: userData.map((data) => data.week),
    datasets: [
      {
        label: "User gained",
        data: userData.map((data) => data.userGain),
        backgroundColor: 'rgb(233, 160, 160)',
        tension: 0.5,
      },
      {
        label: "User lost",
        data: userData.map((data) => data.userLost),
        backgroundColor: 'rgb(155, 221, 124)',
        tension: 0.5,
      },
    ],
  };



  return (
    <div className="dashboard">
      


      <div className="dashboard-left">
        <div className="left-box">
            <h1>Dashboard</h1>
        </div>
        <div className="right-box">
    <div className="search-box">
      <textarea className="text-area" placeholder="Search"></textarea>
      <FaSearch className="search-icon" />
    </div>
    <FaBell className="bell-icon" />
    <Logout/>
  </div>
      </div>




      <div className='color-box-container'>
  <div className='color-box box11'>
    <div className='icon-container'>
      <FaChartLine className='icon' />
    </div>
    <div className='box-text'>
      <div className='box-heading'>Total Revenues</div>
      <div className='box-value'>$2,129,430</div>
    </div>
  </div>
  
  <div className='color-box box22'>
    <div className='icon-container'>
      <FaExchangeAlt className='icon' />
    </div>
    <div className='box-text'>
      <div className='box-heading'>Total Transactions</div>
      <div className='box-value'>1,520</div>
    </div>
  </div>
  
  <div className='color-box box3'>
    <div className='icon-container'>
      <FaThumbsUp className='icon' />
    </div>
    <div className='box-text'>
      <div className='box-heading'>Total Likes</div>
      <div className='box-value'>9,721</div>
    </div>
  </div>
  
  <div className='color-box box4'>
    <div className='icon-container'>
      <FaUsers className='icon' />
    </div>
    <div className='box-text'>
      <div className='box-heading'>Total Users</div>
      <div className='box-value'>892</div>
    </div>
  </div>
</div>
      <div className="curve-edge-container">
        <div className="curve-edge">
          <h2 className="bold-text">Activities</h2>
          <p>May - June 2021 </p>
          <div className="chart-content">
            <ChartComponent chartData={chartData} yAxesTicks={yAxesTicks} />
          </div>
        </div>
      </div>
      <div className='nextbox'>
      <div className='box1'>
  <div className='heading'>
    <div className='bold-text'>Top products</div>
    <div className='span'>May-June 2021</div>
  </div>
  <div className='forpie'>
    <div className='pie'>
      <Pie />
      
    </div>
  </div>
</div>


<div className='box2'>
  <div className='box2-content'>
    <div className='schedule'>Today's schedule</div>
    <div className='see-all'>See all</div>
  </div>
   {/* Add the vertical line */}
  <div className='box2-content2'>
  {/* <div className='vertical-line'></div> */}
    <div className='meeting'>
    
      <div className='bullet'></div>
      <div className='meeting-text'>
      <div className='vertical-line'></div>
        <div className='bold-text'>Meeting with suppliers from Kuta Bali</div>
        <div>12.00-15.00</div>
        <div>at Sunset Road, Kuta, Bali</div>
      </div>
      <br></br>
      <div className='meeting-text2'>
      <div className='vertical-line'></div>
        <div className='bold-text'>Check operation at Giga Factory 1</div>
        <div>18.00-20.00</div>
        <div>at Central jakarta</div>
      </div>
    </div>
    
  </div>
</div>




      </div>
    </div>
  );
};

export default Dashboard;
