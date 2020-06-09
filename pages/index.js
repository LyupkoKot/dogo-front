import React from "react"
import cookies from 'next-cookies'
import MainLayout from "../layouts/MainLayout"
import Dashboard from "../components/ViewComponent/Dashboard"
import GlobalStyle from '../libs/globalStyles'

const InitialPage = ({ token }) => {

  console.log(token)

  return (
    <MainLayout>
      <GlobalStyle/>
      <Dashboard/>
    </MainLayout>
  )
}

InitialPage.getInitialProps = async (ctx) => {
  const token = cookies(ctx).token;
  return { token }
}

export default InitialPage
