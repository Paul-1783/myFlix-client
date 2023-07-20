import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const NavigationFlixClient = ({ user, onLoggedOut }) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link}>MyFilx Movie Client</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!user ? (
              <>
                <Nav.Link as={Link} to="/Login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/Signup">
                  Signup
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/">
                  Back to Movielist
                </Nav.Link>
                <Nav.Link onClick={onLoggedOut}>Logout</Nav.Link>
                <Nav.Link to="/profile">Profile</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
