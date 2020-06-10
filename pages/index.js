import React, {useCallback} from "react";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../components/ViewComponent/Dashboard";
import GlobalStyle from "../libs/globalStyles";
import OfferContextProvider from "../contextProviders/OfferContextProvider";
import {useDispatch} from "react-redux";
import {setOfferValue} from "../actions/setOfferValue";

const InitialPage = () => {
    const dispatch = useDispatch();
    const setOffer = useCallback(val => dispatch(setOfferValue(val)), [
        dispatch
    ]);
  return (
    <MainLayout>
      <GlobalStyle />
      <OfferContextProvider>
        <Dashboard setOffer={setOffer}/>
      </OfferContextProvider>
    </MainLayout>
  );
};

export default InitialPage;
