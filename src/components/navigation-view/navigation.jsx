import Nav from "react-bootstrap/Nav";

export const NavigationFlixClient = ({ onLoggedOut }) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");

  const handleSelect = (eventKey) => {};

  return (
    <Nav className="bg-warning" variant="pills" onSelect={handleSelect}>
      <Nav.Item>
        <Nav.Link eventKey="1" href="./src/components/movie-view/movie-view">
          Back to Movielist
        </Nav.Link>
      </Nav.Item>
      <Nav.Item
        onClick={() => {
          onLoggedOut();
        }}
      >
        <Nav.Link eventKey="2" title="Item">
          Logout
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
