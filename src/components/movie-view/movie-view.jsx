export const MovieView = ({ movie, onBackClick }) => {
    return (
        <>
            <div>
                <img src={movie.ImagePath}/>
            </div>
            <div>
                <span>Title:</span>
                <span>{movie.Title}</span>
            </div>
            <div>
                <span>Director:</span>
                <span>{movie.Director.Name}</span> 
            </div>
                 <span>Biography of the Director:</span>
                <span>{movie.Director.Bio}</span>
            <div>
            <div> 
                <span>Birthday:</span>
                <span>{movie.Director.Birthday.$date.$numberLong}</span>
            <div>
                <span>Death:</span>
                <span>{movie.Director.Death}</span>
            </div>
            </div>
                <span>Description of the movie:</span>
                <span>{movie.Description}</span>
            </div>
            <div>
                <span>Genre:</span>
                <span>{movie.Genre.Name}</span>
            </div>
            <div>
                <span>About the Genre:</span>
                <span>{movie.Genre.Description}</span>
            </div>
            <dir>
                <span>Featured:</span>
                <span>{movie.Featured}</span>
            </dir>
     
            <button onClick={onBackClick}>Back</button>
        </>
    );  
};