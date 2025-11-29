import { useState } from "react";
import { UseAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const { login } = UseAuthContext();
  const navegador = useNavigate();

  const validarUsuario = (evento) => {
    evento.preventDefault();
    if (usuario === "admin" && contraseña === "1234") {
      login(usuario);
      navegador("/");
    } 
    else if (usuario === "cliente" && contraseña === "4314") {
      login(usuario);
      navegador("/");
    }
    else {
      alert("Usuario o contraseña están incorrectos");
    }
  };

  return (
    <section>
      <form className="form" onSubmit={validarUsuario}>
        <fieldset>
          <legend>Iniciar sesión</legend>

          <label>Usuario:</label>
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />

          <br />

          <label>Contraseña:</label>
          <input
            type="password"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />

          <br />

          <button type="submit">Ingresar</button>
        </fieldset>
      </form>
    </section>
  );
};

export default Login;
