import { useState } from "react";
import { useNavigate } from "react-router-dom"
import useAuth from "../context/AuthContext"

export default function Login() {
    const { login } = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleLogin(e) {
        e.preventDefault()

        const faketoken = "123456"

        login(faketoken)

        navigate("/")
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl "></h1>
            </div>
        </div>
    )
}