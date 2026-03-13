import { Menu } from "lucide-react"

export default function Navbar({toggleSidebar}){
    return(
        <header className="bg-zinc-800 text-white h-14 flex items-center justify-between px-6 border-b border-zinc-800">
            <button onClick={toggleSidebar} className="text-white text-2xl">
                <Menu size={28} />
            </button>

            <div className="flex items-center gap-4">
                <input type="text" placeholder="Pesquisar filmes"
                    className="bg-zinc-800 px-3 py-1 rounded text-sm outline-none" />

                <img src="https://i.pravatar.cc/40" className="w-8 h-8 rounded-full" />
            </div>
        </header>
    )
}