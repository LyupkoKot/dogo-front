import React, { useCallback, useContext, useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import GlobalStyle from "../libs/globalStyles";
import Dashboard from "../components/ViewComponent/Dashboard";
import Favourites from "../components/ViewComponent/Favourites";
import { CookiesManagerContext } from "../contextProviders/cookiesManager";
import { useDispatch } from "react-redux";
import { setOfferValue } from "../actions/setOfferValue";

const Favorites = () => {
  const cookies = useContext(CookiesManagerContext);
  const userToken = cookies.cookiesManager.getToken("x-auth-token");
  const dispatch = useDispatch();
  const setOffer = useCallback(val => dispatch(setOfferValue(val)), [dispatch]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookmarks`, {
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
