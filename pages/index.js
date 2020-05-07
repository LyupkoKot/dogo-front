import React from "react";
import MainLayout from "../layouts";
import Dashboard from "../components/ViewComponent/Dashboard";
import GlobalStyle from '../libs/globalStyles'
import SearchInput from '../components/UIElements/Inputs/SearchInput'
import Dropdown from '../components/UIElements/Inputs/Dropdown'
import CategoryButtonBar from '../components/UIElements/Buttons/CategoryButton'


const InitialPage = () => (
  <MainLayout>
    <GlobalStyle/>
    <SearchInput/>
    <Dropdown/>
    <CategoryButtonBar/>
    <Dashboard/>
  </MainLayout>
);

export default InitialPage;
