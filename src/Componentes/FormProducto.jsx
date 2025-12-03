import { useState } from "react"
import { useProductoContext } from "../context/ProductoContext"

const FormProducto = ({productoInicial = {}, modo = "agregar", cerrarFormulario}) => {
 const[productos,setProductos] = useState(productoInicial)
 const {agregarProductos, editarProductos} = useProductoContext()
 
 const manejarChange = (evento) => {
    const {name, value} = evento.target
    setProductos({...productos, [name] : value})
 }


 const manejarSubmit =  async (evento) => {
    evento.preventDefault()
   if (modo === "agregar") {
     await agregarProductos(productos)
   }else{
     await editarProductos(productos)
   }

   cerrarFormulario()
 }

 return(
    <>
      <form className="formProductos" onSubmit={manejarSubmit}>
            <div>
               <label>Nombre</label>
               <input type="text" 
                 name="nombre"
                 value={productos.nombre || ''}
                 onChange={manejarChange}
               />
            </div>
               
            <div>
                <label>Precio</label>
                <input type="number" 
                 name="precio"
                 value={productos.precio || ''} 
                 onChange={manejarChange}
                 min={0}
                 step='any'
                />
            </div>
               
            <div>
                <label>Imagen</label>
                <input type="text" 
                 name="imagen" 
                 value={productos.imagen || ''}
                 onChange={manejarChange}
                />
            </div>
            <div>
                <label>Categoria</label>
                <input type="text" 
                 name="categoria"
                 value={productos.categoria || ''} 
                 onChange={manejarChange}
                />
            </div>
            <div>
                <label>Descripcion</label>
                <input type="text" 
                 name="descripcion"
                 value={productos.descripcion || ''} 
                 onChange={manejarChange}
                />
            </div>
            <div>
              <button type="submit">Enviar</button>
              <br />
              <button type="button" className="btn-secondary" onClick={cerrarFormulario}data-bs-dismiss="modal">Cancelar</button>
            </div>
          
        </form>
    </>
 )

}

export default FormProducto