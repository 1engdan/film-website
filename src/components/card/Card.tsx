import './card.css'
import Img from '../../assets/8bc4c24f2acec04b4d520457843201a7.jpg'

const Card = () => {
  return (
    <div className="movie-card">
        <img src={Img} alt="Обложка фильма" className="movie-poster"/>
        
        <div className="rating medium">
            ★ 8.2
        </div>
        
        <div className="movie-info">
            <div className="movie-title">Название Название Название</div>
            <div className="movie-meta">2014 • США • 112 мин</div>
            <div className="movie-genres">Фантастика, Драма, Приключения</div>
        </div>
    </div>
  );
};

export default Card