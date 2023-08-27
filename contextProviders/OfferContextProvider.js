import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
const OfferContext = createContext({});

const OfferContextProvider = ({children}) => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/advertisement`;
    fetch(apiUrl)
        .then(res => res.json())
        .then(response => {
          setOffers(response);
        })
        .catch(error => console.log(error));
  }, []);

    const filterOffers = offers.filter(offer => offer.is_active);



  return <OfferContext.Provider value={{filterOffers}}>
    {children}
  </OfferContext.Provider>;
};

export { OfferContextProvider as default, OfferContext };
