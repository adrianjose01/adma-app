import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddLocales from "./modals/AddLocales";
import axios from "axios";

const Locales = () => {
  const [locales, setLocales] = useState([]);

  useEffect(() => {
    axios.get("/get-locales").then((res) => {
      setLocales(res.data.data);
    });
  }, []);
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
                      <button className="icons_btn">
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </button>
                      <button className="icons_btn">
                        <i className="fa fa-folder-o" aria-hidden="true"></i>
                      </button>
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
