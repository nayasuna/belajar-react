import "./navbar.css";

function Navbar() {
  return (
    <header
      style={{
        backgroundColor: "brown",
        color: "white",
      }}
    >
      <nav>
        <ul className="navbar">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
