import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export function NavbarComponent() {
  return (
    <>
        <Navbar data-bs-theme="dark">
          <Navbar.Brand href="/">Movie Search</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/favorites">Favorites</Nav.Link>
          </Nav>
        </Navbar>
    </>
  );
}
