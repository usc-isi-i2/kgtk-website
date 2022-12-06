import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import routes from '../content/routes'


const options = {
  basename: process.env.PUBLIC_URL,
}
const router = createBrowserRouter(routes, options)


const ContentRouter = () => (
  <RouterProvider router={router} />
)


export default ContentRouter
