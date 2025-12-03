import { useProductoContext } from "../context/ProductoContext"
import { CarritoContext } from "../context/carritoContext"
import { Link } from "react-router-dom"
import { useContext } from "react"
const Alcohol = () => {
    const{productos} = useProductoContext()
    const{agregarCarrito} = useContext(CarritoContext)
    
    const ProductosFiltrados = productos.filter(p => 
        p.categoria === "alcohol"
    )
    return(
       <>
          <h1>Alcohol</h1>
         <div className="cardStile container py-6">
         <div className="row g-4">
            {ProductosFiltrados.map((producto) => (
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

                       <button className="btn w-100" onClick={() => agregarCarrito(producto)}> Agregar al carrito</button>

                       <br />

                      <Link className="detalle-link" to={`/productos/${producto.id}`}>
                       Detalle
                      </Link>
                    </div>
               
                  </div>
                </div>
            ))}
         </div>
         </div>
       </>
    )

}

export default Alcohol