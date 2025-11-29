import { createContext, useContext, useEffect, useState } from "react";

const ProductoContext = createContext()

export const ProductoProvider = ({children}) => {
    const[productos, setProductos] = useState([])
    const[cargando, setCargando] = useState(true)
    const[error, setError] = useState(null)
    
    const Api = "https://68d5d38ce29051d1c0afaad0.mockapi.io/Productos"

    useEffect(() => {
       listarProductos()
    },[])
    
    const listarProductos = async () => {
        try {
            setCargando(true)
            setError(null)
            const respuesta = await fetch(Api)
            if (!respuesta.ok) throw new Error("Hubo un error al cargar el producto")
            const datos = await respuesta.json();
            console.log("Se cargaron correctamente los productos",datos);
            setProductos(datos)
        } catch (error) {
            setError(error)
            console.error("Hubo un error al cargar los productos", error);
            
        }
         finally{
            setCargando(false)
         }
        if (cargando) return <p>Cargando...</p>;
    }

    const agregarProductos = async (producto) => {
        try {
            const resultado = await fetch(Api, {
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(producto)
            })
            if (!resultado.ok) throw new Error(`Error HTTP: ${resultado.status}`)
            const datos = await resultado.json()
            setProductos([...productos,datos])
        } catch (error) {
            console.log("Error al cargar productos");
            const mensajeError = "No se pudo agregar el producto"
            setError(mensajeError)
        }
    }

    const editarProductos = async (producto) => {
        try {
             const resultado = await fetch(`${Api}/${producto.id}`, {
                method:"PUT",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(producto)
            })
            if (!resultado.ok) throw new Error(`Error HTTP: ${resultado.status}`)
            const datosAct = await resultado.json() 
            console.log("Se actualizo el producto",datosAct);
            setProductos(productos.map((p) => p.id === datosAct.id ? datosAct : p))
        } catch (error) {
            console.log("Error al cargar", error);
            const mensajeError = "No se pudo actualizar el producto"
            setError(mensajeError)
        }
    }

    const eliminarProducto = async (id) => {
       const confirmacion = window.confirm("¿Seguro de eliminar el producto?")
       if (confirmacion) {
         try {
            const resultado = await fetch(`${Api}/${id}`, {
                method:"DELETE"
            })
            if (!resultado.ok) throw new Error(`Error HTTP: ${resultado.status}`)
            setProductos(productos.filter((p) => p.id !== id))
         } catch (error) {
             console.log("Error al cargar", error);
            const mensajeError = "No se pudo eliminar el producto"
            setError(mensajeError)
         }
       }
    }
  return(
    <ProductoContext.Provider value={{
        productos,
        cargando,
        error,
        agregarProductos,
        eliminarProducto,
        editarProductos
        }}>
        {children}
    </ProductoContext.Provider>
  )

}

export const useProductoContext = () => useContext(ProductoContext)