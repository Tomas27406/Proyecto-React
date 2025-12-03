import { Link } from "react-router-dom"
import { useBusqueda } from "../context/BusquedaContexto"
import { useProductoContext } from "../context/ProductoContext"


const ResultadoBusqueda = () => {
    const { busqueda } = useBusqueda()
    const { productos } = useProductoContext()

    const productosFiltrados = productos.filter((producto) =>
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase()))
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Productos</h2>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {productosFiltrados.length > 0 ? (
                    productosFiltrados.map((producto) => (
                        <div
                            key={producto.id}
                            className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-3"
                        >
                            <div className="w-full h-64 overflow-hidden rounded-lg">
                                <img
                                    alt={producto.nombre}
                                    src={producto.imagen}
                                    className="w-full h-full object-cover group-hover:opacity-90 transition"
                                />
                            </div>


                            <div className="mt-4 flex items-center justify-between">
                                <h3 className="text-base font-medium text-gray-800 hover:text-blue-600 transition">
                                    <Link to={`/productos/${producto.id}`}>{producto.nombre}</Link>
                                </h3>

                                <p className="text-lg font-semibold text-gray-900">
                                    ${producto.precio}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-600">No hay productos que coincidan con la búsqueda.</p>
                )}
            </div>
        </div>

    )
}

export default ResultadoBusqueda