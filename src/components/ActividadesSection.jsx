import actividades from '../data/actividades'
import agusImg from '../assets/Liderazgo/Liderazgo - Agustin.png'
import joaImg from '../assets/Liderazgo/Liderazgo - Joaquin.png'
import martinImg from '../assets/Liderazgo/Liderazgo - Martin.png'
import valenImg from '../assets/Liderazgo/Liderazgo - Valen.png'
import yoelImg from '../assets/Liderazgo/Liderazgo - Yoel.png'

const getFileType = (actividad) => {
  if (actividad.tipo) return actividad.tipo
  if (typeof actividad.link !== 'string') return 'docs'

  const url = actividad.link.toLowerCase()
  if (url.includes('spreadsheets')) return 'sheets'
  if (url.includes('document')) return 'docs'

  return 'docs'
}

const iconByType = {
  docs: (
    <svg viewBox="0 0 48 48" className="w-14 h-14" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C9.79 2 8.02 3.79 8.02 6L8 42c0 2.21 1.77 4 3.98 4H36c2.21 0 4-1.79 4-4V14L28 2H12z" fill="#4285F4" />
      <path d="M28 2v12h12" fill="#A1C2FA" />
      <path d="M16 28h16v2H16zm0 4h16v2H16zm0-8h16v2H16z" fill="#fff" />
    </svg>
  ),
  sheets: (
    <svg viewBox="0 0 48 48" className="w-14 h-14" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C9.79 2 8.02 3.79 8.02 6L8 42c0 2.21 1.77 4 3.98 4H36c2.21 0 4-1.79 4-4V14L28 2H12z" fill="#34A853" />
      <path d="M28 2v12h12" fill="#A7E3B4" />
      <path d="M16 18h16v2H16zm0 6h16v2H16zm0 6h16v2H16z" fill="#fff" />
      <path d="M22 16v14h2V16zm6 0v14h2V16z" fill="#fff" />
    </svg>
  ),
}

const integrantes = [
  { nombre: 'Yoel Marain', img: yoelImg },
  { nombre: 'Valentino Honnorat', img: valenImg },
  { nombre: 'Agustin Ferrazzano', img: agusImg },
  { nombre: 'Joaquin Bianciotto', img: joaImg },
  { nombre: 'Martin Lopez Soto', img: martinImg },
 
]

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
                {iconByType[getFileType(actividad)] || iconByType.docs}
                <span className="font-bold text-black text-sm leading-tight">
                  {actividad.titulo}
                </span>
              </a>
            ))}
          </div>
        )}

        <div className="mt-14">
          <h3 className="text-2xl md:text-3xl font-headline font-bold text-black mb-6 text-center">
            Test de Liderazgo 
          </h3>
          <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
            {integrantes.map((integrante) => (
              <div
                key={integrante.nombre}
                className={`bg-white sketch-border p-4 flex flex-col items-center text-center gap-3 ${
                  integrante.nombre === 'Yoel Marain' ? 'col-span-2' : ''
                }`}
              >
                <span className="font-bold text-black text-sm">
                  {integrante.nombre}
                </span>
                <img
                  src={integrante.img}
                  alt={`Caricatura de ${integrante.nombre}`}
                  className="w-full max-w-sm object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        

      </div>
    </section>
  )
}
