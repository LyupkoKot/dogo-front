import React from 'react';
import Card from './Card'
import DashboardLabelStyled from './views'
import {OfferWrapper} from "../Offer/view";

const Dashboard = () => {
    return (
        <OfferWrapper>
          <DashboardLabelStyled>{"Ogłoszenia"}</DashboardLabelStyled>
          <Card/>
        </OfferWrapper>
    );
};

export default Dashboard;
