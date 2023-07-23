import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddLocales from "./modals/AddLocales";

const locles = [
  {
    nombre: "F1",
    monto: 7000,
    descripcion: "Este es el local de Jorge",
  },
  {
    nombre: "F2",
    monto: 2000,
    descripcion: "Este es el local de Nereida",
  },
];

const Locales = () => {
  return (
    <div className="container">
      <div className="inquilinos_container">
        <h1>Locales</h1>
        <div className="inquilinos">
          <AddLocales />
          <table className="inquilinos_table">
            <tbody>
              <tr>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Monto</th>
                <th>Acciones</th>
              </tr>
              {locles.map((loc, i) => (
                <tr key={i}>
                  <td>{loc.nombre}</td>
                  <td>{loc.descripcion}</td>
                  <td>{loc.monto}</td>
                  <td className="actions">
                    <button className="icons_btn">
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                    <button className="icons_btn">
                      <i className="fa fa-folder-o" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Locales;
