import { Link } from "react-router-dom";
import { UseAuthContext } from "../context/AuthContext";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import BarraBusqueda from "./BarraBusqueda";
import { CarritoContext } from "../context/carritoContext";
import { useContext } from "react";
const Nav = () => {
  const { usuario, logout } = UseAuthContext();
  const AdminDentro = usuario === "admin";
  const estaLogueado = !!usuario;
  const{carrito} = useContext(CarritoContext)

  const totalAgregado = carrito.reduce((acu,item) => acu + item.quantity,
  0)
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">

          <Link className="navbar-brand" to="/">Inicio</Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to={'/moda'}>Moda</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={'/Tecnologia'}>Tecnologia</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to={'/alcohol'}>Alcohol</Link>
              </li>


            </ul>

            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                 <BarraBusqueda/>
              </li>
              {AdminDentro ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/Admin">Hola, Admin</Link>
                </li>
              ) : (
                usuario && (
                  <li className="nav-item">
                    <a className="nav-link nombreUser">Hola, {usuario}</a>
                  </li>
                )
              )}
              <li className="nav-item">
                {estaLogueado ? (
                  <button className="cerrarBoton" onClick={logout}><IoIosClose /></button>
                ) : (
                  <Link className="nav-link" to="/Login">
                    <CiUser />
                  </Link>
                )}
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Carrito">
                 {totalAgregado > 0 &&(
                    <span className="carritoProductos">{totalAgregado}</span>
                  )}
                  <CiShoppingCart />
                </Link>
              </li>


            </ul>

          </div>
        </div>
      </nav>

    </>
  );
};

export default Nav;
