import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function AddLocales() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        className="add_inquilinos_btn"
        variant="primary"
        onClick={handleShow}
      >
        <i class="fa fa-user-circle " aria-hidden="true"></i>
        Agregar Local
      </button>

      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <h2>Agrega un Local</h2>
        </Modal.Header>
        <Modal.Body>
          <form>
            <h4>Datos del Local</h4>
            <label className="form_label">
              <span className="label_span">Nombre</span>
              <input type="text" />
            </label>
            <label className="form_label">
              <span className="label_span">Monto</span>
              <input type="number" />
            </label>
            <label className="form_label">
              <span className="label_span">Descripcion</span>
              <textarea></textarea>
            </label>
            <label className="form_label">
              <span className="label_span">Direccion</span>
              <input type="text" />
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
          >
            Guardar Local
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddLocales;
