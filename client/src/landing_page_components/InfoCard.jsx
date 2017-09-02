import React from 'react';

const InfoCard = props => {
  return (
    <div className="info-card">
      <div className="col-12">
        <div className="info-card-headline">
          <i className={props.icon} aria-hidden="true"></i>
          {' '}{' '}{props.headLine}

        </div>
        {props.children}
      </div>
    </div>
  );
}

export default InfoCard;