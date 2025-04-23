import { useAtom } from "jotai"
import { userNameAtom } from "../atoms/user"
import React from "react"
import { useNavigate } from "react-router-dom"


export function Inicio() {
    const [userName] = useAtom(userNameAtom)

    const navigate = useNavigate()

    return (
        <div className="flex items-center justify-center text-white flex-col min-h-screen">
            <p className="text-2xl">Bem Vindo, {userName}</p>
            <div className="flex justify-center items-center mt-4">
                <button className="bg-cyan-600 rounded-full text-center p-2 " onClick={() => navigate('/requisicao')}>Ver detalhes do GitHub</button>
            </div>
        </div>
    )
}