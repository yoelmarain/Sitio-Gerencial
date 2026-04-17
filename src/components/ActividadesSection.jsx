import actividades from '../data/actividades'

export default function ActividadesSection() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
      <div className="bg-white/40 backdrop-blur-sm p-8 md:p-12 sketch-border">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-black mb-4">
            Actividades
          </h2>
          <div className="h-1 w-32 bg-black mx-auto mb-8" />
          <p className="text-black/70 text-lg font-bold max-w-2xl mx-auto">
            Registro de las actividades realizadas durante la cursada.
          </p>
        </div>

        {actividades.length === 0 ? (
          <div className="py-12 text-center">
            <span className="material-symbols-outlined text-6xl text-black/30 mb-4 block">
              assignment
            </span>
            <p className="text-black font-bold italic text-lg">
              Próximamente...
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {actividades.map((actividad, i) => (
              <a
                key={i}
                href={actividad.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-white sketch-border flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform cursor-pointer group"
              >
                <svg viewBox="0 0 48 48" className="w-14 h-14" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C9.79 2 8.02 3.79 8.02 6L8 42c0 2.21 1.77 4 3.98 4H36c2.21 0 4-1.79 4-4V14L28 2H12z" fill="#4285F4" />
                  <path d="M28 2v12h12" fill="#A1C2FA" />
                  <path d="M16 28h16v2H16zm0 4h16v2H16zm0-8h16v2H16z" fill="#fff" />
                </svg>
                <span className="font-bold text-black text-sm leading-tight">
                  {actividad.titulo}
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
