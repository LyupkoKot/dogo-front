import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
const OfferContext = createContext({});

const OfferContextProvider = ({children}) => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    // Insert API url below
    const apiUrl = `http://77.55.221.84:3102/zpi/api/advertisement`;
    fetch(apiUrl)
        .then(res => res.json())
        .then(response => {
          setOffers(response);
          console.log(response);
        })
        .catch(error => console.log(error));
  }, []);

    const filterOffers = offers.filter(offer => offer.is_active);



  return <OfferContext.Provider value={{filterOffers}}>
    {children}
  </OfferContext.Provider>;
};

export { OfferContextProvider as default, OfferContext };
