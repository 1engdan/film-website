import type { Film } from '../../interfaces/Card';
import { formatDuration, getRatingClass } from '../../utils/formatters';
import './filmDetail.css';
import AgeIcon from '../../assets/att.svg'
import Placeholder from '../../assets/placeholder.png'

interface FilmDetailProps {
    film: Film;
}

const FilmDetail = ({ film }: FilmDetailProps) => {
    return (
        <div className="film-detail">
            <div className="film-detail-left">
                <img 
                    draggable="false"
                    src={film.poster} 
                    alt={film.title}
                    className="film-detail-poster"
                    onError={(e) => {
                        e.currentTarget.src = `${Placeholder}`;
                    }}
                />
            </div>
            <div className="film-detail-right">
                <div className="film-detail-right--header">
                    <h1 className="film-detail-title">{film.title}</h1>
                    <div className="film-detail-meta-container">
                        <div className={`${getRatingClass(film.rating)} film-detail-rating`}>
                            ★ {film.rating.toFixed(1)}
                        </div>
                        <p className="film-detail-meta">
                            {film.year}, {formatDuration(film.duration)}. 
                            <span className="age-rating-with-icon">
                                <img src={AgeIcon} alt="AgeIcon" />
                                {film.age_rating === 0 ? '0+' : `${film.age_rating}+`}
                            </span>
                        </p>
                    </div>
                </div>
                <div className='film-genres-list'>
                    {film.genres.map(genre => (
                        <span key={genre} className="genre-tag">{genre}</span>
                    ))} 
                </div>
                <p className="film-detail-description">
                    {film.description}
                </p>
                <p className="film-country">
                    {film.country}
                </p>
            </div>
        </div>
    );
};

export default FilmDetail;