import Accordion from "react-bootstrap/Accordion";

function InfoView({
  name,
  bio,
  death,
  birth,
  genreName,
  description,
  genreDescription,
  featured,
}) {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Description:</Accordion.Header>
        <Accordion.Body>{description}</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Director:</Accordion.Header>
        <Accordion.Body>{name}</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Biography:</Accordion.Header>
        <Accordion.Body>{bio}</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Birthday:</Accordion.Header>
        <Accordion.Body>{birth}</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Death:</Accordion.Header>
        <Accordion.Body>{death}</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Genre:</Accordion.Header>
        <Accordion.Body>{genreName}</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>About the Genre:</Accordion.Header>
        <Accordion.Body>{genreDescription}</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>Featured</Accordion.Header>
        <Accordion.Body>{featured}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default InfoView;
