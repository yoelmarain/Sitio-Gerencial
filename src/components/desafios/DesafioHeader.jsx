export default function DesafioHeader({
  id,
  title,
  subtitle,
  badgeRotation,
  isOpen,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between p-8 cursor-pointer text-left select-none"
      aria-expanded={isOpen}
    >
      <div className="flex items-center gap-6">
        <div
          className={`w-16 h-16 sketch-border flex items-center justify-center text-black shadow-md shrink-0 transition-colors duration-300 ${badgeRotation} ${
            isOpen ? "bg-simpson-yellow" : "bg-white"
          }`}
        >
          <span className="text-2xl font-black font-headline">{id}</span>
        </div>
        <div>
          <h3 className="text-3xl font-headline font-bold text-black">
            {title}
          </h3>
          <p className="text-black/70 font-bold">{subtitle}</p>
        </div>
      </div>

      <span
        className={`material-symbols-outlined text-black text-4xl transition-transform duration-500 ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        expand_more
      </span>
    </button>
  )
}
