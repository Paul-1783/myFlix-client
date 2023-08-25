import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./navigation-view.scss";
import { useEffect, useState } from "react";

export const NavigationFlixClient = ({
  category,
  setCategory,
  setSearchQuery,
  handleSubmit,
  user,
  onLoggedOut,
}) => {
  // console.log("USER ", user);

  const [entry, setEntry] = useState("");

  useEffect(() => setSearchQuery(entry), [entry]);

  return (
    <>
      <Navbar
        expand="lg navbar-expand-sm"
        className="bg-warning position-fixed"
        sticky="top"
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!user ? (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Signup
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/">
                  <div className="text-nowrap"> Back to Movielist</div>
                </Nav.Link>
                <Nav.Link onClick={onLoggedOut}>Logout</Nav.Link>
                <Nav.Link as={Link} to="/profile">
                  Profile
                </Nav.Link>
                <div className="col-xs-2 col-md-3">
                  <Form.Select
                    aria-label="Select between Categories Historical Drama Thriller Comedy"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="non_selected">Filter by movie genre</option>
                    <option value="Historical Drama">historical drama</option>
                    <option value="Thriller">thriller</option>
                    <option value="Comedy">comedy</option>
                  </Form.Select>
                </div>
                <Nav.Link></Nav.Link>
                <div className="col-xs-4 col-md-5">
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Control
                        type="search"
                        placeholder="Enter movie title/name of director"
                        value={entry}
                        onChange={(e) => {
                          setEntry(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Form>
                </div>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
