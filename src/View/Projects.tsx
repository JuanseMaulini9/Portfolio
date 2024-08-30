import ProjectCard from "../components/ProjectCard";

interface ProyectInterface {
  name: string, 
  description: string,
  image: string
  client: string,
  server: string
}

export default function Projects() {

  const proyects: ProyectInterface[] = [
    {
      name: "Proyect Managment estilo Trello",
      description: 'Desarrollé un gestor de proyectos en formato tablero, inspirado en Trello, que permite a los usuarios organizar tareas mediante cards que pueden ser arrastradas entre columnas de "Completadas", "En Progreso" y "No Empezadas". La aplicación incluye un sistema de autenticación con JWT para asegurar la protección y gestión de sesiones de usuario. Esta herramienta facilita la visualización y el seguimiento del progreso de las tareas, mejorando la eficiencia en la gestión de proyectos.',
      image: `public/trelloMiniatura.jpeg`,
      client:"https://github.com/JuanseMaulini9/todo-MERN-frontend",
      server:"https://github.com/JuanseMaulini9/Todo-MERN-Backend"
    },
    {
      name: "Cinema",
      description: "Desarrollé una aplicación de cine que muestra horarios de funciones y permite a los usuarios reservar asientos en salas específicas. La aplicación utiliza una interfaz interactiva para seleccionar horarios y realizar reservas, todo basado en la API de TMDB para la información de películas.",
      image:"public/cineMiniatura.jpeg",
      client:"https://github.com/JuanseMaulini9/cinemaFronted",
      server:"https://github.com/JuanseMaulini9/cinemaBackend"
    }
  ]



  return (
    <section>
      <h2 className="font-bold text-2xl">{"</>"} Proyectos</h2>
      <section className="flex flex-col gap-8 my-4">
        {
          proyects.map((proyect, index) => (
            <ProjectCard name={proyect.name} description={proyect.description} image={proyect.image} client={proyect.client} server={proyect.server} key={index}></ProjectCard>
          ))
        }
      </section>
    </section>
  );
}
