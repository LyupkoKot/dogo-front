import React from 'react';
import MainButton from "../../../../../UIElements/Buttons/MainButton"
import { CookiesManagerContext } from '../../../../../../contextProviders/cookiesManager'

const AddOfferButton = () => {

  const userToken = React.useContext(CookiesManagerContext).cookiesManager.getToken('x-auth-token')

    return (
      <a href={userToken ? '/offer/addOffer' : '/login'}>
        <MainButton label={"Dodaj ogłoszenie"}/>
      </a>
    )
}

export default AddOfferButton;
