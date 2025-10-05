import type { CardProps } from '../../interfaces/Card';
import './card.css'
import Placeholder from '../../assets/placeholder.png'

const Card = ({ film }: CardProps) => {
    // Функция для получения класса рейтинга
    const getRatingClass = (rating: number) => {
        if (rating >= 8) return 'rating high';
        if (rating >= 6) return 'rating medium';
        return 'rating low';
    };

    // Форматирование продолжительности
    const formatDuration = (minutes: number) => {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return hours > 0 ? `${hours} ч ${mins} мин` : `${mins} мин`;
    };

    return (
        <div className="movie-card">
            <img 
                src={film.poster} 
                alt={`Обложка фильма ${film.title}`} 
                className="movie-poster"
                onError={(e) => {
                    e.currentTarget.src = `${Placeholder}`;
                }}
            />
            
            <div className={getRatingClass(film.rating)}>
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