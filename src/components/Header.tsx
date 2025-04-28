import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="p-4 bg-cyan-700 text-white flex gap-4">
      <Link to="/">Início</Link>
      <Link to="/inicio">Boas Vindas</Link>
      <Link to="/requisicao">Requisição</Link>
      <Link to="/playground/teste">Playground</Link>
    </header>
  );
}
