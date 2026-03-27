import dreamersLogo from '../assets/dreamers-logo.png'


export default function Hero() {
  return (
    <header className="relative pt-48 pb-32 px-6 flex items-center justify-center min-h-[70vh] z-10">
      <div className="text-center relative">
        <h1 className="mb-12">
          <img
            alt="DREAMERS"
            className="w-full max-w-4xl mx-auto drop-shadow-[4px_4px_0_rgba(0,0,0,1)]"
            src={dreamersLogo}
          />
        </h1>

        <p className="text-xl md:text-2xl text-black font-bold max-w-2xl mx-auto mb-10 drop-shadow-sm">
          Dreamers de ideas grandes, gestionadas entre mates y trabajo en equipo
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button className="bg-simpson-yellow text-black border-2 border-black px-10 py-4 font-bold text-lg hover:translate-x-1 hover:translate-y-1 transition-transform -rotate-1 cursor-pointer">
            Ver Desafíos
          </button>
          <button className="bg-white text-black border-2 border-black px-10 py-4 font-bold text-lg hover:-translate-x-1 hover:-translate-y-1 transition-transform rotate-1 cursor-pointer">
            Ver TPI
          </button>
        </div>
      </div>
    </header>
  )
}
