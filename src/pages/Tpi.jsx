import documentoUrl from '../assets/TPI - Dreamers.pdf'
import infografiaUrl from '../assets/tpi-infografia.png'

export default function Tpi() {
  return (
    <section className="relative z-10 pt-40 pb-20 px-6 max-w-6xl mx-auto">
      <header className="text-center mb-16">
        <span className="px-6 py-1.5 sketch-border bg-simpson-yellow text-black text-sm font-bold tracking-wide uppercase mb-6 inline-block rotate-1">
          Equipo Dreamers
        </span>
        <h1 className="text-6xl md:text-7xl font-headline font-bold text-black mb-6 leading-tight">
          TPI
        </h1>
        <p className="text-xl md:text-2xl text-black font-bold max-w-2xl mx-auto drop-shadow-sm">
          Infografía y documento del Trabajo Práctico Integrador.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr] items-start">
        <article className="bg-white/80 backdrop-blur-sm sketch-border p-4 md:p-6 rotate-[-0.5deg] shadow-organic-lg">
          <div className="overflow-hidden sketchy-img bg-white">
            <img
              src={infografiaUrl}
              alt="Infografía del Trabajo Práctico Integrador"
              className="w-full h-auto block"
            />
          </div>
        </article>

        <aside className="bg-simpson-yellow sketch-border p-8 md:p-10 text-black rotate-1 shadow-organic-lg">
          <span className="material-symbols-outlined text-6xl mb-4 block">
            description
          </span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4 leading-none">
            Documento TPI
          </h2>
          <p className="text-lg font-bold mb-8">
            Accedé al documento completo del trabajo para consultar el desarrollo, los criterios y las entregas.
          </p>
          <a
            href={documentoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 sketch-border font-bold hover:bg-white hover:text-black transition-colors"
          >
            Ver documento
            <span className="material-symbols-outlined text-xl">
              open_in_new
            </span>
          </a>
        </aside>
      </div>
    </section>
  )
}
