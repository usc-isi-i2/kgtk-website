import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'


import Home from '../views/Home'
import Tutorials from '../views/Tutorials'
import GettingStarted from '../views/GettingStarted'
import Data from '../views/Data'
import Resources from '../views/Resources'
import UseCases from '../views/UseCases'
import About from '../views/About'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }, {
    path: "/tutorials",
    element: <Tutorials />,
  }, {
    path: "/getting-started",
    element: <GettingStarted />,
  }, {
    path: "/data",
    element: <Data />,
  }, {
    path: "/resources",
    element: <Resources />,
  }, {
    path: "/use-cases",
    element: <UseCases />
  }, {
    path: "/about",
    element: <About />,
  }
])


const ContentRouter = () => (
  <RouterProvider router={router} />
)


export default ContentRouter
