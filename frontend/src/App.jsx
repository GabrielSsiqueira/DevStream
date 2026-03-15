import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/layout/Layout"
import Login from "./pages/Login"

function App() {


  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
