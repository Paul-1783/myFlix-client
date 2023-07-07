export const MovieView = ({ movie, onBackClick }) => {
  return (
    <>
      <div>
        <img src={movie.ImagePath} />
      </div>
      <div>
        <span>Title:</span>
        <span>{movie.Title}</span>
      </div>
      <div>
        <span>Poster:</span>
        <span>
          <img src={movie.Image} alt="Poster of the movie" />
        </span>
      </div>
      <div>
        <span>Director:</span>
        <span>{movie.DirectorName}</span>
      </div>
      <span>Biography of the Director:</span>
      <span>{movie.DirectorBio}</span>
      <div>
        <div>
          <span>Birthday:</span>
          <span>{movie.DirectorBirthday}</span>
          <div>
            <span>Death:</span>
            <span>{movie.DirectorDeath}</span>
          </div>
        </div>
        <span>Description of the movie:</span>
        <span>{movie.Description}</span>
      </div>
      <div>
        <span>Genre:</span>
        <span>{movie.GenreName}</span>
      </div>
      <div>
        <span>About the Genre:</span>
        <span>{movie.GenreDescription}</span>
      </div>
      <div>
        <span>Featured:</span>
        <span>{movie.Featured}</span>
      </div>

      <button onClick={onBackClick}>Back</button>
    </>
  );
};
