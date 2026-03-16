import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UserContextProvider } from "./context/AuthContext"
import Home from "./pages/Home"
import Layout from "./components/layout/Layout"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {


  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default App
