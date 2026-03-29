const reflectionItems = [
  { key: "aprendimos", title: "Qué aprendimos" },
  { key: "distinto", title: "Qué haríamos distinto" },
  { key: "competencias", title: "Competencias" },
]

export default function ReflectionBlock({ reflexion }) {
  return (
    <div className="bg-simpson-yellow sketch-border p-8 -rotate-1">
      <h4 className="flex items-center gap-3 text-3xl font-headline font-bold text-black mb-6">
        <span className="material-symbols-outlined text-4xl">auto_awesome</span>
        Reflexión del equipo
      </h4>

      <div className="grid md:grid-cols-3 gap-8">
        {reflectionItems.map(({ key, title }) => (
          <div key={key} className="bg-white/30 p-4 sketch-border">
            <p className="text-xs font-black uppercase text-black mb-2">
              {title}
            </p>
            <p className="text-sm font-bold leading-relaxed italic">
              {reflexion[key]}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
