import * as React from 'react'
// libs
import { withCookies, ReactCookieProps } from 'react-cookie'

const AUTH_TOKEN_FIELD = 'x-auth-token'
const CookiesManagerContext = React.createContext({})

const CookiesManagerContextProvider = ({ children, cookies }) => {
  const memoizedValue = React.useMemo(() => {
    const COOKIES_OPTIONS = { path: '/' }

    return {
      cookiesManager: {
        // token
        setToken: (token) => cookies.set(AUTH_TOKEN_FIELD, token, COOKIES_OPTIONS),
        getToken: () => cookies.get(AUTH_TOKEN_FIELD),
        removeToken: () => cookies.remove(AUTH_TOKEN_FIELD, COOKIES_OPTIONS)
      }
    }
  }, [cookies])

  return <CookiesManagerContext.Provider value={memoizedValue}>{children}</CookiesManagerContext.Provider>
}

const WithCookiesContextManager = withCookies(CookiesManagerContextProvider)

export { CookiesManagerContext, WithCookiesContextManager }

