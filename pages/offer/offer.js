import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import GlobalStyle from '../../libs/globalStyles'
import Offer from "../../components/ViewComponent/Offer";

const OfferPage = () => {
    return (
        <MainLayout>
            <GlobalStyle/>
            <Offer/>
        </MainLayout>
    );
};

export default OfferPage;
