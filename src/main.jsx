import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import SingleBeer from './SingleBeer.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "beer/:id",
    element: <SingleBeer></SingleBeer>,
    loader: ({params}) => fetch(`https://api.punkapi.com/v2/beers/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)