import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/api";

export const userContext = createContext(null);

export const useUserContext = () => useContext(userContext);

export const UserContextProvider = ( {children} ) => {
    const [user, setUser] = useState(null);

    useEffect(() =>{
        const axiosGet = async () => {
        const { data } = await api.get("/users/profile");

        setUser(data);
        }
        axiosGet()
    }
    ,[]);

    return (
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>
    )
}



