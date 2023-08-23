import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddLocales from "./modals/AddLocales";
import axios from "axios";
import EditLocales from "./modals/EditLocales";
import { API_URL } from "../dbconfig";

const Locales = () => {
  const [locales, setLocales] = useState([]);

  useEffect(() => {
    axios.get(API_URL + "/api/get-locales").then((res) => {
      setLocales(res.data.data);
    });
  }, []);

  const handleDelete = (args) => {
    const id = args[0];
    if (window.prompt("Ingrese su clave para eliminar el local.") === "adma") {
      axios
        .post(API_URL + "/api/delete-local", { localId: id })
        .then((res) => {
          alert("Local Eliminado correctamente!");
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
        <h1>Locales</h1>
        <div className="inquilinos">
          <AddLocales />
          <table className="inquilinos_table">
            <tbody>
              <tr>
                <th>Nombre</th>
                <th className="local_column">Descripcion</th>
                <th>Monto</th>
                <th>Acciones</th>
              </tr>
              {locales &&
                locales.map((loc, i) => (
                  <tr key={i}>
                    <td>{loc.nombre}</td>
                    <td className="local_column description_field">
                      {loc.descripcion}
                    </td>
                    <td>${loc.valor}</td>
                    <td className="actions">
                      <button
                        className="icons_btn"
                        onClickCapture={handleDelete.bind(this, [loc.localId])}
                      >
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </button>
                      <EditLocales local={loc} />
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

export default Locales;
