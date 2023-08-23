import React from "react";
import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import axios from "axios";

function PagarFactura({ factura }) {
  const [show, setShow] = useState(false);
  const valorRef = useRef();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSaveLocal = () => {
    const valor = +valorRef.current.value + factura.valor_pagado;
    axios
      .post("/api/pay-factura", {
        facturaId: factura.facturaId,
        valorPagado: valor,
      })
      .then((res) => {
        alert("¡Factura Actualizada Exitosamente!");
        window.location.reload();
      });
  };

  return (
    <>
      <button onClick={handleShow} className="icons_btn">
        <i className="fa fa-money" aria-hidden="true"></i>{" "}
      </button>

      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <h2>Pagar Factura</h2>
        </Modal.Header>
        <Modal.Body>
          <form>
            <h4>Factura de {factura.nombre}</h4>
            <label className="form_label">
              <span className="label_span">Valor de la factura</span>
              <input readOnly type="number" value={factura.valor} />
            </label>
            <label className="form_label">
              <span className="label_span">Valor pagado</span>
              <input readOnly type="number" value={factura.valor_pagado} />
            </label>
            <label className="form_label">
              <span className="label_span">Valor restante</span>
              <input
                readOnly
                type="text"
                value={factura.valor - factura.valor_pagado}
                className="restante"
              />
            </label>
            <label className="form_label">
              <span className="label_span">Valor a pagar</span>
              <input
                type="number"
                ref={valorRef}
                max={factura.valor - factura.valor_pagado}
                min={0}
              />
            </label>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button
            variant="primary"
            onClick={handleClose}
            style={{ backgroundColor: "#1b263b", border: "none" }}
            onClickCapture={handleSaveLocal}
          >
            Pagar Factura
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PagarFactura;
