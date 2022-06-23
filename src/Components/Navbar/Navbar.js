import "./Navbar.modules.css";
import NavLogo from "./NavLogo/NavLogo";

function Navbar() {
  return (
    <nav className="navigation">
      <div id="nav-logo">
        <a href="/" className="brand-icon">
          <NavLogo />
        </a>
      </div>
      <div id="nav-links">
        <a href="/" id="home-link">
          Search
        </a>
        <a href="/submit" id="submit-link">
          Submit
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
