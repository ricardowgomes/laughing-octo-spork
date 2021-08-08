import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import useMovies from './hooks/useMovies';

import './styles/global.scss';

export function App() {
  const {
    selectedGenre, genres, movies, handleClickButton, selectedGenreId
  } = useMovies();

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar genres={genres} onClick={handleClickButton} selected={selectedGenreId} />

      <div className="container">
        <Content movies={movies} selectedGenre={selectedGenre} />
      </div>
    </div>
  )
}