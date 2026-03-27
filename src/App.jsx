import { Outlet } from 'react-router-dom'
import CloudBackground from './components/CloudBackground'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-sky-blue font-sketch text-on-surface selection:bg-simpson-yellow selection:text-black overflow-x-hidden relative min-h-screen">
      <CloudBackground />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
