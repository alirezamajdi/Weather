import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from 'redux/store/store'
import AppCtx from 'context/context'

//css
import 'style/css/bootstrap.min.css'
import 'style/css/flickty.css'
import 'style/css/font.css'
import 'react-toastify/dist/ReactToastify.css'
import 'style/css/index.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppCtx>
        <App />
      </AppCtx>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
