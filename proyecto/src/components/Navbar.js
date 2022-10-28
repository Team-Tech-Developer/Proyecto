import '../styles/navbar.css'

export function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <h2>Computers Web Store</h2></div>
      <ul className="info">
      <li><a href='/#' className="pag">Page 1</a></li>
      <li><a href='/#' className="pag">Page 2</a></li>
      <li><a href='/#' className="pag">Sign Up</a></li>
      <li><a href='/#' className="pag">Login</a></li>
    </ul>
    
    </nav>
  );
}
