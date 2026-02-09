import { Link, Outlet } from "react-router-dom";

export default function Layout({ fetchCreators }) {
  return (
    <>
      <header style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
        <nav style={{ display: "flex", gap: "1rem" }}>
          <Link to="/">See All Creators</Link>
          <Link to="/creators/new">Add Creator</Link>
        </nav>
      </header>

      <main style={{ padding: "1rem" }}>
        <Outlet context={{ fetchCreators }} />
      </main>
    </>
  );
}
