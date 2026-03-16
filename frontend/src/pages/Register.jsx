import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"
import { useUserContext } from "../context/AuthContext"
import  api from "../api/api"

export default function Register() {
    const Navigate = useNavigate()
    const { setUser } = useUserContext();
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ redirect, setRedirect ] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(nome, email, password);

        if(nome && email && password){
            try{

                const { data: userDoc }  = await api.post('/users/register', {
                    name,
                    email,
                    password
                });

                setUser(userDoc);
                setRedirect(true);
    
            }catch(error){
                alert(`deu um erro ao criar usuario: ${JSON.stringify(error)}`);
            }
        }else{
            alert('voce precisa preencher nome, email e senha!');
        }

    };

    if(redirect){
        return <Navigate to="/" />
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold text-center text-red-500 mb-6">
                    StreamHub
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-300 mb-1">Nome</label>
                        <input type="text" 
                            placeholder="digite seu nome"
                            value={name}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500" />
                    </div>

                    <div>
                        <label className="block text-gray-300 mb-1">Email</label>
                        <input type="email" 
                            placeholder="digite seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500" />
                    </div>

                    <div>
                        <label className="block text-gray-300 mb-1">Senha</label>
                        <input type="password" 
                            placeholder="digite sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500" />
                    </div>

                    <button type="submit" className="w-full bg-red-500 hpver:bg-red-600 transition py-2 rounded font-semibold">
                        Criar Conta
                    </button>

                    <p className="text-center text-gray-400 mt-6 text-sm">
                        já tem uma conta? {" "}
                        <Link to="/login" className="text-red-500 hover:underline">Faça login.</Link>
                    </p>
                   
                </form>
            </div>
        </div>
    )
}