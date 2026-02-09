export default function CreatorCard({ creator }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "8px" }}>
      <h2>{creator.name}</h2>

      {creator.imageURL && (
        <img
          src={creator.imageURL}
          alt={creator.name}
          style={{ width: "100%", maxWidth: "300px" }}
        />
      )}

      <p>{creator.description}</p>

      <a href={creator.url} target="_blank" rel="noreferrer">
        {creator.url}
      </a>
    </div>
  );
}
