import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>KGTK</div>,
  }, {
    path: "/tutorials",
    element: <div>tutorials</div>,
  }, {
    path: "/getting-started",
    element: <div>getting started</div>,
  }, {
    path: "/data",
    element: <div>data</div>,
  }, {
    path: "/resources",
    element: <div>resources</div>,
  }, {
    path: "/use-cases",
    element: <div>use cases</div>,
  }, {
    path: "/about",
    element: <div>about</div>,
  }
])


const ContentRouter = () => (
  <RouterProvider router={router} />
)


export default ContentRouter
