import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo.svg";
import { useParams } from "react-router-dom";
import axios from "axios";

function FacturaReceive() {
  const { facturaId } = useParams();
  const [factura, setFactura] = useState([]);
  const [deuda, setDeuda] = useState();

  useEffect(() => {
    axios.get(`/get-factura/${facturaId}`).then((res) => {
      setFactura(res.data);
      axios.get(`/get-debt/${res.data[0].inquilinosId}`).then((res) => {
        setDeuda(res.data);
      });
    });
  }, [facturaId]);
  return (
    <>
      {factura &&
        factura.map((f) => {
          const fecha = new Date(
            f.fecha_factura.slice(0, 4),
            f.fecha_factura.slice(5, 7)
          );
          return (
            <div className="receive_container" key={f.facturaId}>
              <header>
                <section className="receive_logo">
                  <img src={logo} alt="logo" />
                </section>
                <h1 className="receive_title">{`Factura #${facturaId}`}</h1>
              </header>
              <main>
                <p>
                  <b>Nombre:</b> {f.nombre}
                </p>
                <p>
                  <b>Fecha Correspondiente:</b>{" "}
                  {`${fecha.getMonth()} / ${fecha.getFullYear()}`}
                </p>
                <hr />
                <div className="receive_paymets">
                  <p>Monto Mensual por Local</p>
                  <b>{`$${f.valor}`}</b>
                </div>
                <div className="receive_paymets">
                  <p>Monto Recibido</p>
                  <b>{`$${f.valor_pagado}`}</b>
                </div>
                <div className="receive_paymets">
                  <p>Monto Restante Factura</p>
                  <b>{`$${f.valor - f.valor_pagado}`}</b>
                </div>
                <hr />
                <div className="receive_paymets">
                  <p>
                    <b>Monto Pendiente total</b>
                  </p>
                  <b>${deuda && deuda[0].deuda}</b>
                </div>
              </main>
              <footer>
                <div className="receive_sign"></div>
                <h4>Jose M. De Jesus P.</h4>
              </footer>
              <div className="note_container">
                <p>
                  <b>Nota:</b>
                </p>
                <textarea></textarea>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default FacturaReceive;
