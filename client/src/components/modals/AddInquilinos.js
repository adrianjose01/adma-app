import React from "react";
import { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function AddInquilinos() {
  const [show, setShow] = useState(false);

  const nameInqRef = useRef();
  const cedulaInquRef = useRef();
  const phoneInqRef = useRef();
  const adressInqRef = useRef();
  const localIdRef = useRef();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [locales, setLocales] = useState([]);

  const handleForm = () => {
    const date = new Date();

    axios
      .post("/add-inquilino", {
        nombre: nameInqRef.current.value,
        cedula: cedulaInquRef.current.value,
        telefono: phoneInqRef.current.value,
        direccion: adressInqRef.currentvalue,
        localId: localIdRef.current.value,
        fecha: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
      })
      .then((res) => {
        alert("¡Inquilino Agregado Exitosamente!");
        window.location.reload();
      })
      .catch((err) => {
        alert(`No se agregar al Inquilino! ${err}`);
      });
  };

  useEffect(() => {
    axios.get("/get-locales").then((res) => {
      setLocales(res.data.data);
    });
  }, []);

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
              <input ref={nameInqRef} type="text" />
            </label>
            <label className="form_label">
              <span className="label_span">Cedula</span>
              <input ref={cedulaInquRef} type="number" />
            </label>
            <label className="form_label">
              <span className="label_span">Telefono</span>
              <input ref={phoneInqRef} type="text" />
            </label>
            <label className="form_label">
              <span className="label_span">Direccion</span>
              <input ref={adressInqRef} type="text" />
            </label>
            <label className="form_label">
              <span className="label_span">Local</span>
              <select ref={localIdRef}>
                <option>Seleccione un local</option>
                {locales.map((loc, i) => (
                  <option key={i} value={loc.localId}>
                    {loc.nombre}
                  </option>
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
            onClickCapture={handleForm}
          >
            Guardar Inquilino
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddInquilinos;
