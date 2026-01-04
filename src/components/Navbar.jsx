import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-gradient-to-r from-purple-800 via-gray-900 to-cyan-700 p-4 text-white flex justify-center space-x-6 shadow-lg border-b-2 border-purple-500 rounded-b-xl">
          <Link to="/" className="px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors duration-200 font-semibold">Heroe</Link>
          <Link to="/skills" className="px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors duration-200 font-semibold">Habilidades</Link>
          <Link to="/projects" className="px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors duration-200 font-semibold">Proyectos</Link>
          <Link to="/gallery" className="px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors duration-200 font-semibold">Galeria</Link>
          <Link to="/contact" className="px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors duration-200 font-semibold">Invocame</Link>
        </nav>
    )
}