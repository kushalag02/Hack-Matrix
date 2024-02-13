import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Welcome to" />
      <h1 className="app__header-h1">HackMatrix</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>A 36-hour offline Hackathon at IIT Patna – the inaugural edition of HackMatrix, organized by E-Cell IIT Patna in collaboration with NJACK IIT Patna.
      </p>
      <button type="button" className="custom__button">Explore</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
