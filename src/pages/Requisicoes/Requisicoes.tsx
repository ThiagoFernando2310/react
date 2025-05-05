import { useAtom } from "jotai";
import { userNameAtom } from "../../atoms/user.atom";
import { useGitUsuarios } from "../../hooks/useGitUsuario";
import { GitHubRepo } from "../../models/usuariosGit";
import { useNavigate } from "react-router-dom";
import { Status } from "../../components/Status";

export function Requisicao() {
    const [username] = useAtom(userNameAtom);
    const { data, isLoading, isError } = useGitUsuarios(username);
    const navigate = useNavigate();

    if (isLoading){
       return <Status type="loading" message="Carregando..."/>
    }
        
    if (isError || !data){
        return <Status type="error" message="Erro ao buscar o usuário, tente outro nome ou verifique se este está correto."/>;
    } 

    const { user, repos } = data;

    return (
        <div className="flex justify-center items-center min-h-screen m-8 gap-4 flex-col">
            <div className="flex justify-center items-center mt-4">
                <button className="bg-cyan-600 rounded-full text-center p-2" onClick={() => navigate("/")}>
                    Escolher outro usuário
                </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
                <div className="flex justify-center items-center flex-col mb-4">
                    <img src={user.avatar_url} alt="Avatar" width={100} className="rounded-full" />
                    <h1 className="mt-4">{user.name}</h1>
                </div>
                <div>
                    <p>Login: {user.login}</p>
                    <p>Bio: {user.bio}</p>
                    <p>Repositórios públicos: {user.public_repos}</p>
                    <a className="flex bg-cyan-600 rounded-full p-2 mt-1 justify-center" href={user.html_url} target="_blank">
                        Ver perfil completo
                    </a>
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-6xl">
                <ul className="list-disc ml-6 mt-2 space-y-2 list-none">
                    {!repos || repos.length === 0 ? (
                        <p>Não há repositórios públicos</p>
                    ) : (
                        repos.map((repo: GitHubRepo) => (
                            <li key={repo.id}>
                                <a href={repo.html_url} target="_blank" className="text-blue-500 text-2xl font-normal">
                                    {repo.name}
                                </a>
                                <p className="text-lg">{repo.description || "Sem descrição"}</p>
                                <div className="flex gap-4">
                                    <p className="text-base text-gray-600">{repo.created_at}</p>
                                    <p className="text-base text-gray-600">{repo.updated_at}</p>
                                </div>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
}
