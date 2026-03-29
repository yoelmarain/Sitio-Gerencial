import EvidenciaCard from "./EvidenciaCard"
import ToolChip from "./ToolChip"
import ReflectionBlock from "./ReflectionBlock"

function PendingContent() {
  return (
    <div className="px-8 pb-10 pt-8 text-center text-black font-bold italic">
      Contenido en desarrollo para la entrega final...
    </div>
  )
}

export default function DesafioContent({ desafio }) {
  if (!desafio.problema) return <PendingContent />

  return (
    <div className="px-8 pb-10 space-y-10 border-t-2 border-black/10 pt-8">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h4 className="flex items-center gap-3 text-2xl font-headline font-bold text-black mb-4">
              <span className="material-symbols-outlined text-3xl">
                question_mark
              </span>
              Problema abordado
            </h4>
            <p className="text-black leading-relaxed font-medium">
              {desafio.problema}
            </p>
          </div>

          <div>
            <h4 className="flex items-center gap-3 text-2xl font-headline font-bold text-black mb-4">
              <span className="material-symbols-outlined text-3xl">
                lightbulb
              </span>
              Solución propuesta
            </h4>
            <ul className="space-y-3 list-none font-medium">
              {desafio.solucion.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-black mt-1">
                    check_circle
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h4 className="text-2xl font-headline font-bold text-black mb-4">
              Evidencias
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {desafio.evidencias.map((ev, i) => (
                <EvidenciaCard key={ev.label} evidencia={ev} index={i} />
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-headline font-bold text-black mb-4">
              Herramientas
            </h4>
            <div className="flex flex-wrap gap-3">
              {desafio.herramientas.map((tool, i) => (
                <ToolChip key={tool} label={tool} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {desafio.reflexion && <ReflectionBlock reflexion={desafio.reflexion} />}
    </div>
  )
}
