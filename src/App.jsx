import { Routes, Route } from 'react-router-dom'
import './App.css'

import Inicio from './Pagina/Inicio'
import DetalleProductos from './Pagina/DetalleProductos'
import Tecnologia from './Pagina/Tecnologia'
import Header from './Componentes/Header'
import Footer from './Componentes/Footer'
import RutaProtegida from './Componentes/RutaProtegida'
import Carrito from './Componentes/Carrito'
import Login from './Pagina/Login'
import Admin from './Pagina/Admin'
import ResultadoBusqueda from './Componentes/ResultadoBusqueda'
function App() {

  return (
    <>
     <Header />
     <br />
     <Routes>
      <Route path={'/'} element={<Inicio />}/>
      <Route path={'/Tecnologia'} element={<Tecnologia />}/>
      <Route path={'/Login'} element={<Login/>}/>
      <Route path={'/Admin'} element={
        <RutaProtegida>
          <Admin/>
        </RutaProtegida>
      }/>
      <Route path={'/Carrito'} element={
        <RutaProtegida>
          <Carrito />
        </RutaProtegida>}/>
      <Route path={'/productos/:id'} element={<DetalleProductos />}/>
      <Route path={'/busqueda'} element={<ResultadoBusqueda/>}/>
     </Routes>

     <Footer />
    </>
  )
}

export default App
