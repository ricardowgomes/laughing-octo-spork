import { MovieCard } from './MovieCard';
import '.././styles/content.scss';

export function Content(props) {
  console.log("this are props", props);
  const moviesCard = props.movies.map(movie => (
    <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
  ))

  return (
    <>
      <header>
        <span className="category">Categoria:<span> {props.selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {moviesCard}
        </div>
      </main>
    </>
  )
};