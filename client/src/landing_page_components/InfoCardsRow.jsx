import React from 'react';

import InfoCard from './InfoCard';


const InfoCardsRow = props => {
  return ( 
    <div className="row info-card-row text-center">
        <div className="col-md-4 mx-0 py-3">
          <InfoCard headLine="Be Empowered!" icon="fa fa-clock-o">
            Schedule work around your own life.
          </InfoCard>
        </div>
        <div className="col-md-4 mx-0 py-3">
          <InfoCard headLine="Enjoy Work!" icon="fa fa-cart-plus">
            Spend time shopping, exploring new things and being active.
          </InfoCard>
        </div>
        <div className="col-md-4 mx-0 py-3">
          <InfoCard headLine="Get Paid!" icon="fa fa-money">
            Get paid weekly. Work Sundays to maximize your hours and pay.
          </InfoCard>
        </div>
    </div>
  );
}

export default InfoCardsRow;