import React, { useEffect, useState } from 'react'
import cookies from 'next-cookies'
import { Provider } from 'react-redux'
import { store } from '../../store/config'

export default Component => {
  const withAuth = props => {

    const { tokenProps } = props

    useEffect(() => {
      if (typeof window !== 'undefined' && tokenProps !== undefined)
        localStorage.setItem('token', tokenProps)
    }, [])

    return (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    )
  }

  withAuth.getInitialProps = async ctx => {
    const token = cookies(ctx).token
    return { token }
  }

  return withAuth
}
