export interface Film {
  id: number;
  title: string;
  description: string;
  rating: number;
  year: number;
  genres: string[];
  country: string;
  duration: number;
  age_rating: number;
  poster: string;
}

export interface FilmListProps {
  searchQuery?: string;
}

export interface CardProps {
  film: Film;
  onClick?: () => void;
}