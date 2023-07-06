import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch("https://myflicsdb3.onrender.com/movies")
      .then((response) => response.json())
      .then((fetchedMovies) => {
        const moviesFromApi = fetchedMovies.map((doc) => {
          return {
            Id: doc.key,
            Title: doc.Title,
            Description: doc.Description,
            GenreName: doc.Genre.Name,
            GenreDescription: doc.Genre.Description,
            Image: doc.ImagePath,
            Featured: doc.Featured,
            DirectorName: doc.Director.Name,
            DirectorBio: doc.Director.Bio,
            DirectorBirthday: doc.Director.Birthday,
            DirectorDeath: doc.Director.Death,
            Actors: doc.Actors,
          };
        });
        setMovies(moviesFromApi);
      });
  }, []);

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

  if (movies.length === 0) {
    return <div>The List is empty.</div>;
  }

  return (
    <div>
      {movies.map((movie) => {
        return (
          <MovieCard
            key={movie.Id}
            movie={movie}
            onMovieClick={(newSelectedMovie) => {
              setSelectedMovie(newSelectedMovie);
            }}
          />
        );
      })}
    </div>
  );
};
