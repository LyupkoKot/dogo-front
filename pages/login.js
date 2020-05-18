import React from 'react'
import MainLayout from '../layouts/MainLayout'
import GlobalStyle from '../libs/globalStyles'
import LoginSection from '../components/UIElements/Sections/LoginSection'

const Login = () => {
  return (
    <MainLayout>
      <GlobalStyle/>
      <LoginSection/>
    </MainLayout>
  )
}

export default Login
