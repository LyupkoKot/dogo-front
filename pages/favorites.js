import React from 'react'
import MainLayout from '../layouts'
import GlobalStyle from '../libs/globalStyles'
import Dashboard from '../components/ViewComponent/Dashboard'

const Favorites = ({ data }) => {
  return (
    <MainLayout>
      <GlobalStyle/>
      <Dashboard/>
    </MainLayout>
  )
}

Favorites.getInitialProps = ctx => {
  let data = {}
  fetch('http://192.168.1.246/zpi/api/favourites', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(result => data = result)
  return { data }
}

export default Favorites
