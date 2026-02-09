import { Link } from "react-router-dom";

export default function CreatorCard({ creator }) {
  return (
    <Link to={`/creators/${creator.id}`} style={{ textDecoration: "none", color: "inherit" }}>
    <div style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "8px" }}>
      <h2>{creator.name}</h2>
       
      {creator.imageURL && (
        <img
          src={creator.imageURL}
          alt={creator.name}
          style={{ width: "100%", maxWidth: "300px" }}
        />
      )}

    </div>
  </Link>
  );
}
