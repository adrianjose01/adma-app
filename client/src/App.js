import "./App.css";
import SidebarMenu from "./components/SidebarMenu";
import Dashboard from "./components/Dashboard";
import Inqulinos from "./components/Inqulinos";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    path: "/facturas",
    element: (
      <>
        <SidebarMenu />
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
