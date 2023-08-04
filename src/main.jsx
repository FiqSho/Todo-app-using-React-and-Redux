import React from 'react'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import './main.css'
import "bootstrap/dist/css/bootstrap.css"
import { Provider } from 'react-redux'
import store from './redux/store/store.js'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
