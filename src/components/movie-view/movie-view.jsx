import React from "react";
import HeadingView from "../heading-view/heading-view";
import InfoView from "../infoAccord-view/infoAccord-view";
import { useParams } from "react-router";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();

  const movie = movies.find((b) => b.Id === movieId);

  return (
    <div>
      <HeadingView title={movie.Title} marginVar="mt-3" />
      <div>
        <span>
          <img
            src={movie.Image}
            className="w-100 border-secondary mb-3"
            alt="movie poster"
          />
        </span>
      </div>
      <div>
        <InfoView
          name={movie.DirectorName}
          bio={movie.DirectorBio}
          birth={movie.DirectorBirthday}
          death={movie.DirectorDeath}
          genreName={movie.GenreName}
          genreDescription={movie.GenreDescription}
          featured={movie.Featured}
          description={movie.Description}
        />
      </div>
    </div>
  );
};
