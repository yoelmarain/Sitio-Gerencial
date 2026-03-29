const rotations = ["rotate-1", "-rotate-1"]

export default function EvidenciaCard({ evidencia, index = 0 }) {
  const rotation = rotations[index % rotations.length]

  return (
    <a
      href={evidencia.link}
      className={`group p-6 bg-white sketch-border flex flex-col items-center text-center gap-3 hover:-translate-y-1 transition-transform cursor-pointer ${rotation}`}
    >
      <span className="material-symbols-outlined text-5xl text-black">
        {evidencia.icon}
      </span>
      <span className="text-sm font-bold uppercase">
        {evidencia.label}
      </span>
    </a>
  )
}
