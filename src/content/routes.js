import Home from '../views/Home'
import Tutorials from '../views/Tutorials'
import GettingStarted from '../views/GettingStarted'
import Data from '../views/Data'
import Resources from '../views/Resources'
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
  name: 'Getting Started',
  path: '/getting-started',
  element: <GettingStarted />,
}, {
  name: 'Data',
  path: '/data',
  element: <Data />,
}, {
  name: 'Resources',
  path: '/resources',
  element: <Resources />,
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
