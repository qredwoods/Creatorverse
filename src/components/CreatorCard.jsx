import { Link } from "react-router-dom";

export default function CreatorCard({ creator }) {
  return (
    <article>
      <Link to={`/creators/${creator.id}`} style={{ textDecoration: "none" }}>
        <img
          src={creator.imageURL || "https://placehold.co/600x400?text=No+Image"}
          alt={creator.name}
          style={{ width: "100%", height: 220, objectFit: "cover", borderRadius: 12 }}
        />
        <h3 className="creator-name">{creator.name}</h3>
      </Link>
    </article>
  );
}
