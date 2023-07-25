import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

const locales = [
  {
    nombre: "F1",
    id: 1,
  },
  {
    nombre: "F2",
    id: 2,
  },
];

function AddInquilinos() {
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
        <i className="fa fa-user-circle " aria-hidden="true"></i>
        Agregar Inquilinos
      </button>

      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <h2>Agrega un inquilino</h2>
        </Modal.Header>
        <Modal.Body>
          <form>
            <h4>Datos del inquilino</h4>
            <label className="form_label">
              <span className="label_span">Nombre Completo</span>
              <input type="text" />
            </label>
            <label className="form_label">
              <span className="label_span">Cedula</span>
              <input type="number" />
            </label>
            <label className="form_label">
              <span className="label_span">Telefono</span>
              <input type="text" />
            </label>
            <label className="form_label">
              <span className="label_span">Direccion</span>
              <input type="text" />
            </label>
            <label className="form_label">
              <span className="label_span">Local</span>
              <select>
                <option>Seleccione un local</option>
                {locales.map((loc, i) => (
                  <option key={i}>{loc.nombre}</option>
                ))}
              </select>
            </label>
            <h4>Datos del Garante</h4>
            <label className="form_label">
              <span className="label_span">Nombre Completo</span>
              <input type="text" />
            </label>
            <label className="form_label">
              <span className="label_span">Cedula</span>
              <input type="number" />
            </label>
            <label className="form_label">
              <span className="label_span">Telefono</span>
              <input type="text" />
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
            Guardar Inquilino
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddInquilinos;
