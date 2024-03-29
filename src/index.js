import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import store from './store'

render(
  // <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  // </BrowserRouter>
  ,
  document.getElementById('root')
)

