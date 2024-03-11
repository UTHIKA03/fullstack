import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './assets/css/index.css'
import { Provider } from 'react-redux'
// import store from './redux/store.jsx'
import store, { persistor } from './redux/store.jsx'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <PersistGate loading={false} persistor={persistor}>
       <App />
       </PersistGate>
    </Provider>
 
    </BrowserRouter>
  </React.StrictMode>,
)
