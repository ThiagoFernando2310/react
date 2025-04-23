import { Link } from "react-router-dom";

export function Header() {

    return (
        <>
            <nav className="flex gap-4 m-5 justify-center text-cyan-400">
                <Link to='/requisicao'>Requisição</Link>
                <Link to='/playground'>Playground</Link>
            </nav>
        </>
    )

}