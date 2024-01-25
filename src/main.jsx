import React from 'react'
import ReactDOM from 'react-dom/client'
import { app, auth } from "../firebaseConfig";
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router';
import { ToastContainer } from 'react-toastify'
import "./main.css"
import 'react-toastify/dist/ReactToastify.css';

import {ItemProvider} from "./contextApI/itemContext"

import { Provider } from "react-redux";
import store from "../src/store";

ReactDOM.createRoot(document.getElementById('root')).render(
 <ItemProvider >
   <React.StrictMode>
   <Provider store={store}>
      <RouterProvider router={router}/>
      <ToastContainer />
      </Provider>
  </React.StrictMode>
 </ItemProvider>,
)
