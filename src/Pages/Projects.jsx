import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  GiCrystalBall,
  GiSpellBook,
  GiNetworkBars,
  GiScrollQuill,
  GiAchievement
} from 'react-icons/gi'

const Projects = () => {
  const [tituloAnimado, setTituloAnimado] = useState('')
  const tituloCompleto = '🛠️ Proyectos en Acción'

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setTituloAnimado(tituloCompleto.slice(0, index))
      index++
      if (index > tituloCompleto.length) clearInterval(interval)
    }, 100) // velocidad de escritura
    return () => clearInterval(interval)
  }, [])

  const projects = [
    {
      nombre: "Pokémon Explorer",
      descripcion: "Frontend que consume la API de Pokémon para mostrar criaturas, habilidades y estadísticas. Ideal para entrenadores curiosos.",
      tecnologias: ["React", "Tailwind", "PokéAPI"],
      icono: <GiCrystalBall className="text-yellow-300 mr-2" />,
      link: "https://pokedex2019.netlify.app/"
    },
    {
      nombre: "Rick & Morty Tracker",
      descripcion: "Interfaz dinámica que consume la API oficial para explorar personajes, ubicaciones y episodios del multiverso.",
      tecnologias: ["React", "Tailwind", "Rick&Morty API"],
      icono: <GiSpellBook className="text-green-300 mr-2" />,
      link: "https://my-rick-and-morty12.netlify.app/"
    },
    {
      nombre: "Tienda Virtual",
      descripcion: "E-commerce funcional creado con JavaScript puro, HTML y CSS. Incluye carrito, filtros y simulación de compra.",
      tecnologias: ["JavaScript", "HTML", "CSS"],
      icono: <GiNetworkBars className="text-pink-400 mr-2" />,
      link: "https://tiendaacademlo-1.netlify.app/"
    },
    {
      nombre: "Backend para Películas",
      descripcion: "Diseño de base de datos y endpoints para gestionar películas, géneros y usuarios. Ideal para plataformas de streaming.",
      tecnologias: ["Express", "Sequelize", "PostgreSQL"],
      icono: <GiScrollQuill className="text-indigo-400 mr-2" />,
      link: "https://github.com/rocorivera/backend-movies"
    },
    {
      nombre: "Backend para Tienda",
      descripcion: "Sistema de gestión para productos, usuarios y pedidos. Pensado para escalar en e-commerce real.",
      tecnologias: ["Express", "Sequelize", "MySQL"],
      icono: <GiAchievement className="text-orange-400 mr-2" />,
      link: "https://github.com/rocorivera/e-commers-back-end"
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 p-8 rounded-2xl shadow-2xl text-white max-w-xl mx-auto border-2 border-indigo-700"
    >
      <h2 className="text-3xl mb-8 font-extrabold text-pink-300 drop-shadow-lg tracking-wide font-mono">
        {tituloAnimado}
        <span className="animate-pulse text-pink-400">|</span>
      </h2>
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.nombre}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gray-800 bg-opacity-80 rounded-xl p-5 shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center justify-between mb-2">
              {project.icono}
              <span className="text-indigo-300 font-bold text-lg hover:text-pink-400 transition-colors duration-200">
                {project.nombre}
              </span>
            </div>
            <p className="text-sm text-gray-300 mb-2 italic">{project.descripcion}</p>
            <p className="text-xs text-gray-400 font-mono">Tecnologías: {project.tecnologias.join(', ')}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline text-sm mt-2 block">
              Ver proyecto →
            </a>
          </motion.div>
        ))}
      </div>
      <p className="mt-8 text-gray-300 text-center text-base italic">
        Cada proyecto es una misión completada con pasión y precisión. ¡Y vienen más! 🚀🧠
      </p>
    </motion.div>
  )
}

export default Projects
