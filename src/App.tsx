import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Inicio } from "./Pages/inicio";
import { Requisicao } from "./Pages/requisicoes";
import { Playground } from "./Pages/playground";
import { Dados } from "./Pages/dados";

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dados/>}/>
        <Route path="/inicio" element={<Inicio/>}/>
        <Route path="/requisicao" element={<Requisicao/>}/>
        <Route path="/playground/:codigo" element={<Playground />} />
      </Routes>
    </>

  )

}
