import React from "react";
import AddInquilinos from "./modals/AddInquilinos";
import "bootstrap/dist/css/bootstrap.min.css";

const inquilinos = [
  {
    nombre: "Jorge Suriel",
    monto: 7000,
    monto_pendiente: 14000,
  },
  {
    nombre: "Nereyda",
    monto: 2000,
    monto_pendiente: 6000,
  },
];

const Inqulinos = () => {
  return (
    <div className="container">
      <div className="inquilinos_container">
        <h1>Inquilinos</h1>
        <div className="inquilinos">
          <AddInquilinos />
          <table>
            <tbody>
              <tr>
                <th>Nombre</th>
                <th>Pendiente</th>
                <th>Pago</th>
                <th>Acciones</th>
              </tr>
              {inquilinos.map((inq, i) => (
                <tr>
                  <td>{inq.nombre}</td>
                  <td>{inq.monto_pendiente}</td>
                  <td>{inq.monto}</td>
                  <td>X</td>
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
