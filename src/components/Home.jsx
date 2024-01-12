import { Link } from 'react-router-dom';
import './Home.css'
import React, { useEffect, useState } from 'react';
import ApartmentList from './ApartmentList';
import ApartmentDetail from './ApartmentDetail';
import { fetchApartments, fetchApartmentById } from '../mockApi';

function Home() {
  return (
    <div className="home-page">
      <div className="welcome">
        <div className="welcome-block">
          <h1>Welcome to our real estate website!</h1>
          <p >Here you will find the best offers for 
            renting and renting apartments. Our team 
            is ready to help you find the perfect 
            accommodation that suits your needs and 
            budget. Start your search today!
          </p>
        </div>
      </div>
      <div className="image-container">
        <img src="/images/welcomeHome.jpg" alt="Изображение дома" style={{ width: '1000px' }} />
      </div>
    </div>
  );
}

export default Home;
