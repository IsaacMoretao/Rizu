import "./styles/Globals.css";
import { Route, Routes } from "react-router";
import { Login } from './pages/Login';
import { Footer } from './components/Footer';

import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { Camisas } from "./pages/Camisas";
import { Users } from "./pages/Users";

import { Camisetas } from "./pages/Camisetas";
import { Blusas } from "./pages/Blusas";
import { Vestidos } from "./pages/Vestidos";

import { Acessorios } from "./pages/acessórios";
import { useAuth } from "./hooks/useAuth";
import { Compra } from "./pages/Compras";
import { PurchasedItem } from "./components/Templates/PurchasedItem";


function App() {
  const { user } = useAuth();


  return (
    <>
      
        <Routes>

          {user === true || undefined ? 
          
          <>

            <Route path="/Home"
              element={
              <>
                <Header/>
                <Home />
              </>
            } />
  
            <Route path="/Camisas"
              element={
                <>
                  <Header/>
                  <Camisas/>
                </>
              } />
  
            <Route path="/Camisetas"
              element={
                <>
                  <Header/>
                  <Camisetas/>
                </>
              } />
  
            <Route path="/Blusas"
              element={
                <>
                  <Header/>
                  <Blusas/>
                </>
              } />
  
            <Route path="/Vestidos"
              element={
                <>
                  <Header/>
                  <Vestidos/>
                </>
              } />
  
            <Route path="/Acessorios"
              element={
                <>
                  <Header/>
                  <Acessorios/>
                </>
              } />
  
            <Route path="/Users"
              element={
                <>
                  <Header/>
                  <Users/> 
                </>
              } />
            <Route path="/Compra"
              element={
                <>
                  <Header/>
                  <Compra/> 
                </>
              } />
        </>

          :

            <Route path="/" element={<Login/>} />

          }

        </Routes>
      <Footer />
    </>
  )
}

export default App
