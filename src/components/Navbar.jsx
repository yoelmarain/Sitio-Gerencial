import logoNegro from '../assets/logo-negro.png'

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50">
      <div className="bg-white/90 backdrop-blur-sm sketch-border flex justify-between items-center px-8 py-3">

        <div className="hidden md:flex items-center gap-8 font-bold">
          <a href="#" className="text-black border-b-2 border-simpson-yellow pb-1">
            Inicio
          </a>
          <a href="#" className="text-black/60 hover:text-black transition-colors">
            Desafíos
          </a>
          <a href="#" className="text-black/60 hover:text-black transition-colors">
            TPI
          </a>
        </div>

        <div className="flex items-center gap-2">
          <img
            alt="DREAMERS"
            className="w-full max-w-24 mx-auto"
            src={logoNegro}
          />

        </div>

      </div>
    </nav>
  )
}
