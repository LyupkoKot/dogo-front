import React from 'react'
import Card from './Card'
import { DashboardWrapper, DashboardLabelStyled } from './views'

const Dashboard = () => {
    return (
        <DashboardWrapper>
          <DashboardLabelStyled>{"Ogłoszenia"}</DashboardLabelStyled>
          <Card/>
        </DashboardWrapper>
    )
}

export default Dashboard
