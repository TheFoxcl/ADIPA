import { InformationCircleIcon } from "@heroicons/react/24/outline";

interface TipoCursoProps {
  type: "En vivo" | "Online" | "Presencial" | string;
  descriptionType?: string;
  showChevron?: boolean;
}

export const TipoCurso = ({ type }: TipoCursoProps) => {
  const config = {
    "En vivo": {
      dot: "bg-green-500",
      ping: "bg-green-400",
      info: "Sesiones 100% en vivo. Si no puedes asistir, puedes revisar posteriormente la grabación en tu aula virtual. No aplica para acreditaciones.",
    },
    Online: {
      dot: "bg-blue-500",
      ping: "bg-blue-400",
      info: "Curso 100% asincrónico, clases en formato de video-cápsulas. Revisa el contenido on demand, en el momento que desees.",
    },
    Presencial: {
      dot: "bg-yellow-500",
      ping: "bg-yellow-400",
      info: "Programa 100% presencial, con sesiones en vivo en nuestra sede.",
    },
  };

  const infoModalidad = config[type as keyof typeof config] || config["Online"];

  return (
    <div className="absolute top-35 -right-0 z-20 bg-white text-black px-3 py-1 rounded-l-lg flex items-center gap-2 shadow-md border-y border-l border-gray-100">
      <span className="relative flex h-2 w-2">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${infoModalidad.ping}`}
        ></span>
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${infoModalidad.dot}`}
        ></span>
      </span>

      <span className="text-xs font-medium uppercase tracking-wider">
        {type}
      </span>

      <div className="group relative flex items-center">
        <InformationCircleIcon className="w-4 h-4 text-secondary cursor-help" />

        <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block w-48 p-2 bg-white text-black text-xs rounded shadow-xl z-30">
          {infoModalidad.info}
        </div>
      </div>
    </div>
  );
};
