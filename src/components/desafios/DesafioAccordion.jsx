import { useState } from "react"
import DesafioHeader from "./DesafioHeader"
import DesafioContent from "./DesafioContent"

export default function DesafioAccordion({ desafio, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="bg-white/40 backdrop-blur-sm sketch-border overflow-hidden transition-all">
      <DesafioHeader
        id={desafio.id}
        title={desafio.title}
        subtitle={desafio.subtitle}
        badgeRotation={desafio.badgeRotation}
        isOpen={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      />

      <div className="accordion-grid" data-open={isOpen}>
        <div className="overflow-hidden">
          <DesafioContent desafio={desafio} />
        </div>
      </div>
    </div>
  )
}
