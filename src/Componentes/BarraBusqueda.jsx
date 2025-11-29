import { useNavigate } from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import { useBusqueda } from "../context/BusquedaContexto";

const BarraBusqueda = () => {
    const { busqueda, setBusqueda } = useBusqueda()
    const navegador = useNavigate()

    const manejarBusqueda = (evento) => {
        const valor = evento.target.value;
        setBusqueda(valor)

        if (valor.trim()) {
            navegador("/busqueda");
        }
    }

    return (
        <form className="form-busqueda">
            <div className="input-container">
                <CiSearch className="icono" />

                <input
                    type="search"
                    className="input-busqueda"
                    placeholder="Buscar Productos..."
                    value={busqueda}
                    onChange={manejarBusqueda}
                />
            </div>
        </form>
    )
}

export default BarraBusqueda