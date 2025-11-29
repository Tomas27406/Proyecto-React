import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CarritoContext } from "../context/carritoContext"
import { useProductoContext } from "../context/ProductoContext"

const Productos = () => {
  const { productos, error, cargando } = useProductoContext()
  const { agregarCarrito } = useContext(CarritoContext)

  const productoPagina = 8
  const [paginaActual, setPaginaActual] = useState(1)

  const UltimoProducto = productoPagina * paginaActual
  const PrimerProducto = UltimoProducto - productoPagina
  const productosActuales = productos.slice(PrimerProducto, UltimoProducto)


  const totalPagina = Math.ceil(productos.length / productoPagina)
  const cambiarPagina = (numeroPagina) => setPaginaActual(numeroPagina)
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
          {productosActuales.map(producto => (
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

      <div className="flex justify-center gap-2 my-8">
        {Array.from({length: totalPagina}, (_,indice) => (
          <button key={indice + 1} className={`px-4 py-2 rounded ${
              paginaActual === indice + 1 
                ? "bg-black text-white" 
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`} onClick={() => cambiarPagina(indice + 1)}>
              {indice + 1}
            </button>
        ))}
      </div>


    </>
  )

}


export default Productos