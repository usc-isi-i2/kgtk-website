import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import routes from '../content/routes'


const router = createBrowserRouter(routes)


const ContentRouter = () => (
  <RouterProvider router={router} />
)


export default ContentRouter
