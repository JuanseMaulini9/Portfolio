import Github from "../Icons/Github";

interface Props {
  name: string;
  description: string;
  image: string;
  client: string;
  server: string;
}

export default function ProjectCard({
  name,
  description,
  image,
  client,
  server,
}: Props) {
  return (
    <div className="w-full flex flex-col lg:flex-row lg:gap-4 gap-2">
      <section className="sm:w-full">
        <img
          src={image}
          className="h-52 w-full sm:size-full object-cover rounded"
        />
      </section>
      <section className="w-full flex flex-col sm:justify-between py-2 gap-2">
        <h2 className="font-bold text-xl ">{name}</h2>
        <p className="text-gray-400">{description}</p>
        <section className="flex gap-4 mt-2 sm:m-0">
          <a
            href={client}
            target="_blank"
            className="bg-zinc-800 px-4 rounded-xl border h-12 border-zinc-600 hover:scale-105 transition-transform duration-200 flex justify-center items-center gap-2"
          >
            <Github></Github>Cliente
          </a>
          <a
            href={server}
            target="_blank"
            className="bg-zinc-800 px-4 rounded-xl border h-12 border-zinc-600 hover:scale-105 transition-transform duration-200 flex justify-center items-center gap-2"
          >
            <Github></Github>Servidor
          </a>
        </section>
      </section>
    </div>
  );
}
