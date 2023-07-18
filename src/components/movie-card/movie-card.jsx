import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={movie.Image} className="h-100 w-100" />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
      <Link to={`/movies/${encodeURIComponent(movie.Id)}`}>
        <Button variant="link">{movie.Title}</Button>
      </Link>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Id: PropTypes.string,
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    GenreName: PropTypes.string.isRequired,
    GenreDescription: PropTypes.string.isRequired,
    Image: PropTypes.string,
    Featured: PropTypes.bool,
    DirectorName: PropTypes.string.isRequired,
    DirectorBio: PropTypes.string.isRequired,
    DirectorBirthday: PropTypes.string,
    DirectorDeath: PropTypes.string,
    Actors: PropTypes.array.isRequired,
  }).isRequired,
};
