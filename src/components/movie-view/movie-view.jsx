//import "./movie-view.scss";
import HeadingView from "../heading-view/heading-view";
import InfoView from "../infoAccord-view/infoAccord-view";
import { useParams } from "react-router";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();

  const movie = movies.find((b) => b._id === movieId);

  return (
    <div>
      <HeadingView title={movie.Title} />
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
          description={movie.GenreDescription}
          featured={movie.Featured}
        />
      </div>
    </div>
  );
};
