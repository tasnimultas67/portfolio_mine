import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Pages/Home/Home.jsx';
import Contact from './Components/Pages/ContactMe/Contact.jsx';
import Portfolio from './Components/Pages/Portfolio/Portfolio.jsx';
import AboutMe from './Components/Pages/AboutMe/AboutMe.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound/>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <AboutMe />
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
        // loader: () => fetch('https://raw.githubusercontent.com/tasnimultas67/data_json/main/portfolio.json')
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
