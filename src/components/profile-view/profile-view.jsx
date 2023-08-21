import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import HeadingView from "../heading-view/heading-view";
import { MovieCard } from "../movie-card/movie-card";
import Col from "react-bootstrap/Col";
import { DeleteModal } from "../modaldelete-view/modaldelete-view";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import "./profile-view.scss";

export const ProfileView = ({
  favMovies,
  user,
  movies,
  setFavMovies,
  token,
  setUser,
  setToken,
  onLoggedOut,
}) => {
  const [objsOfFavMovies, setObjectsofFavMovies] = useState([]);

  useEffect(() => {
    const loadFavorites = () => {
      return (favoriteMovies = movies.filter((m) =>
        user.favorite_movies.includes(m.Id)
      ));
    };
    setObjectsofFavMovies(loadFavorites());
  }, [user.favorite_movies]);

  // useEffect(() => {}, [objsOfFavMovies]);

  return (
    <>
      <div className="d-flex justify-content-center">
        <HeadingView
          className="w-50 border-secondary"
          marginVar={"mt-5, mb-3"}
          title={"User Profile " + user.username}
        />
      </div>
      <ListGroup as="ol" className="w-50 row-gap-4 fs-3 mb-5 ">
        <ListGroup.Item className="d-flex justify-content-between align-items-start bg-warning rounded">
          <div className="ms-2 me-auto rounded">
            <div className="fw-bold bg-warning text-primary fs-2 rounded">
              Name:
            </div>
            {user.username}
          </div>
          <Link to={`/setting/name`}>
            <Button
              type="button"
              className="text-dark btn-sm border-dark hover-effect "
            >
              Update your name here
            </Button>
          </Link>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between align-items-start bg-warning rounded">
          <div className="ms-2 me-auto rounded">
            <div className="fw-bold bg-warning text-primary fs-2 rounded">
              Birthday:
            </div>
            {user.birthday.substring(0, user.birthday.indexOf("T"))}
          </div>
          <Link
            to={`/setting/birthday`}
            className="text-dark border-dark btn-lg hover-effect"
          >
            <Button
              type="button"
              className="text-dark btn-sm border-dark hover-effect"
            >
              Update birthdate here
            </Button>
          </Link>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between align-items-start bg-warning rounded">
          <div className="ms-2 me-auto rounded">
            <div className="fw-bold bg-warning text-primary fs-2 rounded">
              Email:
            </div>
            {user.email}
          </div>
          <Link to={`/setting/email`}>
            <Button
              type="button"
              className="text-dark btn-sm border-dark hover-effect"
            >
              Update your email here
            </Button>
          </Link>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between align-items-start bg-warning rounded">
          <div className="ms-2 me-auto rounded">
            <div className="fw-bold bg-warning text-primary fs-2 rounded">
              Password
            </div>
          </div>
          <Link to={`/setting/password`}>
            <Button
              type="button"
              className="text-dark btn-sm border-dark hover-effect"
            >
              Update password here
            </Button>
          </Link>
        </ListGroup.Item>
        <DeleteModal
          deleteAll={onLoggedOut}
          user={user}
          token={token}
          setUser={setUser}
          setToken={setToken}
          setFavMovies={setFavMovies}
        />
      </ListGroup>
      <div className="d-flex justify-content-center  mt-5 mb-5">
        <HeadingView
          className="w-50 border-secondary"
          marginVar=""
          title="Your favorite Movies"
        />
      </div>
      {objsOfFavMovies.map((movie) => (
        <Col md={2} className="mb-5" key={movie.Id}>
          <MovieCard
            movie={movie}
            active={false}
            setFavMovies={setFavMovies}
            token={token}
            user={user}
            favMovies={favMovies}
            setUser={setUser}
          />
        </Col>
      ))}
    </>
  );
};
