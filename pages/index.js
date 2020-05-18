import React from "react";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../components/ViewComponent/Dashboard";
import GlobalStyle from '../libs/globalStyles'
import UserPage from "../components/ViewComponent/UserPage";

const InitialPage = () => (
  <MainLayout>
    <GlobalStyle/>
    <UserPage/>
  </MainLayout>
);

export default InitialPage;
