import { useAtom } from "jotai"
import { userNameAtom } from "../../atoms/user.atom"
import React from "react"
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export function Dados() {
    const [userName, setUserName] = useAtom(userNameAtom);

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };

    const handleNext = () => {
        if (userName.trim() === '') {
            toast.error("O nome do usuário não foi inserido")
        } else {
            navigate("/inicio")
        };
    }

    return (
        <div className="flex justify-center items-center min-h-screen ">
            <div className="bg-white p-6 rounded-xl shadow-lg w-96">
                <h1 className="text-xl font-semibold mb-4 text-center">Digite seu nome</h1>
                <input
                    type="text"
                    value={userName}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    maxLength={32}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <div className="flex justify-center items-center mt-4">
                    <button className="bg-cyan-600 rounded-full text-center p-2 " onClick={handleNext}>Próximo</button>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
}
