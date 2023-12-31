import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../dbconfig";

const Dashboard = () => {
  const [saludo, setSaludo] = useState("");
  const [pendiente, setPendiente] = useState(0);
  const [deudasInq, setDeudasInq] = useState([]);

  useEffect(() => {
    const date = new Date();
    if (date.getHours() < 12) {
      setSaludo("Buenos días");
    } else if (date.getHours() > 12 && date.getHours() <= 18) {
      setSaludo("Buenas tardes");
    } else if (date.getHours() > 18) {
      setSaludo("Buenas noches");
    } else {
      setSaludo("Hola");
    }

    axios.get(API_URL + "/api/get-total-pending").then((res) => {
      setPendiente(+res.data[0].totalPendiente);
    });

    axios.get(API_URL + "/api/get-total-debts").then((res) => {
      setDeudasInq(res.data);
    });
  }, []);

  return (
    <div className="container">
      <div className="dashboard_container">
        <div className="welcome_widget">
          <h2>{saludo}, Jose Manuel</h2>
          <p>Pendiente por cobrar: {`$${pendiente.toFixed(2)}`}</p>
          <h3>{`${new Date().getDate()} / ${(new Date().getMonth() + 1)
            .toString()
            .padStart(2, "0")} / ${new Date().getFullYear()}`}</h3>
        </div>
        <div className="inqulinos_widget">
          <h2>Deudas Inquilinos</h2>
          <div className="chart">
            {deudasInq &&
              deudasInq.map((d, i) => {
                if (+d.deuda === 0) return "";
                return (
                  <div key={i} className="deudas_inquilinos">
                    <p>{d.nombre}</p>
                    <p>${d.deuda}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
