import { Route, Routes } from "react-router-dom";
import "./Styles/Globals.css";
import { Home } from './Pages/Home';
import { Footer } from "./components/Footer";
import { Camisas } from './Pages/Camisas';
import { Camisetas } from './Pages/Camisetas';
import { Calças } from "./Pages/Calças";
import { Blusas } from './Pages/Blusas';
import { Vestidos } from './Pages/Vestidos';
import { Acessorios } from './Pages/Acessorios';
import { Header } from "./components/Header";

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Camisas" element={<Camisas/>}/>
        <Route path="/Camisetas" element={<Camisetas/>}/>
        <Route path="/Calças" element={<Calças/>}/>
        <Route path="/Blusas" element={<Blusas/>}/>
        <Route path="/Vestidos" element={<Vestidos/>}/>
        <Route path="/Acessorios" element={<Acessorios/>}/>
        <Route path="/Peça/:id" element={<Acessorios/>}/>

      </Routes>
    <Footer/>
    </>

  )
}

export default App
