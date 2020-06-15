import MainLayout from '../../layouts/MainLayout'
import GlobalStyle from '../../libs/globalStyles'
import UserContextProvider from '../../contextProviders/UserContextProvider'
import React from 'react'
import OfferPageEdit from '../../components/ViewComponent/OfferPageEdit'
import { useSelector } from 'react-redux'


const Edit = () => {

  const offer = useSelector(state => state.offer)

  return (
    <MainLayout>
      <GlobalStyle />
      <UserContextProvider>
        <OfferPageEdit offer={offer} />
      </UserContextProvider>
    </MainLayout>
  )
}

export default Edit;

