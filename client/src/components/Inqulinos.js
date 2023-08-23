import React, { useState, useEffect } from "react";
import AddInquilinos from "./modals/AddInquilinos";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";
import EditInquilinos from "./modals/EditInquilinos";

const Inqulinos = () => {
  const [inquilinos, setInquilinos] = useState([]);

  useEffect(() => {
    axios.get("/api/get-inquilinos").then((res) => {
      setInquilinos(res.data);
    });
  }, []);

  const handleDelete = (args) => {
    const id = args[0];
    if (window.prompt("Ingrese su clave para eliminar el local.") === "adma") {
      axios
        .post("/api/delete-inq", { inqId: id })
        .then((res) => {
          alert("Inquilino Eliminado correctamente!");
          window.location.reload();
        })
        .catch((err) => {
          alert("No se ha podido eliminar el local seleccionado.");
        });
    } else {
      alert("Operacion cancelada.");
    }
  };

  return (
    <div className="container">
      <div className="inquilinos_container">
        <h1>Inquilinos</h1>
        <div className="inquilinos">
          <AddInquilinos />
          <table className="inquilinos_table">
            <tbody>
              <tr>
                <th>Nombre</th>
                <th>Pago Mensual</th>
                <th className="local_column">Local</th>
                <th>Acciones</th>
              </tr>
              {inquilinos &&
                inquilinos.map((inq, i) => (
                  <tr key={i}>
                    <td>{inq.nombre}</td>
                    <td>${inq.valor}</td>
                    <td className="local_column">{inq.local}</td>
                    <td className="actions">
                      <button
                        className="icons_btn"
                        onClick={handleDelete.bind(this, [inq.inquilinosId])}
                      >
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </button>
                      <EditInquilinos inquilino={inq} />
                      <Link className="icons_btn" to={`/facturas`}>
                        <i className="fa fa-money" aria-hidden="true"></i>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Inqulinos;
