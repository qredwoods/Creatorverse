import { useRoutes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ViewCreator from "./pages/ViewCreator";
import CreatorSettings from "./pages/CreatorSettings";
import { supabase } from "./client";
import { useEffect, useState } from "react";

export default function App() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    async function fetchCreators() {
      const { data, error } = await supabase
        .from("creators")
        .select("*");

      if (error) {
        console.error(error);
      } else {
        setCreators(data);
      }
    }

    fetchCreators();
  }, []);

  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
      { index: true, element: <Home creators={creators}/> },
      { path: "/creators/new", element: <CreatorSettings /> },
      { path: "/creators/:id", element: <ViewCreator /> },
      { path: "/creators/:id/edit", element: <CreatorSettings /> },
  ],
},
]);

  return routes;
}