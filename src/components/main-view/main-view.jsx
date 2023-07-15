import React, { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { NavigationFlixClient } from "../navigation-view/navigation";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HeadingView from "../heading-view/heading-view";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    if (!token) {
      return;
    }

    fetch("https://myflicsdb3.onrender.com/movies", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((fetchedMovies) => {
        const moviesFromApi = fetchedMovies.map((doc) => {
          return {
            Id: doc._id,
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
  }, [token]);

  return (
    <>
      <Row className="justify-content-md-center">
        {!user ? (
          <Col md={4}>
            <HeadingView marginVar="mb-5" title="MyFlix Movie Database" />
            <HeadingView title="Login" />
            <LoginView
              onLoggedIn={(user, token) => {
                setUser(user);
                setToken(token);
              }}
            />
            <HeadingView title="Signup" />
            <SignupView />
          </Col>
        ) : selectedMovie ? (
          <>
            <NavigationFlixClient
              onLoggedOut={() => {
                setUser(null);
                setToken(null);
                setSelectedMovie(null), localStorage.clear();
              }}
            />
            <Col md={8}>
              <MovieView movie={selectedMovie} />
            </Col>
          </>
        ) : movies.length === 0 ? (
          <>
            <NavigationFlixClient
              onLoggedOut={() => {
                setUser(null);
                setToken(null);
                setSelectedMovie(null), localStorage.clear();
              }}
            />
            <div>The List is empty.</div>
          </>
        ) : (
          <>
            <NavigationFlixClient
              onLoggedOut={() => {
                setUser(null);
                setToken(null);
                setSelectedMovie(null), localStorage.clear();
              }}
            />
            {movies.map((movie) => (
              <Col md={2} className="mb-5" key={movie.Id}>
                <MovieCard
                  movie={movie}
                  onMovieClick={(newSelectedMovie) => {
                    setSelectedMovie(newSelectedMovie);
                  }}
                />
              </Col>
            ))}
          </>
        )}
      </Row>
    </>
  );
};
