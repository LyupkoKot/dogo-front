import React, { useCallback, useContext, useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import GlobalStyle from "../libs/globalStyles";
import Dashboard from "../components/ViewComponent/Dashboard";
import Favourites from "../components/ViewComponent/Favourites";
import { CookiesManagerContext } from "../contextProviders/cookiesManager";
import { useDispatch } from "react-redux";
import { setOfferValue } from "../actions/setOfferValue";

// cookies

const Favorites = () => {
  const cookies = useContext(CookiesManagerContext);
  const userToken = cookies.cookiesManager.getToken("x-auth-token");
  console.log(userToken);
  const dispatch = useDispatch();
  const setOffer = useCallback(val => dispatch(setOfferValue(val)), [dispatch]);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Insert API url below
    const apiUrl = `http://77.55.221.84:3102/zpi/api/bookmarks`;
    fetch("http://77.55.221.84:3102/zpi/api/bookmarks", {
      method: "GET",
      headers: {
        "x-auth-token": userToken
      }
    })
        .then(res => res.json())
        .then(response => {
             setData(response);
        })
        .catch(error => console.log(error));
  }, []);

  return (
    <MainLayout>
      <GlobalStyle />
      <Favourites data={data} setOffer={setOffer} />
    </MainLayout>
  );
};

export default Favorites;
