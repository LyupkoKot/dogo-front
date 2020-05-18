import React from 'react';
import GlobalStyle from "../libs/globalStyles";
import Offer from "../components/ViewComponent/Offer";
import MainLayout from "../layouts/MainLayout";
import Registration from "../components/ViewComponent/Registration";

const RegistrationPage = () => {
    return (
        <MainLayout>
            <GlobalStyle/>
            <Registration/>
        </MainLayout>
    );
};

export default RegistrationPage;
