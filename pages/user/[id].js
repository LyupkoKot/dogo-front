import React, { useCallback } from "react";
import MainLayout from "../../layouts/MainLayout";
import GlobalStyle from "../../libs/globalStyles";
import UserPage from "../../components/ViewComponent/UserPage";
import UserContextProvider from "../../contextProviders/UserContextProvider";
import { useDispatch } from "react-redux";
import { setOfferValue } from "../../actions/setOfferValue";

const Id = () => {
  const dispatch = useDispatch();
  const setOffer = useCallback(val => dispatch(setOfferValue(val)), [dispatch]);
  return (
    <MainLayout>
      <GlobalStyle />
      <UserContextProvider>
        <UserPage setOffer={setOffer}/>
      </UserContextProvider>
    </MainLayout>
  );
};

export default Id;
