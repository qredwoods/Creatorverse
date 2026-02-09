import { useRoutes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ViewCreator from "./pages/ViewCreator";
import CreatorSettings from "./pages/CreatorSettings";
import { supabase } from "./client";
import { useEffect, useState} from "react";

export default function App() {
  const [creators, setCreators] = useState([]);

  async function fetchCreators() {
    const { data, error } = await supabase.from("creators").select("*");
    if (error) {
      console.error(error);
      return;
    }
    setCreators(data ?? []);
  }

  useEffect(() => {
  // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchCreators();
  }, []);

  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home creators={creators} /> },

        // 4) Pass fetchCreators down as a prop so CreatorSettings can call it after CREATE/UPDATE
        { path: "/creators/new", element: <CreatorSettings onSave={fetchCreators} /> },
        { path: "/creators/:id", element: <ViewCreator /> },
        { path: "/creators/:id/edit", element: <CreatorSettings onSave={fetchCreators} /> },
      ],
    },
  ]);

  return routes;
}
