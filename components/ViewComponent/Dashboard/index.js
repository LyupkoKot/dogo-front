import React from 'react';
import Card from './Card'
import DashboardLabelStyled from './views'

const Dashboard = () => {
    return (
        <div>
          <DashboardLabelStyled>{"Ogłoszenia"}</DashboardLabelStyled>
          <Card/>
        </div>
    );
};

export default Dashboard;
