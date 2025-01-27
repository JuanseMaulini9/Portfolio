import Mail from "../Icons/Mail";
import Linkedin from "../Icons/Linkedin";

export default function Home() {
  return (
    <section className="flex flex-col gap-2 mb-20">
      <div className="flex flex-row items-center gap-4">
        <img
          className="rounded-full w-40"
          src="https://media.licdn.com/dms/image/v2/D4D03AQE4fqTVRoqJWw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725285975310?e=1743638400&v=beta&t=A7kAV063OeXIo7nVaKg_hJuDA59oID8CcbJ5Rwhm2uE"
        />
        <a
          href="https://www.linkedin.com/in/juansemaulini9/"
          target="_blank"
          className="rounded-full px-2 py-1 h-full border-emerald-700 border-2 bg-zinc-800 transform hover:scale-105 transition-transform duration-200"
        >
          Disponible para trabajar
        </a>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-4xl">Ey, soy Juanse</h1>
        <p className="text-gray-400 font-bold text-lg">
          {" "}
          <span className="text-teal-300">Desarrollador full stack</span> de La
          Plata, Argentina, apasionado por crear experiencias web atractivas y
          funcionales,{" "}
          <span className="text-teal-300">
            con un enfoque principal en el FrontEnd.
          </span>
        </p>
      </div>
      <div className="flex flex-row gap-4 mt-4">
        <a
          href="mailto:juansesosa45@gmail.com"
          target="_blank"
          className="bg-zinc-900 px-4 rounded-full border border-zinc-600 flex justify-center items-center h-12 gap-2 hover:scale-105 transition-transform duration-200"
        >
          <Mail></Mail>Contáctame
        </a>
        <a
          href="https://www.linkedin.com/in/juansemaulini9/"
          target="_blank"
          className="bg-zinc-900 px-4 rounded-full border border-zinc-600 flex justify-center items-center gap-2 h-12 hover:scale-105 transition-transform duration-200"
        >
          <Linkedin></Linkedin> LinkedIn
        </a>
      </div>
    </section>
  );
}
