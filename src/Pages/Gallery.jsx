import React from 'react';
import { Swiper,SwiperSlide} from 'swiper/react';
import {EffectCoverflow,Navigation, Pagination,Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { nav, video } from 'framer-motion/client';
import PageWrapper from '../Components/PageWrapper';


const projects = [
  {
    title: "Quest: Poke API",
    image: "/images/pokeapi.png",
    description: "Explora criaturas y habilidades en un mundo Pokémon.",
    link: "https://pokedex2019.netlify.app/"
    
  },
  {
    title: "Rick & Morty Multiverse",
    image: "/images/rick_and_morty.png",
    description: "un viaje interdimensional con Rick y Morty.",
    link: "https://my-rick-and-morty12.netlify.app/"
  },
  {
    title: "E-commerce Quest",
    image: "/images/e-commerse.png",
    description: "Mercado digital con hechizos de autenticación.",
    link: "https://tiendaacademlo-1.netlify.app/"
  },
  {
    title: "Personaje de blender",
    video:"/video/blender-personaje.mp4",
    description: "Modelo 3D animado creado en Blender.",
    
  },
  {
    title:"portafolio anterior",
    image:"/images/portafolio-anterior.png",
    description:"Mi portafolio anterior construido con mi conocimiento previo.",
    link:"https://portafolioservicios.netlify.app/"
  }
];

export default function Gallery() {
 return (
    <PageWrapper>
    <section className="py-12 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-8">🎠 Carrusel de Aventuras</h2>
      <Swiper
      modules={[Navigation, Pagination,Autoplay, EffectCoverflow]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
       spaceBetween={30}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
            modifier: 1,
            slideShadows: true,
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000}}
        loop={true}
        className="w-3/4"
        >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="relative">
        
            <div className="bg-gray-800 roundead-lg shadow-lg p-4
            border-4 border-yellow-400
            hover:shadow-[0_0_25px_rgba(255,215,0,0.8)]
            transition-transform transform hover:scale-105">
                <div className="w-full h-80 flex items-center justify-center">
                {project.image ?(
                 <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg"
              />):(
                <video
                src={project.video}
                controls
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-lg"/>
              )}
              </div>
            
              <h3 className="text-2xl mt-4 text-yellow-300 font-bold">{project.title}</h3>
              <p className="text-gray-300 mt-2">{project.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    </PageWrapper>
  );

}