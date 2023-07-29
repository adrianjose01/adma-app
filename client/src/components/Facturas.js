import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import axios from "axios";

// GETTING DATE FROM MYSQL
// new Date(fecha.slice(0, 4), +fecha.slice(5, 7) - 1, fecha.slice(8, 10))

const Facturas = () => {
  const [facturas, setFacturas] = useState([]);

  useEffect(() => {
    axios.get("/get-facturas").then((res) => {
      setFacturas(res.data.data);
    });
  }, []);

  return (
    <div className="container">
      <div className="inquilinos_container">
        <h1>Facturas</h1>
        <div className="inquilinos">
          <table className="inquilinos_table">
            <tbody>
              <tr>
                <th>Nombre</th>
                <th>Fecha</th>
                <th>Monto</th>
                <th>Acciones</th>
              </tr>
              {facturas &&
                facturas.map((f, i) => {
                  const fecha = new Date(
                    f.fecha_factura.slice(0, 4),
                    +f.fecha_factura.slice(5, 7)
                  );
                  return (
                    <tr key={i}>
                      <td>{f.nombre}</td>
                      <td>{`${fecha.getMonth()} / ${fecha.getFullYear()}`}</td>
                      <td>${f.valor}</td>
                      <td className="actions">
                        <Link
                          to={`/facturas/${f.facturaId}`}
                          className="icons_btn"
                        >
                          <i
                            className="fa fa-file-pdf-o"
                            aria-hidden="true"
                          ></i>
                        </Link>
                        <button className="icons_btn">
                          <i className="fa fa-money" aria-hidden="true"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Facturas;
