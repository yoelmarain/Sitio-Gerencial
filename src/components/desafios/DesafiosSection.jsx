import desafios from "../../data/desafios"
import DesafioAccordion from "./DesafioAccordion"

export default function DesafiosSection() {
  return (
    <section className="relative z-10 pt-40 pb-20 px-6 max-w-6xl mx-auto">
      <header className="text-center mb-16">
        <span className="px-6 py-1.5 sketch-border bg-simpson-yellow text-black text-sm font-bold tracking-wide uppercase mb-6 inline-block -rotate-2">
          Equipo Dreamers
        </span>
        <h1 className="text-6xl md:text-7xl font-headline font-bold text-black mb-6 leading-tight">
           Desafíos
        </h1>
      </header>

      <div className="space-y-10">
        {desafios.map((desafio, i) => (
          <DesafioAccordion
            key={desafio.id}
            desafio={desafio}
          />
        ))}
      </div>
    </section>
  )
}
