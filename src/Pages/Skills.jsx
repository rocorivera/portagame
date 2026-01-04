import React, { use, useEffect, useState } from 'react'
import {Tooltip} from 'react-tooltip'
import{
  GiScrollQuill,
  GiSpellBook,
  GiFeather,
  GiCrystalBall,
  GiAchievement}
   from 'react-icons/gi'
const Skills = () => {
  const [animado, setAnimado]=useState(false);
  useEffect(()=>{
    const timer=setTimeout(()=>{
      setAnimado(true)
    },100)
    // retrazo ligero para suavizar
    return()=> clearTimeout(timer)
  },[])
  const habilidades = [
    {
      nombre: "Sequelize & Express",
      nivel: 90,
      descripcion: "Frameworks backend robustos para APIs y gestión de bases de datos.",
      icono:<GiScrollQuill className='text-yellow-400 mr-2'/>
    },
    {
      nombre: "React & JavaScript",
      nivel: 70,
      descripcion: "Frontend dinámico y moderno para aplicaciones web.",
      icono:<GiSpellBook className='text-purple-400 mr-2'/>
    },
    {
      nombre: "Tailwind CSS",
      nivel: 50,
      descripcion: "Estilo rápido y eficiente con utilidades para diseño responsivo.",
      icono:<GiFeather className='text-blue-300 mr-2'/>
    },
    {
      nombre: "Blender (3D)",
      nivel: 30,
      descripcion: "Modelado y creación de personajes para mundos visuales.",
      icono:<GiCrystalBall className='text-indigo-400 mr-2'/>
    },
    {
      nombre: "Diseño de CVs estilo anime",
      nivel: 90,
      descripcion: "Formatos creativos que reflejan personalidad y originalidad.",
      icono:<GiAchievement className='text-green-400 mr-2'/>
    }
  ]

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-cyan-900 p-8 rounded-2xl shadow-2xl text-white max-w-xl mx-auto border-2 border-purple-700">
      <h2 className="text-3xl mb-8 font-extrabold text-cyan-300 drop-shadow-lg tracking-wide">🧙‍♂️ Habilidades Técnicas</h2>
      <div className="grid gap-8">
        {habilidades.map((skill) => (
          <div key={skill.nombre} className="bg-gray-800 bg-opacity-80 rounded-xl p-5 shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-between mb-2">
              {skill.icono}
              <span
                data-tip={skill.descripcion}
                className="text-purple-300 font-bold text-lg cursor-help hover:text-cyan-400 transition-colors duration-200"
              >
                {skill.nombre}
              </span>
              <span className="text-xs text-gray-400 font-mono">{skill.nivel}%</span>
            </div>
            <Tooltip effect="solid" place="top" className="!bg-indigo-700 !text-white !px-3 !py-2 !rounded-lg !shadow-xl !text-sm !font-semibold !border-2 !border-purple-400" />
            <div className="w-full bg-gray-700 rounded-full h-5 mt-2 shadow-inner">
              <div
                className="bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-600 h-5 rounded-full animate-pulse transition-all duration-1000 ease-in-out"
                style={{ width:animado ? `${skill.nivel}%`:'0%' }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-8 text-gray-300 text-center text-base italic">
        Estas barras representan el dominio que he desarrollado en áreas técnicas y creativas.<br/>¡Siempre estoy subiendo de nivel! 🎮📈
      </p>
    </div>
  )
}

export default Skills
