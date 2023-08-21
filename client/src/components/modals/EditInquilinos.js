import React from "react";
import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

const EditInquilinos = (props) => {
  const [show, setShow] = useState(false);

  const { inquilino } = props;

  const nameInqRef = useRef();
  const cedulaInquRef = useRef();
  const phoneInqRef = useRef();
  const adressInqRef = useRef();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleForm = () => {
    const nombre = nameInqRef.current.value;
    const cedula = cedulaInquRef.current.value;
    const telefono = phoneInqRef.current.value;
    const direccion = adressInqRef.current.value;

    axios
      .put("/edit-inquilino", {
        nombre,
        cedula,
        telefono,
        direccion,
        inqId: inquilino.inquilinosId,
      })
      .then((res) => {
        alert("¡Inquilino Editado Exitosamente!");
        window.location.reload();
      })
      .catch((err) => {
        alert("No se pudo editar el inquilino");
      });
  };

  return (
    <>
      <button className="icons_btn" onClick={handleShow}>
        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
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
              <input
                ref={nameInqRef}
                type="text"
                defaultValue={inquilino.nombre}
              />
            </label>
            <label className="form_label">
              <span className="label_span">Cedula</span>
              <input
                ref={cedulaInquRef}
                type="text"
                defaultValue={inquilino.cedula}
              />
            </label>
            <label className="form_label">
              <span className="label_span">Telefono</span>
              <input
                ref={phoneInqRef}
                type="text"
                defaultValue={inquilino.telefono}
              />
            </label>
            <label className="form_label">
              <span className="label_span">Direccion</span>
              <input
                ref={adressInqRef}
                type="text"
                defaultValue={inquilino.direccion}
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
            onClickCapture={handleForm}
          >
            Guardar Inquilino
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditInquilinos;
