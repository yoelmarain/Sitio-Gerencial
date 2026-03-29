import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoNegro from '../assets/logo-negro.png'

const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/desafios', label: 'Desafíos' },
  { to: '/tpi', label: 'TPI' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50">
      <div className="bg-white/90 backdrop-blur-sm sketch-border flex justify-between items-center px-6 md:px-8 py-3">

        <div className="hidden md:flex items-center gap-8 font-bold">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                isActive
                  ? 'text-black border-b-2 border-simpson-yellow pb-1'
                  : 'text-black/60 hover:text-black transition-colors'
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <Link to="/" className="flex items-center gap-2">
          <img
            alt="DREAMERS"
            className="w-full max-w-24"
            src={logoNegro}
          />
        </Link>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="block md:hidden cursor-pointer"
          aria-label="Abrir menú"
        >
          <span className="material-symbols-outlined text-black text-3xl">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-2 bg-white/95 backdrop-blur-sm sketch-border px-6 py-4 flex flex-col gap-4 font-bold">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'text-black border-b-2 border-simpson-yellow pb-1 w-fit'
                  : 'text-black/60 hover:text-black transition-colors'
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}
