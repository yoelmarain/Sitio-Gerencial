const clouds = [
  { className: 'w-[200px] h-[100px] top-[5%] left-[10%]' },
  { className: 'w-[320px] h-[140px] top-[15%] right-[5%]' },
  { className: 'w-[250px] h-[110px] top-[40%] -left-[5%]' },
  { className: 'w-[280px] h-[120px] top-[60%] -right-[10%]' },
  { className: 'w-[180px] h-[80px] top-[80%] left-[15%]' },
  { className: 'w-[300px] h-[130px] top-[25%] left-[40%]' },
  { className: 'w-[220px] h-[90px] bottom-[10%] right-[20%]' },
  { className: 'w-[350px] h-[150px] top-[55%] left-[30%]' },
]

export default function CloudBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {clouds.map((cloud, i) => (
        <div key={i} className={`cloud ${cloud.className}`} />
      ))}
    </div>
  )
}
