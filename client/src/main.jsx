import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, RouterProvider, createBrowserRouter,  } from 'react-router-dom'
import errorPage from './components/pages/errorPage.jsx'
import Footer from './components/pages/Footer.jsx'
import Home from './components/pages/Home.jsx'
import Ingredients from './components/pages/Ingredients.jsx'
import Nav from './components/pages/Nav.jsx'
import Recipes from './components/pages/Recipes.jsx'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <errorPage />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/recipes',
        element: <Recipes />
      },
      {
        path: '/ingredients',
        element: <Ingredients />
      }
    ]
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
);
