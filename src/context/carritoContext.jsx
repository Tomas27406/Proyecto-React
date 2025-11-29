import { createContext, useState } from "react";


export const CarritoContext = createContext()

export const CarritoProvider = ({children}) => {
 const [carrito,setCarrito] = useState([])
 
 const agregarCarrito = (productos) => {
   const existe = carrito.some((item) => item.id === productos.id)

   if (existe) {
     carrito.map((item) => item.id === productos.id ? {...item,quantity : item.quantity + 1} : item )
   }else{
      setCarrito([...carrito,{...productos, quantity : 1}])
   }
    
 }

 const addQuantity = (id) => {
  setCarrito(carrito.map(item => item.id === id ? {...item,quantity : item.quantity + 1} : item))
 }

 const removeQuantity = (id) =>{
    setCarrito(carrito.map(item => item.id === id && item.quantity > 1  ? {...item,quantity : item.quantity - 1} : item))
 }

  const eliminarProducto = (indiceEliminar) => {
    setCarrito(carrito.filter((_,indice) => indice !== indiceEliminar))
  }

  const vaciarCarrito = () => {
    setCarrito([])
  }

  const comprarCarrito = () => {
    setCarrito([])
    alert("Gracias por comprar")
  }
  return(
    <CarritoContext.Provider value={
      {carrito,
      agregarCarrito,
      addQuantity,
      removeQuantity,
      vaciarCarrito,
      comprarCarrito,
      eliminarProducto}}>
        {children}
    </CarritoContext.Provider>
  )

}