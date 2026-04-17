import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Desafios from './pages/Desafios'
import Actividades from './pages/Actividades'
import Tpi from './pages/Tpi'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'desafios', element: <Desafios /> },
      { path: 'actividades', element: <Actividades /> },
      { path: 'tpi', element: <Tpi /> },
    ],
  },
])

export default router
