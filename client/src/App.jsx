import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { Layout } from "./components";
import { Cola, CrearTicket, Escritorio, Ingresar } from "./pages";

const App = () => {
  const router = createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Navigate to="/ingresar" />} />
      <Route path="/ingresar" element={<Ingresar />} />
      <Route path="/cola" element={<Cola />} />
      <Route path="/crear-ticket" element={<CrearTicket />} />
      <Route path="/escritorio" element={<Escritorio />} />
      <Route
        path="*"
        element={<Link to="/">Ruta no encontrada, regresa al home</Link>}
      />
    </Route>
  );
  const routerProvider = createBrowserRouter(router);
  return <RouterProvider router={routerProvider} />;
};
export default App;
