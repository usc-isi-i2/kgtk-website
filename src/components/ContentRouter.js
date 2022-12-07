import React from 'react'
import {
  createHashRouter,
  RouterProvider,
} from 'react-router-dom'

import routes from '../content/routes'


const router = createHashRouter(routes)

const ContentRouter = () => (
  <RouterProvider router={router} />
)


export default ContentRouter
