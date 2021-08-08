import { Button } from './Button';
import '.././styles/sidebar.scss';

export function SideBar(props) {
  const mapGenres = props.genres.map(genre => (
    <Button
      key={String(genre.id)}
      title={genre.title}
      iconName={genre.name}
      onClick={() => props.onClick(genre.id)}
      selected={props.selectedGenreId === genre.id}
    />
  ))

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {mapGenres}
      </div>

    </nav>
  )
}