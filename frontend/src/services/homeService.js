import api from "../api/api"

export const getHome = async () => {
    const response = await api.get("/home")
    return response.data
}