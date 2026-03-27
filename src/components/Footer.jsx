export default function Footer() {
  return (
    <footer className="mt-20 pb-12 px-6 relative z-10">
      <div className="max-w-4xl mx-auto sketch-border bg-white p-8 text-center">
        <div className="font-headline font-bold text-black text-3xl mb-2">
          Dreamers
        </div>

        <p className="text-black/70 mb-4">
          © 2024 Team Dreamers - Hecho con optimismo orgánico
        </p>

        <div className="flex gap-8 justify-center mb-8">
          <a
            href="#"
            className="text-black font-bold hover:text-simpson-yellow transition-colors"
          >
            Privacidad
          </a>
          <a
            href="#"
            className="text-black font-bold hover:text-simpson-yellow transition-colors"
          >
            Contacto
          </a>
        </div>

        <div className="flex gap-6 justify-center">
          <span className="material-symbols-outlined text-black scale-125">
            rocket_launch
          </span>
          <span className="material-symbols-outlined text-black scale-125">
            auto_awesome
          </span>
          <span className="material-symbols-outlined text-black scale-125">
            favorite
          </span>
        </div>
      </div>
    </footer>
  )
}
