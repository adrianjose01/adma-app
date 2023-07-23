import "./App.css";
import SidebarMenu from "./components/SidebarMenu";
import Dashboard from "./components/Dashboard";
import Inqulinos from "./components/Inqulinos";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Locales from "./components/Locales";
import Facturas from "./components/Facturas";
import FacturaReceive from "./components/FacturaReceive";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <SidebarMenu /> <Dashboard />
      </>
    ),
    errorElement: <h1>Error 404: Page not found!</h1>,
  },
  {
    path: "/facturas/:facturaId",
    element: <FacturaReceive />,
  },
  {
    path: "/facturas",
    element: (
      <>
        <SidebarMenu />
        <Facturas />
      </>
    ),
  },
  {
    path: "/inquilinos",
    element: (
      <>
        <SidebarMenu />
        <Inqulinos />
      </>
    ),
  },
  {
    path: "/locales",
    element: (
      <>
        <SidebarMenu />
        <Locales />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
