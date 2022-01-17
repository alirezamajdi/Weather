import IRoute from 'interfaces/route'
import { Home, Home2 } from 'pages/index'

const routes1: IRoute[] = [
  {
    path: '/',
    name: 'Home Page',
    component: Home2,
    exact: true,
  },
]

export default routes1
