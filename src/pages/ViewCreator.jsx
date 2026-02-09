import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { supabase } from "../client"; 

export default function ViewCreator() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function fetchCreator() {
      setLoading(true);
      setErrorMsg("");

      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .eq("id", id)
        .single();

      if (!isMounted) return;

      if (error) {
        setErrorMsg(error.message);
        setCreator(null);
      } else {
        setCreator(data);
      }

      setLoading(false);
    }

    fetchCreator();

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading) return <p>Loading creator…</p>;
  if (errorMsg) return <p style={{ color: "crimson" }}>{errorMsg}</p>;
  if (!creator) return <p>Creator not found.</p>;

  return (
    <div>
      <h1>{creator.name}</h1>

      {creator.imageURL && (
        <img src={creator.imageURL} alt={creator.name} style={{ maxWidth: 500 }} />
      )}

      {creator.url && (
        <p>
          <a href={creator.url} target="_blank" rel="noreferrer">
            Visit channel / link
          </a>
        </p>
      )}

      {creator.description && <p>{creator.description}</p>}

      <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
        <Link to={`/creators/${creator.id}/edit`}>Edit</Link>
        <button onClick={() => navigate("/")}>Back</button>
      </div>
    </div>
  );
}
