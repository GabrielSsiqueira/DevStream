import {Home, Heart, Film } from "lucide-react"
import { Link } from "react-router-dom"

export default function Sidebar({ open }) {
    return (
        <div className={`bg-zinc-950 text-white w-60 min-h-screen border-r border-zinc-800 transition-all duration-300 ${open ? "w-64" : "w-16"}`}>
            <div className="p-4 text-red-500 font-bold text-xl">
                {open ? "StremHub" : "SH"}
            </div>
            
            <nav className="flex flex-col p-4 gap-2">
                <Link to="/" className="flex items-center gap-3 p-2 rounded hover:bg-zinc-800 cursor-pointer">
                    <Home size={18} />
                    Home
                </Link>

                <Link to="/favorites" className="flex items-center gap-3 p-2 rounded hover:bg-zinc-800 cursor-pointer">
                    <Heart size={18} />
                    Favoritos
                </Link>

                <Link to="/movies" className="flex items-center gap-3 p-2 rounded hover:bg-zinc-800 cursor-pointer">
                    <Film size={18} />
                    Filmes
                </Link>
            </nav>
        </div>
    )
}