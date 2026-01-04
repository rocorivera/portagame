import { useState } from "react"


const Hero = () => {
const [volteado, setVolteado] = useState(false);

  return (
     <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white flex items-center justify-center">
      <div className="text-center flex flex-col items-center">
        <h1 className="text-5xl font-extrabold tracking-wide text-cyan-400 drop-shadow-lg">
          Bienvenido, A mi mundo del Código Heroe ⚔️
        </h1>
        {/* padre de la targeta */}
        <div className=" w-48 h-72 sm:w-56 sm:h-80 md:w-64 md:h-96 perspective cursor-pointer mb-10 overflow-hidden animate-epic-entrance" onClick={() => setVolteado(!volteado)}>
  <div className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${volteado ? 'rotate-y-180' : ''}`}>
    {/* Cara Frontal */}
    <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-cyan-500 via-gray-100 to-gold-700 border-purple-50 shadow-[0_0_15px_rgba(255,215,0,0.7)] animate-pulse duration-1000 text-white flex flex-col items-center justify-center border-4 border-purple-500 rounded-xl shadow-xl">
      <img src="apuesto.png" alt="Personaje" className="w-36 h-28 object-contain rounded-full mb-4" />
      <h2 className="text-2xl font-bold">Robert // Creador Visual 🌌</h2>
      <p className="text-sm mt-2 text-purple-300">Diseñador de mundos y programador Full Stack</p>
    </div>

    {/* Cara Trasera */}
    <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] bg-gradient-to-br from-purple-800 text-white flex flex-col items-center justify-center border-4 border-purple-500 rounded-xl shadow-xl">
      <img src="ahora.jpg" alt="Foto Robert" className="w-32 h-32 rounded-full mb-4 border-[3px] border-blue-200 shadow-[0_0_10px_rgba(255,215,0,0.8)] animate-pulse hover:scale-105" />
      <h2 className="text-xl font-bold">¡Hola, soy yo!</h2>

              <p className="text-sm mt-2 text-gray-300 px-4 text-center">
                Desarrollador junior con gusto por el anime, los videojuegos y el diseño de personajes con Blender.
              </p>
            </div>
          </div>
        </div>

        <p className="text-lg text-gray-300">
       No solo quiero programar. Quiero crear, aprender y evolucionar.
Soy desarrollador Full Stack junior apasionado por la creatividad, los videojuegos y el universo anime. Me emocionan los desafíos, el aprendizaje colaborativo y el diseño de personajes con Blender.
Busco espacios donde crecer profesionalmente creando algo memorable, y aportar con todo lo que sé mientras absorbo conocimiento de quienes dominan su arte.

        </p>
        <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition duration-300 shadow-md">
          Explorar mis habilidades 🎮
        </button>
      </div>
    </div>

  )
}

export default Hero