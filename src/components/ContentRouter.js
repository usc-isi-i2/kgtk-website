import React from 'react'
import {
  createHashRouter,
  RouterProvider,
} from 'react-router-dom'

import Home from '../views/Home'
import routes from '../content/routes'


const router = createHashRouter(routes)

const ContentRouter = () => (
  <RouterProvider router={router} fallbackElement={<Home />} />
)


export default ContentRouter
