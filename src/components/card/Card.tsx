import type { CardProps } from '../../interfaces/Card';
import './card.css'
import Placeholder from '../../assets/placeholder.png'
import { formatDuration, getRatingClass } from '../../utils/formatters';

const Card = ({ film, onClick }: CardProps) => {
    return (
        <div className="movie-card" onClick={onClick}>
            <img 
                draggable="false"
                src={film.poster} 
                alt={`Обложка фильма ${film.title}`} 
                className="movie-poster"
                onError={(e) => {
                    e.currentTarget.src = `${Placeholder}`;
                }}
            />
            
            <div className={`${getRatingClass(film.rating)} rating-card`}>
                ★ {film.rating.toFixed(1)}
            </div>
            
            <div className="movie-info">
                <div className="movie-title" title={film.title}>
                    {film.title}
                </div>
                <div className="movie-meta">
                    {film.year} • {film.country} • {formatDuration(film.duration)}
                </div>
                <div className="movie-genres">
                    {film.genres.join(', ')}
                </div>
            </div>
        </div>
    );
};

export default Card;