import React, { useContext } from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  RouteComponentProps,
} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import routes1 from 'config/routes1'
import { Context } from 'context/context'

//theme
import { ThemeProvider } from 'styled-components'
import {
  darkTheme,
  lightTheme,
  GlobalStyles,
} from 'style/style-components/global'

const App: React.FC = () => {
  const appCtx = useContext(Context)
  return (
    <ThemeProvider theme={appCtx?.theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <ToastContainer />
        <Switch>
          {routes1.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps<any>) => (
                  <route.component
                    name={route.name}
                    {...props}
                    {...route.props}
                  />
                )}
              />
            )
          })}
          <Redirect to={'/' + 'fa'} exact />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
