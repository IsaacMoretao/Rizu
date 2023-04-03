import { Route, Routes } from "react-router";
import { Login } from './pages/Login';
import "./styles/Globals.css";
import { Footer } from './components/Footer';
import { Home } from "./pages/Home";
import { Header } from "./components/Header";

function App() {

  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
