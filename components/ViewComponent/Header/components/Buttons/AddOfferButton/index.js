import React from 'react';
import MainButton from "../../../../../UIElements/Buttons/MainButton"
import Link from 'next/link'
import { CookiesManagerContext } from '../../../../../../contextProviders/cookiesManager'

const AddOfferButton = () => {

  const userToken = React.useContext(CookiesManagerContext).cookiesManager.getToken('x-auth-token')

    return (
      <Link href={userToken ? '/offer/addOffer' : '/login'}>
        <MainButton label={"Dodaj ogłoszenie"}/>
      </Link>
    )
}

export default AddOfferButton;
