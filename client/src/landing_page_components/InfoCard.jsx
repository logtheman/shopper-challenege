import React from 'react';

const InfoCard = props => {
  return (
    <div className="container info-card">
      <div className="row">
        <div className="col-2  info-card-icon">
          <i className={props.icon} aria-hidden="true"></i>
        </div>
        <div className="col-10">
          <div className="info-card-headline">
            {props.headLine}
          </div>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default InfoCard;