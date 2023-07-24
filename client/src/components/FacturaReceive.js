import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo.svg";
import { useParams } from "react-router-dom";

const fac = [
  {
    id: 1,
    nombre: "Jorge",
    monto: 7000,
    montoPagado: 6000,
    fecha: new Date(2023, 6),
  },
];

function FacturaReceive() {
  const { facturaId } = useParams();

  const date = new Date();
  return (
    <>
      {fac && (
        <div className="receive_container">
          <header>
            <section className="receive_logo">
              <img src={logo} alt="logo" />
            </section>
            <h1 className="receive_title">{`Factura #${facturaId}`}</h1>
          </header>
          <main>
            <p>
              <b>Nombre:</b> Jorge Suriel
            </p>
            <p>
              <b>Fecha Correspondiente:</b>{" "}
              {`${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`}
            </p>
            <hr />
            <div className="receive_paymets">
              <p>Monto Mensual por Local</p>
              <b>{`$${fac[0].monto}`}</b>
            </div>
            <div className="receive_paymets">
              <p>Monto Recibido</p>
              <b>{`$${fac[0].montoPagado}`}</b>
            </div>
            <div className="receive_paymets">
              <p>Monto Restante</p>
              <b>{`$${fac[0].monto - fac[0].montoPagado}`}</b>
            </div>
            <hr />
            <div className="receive_paymets">
              <p>
                <b>Monto Pendiente total</b>
              </p>
              <b>{`$${fac[0].monto - fac[0].montoPagado}`}</b>
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
      )}
    </>
  );
}

export default FacturaReceive;
