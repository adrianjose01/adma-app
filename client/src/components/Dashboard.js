import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jorge",
    Monto: 2400,
  },
  {
    name: "Nereida",
    Monto: 1398,
  },
  {
    name: "Yelena",
    Monto: 9800,
  },
  {
    name: "Biembo",
    Monto: 3908,
  },
];

const Dashboard = () => {
  const [saludo, setSaludo] = useState("");

  useEffect(() => {
    const date = new Date();
    if (date.getHours() < 12) {
      setSaludo("Buenos días");
    } else if (date.getHours() > 12 && date.getHours() <= 18) {
      console.log("Buenas Tardes");
      setSaludo("Buenas tardes");
    } else if (date.getHours() > 18) {
      setSaludo("Buenas noches");
    } else {
      setSaludo("Hola");
    }
  }, []);

  return (
    <div className="container">
      <div className="dashboard_container">
        <div className="welcome_widget">
          <h2>{saludo}, Jose Manuel</h2>
          <p>Pendiente por cobrar: $xxxx.xx</p>
          <h3>{`${new Date().getDate()} / ${new Date()
            .getMonth()
            .toString()
            .padStart(2, "0")} / ${new Date().getFullYear()}`}</h3>
        </div>
        <div className="inqulinos_widget">
          <h2>Mejores Inquilinos</h2>
          <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Monto" fill="#778da9" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
