import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/logs" className="header-link">Captain's Log</Link>
      </h1>
      <button className="new-btn">
        <Link to="/logs/new" className="header-link">New Log</Link>
      </button>
    </nav>
  );
}
