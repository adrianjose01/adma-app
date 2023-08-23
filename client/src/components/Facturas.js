import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import axios from "axios";
import PagarFactura from "./modals/PagarFactura";

const Facturas = () => {
  const [facturas, setFacturas] = useState([]);
  const [nombres, setNombres] = useState([]);
  const [filtro, setFiltro] = useState("Todos");

  useEffect(() => {
    axios.get(`/api/get-facturas/${filtro}`).then((res) => {
      setFacturas(res.data);
    });

    axios
      .get("/api/get-names")
      .then((res) => {
        setNombres(res.data);
      })
      .catch((err) => {
        alert("Hubo un error recarga la pagina");
      });
  }, [filtro]);

  return (
    <div className="container">
      <div className="inquilinos_container">
        <h1>Facturas</h1>
        <div className="filtro">
          <h4>Filtrar por</h4>{" "}
          <select onChange={(e) => setFiltro(e.target.value)}>
            <option value={"Todos"}>Todos</option>
            {nombres &&
              nombres.map((f, i) => (
                <option value={`${f.inquilinosId}`} key={i}>
                  {f.nombre}
                </option>
              ))}
          </select>
        </div>
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
                  return (
                    <tr key={f.facturaId}>
                      <td>{f.nombre.split(" ")[0]}</td>
                      <td>{`${f.fecha_factura.slice(
                        5,
                        7
                      )} / ${f.fecha_factura.slice(0, 4)}`}</td>
                      <td
                        className={f.valor_pagado === f.valor ? "green" : "red"}
                      >
                        ${f.valor}
                      </td>
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
                        {f.valor_pagado === f.valor ? (
                          ""
                        ) : (
                          <PagarFactura factura={f} />
                        )}
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
