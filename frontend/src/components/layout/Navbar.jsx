import { useState } from "react"
import { Menu, Settings, HelpCircle, LogOut } from "lucide-react"
import { Navigate } from "react-router-dom"

export default function Navbar({toggleSidebar}){
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const handleLogout = () => {
        // Adicione sua lógica de logout aqui
        Navigate('/login')
        setIsDropdownOpen(false)
    }

    return(
        <header className="bg-zinc-800 text-white h-14 flex items-center justify-between px-6 border-b border-zinc-800">
            <button onClick={toggleSidebar} className="text-white text-2xl">
                <Menu size={28} />
            </button>

            <div className="flex items-center gap-4">
                <input type="text" placeholder="Pesquisar filmes"
                    className="bg-red-800 px-3 py-1 rounded text-sm outline-none" />

                <div className="relative">
                    <button 
                        onClick={toggleDropdown}
                        className="w-8 h-8 rounded-full overflow-hidden hover:ring-2 hover:ring-red-800 transition"
                    >
                        <img src="https://i.pravatar.cc/40" className="w-8 h-8 rounded-full" />
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-zinc-700 rounded-lg shadow-lg z-50">
                            <button 
                                onClick={() => {
                                    console.log("Configurações")
                                    setIsDropdownOpen(false)
                                }}
                                className="w-full flex items-center gap-3 px-4 py-2 hover:bg-zinc-600 rounded-t-lg transition"
                            >
                                <Settings size={18} />
                                <span>Configurações</span>
                            </button>

                            <button 
                                onClick={() => {
                                    console.log("Ajudar")
                                    setIsDropdownOpen(false)
                                }}
                                className="w-full flex items-center gap-3 px-4 py-2 hover:bg-zinc-600 transition"
                            >
                                <HelpCircle size={18} />
                                <span>Ajudar</span>
                            </button>

                            <button 
                                onClick={handleLogout}
                                className="w-full flex items-center gap-3 px-4 py-2 hover:bg-red-800 rounded-b-lg transition text-red-400 hover:text-white"
                            >
                                <LogOut size={18} />
                                <span>Logout</span>
                            </button>
                        </div>
                    )}
                </div>
               
            </div>
        </header>
    )
}