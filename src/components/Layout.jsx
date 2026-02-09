import { Link, Outlet } from "react-router-dom";

export default function Layout({ fetchCreators }) {
  return (
    <>
      <header className="container">
        <nav>
          <ul>
            <li>
              <h1>Creatorverse</h1>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">See All Creators</Link>
            </li>
            <li>
              <Link to="/creators/new" role="button">
                Add Creator
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container">
        <Outlet context={{ fetchCreators }} />
      </main>
    </>
  );
}
