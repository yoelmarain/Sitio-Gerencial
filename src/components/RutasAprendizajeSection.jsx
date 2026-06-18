import { useState } from 'react'
import rpas from '../data/rpas'

export default function RutasAprendizajeSection() {
  const [selectedRpa, setSelectedRpa] = useState(null)

  return (
    <>
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-white/40 backdrop-blur-sm p-8 md:p-12 sketch-border">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-black mb-4">
              Rutas Personales de Aprendizaje
            </h2>
            <div className="h-1 w-32 bg-black mx-auto mb-8" />
            <p className="text-black/70 text-lg font-bold max-w-2xl mx-auto">
              El recorrido individual de cada integrante a lo largo de Gestión Gerencial.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rpas.map((rpa) => (
              <article key={rpa.name} className="sketch-card p-5 flex flex-col">
                <button
                  type="button"
                  onClick={() => setSelectedRpa(rpa)}
                  className="relative bg-surface sketchy-img aspect-[3/4] mb-5 overflow-hidden flex items-center justify-center cursor-zoom-in focus:outline-none focus:ring-4 focus:ring-simpson-yellow group"
                  aria-label={`Ampliar infografía RPA de ${rpa.name}`}
                >
                  <img
                    alt={`Infografía RPA de ${rpa.name}`}
                    className="w-full h-full object-contain p-3"
                    src={rpa.imageUrl}
                  />
                  <span className="absolute right-3 top-3 inline-flex items-center gap-1 bg-simpson-yellow text-black border-2 border-black px-3 py-1 text-sm font-bold shadow-[4px_4px_0_rgba(0,0,0,0.18)] transition-transform group-hover:-translate-y-1">
                    <span className="material-symbols-outlined text-lg">zoom_in</span>
                    
                  </span>
                </button>

                <h3 className="text-3xl font-headline font-bold text-black mb-3">
                  {rpa.name}
                </h3>
                <p className="text-black/70 font-bold leading-relaxed mb-6 flex-1">
                  {rpa.description}
                </p>

                <a
                  href={rpa.documentUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center items-center gap-2 bg-simpson-yellow text-black font-bold px-5 py-3 sketch-border hover:-translate-y-1 transition-transform"
                >
                  Ver documento
                  <span className="material-symbols-outlined text-xl">open_in_new</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedRpa && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm p-4 md:p-8 flex items-center justify-center"
          onClick={() => setSelectedRpa(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Infografía ampliada de ${selectedRpa.name}`}
        >
          <div className="relative max-w-5xl w-full max-h-full flex flex-col items-center">
            <button
              type="button"
              onClick={() => setSelectedRpa(null)}
              className="absolute -top-3 -right-3 md:top-0 md:right-0 bg-simpson-yellow text-black sketch-border p-3 z-10 cursor-pointer"
              aria-label="Cerrar imagen ampliada"
            >
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>

            <img
              alt={`Infografía RPA de ${selectedRpa.name}`}
              className="max-w-full max-h-[88vh] object-contain bg-white sketch-border p-3"
              src={selectedRpa.imageUrl}
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  )
}
