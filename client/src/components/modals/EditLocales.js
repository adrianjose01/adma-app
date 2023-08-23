import React from "react";
import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { API_URL } from "../../dbconfig";

const EditLocales = (props) => {
  const [show, setShow] = useState(false);

  const { local } = props;

  const nameRef = useRef();
  const valorRef = useRef();
  const descripcionRef = useRef();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleForm = () => {
    const nombre = nameRef.current.value;
    const monto = valorRef.current.value;
    const descripcion = descripcionRef.current.value;

    if (nombre === "" || monto === "" || descripcion === "")
      return alert("Por favor llene todos los campos.");

    axios
      .put(API_URL + "/api/edit-local", {
        nombre,
        monto,
        descripcion,
        localId: local.localId,
      })
      .then((res) => {
        alert("Local editado exitosamente!");
        window.location.reload();
      })
      .catch((err) => {
        alert(`Ha ocurrido un error, favor intentarlo luego \n ${err}`);
      });
  };

  return (
    <>
      <button className="icons_btn" onClick={handleShow}>
        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
      </button>

      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <h2>Edita un Local</h2>
        </Modal.Header>
        <Modal.Body>
          <form>
            <h4>Datos del Local</h4>
            <label className="form_label">
              <span className="label_span">Nombre</span>
              <input type="text" ref={nameRef} defaultValue={local.nombre} />
            </label>
            <label className="form_label">
              <span className="label_span">Monto</span>
              <input type="number" ref={valorRef} defaultValue={local.valor} />
            </label>
            <label className="form_label">
              <span className="label_span">Descripcion</span>
              <textarea
                ref={descripcionRef}
                defaultValue={local.descripcion}
              ></textarea>
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
            Guardar Local
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditLocales;
