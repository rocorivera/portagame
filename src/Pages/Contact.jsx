import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import PageWrapper from '../Components/PageWrapper';

const Contact = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_lms1o9c", "template_gi7gqpf", form.current, "yhFg3HfwixflijpwM")
      .then(
        (result) => {
          console.log("Mensaje enviado", result.text);
          setSuccessMessage("💫 Mensaje enviado con éxito!");
          if (form.current) form.current.reset();
        }
      )
      .catch((error) => {
        console.log("Error al enviar el mensaje", error.text || error);
        setSuccessMessage("El hechizo falló, intenta de nuevo.");
      });
  } 

  return (
    <PageWrapper>
   <section className="py-16 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-8">🔮 Invócame</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg border-4 border-yellow-400 shadow-[0_0_25px_rgba(255,215,0,0.8)]"
      >
        <div className="mb-6">
          <label className="block text-yellow-300 mb-2">Nombre del invocador</label>
          <input
            type="text"
            name="user_name"
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Tu nombre..."
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-yellow-300 mb-2">Correo mágico</label>
          <input
            type="email"
            name="user_email"
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="tunombre@reino.com"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-yellow-300 mb-2">Mensaje</label>
          <textarea
            name="message"
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            rows="4"
            placeholder="Describe tu misión..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg transition-transform transform hover:scale-105"
        >
          ✨ Enviar Hechizo
        </button>
      </form>

      {/* Mensaje de éxito */}
      {successMessage && (
        <p className="text-center mt-6 text-green-400 font-bold animate-pulse">
          {successMessage}
        </p>
      )}
    </section>
    </PageWrapper>
  );
}



export default Contact

