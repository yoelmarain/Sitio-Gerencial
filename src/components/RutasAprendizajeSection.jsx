export default function RutasAprendizajeSection() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
      <div className="bg-white/40 backdrop-blur-sm p-8 md:p-12 sketch-border">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-black mb-4">
            Rutas de Aprendizaje
          </h2>
          <div className="h-1 w-32 bg-black mx-auto mb-8" />
          <p className="text-black/70 text-lg font-bold max-w-2xl mx-auto">
            El recorrido individual de cada integrante a lo largo de Gestión Gerencial.
          </p>
        </div>

        <div className="py-12 text-center">
          <span className="material-symbols-outlined text-6xl text-black/30 mb-4 block">
            route
          </span>
          <p className="text-black font-bold italic text-lg">
            Próximamente...
          </p>
        </div>
      </div>
    </section>
  )
}
