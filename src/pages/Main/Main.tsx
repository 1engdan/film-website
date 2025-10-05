import { useState } from 'react';
import Logo from '../../assets/logo.svg';
import Search from '../../assets/search.svg';
import Input from '../../components/ui/input/Input';
import './main.css'
import FilmList from '../../components/filmList/FilmList';
import { useDebounce } from '../../hooks/useDebounce';

const Main = () => {
    const [searchText, setSearchText] = useState('');
    const debouncedSearchText = useDebounce(searchText, 500);

    const handleInputChange = (field: string, value: string) => {
        if (field === 'search') {
            setSearchText(value);
        }
    };

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header-box">
                        <div className="header-logo logo">
                            <img draggable="false" src={Logo} alt="logo"/>
                        </div>
                        <div className="header-input-container">
                            <Input
                                icon={Search}
                                type="text"
                                value={searchText}
                                onChange={(e) => handleInputChange('search', e.target.value)}
                                placeholder='Поиск фильмов'
                            />
                        </div>
                    </div>
                </div>
            </header>
            <section className="catalog">
                <div className="container">
                    <FilmList searchQuery={debouncedSearchText}/>
                </div>
            </section>
        </>
    )
}

export default Main