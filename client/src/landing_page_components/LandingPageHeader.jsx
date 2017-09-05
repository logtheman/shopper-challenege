import React from 'react';
import logo from '../images/carrot.png'

const LandingPageHeader = props => {
  return (
    <div className="landing-page-header text-center pb-3">
      <div className="landing-page-main">
       Be an Instacart Shopper!
        <img src={logo} alt="logo" className="logo"/>

      </div>
      <div className="landing-page-header-secondary">
        Apply in under 
        <span className="highlight">{' '}<u>5 minutes!</u>{' '}</span>
        Attend an in-person 
        session and start work within one week!
      </div>
    </div>
  );
}

export default LandingPageHeader;