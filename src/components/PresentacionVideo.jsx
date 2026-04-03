import video from '../assets/PRESENTACION.mp4'

export default function PresentacionVideo() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
      <div className="bg-white/40 backdrop-blur-sm p-8 md:p-12 sketch-border">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-black mb-4">
            Presentación
          </h2>
          <div className="h-1 w-32 bg-black mx-auto" />
        </div>

        <div className="sketch-border overflow-hidden">
          <video
            src={video}
            controls
            playsInline
            className="w-full block"
          />
        </div>
      </div>
    </section>
  )
}
