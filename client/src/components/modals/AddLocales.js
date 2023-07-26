import React from "react";
import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import axios from "axios";

function AddLocales() {
  const [show, setShow] = useState(false);
  const nameRef = useRef();
  const valorRef = useRef();
  const descripcionRef = useRef();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSaveLocal = () => {
    const nombre = nameRef.current.value;
    const descripcion = descripcionRef.current.value;
    const valor = +valorRef.current.value;

    const data = {
      nombre,
      descripcion,
      valor,
    };

    axios.post("/add-local", data).then((res) => {
      console.log(data);
      alert("Local agregado exitosamente!");
      window.location.reload();
    });
  };

  return (
    <>
      <button
        className="add_inquilinos_btn"
        variant="primary"
        onClick={handleShow}
      >
        <i className="fa fa-user-circle " aria-hidden="true"></i>
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
              <input type="text" ref={nameRef} />
            </label>
            <label className="form_label">
              <span className="label_span">Monto</span>
              <input type="number" ref={valorRef} />
            </label>
            <label className="form_label">
              <span className="label_span">Descripcion</span>
              <textarea ref={descripcionRef}></textarea>
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
            Guardar Local
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddLocales;
