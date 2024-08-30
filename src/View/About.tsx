import Person from "../Icons/Person";

export default function About() {
  return (
    <section className="my-12">
      <h2 className="font-bold text-2xl mb-4 flex items-center gap-2"><Person/>Sobre mí</h2>
      <section className="flex flex-col items-center sm:flex-row-reverse sm:justify-between">
        <section className="w-60 border bg-zinc-900 rounded-lg rotate-6 my-4 ">
          <div className="p-2">
            <img src="public\AboutImage.jpeg" className=" rounded-lg" />
          </div>
        </section>
        <p className="text-justify sm:w-3/4 sm:mr-6 sm:text-left text-gray-400 font-bold">
          Soy un desarrollador web especializado en frontend, con experiencia en
          crear interfaces de usuario eficientes utilizando tecnologías como
          React, JavaScript y Tailwind CSS. <span className="text-teal-300">Mi enfoque es resolver problemas
          técnicos de manera pragmática</span> y adaptar soluciones a las necesidades
          específicas de cada proyecto.
          <br />
          <br />
          He trabajado en una variedad de proyectos, desde aplicaciones simples
          hasta soluciones integradas con backend, <span className="text-teal-300">aprovechando mi conocimiento
          del stack MERN</span>. Siempre busco mantenerme actualizado en nuevas
          tecnologías para mejorar la calidad y eficiencia de mi trabajo.
        </p>
      </section>
    </section>
  );
}
