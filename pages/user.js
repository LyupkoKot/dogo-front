import React from "react";
import MainLayout from "../layouts/MainLayout";
import GlobalStyle from '../libs/globalStyles'
import UserPage from "../components/ViewComponent/UserPage";

const User = () => (
    <MainLayout>
        <GlobalStyle/>
        <UserPage/>
    </MainLayout>
);

export default User;
