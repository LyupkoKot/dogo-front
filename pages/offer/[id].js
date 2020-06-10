import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import GlobalStyle from '../../libs/globalStyles'
import Offer from "../../components/ViewComponent/Offer";
import {useSelector} from "react-redux";

const OfferPage = () => {
    const offer = useSelector(state => state.offer);
    console.log(offer);
    return (
        <MainLayout>
            <GlobalStyle/>
            <Offer offer={offer}/>
        </MainLayout>
    );
};

export default OfferPage;
