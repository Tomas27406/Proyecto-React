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
      <br />
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center my-8">
          <li className={`page-item ${paginaActual === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => paginaActual > 1 && cambiarPagina(paginaActual - 1)}
            >
              «
            </button>
          </li>
          {Array.from({ length: totalPagina }, (_, indice) => (
            <li key={indice + 1} className="page-item">
              <button
                className={`page-link ${paginaActual === indice + 1 ? "bg-black text-white" : ""
                  }`}
                onClick={() => cambiarPagina(indice + 1)}
              >
                {indice + 1}
              </button>
            </li>
          ))}
          <li className={`page-item ${paginaActual === totalPagina ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() =>
                paginaActual < totalPagina && cambiarPagina(paginaActual + 1)
              }
            >
              »
            </button>
          </li>

        </ul>
      </nav>


    </>
  )

}


export default Productos