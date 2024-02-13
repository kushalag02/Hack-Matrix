import React from 'react';

// import SubHeading from '../SubHeading/SubHeading';
import { images } from '../../constants';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      {/* <SubHeading title="Team" /> */}
      <h1 className="headtext__cormorant">Organizers</h1>
      <p className="p__opensans">Lorem ipsum dolor sit amet consectetur </p>
    </div>
    <div className="app__newsletter-input flex__center">
      <img src={images.njack} alt="footer_logo" />
      <img src={images.ecell} alt="footer_logo" />
    </div>
  </div>
);

export default Newsletter;
