import React, { useState, useEffect } from "react";
import AddInquilinos from "./modals/AddInquilinos";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Inqulinos = () => {
  const [inquilinos, setInquilinos] = useState([]);

  useEffect(() => {
    axios.get("/get-inquilinos").then((res) => {
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
                      <button className="icons_btn">
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </button>
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
