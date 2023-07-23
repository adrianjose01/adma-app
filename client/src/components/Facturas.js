import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const fac = [
  {
    id: 1,
    nombre: "Jorge",
    monto: 7000,
    fecha: new Date(2023, 6),
  },
  {
    id: 2,
    nombre: "Nereida",
    monto: 2000,
    fecha: new Date(2023, 5),
  },
];

const Facturas = () => {
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
              {fac.map((f, i) => (
                <tr key={i}>
                  <td>{f.nombre}</td>
                  <td>{`${f.fecha.getMonth()} / ${f.fecha.getFullYear()}`}</td>
                  <td>{f.monto}</td>
                  <td className="actions">
                    <Link to={`/facturas/${f.id}`} className="icons_btn">
                      <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
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

export default Facturas;
