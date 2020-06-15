import React from 'react'
import { Provider } from "react-redux"
import { WithCookiesContextManager } from '../contextProviders/cookiesManager'
import { store } from "../store/config"

function MyApp({ Component, pageProps }) {
  return (
    <WithCookiesContextManager>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </WithCookiesContextManager>
  );
}

export default MyApp;
