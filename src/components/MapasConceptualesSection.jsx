const niveles = [
  { id: "operativo", label: "Operativo" },
  { id: "ejecutivo", label: "Ejecutivo" },
  { id: "estrategico", label: "Estratégico" },
]

export default function MapasConceptualesSection() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
      <div className="bg-white/40 backdrop-blur-sm p-8 md:p-12 sketch-border">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-black mb-4">
            Mapas Conceptuales
          </h2>
          <div className="h-1 w-32 bg-black mx-auto mb-8" />
          <p className="text-black/70 text-lg font-bold max-w-2xl mx-auto">
            Un mapa por cada nivel de gestión: operativo, ejecutivo y estratégico.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {niveles.map((nivel) => (
            <div key={nivel.id} className="bg-white/50 sketch-border p-8 text-center">
              <span className="material-symbols-outlined text-5xl text-black/30 mb-4 block">
                account_tree
              </span>
              <h3 className="text-2xl font-headline font-bold text-black mb-2">
                {nivel.label}
              </h3>
              <p className="text-black/50 font-bold italic text-sm">
                Próximamente...
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
