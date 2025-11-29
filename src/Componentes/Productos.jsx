import { useContext } from "react"
import { Link } from "react-router-dom"
import { CarritoContext } from "../context/carritoContext"
import { useProductoContext } from "../context/ProductoContext"

const Productos = () => {
 const {productos,error,cargando} = useProductoContext()
 const {agregarCarrito} = useContext(CarritoContext)
 

 if (cargando) {
    return <p>Cargando......</p>
 }

 if (error) {
    return <p>Hubo un error al cargar</p>
 }

 return (
    <>
     <div className="cardStile container py-6">
  <div className="row g-4">
    {productos.map(producto => (
      <div key={producto.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
        <div className="card h-100 shadow-sm">
          <img
            src={producto.imagen}
            className="card-img-top"
            alt={producto.nombre}
          />
          <div className="card-body">
            <h5 className="card-title">{producto.nombre}</h5>
            <p className="card-text">${producto.precio}</p>

            <button
              className="btn w-100"
              onClick={() => agregarCarrito(producto)}
            >
              Agregar al carrito
            </button>
            <br />
            <Link className="detalle-link" to={`/productos/${producto.id}`}>Detalle</Link>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

     
    </>
 )

}


export default Productos