import { useRoutes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ViewCreator from "./pages/ViewCreator";
import CreatorSettings from "./pages/CreatorSettings";

export default function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
      { index: true, element: <Home /> },
      { path: "/creators/new", element: <CreatorSettings /> },
      { path: "/creators/:id", element: <ViewCreator /> },
      { path: "/creators/:id/edit", element: <CreatorSettings /> },
  ],
},
]);

  return routes;
}