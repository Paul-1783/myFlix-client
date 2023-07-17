import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={movie.Image}
        className="h-100"
        class="w-100"
      />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
      <Button
        onClick={() => {
          onMovieClick(movie);
        }}
      >
        {movie.Title}
      </Button>
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
  onMovieClick: PropTypes.func.isRequired,
};
