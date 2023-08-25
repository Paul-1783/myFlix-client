import PropTypes from "prop-types";
import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ token, user, movie, addable, setUser }) => {
  const [favMovies, setFavMovies] = useState(user.favorite_movies);

  const addNewFavoriteMovie = () => {
    console.log("FAVMOVIES: ", favMovies);
    if (!favMovies.includes(movie.Id)) {
      fetch(
        `https://myflicsdb3.onrender.com/users/${encodeURIComponent(
          user.username
        )}/movies/${encodeURIComponent(movie.Id)}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            alert("Couldn't add movie.");
            return;
          }
        })
        .then((data) => {
          if (data) {
            localStorage.setItem("user", JSON.stringify(data));
            setUser(data);
            console.log(data);
            setFavMovies(data.favorite_movies);
            console.log("MovieCard: " + favMovies);
            alert("Movie successfully added to your list of favorites.");
          }
        });
    } else {
      alert("Movie is already in your list of favorites");
    }
  };

  const removeFromFavoriteList = () => {
    console.log("FavMovies in Remove: ", favMovies);
    if (favMovies.includes(movie.Id)) {
      fetch(
        `https://myflicsdb3.onrender.com/users/${user.username}/movies/${movie.Id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
        .then((response) => {
          if (response.ok) {
            console.log("STATUS: " + response.status);
            return response.json();
          } else {
            console.log("STATUS: " + response.status);
            alert("Couldn't remove movie from list.");
            return;
          }
        })
        .then((data) => {
          localStorage.setItem("user", JSON.stringify(data));
          setUser(data);
          console.log("MovieCard " + favMovies);
          window.location.reload();
          alert("Movie successfully removed from your list of favorites.");
        });
    } else {
      alert("Movie is not in your list of favorites");
    }
  };

  return (
    <Card className="h-100">
      <Card.Img src={movie.Image} className="h-100 w-100" />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
      <Link to={`/movies/${encodeURIComponent(movie.Id)}`}>
        <Button variant="warning btn-padding-auto container-fluid link-primary">
          {movie.Title}
        </Button>
      </Link>
      {addable ? (
        <Link to={`/`}>
          <Button
            variant="warning btn-padding-auto container-fluid link-primary mt-2"
            onClick={addNewFavoriteMovie}
          >
            Add "{movie.Title}" to favorites
          </Button>
        </Link>
      ) : (
        <Link to={`/profile`}>
          <Button
            variant="warning btn-padding-auto container-fluid link-primary mt-2"
            onClick={removeFromFavoriteList}
          >
            Remove "{movie.Title}" from favorites
          </Button>
        </Link>
      )}
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
