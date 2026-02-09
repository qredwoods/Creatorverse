import CreatorCard from "../components/CreatorCard";

export default function Home({ creators }) {
  return (
    <div>
      <h1>All Creators</h1>

      {creators.length === 0 ? (
        <p>No content creators found.</p>
      ) : (
        creators.map((creator) => (
          <CreatorCard key={creator.id} creator={creator} />
        ))
      )}
    </div>
  );
}

