import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='main-home'>
    <div className='title'>
      <img src='https://t3.ftcdn.net/jpg/04/97/78/76/360_F_497787685_O9ZtBQJFAa4ZSnp6nurL8jGZhWE70Y7R.jpg' alt="back"/>
      <h4 style={{width:"150px"}}>Service On Wheels</h4>
    </div>
    <div className="home-container home">
      <h1 className="home-title">Welcome to Service On Wheels</h1>
      <h4 className='home-qoute'>You Report!  We Fix it!</h4>
      <div className="home-buttons">
        <Link to="/signin" className="butt mech">
          Mechanic
        </Link>
        <Link to="/customer" className="butt cust">
          Customer
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Home;