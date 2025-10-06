import { useState } from 'react';
import { useFilms } from '../../hooks/useFilm';
import Card from '../card/Card';
import Modal from '../modal/Modal';
import FilmDetail from '../filmDetail/FilmDetail';
import LoadingSpinner from '../ui/loading/Loading';
import type { Film, FilmListProps } from '../../interfaces/Card';
import './filmList.css'

const FilmList = ({ searchQuery = '' }: FilmListProps) => {
    const { films, loading, error } = useFilms(searchQuery);
    const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = (film: Film) => {
        setSelectedFilm(film);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedFilm(null);
    };

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
            <h1 className="catalog-title">
                {searchQuery ? `Результаты поиска: "${searchQuery}"` : 'Каталог фильмов'}
            </h1>
            
            <div className="catalog-wrapper">
                {films.map(film => (
                    <div 
                        key={film.id} 
                        onClick={() => handleCardClick(film)}
                        className="card-wrapper"
                    >
                        <Card film={film} />
                    </div>
                ))}
            </div>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                {selectedFilm && <FilmDetail film={selectedFilm} />}
            </Modal>

            {films.length === 0 && (
                <div className="no-films">
                    Фильмы не найдены :(
                </div>
            )}
        </div>
    );
};

export default FilmList;