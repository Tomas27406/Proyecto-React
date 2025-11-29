import { useState } from "react"
import { useProductoContext } from "../context/ProductoContext"
import FormProducto from "./FormProducto"
import { IoIosTrash } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
const GestionarProductos = () => {
  const { productos, eliminarProducto } = useProductoContext()

  const [modoF, setModoF] = useState("agregar")
  const [productoSeleccionado, setProductoSeleccionado] = useState(null)
  const [mostrarFormulario, setMostrarFormulario] = useState(false)

  const abrirFormulario = () => {
    setModoF("agregar")
    setProductoSeleccionado(null)
    setMostrarFormulario(true)
  }

  const editarFormulario = (producto) => {
    setModoF("editar")
    setProductoSeleccionado(producto)
    setMostrarFormulario(true)
  }

  const cerrarFormulario = () => {
    setMostrarFormulario(false)
    setProductoSeleccionado(null)
  }

  return (
    <>
      <h1 className="titulo-gestion">Gestión de productos</h1>

<button
  onClick={abrirFormulario}
  data-bs-toggle="modal"
  data-bs-target="#modalFormulario"
  className="btn-agregar"
>
  Agregar Producto
</button>

{productos.length === 0 ? (
  <div className="card-vacia">
    <p>No hay productos</p>
  </div>
) : (
  <div className="lista-productos">
    {productos.map((producto) => (
      <div key={producto.id} className="producto-card">
        <div className="producto-info">
          <div className="producto-img">
            <img src={producto.imagen} alt={producto.nombre} />
          </div>

          <div className="producto-detalles">
            <h2>{producto.nombre}</h2>
            <p className="precio">${producto.precio}</p>
          </div>

          <div className="producto-botones">
            <button
              onClick={() => editarFormulario(producto)}
              data-bs-toggle="modal"
              data-bs-target="#modalFormulario"
              className="btn-editar"
            >
              <CiEdit size={20} />
              Editar
            </button>

            <button
              className="btn-eliminar"
              onClick={() => eliminarProducto(producto.id)}
            >
              <IoIosTrash size={20} />
              Eliminar
            </button>
          </div>

        </div>
      </div>
    ))}
  </div>
)}

      <div
        className="modal fade"
        id="modalFormulario"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">
                {modoF === "agregar" ? "Agregar Producto" : "Editar Producto"}
              </h5>
            </div>

            {/* CONTENIDO */}
            <div className="modal-body">
              {mostrarFormulario && (
                <FormProducto
                  productoInicial={productoSeleccionado || ""}
                  modo={modoF}
                  cerrarFormulario={cerrarFormulario}
                />
              )}
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default GestionarProductos
