import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter } from 'react-router-dom';
// import context
import {UserContext, UserProvider} from './context/ContextProvider'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider >
    <BrowserRouter>

      <App />
    </BrowserRouter>
    </UserProvider> 
  </React.StrictMode>
);

