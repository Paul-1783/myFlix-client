import PropTypes from "prop-types";

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <div
      onClick={() => {
        onMovieClick(movie);
      }}
    >
      {movie.Title}
    </div>
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
