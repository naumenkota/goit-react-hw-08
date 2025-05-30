import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'modern-normalize/modern-normalize.css'
import { Provider } from 'react-redux'
import { store} from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './redux/store'
import {BrowserRouter}  from "react-router-dom";


createRoot(document.getElementById('root')).render(
    <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>
)
