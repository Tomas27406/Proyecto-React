import { useContext } from "react"
import { CarritoContext } from "../context/carritoContext"

const Carrito = () => {
   const {carrito,eliminarProducto,addQuantity,removeQuantity,comprarCarrito} = useContext(CarritoContext)
   const total = carrito.reduce((acum,item) => {
      const nuevoPrecio = Number(item.precio.toString().replace(".", ""))
      return acum + nuevoPrecio * item.quantity
   },0)


 return(
    <>
        <h2 className="carritoTitulo">Carrito</h2>

      <div className="carritoContainer">
        {carrito.length === 0 && <p className="vacio">El carrito está vacío.</p>}

        {carrito.map((producto, indice) => (
          <div key={indice} className="productoCard">
            <img src={producto.imagen} alt="" className="productoImg" />

            <div className="productoInfo">
              <h4>{producto.nombre}</h4>
              <p className="precio">${producto.precio}</p>

              <div className="cantidadBox">
                <button onClick={() => addQuantity(producto.id)}>+</button>
                <span>{producto.quantity}</span>
                <button onClick={() => removeQuantity(producto.id)}>-</button>
              </div>

              <button
                className="btnEliminar"
                onClick={() => eliminarProducto(indice)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}

        {carrito.length > 0 && (
          <div className="totalBox">
            <h3>Total: ${total}</h3>
            <button className="btnComprar" onClick={comprarCarrito}>
              Comprar 
            </button>
          </div>
        )}
      </div>

    </>
    )
}

export default Carrito