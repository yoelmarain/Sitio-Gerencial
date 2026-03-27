export default function TeamMemberCard({ member }) {
  const isRight = member.align === 'right'
  const flexDir = isRight ? 'md:flex-row-reverse' : 'md:flex-row'
  const textAlign = isRight ? 'md:text-right' : 'md:text-left'
  const chipJustify = isRight ? 'md:justify-end' : 'md:justify-start'

  return (
    <div className={`flex flex-col ${flexDir} gap-12 items-center`}>
      <div className={`w-64 h-64 shrink-0 sketch-card ${member.rotation} p-2`}>
        <img
          alt={member.name}
          className="w-full h-full object-cover sketchy-img"
          src={member.image}
        />
      </div>

      <div className={`flex-1 text-center ${textAlign}`}>
        <h3 className="text-4xl font-headline font-bold text-black mb-4">
          {member.name}
        </h3>
        <p className="text-xl text-black/80 mb-6 italic leading-relaxed">
          {member.quote}
        </p>
        <div className={`flex flex-wrap gap-3 justify-center ${chipJustify}`}>
          {member.tags.map((tag) => (
            <span
              key={tag.label}
              className={`px-4 py-1 ${tag.bg} border-2 border-black text-black text-sm font-bold uppercase ${tag.rotation}`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
