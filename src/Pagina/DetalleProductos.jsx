import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const DetalleProductos = () => {
 const [producto,setProducto] = useState(null)
 const { id } = useParams();

  useEffect(() => {
  fetch(`https://68d5d38ce29051d1c0afaad0.mockapi.io/Productos/${id}`)
  .then(result => result.json())
  .then(datos => setProducto(datos))
  },[id])
  if (!producto) {
    return<p>cargando....</p>
  }
   return(
    <>
    <div className="detalleProducto">
      <h2>Este es el numero de producto: {id}</h2>
      <h3>{producto.nombre}</h3>
      <img src={producto.imagen} alt={producto.nombre} />
      <p>{producto.descripcion}</p>
      
    </div>
    
    
    </>
 )
}

export default DetalleProductos