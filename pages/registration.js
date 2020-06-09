import React from 'react';
import GlobalStyle from "../libs/globalStyles";
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
