import { useFilms } from '../../hooks/useFilm';
import Card from '../card/Card';
import LoadingSpinner from '../ui/loading/Loading';
import './filmList.css'

interface FilmListProps {
    searchQuery?: string;
}

const FilmList = ({ searchQuery = '' }: FilmListProps) => {
    const { films, loading, error } = useFilms(searchQuery);

    if (loading) {
        return (
            <div className="loading-container">
                <LoadingSpinner/>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-container">
                <div className="error-message">Ошибка: {error}</div>
            </div>
        );
    }

    return (
        <div className="film-list">
            <h1 className="catalog-title">Каталог фильмов</h1>
                <div className="catalog-wrapper">
                    {films.map(film => (
                        <Card key={film.id} film={film} />
                    ))}
                </div>
                {films.length === 0 && (
                    <div className="no-films">
                        Фильмы не найдены
                    </div>
                )}
        </div>
    );
};

export default FilmList;