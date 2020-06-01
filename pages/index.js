import React from "react";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../components/ViewComponent/Dashboard";
import GlobalStyle from '../libs/globalStyles'
import UserPage from "../components/ViewComponent/UserPage";
import UserPageEdit from "../components/ViewComponent/UserPageEdit";

const InitialPage = () => (
  <MainLayout>
    <GlobalStyle/>
    <UserPageEdit/>
  </MainLayout>
);

export default InitialPage;
