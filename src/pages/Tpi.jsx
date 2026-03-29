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
          Todo lo relacionado al Trabajo Práctico Integrador aparecerá en esta sección.
        </p>
      </header>

      <div className="bg-white/40 backdrop-blur-sm sketch-border p-12 text-center">
        <span className="material-symbols-outlined text-6xl text-black/30 mb-4 block">
          construction
        </span>
        <p className="text-black font-bold italic text-lg">
          Contenido en desarrollo...
        </p>
      </div>
    </section>
  )
}
