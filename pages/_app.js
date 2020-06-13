import React from 'react'
import { Provider } from "react-redux"
import { WithCookiesContextManager } from '../contextProviders/cookiesManager'
import { store } from "../store/config"
import withAuth from '../components/hoc/withAuth'

function MyApp({ Component, pageProps }) {
  //const cookies = process.browser ? new Cookies() : ctx.ctx.req.universalCookies
  return (
    <WithCookiesContextManager>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </WithCookiesContextManager>
  );
}

export default MyApp;
