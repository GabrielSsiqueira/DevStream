import { useState } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

export default function Layout({ children }){
    const [open, setOpen] = useState(true)

    return(
        <div className="flex">
            <Sidebar open={open} />

            <div className="flex-1">
                <Navbar toggleSidebar={() => setOpen(!open)} />

                <main className="bg-black min-h-screen p-6 text-white">
                    {children}
                </main>
            </div>
        </div>
    )
}