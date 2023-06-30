import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([
        {
            _id: { $oid: "64842f1abcbb338587e576f8" },
            Title: "Passage to India",
            Description: " The film explores themes of racism, imperialism, religion, and the nature of relationships both friendly and marital.",
            Genre: {
                Name: "Historical Drama",
                Description: "A historical drama (also period drama, period piece or just period) is a dramatic work set in a past time period, usually used in the context of film and television, which presents historical events and characters with varying degrees of fictional elements such as creative dialogue or fictional scenes which aim to compress separate events or illustrate a broader factual narrative."
            },
            Director: {
                Name: "David Lean",
                Bio: "Sir David Lean CBE (25 March 1908 – 16 April 1991) was an English film director, producer, screenwriter and editor. Widely considered one of the most important figures in British cinema, Lean directed the large-scale epics The Bridge on the River Kwai (1957), Lawrence of Arabia (1962), Doctor Zhivago (1965), and A Passage to India (1984).[1] He also directed the film adaptations of two Charles Dickens novels, Great Expectations (1946) and Oliver Twist (1948), as well as the romantic drama Brief Encounter (1945).",
                Birthday: { "$date": { "numberLong": "-1949356800000" } },
                Death: "1991-04-16"
            },
            ImagePath: "https://upload.wikimedia.org/wikipedia/en/2/20/PassageToIndiaPoster.jpg",
            Featured: true
        },
        {
            "_id": { "$oid": "648443aebcbb338587e576f9" },
            "Title": "The Draughtman''s Contract",
            "Description": "the film is a form of murder mystery, set in rural Wiltshire, England in 1694 (during the joint reign of William III and Mary II). The period setting is reflected in Michael Nyman''s score, which borrows widely from Henry Purcell, and in the extensive and elaborate costume designs (which, for effect, slightly exaggerate those of the period). The action was shot on location in the house and formal gardens of Groombridge Place",
            "Genre": {
                "Name": "Historical Drama",
                "Description": "the film is a form of murder mystery, set in rural Wiltshire, England in 1694 (during the joint reign of William III and Mary II). The period setting is reflected in Michael Nyman''s score, which borrows widely from Henry Purcell, and in the extensive and elaborate costume designs (which, for effect, slightly exaggerate those of the period). The action was shot on location in the house and formal gardens of Groombridge Place"
            },
            "Director": {
                "Name": "Peter Greenaway",
                "Bio": "Peter Greenaway, CBE (born 5 April 1942) is a Welsh film director, screenwriter and artist. His films are noted for the distinct influence of Renaissance and Baroque painting, and Flemish painting in particular. Common traits in his films are the scenic composition and illumination and the contrasts of costume and nudity, nature and architecture, furniture and people, sexual pleasure and painful death.",
                "Birthday": { "$date": { "$numberLong": "-875491200000" } },
                "Death": null
            },
            "ImagePath": "https://upload.wikimedia.org/wikipedia/en/f/f5/The_Draughtsman%27s_Contract_theatrical_poster.png",
            "Featured": true
        },
        {
            "_id": { "$oid": "64844c02bcbb338587e576fc" },
            "Title": "La Reine Margot",
            "Description": "La Reine Margot is a 1994 historical romantic drama film directed by Patrice Chéreau, from a screenplay he co-wrote with Danièle Thompson,[1] based on the 1845 historical novel of the same name by Alexandre Dumas. The film stars Isabelle Adjani, Daniel Auteuil, Jean-Hugues Anglade, Vincent Perez and Virna Lisi.",
            "Genre": {
                "Name": "Historical Drama",
                "Description": "A historical drama (also period drama, period piece or just period) is a dramatic work set in a past time period, usually used in the context of film and television, which presents historical events and characters with varying degrees of fictional elements such as creative dialogue or fictional scenes which aim to compress separate events or illustrate a broader factual narrative."
            },
            "Director": {
                "Name": "Patrice Chéreau",
                "Bio": "Patrice Chéreau (French: [pa.tʁis ʃe.ʁo]; 2 November 1944 – 7 October 2013) was a French opera and theatre director, filmmaker, actor and producer. In France he is best known for his work for the theatre, internationally for his films La Reine Margot and Intimacy, and for his staging of the Jahrhundertring, the centenary Ring Cycle at the Bayreuth Festival in 1976. Winner of almost twenty movie awards, including the Cannes Jury Prize and the Golden Berlin Bear, Chéreau served as president of the jury at the 2003 Cannes festival.",
                "Birthday": { "$date": { "$numberLong": "-794102400000" } },
                "Death": "2013-10-07"
            },
            "ImagePath": "https://upload.wikimedia.org/wikipedia/en/a/a7/La_Reine_Margot_1994_film_poster.png",
            "Featured": true
        }
    ]);
     
    const [selectedMovie, setSelectedMovie] = useState(null);

    if (selectedMovie) {
        return (
            < MovieView movie={selectedMovie} onBackClick={() =>  setSelectedMovie(null) } />
        );
    }

    if (movies.length === 0) {
        return <div>The List is empty.</div>;
    }

    return (
        <div>
            {
                movies.map((movie) => {
                    return (
                        <MovieCard
                            key={movie._id.$oid}
                            movie={movie}
                            onMovieClick={(newSelectedMovie) => {
                                setSelectedMovie(newSelectedMovie);
                            }}
                        />
                    );
                })
            }
        </div>
    );
};