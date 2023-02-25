import Home from '../views/Home'
import Tutorials from '../views/Tutorials'
import Data from '../views/Data'
import Resources from '../views/Resources'
import Publications from '../views/Publications'
import UseCases from '../views/UseCases'
import About from '../views/About'


const routes = [{
  name: 'Home',
  path: '/',
  element: <Home />,
}, {
  name: 'Tutorials',
  path: '/tutorials',
  element: <Tutorials />,
}, {
  name: 'Data',
  path: '/data',
  element: <Data />,
}, {
  name: 'Resources',
  path: '/resources',
  element: <Resources />,
}, {
  name: 'Publications',
  path: '/publications',
  element: <Publications />,
}, {
  name: 'Use Cases',
  path: '/use-cases',
  element: <UseCases />
}, {
  name: 'About',
  path: '/about',
  element: <About />,
}]


export default routes
