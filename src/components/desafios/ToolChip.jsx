const rotations = ["rotate-1", "-rotate-2", "rotate-1"]

export default function ToolChip({ label, index = 0 }) {
  const rotation = rotations[index % rotations.length]

  return (
    <span className={`px-4 py-1 bg-white border-2 border-black text-black text-sm font-bold uppercase ${rotation}`}>
      {label}
    </span>
  )
}
