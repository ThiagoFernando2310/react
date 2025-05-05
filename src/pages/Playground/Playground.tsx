import { useParams } from "react-router-dom";

export function Playground() {
  const { codigo } = useParams<{ codigo: string }>();

  return (
    <div>
      <div className="flex items-center justify-center">
        <h1 className=" text-cyan-300  text-5xl ">Código Digitado: {codigo}</h1>
      </div>

    </div>
  );
}