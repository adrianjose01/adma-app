import React, { useState, useEffect } from "react";
import AddInquilinos from "./modals/AddInquilinos";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const inquilinoss = [
  {
    nombre: "Jorge Suriel",
    monto: 7000,
    monto_pendiente: 14000,
    local: "F1",
  },
  {
    nombre: "Nereyda",
    monto: 2000,
    monto_pendiente: 6000,
    local: "F2",
  },
];

const Inqulinos = () => {
  const [inquilinos, setInquilinos] = useState([]);

  useEffect(() => {
    axios.get("/get-inquilinos").then((res) => {
      console.log(res.data);
      setInquilinos(res.data);
    });
  }, []);

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
                <th>Pendiente</th>
                <th className="local_column">Local</th>
                <th>Acciones</th>
              </tr>
              {inquilinos &&
                inquilinos.map((inq, i) => (
                  <tr key={i}>
                    <td>{inq.nombre}</td>
                    <td>${inq.deuda}</td>
                    <td className="local_column">{inq.local}</td>
                    <td className="actions">
                      <button className="icons_btn">
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </button>
                      <button className="icons_btn">
                        <i className="fa fa-folder-o" aria-hidden="true"></i>
                      </button>
                      <button className="icons_btn">
                        <i className="fa fa-money" aria-hidden="true"></i>
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

export default Inqulinos;
