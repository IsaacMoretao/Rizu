import { Route, Routes } from "react-router";
import { Login } from './pages/Login';
import "./styles/Globals.css";

import { Footer } from './components/Footer';
import { Home } from "./pages/Home";
import { Header } from "./components/Header";

import { Camisas } from "./pages/Camisas";
import { Users } from "./pages/Users";
import { Camisetas } from "./pages/Camisetas";
import { Blusas } from "./pages/Blusas";
import { Vestidos } from "./pages/Vestidos";
import { Acessorios } from "./pages/acessórios";

function App() {

  return (
    <>
      <Header/>
        <Routes>
          
          <Route path="/" element={<Login/>} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Camisas" element={<Camisas/>} />
          <Route path="/Camisetas" element={<Camisetas/>} />
          <Route path="/Blusas" element={<Blusas/>} />
          <Route path="/Vestidos" element={<Vestidos/>} />
          <Route path="/Acessorios" element={<Acessorios/>} />
          <Route path="/Users" element={<Users/>} />

        </Routes>
      <Footer />
    </>
  )
}

export default App
