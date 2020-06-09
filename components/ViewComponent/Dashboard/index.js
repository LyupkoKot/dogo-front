import React from 'react'
import Card from './Card'
import { DashboardWrapper, DashboardLabelStyled } from './views'
import Link from 'next/link'

const Dashboard = () => {
    return (
        <DashboardWrapper>
          <DashboardLabelStyled>{"Ogłoszenia"}</DashboardLabelStyled>
          <Link href={'/login'}>
            <Card/>
          </Link>
        </DashboardWrapper>
    )
}

export default Dashboard
