import React from "react"
import MainLayout from "../layouts/MainLayout"
import Dashboard from "../components/ViewComponent/Dashboard"
import GlobalStyle from '../libs/globalStyles'

const InitialPage = () => (
  <MainLayout>
    <GlobalStyle/>
    <Dashboard/>
  </MainLayout>
)

export default InitialPage
