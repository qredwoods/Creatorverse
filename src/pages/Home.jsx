import CreatorCard from "../components/CreatorCard";

export default function Home({ creators }) {
  if (!creators || creators.length === 0) {
    return (
      <article>
        <h2>No creators yet</h2>
        <p>Add your first creator using the “Add Creator” button.</p>
      </article>
    );
  }

  return (
    <>
      <h2>All Creators</h2>

      <div className="creator-grid">
        {creators.map((creator) => (
          <CreatorCard key={creator.id} creator={creator} />
        ))}
      </div>
    </>
  );
}
