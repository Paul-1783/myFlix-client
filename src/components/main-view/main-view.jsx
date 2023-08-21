import React, { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { NavigationFlixClient } from "../navigation-view/navigation-view";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HeadingView from "../heading-view/heading-view";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ProfileView } from "../profile-view/profile-view";
import { SetBirthdayView } from "../setting-view/setting-birthday-view";
import { SetEmailView } from "../setting-view/setting-email-view";
import { SetPwView } from "../setting-view/setting-pw-view";
import { SetNameView } from "../setting-view/setting-name-view";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [favMovies, setFavMovies] = useState(
    storedUser ? storedUser.favorite_movies : []
  );

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
      })
      .catch(console.log());
  }, []);

  return (
    <BrowserRouter>
      <Row className="justify-content-md-center">
        <NavigationFlixClient
          user={user}
          onLoggedOut={() => {
            setUser(null);
            setToken(null);
            setFavMovies([]);
            localStorage.clear();
          }}
        />
        <Row className="mt-5">
          <Col className="mt-5"></Col>
        </Row>
        <Routes>
          <Route
            path="/signup"
            element={
              user ? (
                <Navigate to="/" />
              ) : (
                <>
                  <Col md="4">
                    <HeadingView
                      marginVar="mb-5"
                      title="MyFlix Movie Database"
                    />
                    <HeadingView title="Signup" />
                    <SignupView onSignedUp={(user) => setUser(user)} />
                  </Col>
                </>
              )
            }
          />
          <Route
            path="/login"
            element={
              user ? (
                <Navigate to="/" />
              ) : (
                <>
                  <Col md="4">
                    <HeadingView
                      marginVar="mb-5 mt-3"
                      title="MyFlix Movie Database"
                    />
                    <HeadingView title="Login" />
                    <LoginView
                      onLoggedIn={(user, token) => {
                        setUser(user);
                        setToken(token);
                        setFavMovies(user.favorite_movies);
                        console.log("IN MAIN: " + favMovies);
                      }}
                    />
                  </Col>
                </>
              )
            }
          />
          <Route
            path="/movies/:movieId"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>The List is empty.</Col>
                ) : (
                  <Col md={8}>
                    <MovieView movies={movies} />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>The List is empty.</Col>
                ) : (
                  movies.map((movie) => (
                    <Col md={2} className="mb-5" key={movie.Id}>
                      <MovieCard
                        setFavMovies={setFavMovies}
                        token={token}
                        movie={movie}
                        addable={true}
                        user={user}
                        favMovies={favMovies}
                        setUser={setUser}
                      />
                    </Col>
                  ))
                )}
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : (
                  <ProfileView
                    token={token}
                    favMovies={favMovies}
                    setFavMovies={setFavMovies}
                    user={user}
                    setUser={setUser}
                    movies={movies}
                    setToken={setToken}
                    onLoggedOut={() => {
                      setUser(null);
                      setToken(null);
                      setFavMovies([]);
                      localStorage.clear();
                    }}
                  />
                )}
              </>
            }
          />
          <Route
            path="/setting/name"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : (
                  <SetNameView
                    token={token}
                    user={user}
                    setUser={setUser}
                    setToken={setToken}
                    onLoggedOut={() => {
                      setUser(null);
                      setToken(null);
                      setFavMovies([]);
                      localStorage.clear();
                    }}
                  />
                )}
              </>
            }
          />
          <Route
            path="/setting/birthday"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : (
                  <SetBirthdayView
                    token={token}
                    user={user}
                    setUser={setUser}
                    setToken={setToken}
                    onLoggedOut={() => {
                      setUser(null);
                      setToken(null);
                      setFavMovies([]);
                      localStorage.clear();
                    }}
                  />
                )}
              </>
            }
          />
          <Route
            path="/setting/email"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : (
                  <SetEmailView
                    token={token}
                    user={user}
                    setUser={setUser}
                    setToken={setToken}
                    onLoggedOut={() => {
                      setUser(null);
                      setToken(null);
                      setFavMovies([]);
                      localStorage.clear();
                    }}
                  />
                )}
              </>
            }
          />
          <Route
            path="/setting/password"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : (
                  <SetPwView
                    token={token}
                    user={user}
                    setUser={setUser}
                    setToken={setToken}
                    onLoggedOut={() => {
                      setUser(null);
                      setToken(null);
                      setFavMovies([]);
                      localStorage.clear();
                    }}
                  />
                )}
              </>
            }
          />
        </Routes>
      </Row>
    </BrowserRouter>
  );
};
