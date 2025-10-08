import axios from "axios";
import { API_URL } from "./setting";

const client = axios.create({
    baseURL: API_URL + '/films',
    withCredentials: false
})

// получение всех фильмов
export const getFilms = async () => {
    try {
        const response = await client.get('/');
        return response.data;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Ошибка при получении фильмов: ${error.message}`);
        } else if (axios.isAxiosError(error)) {
            throw new Error(`Ошибка при получении фильмов: ${error.response?.data?.message || error.message}`);
        } else {
            throw new Error('Неизвестная ошибка при получении фильмов');
        }
    }
}

// поиск фильмов по названию
// like не работает на новых версиях
export const searchFilmsByTitle = async (searchQuery: string) => {
    try {
        const response = await client.get(`?title_like=${encodeURIComponent(searchQuery)}`);
        return response.data;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Ошибка при поиске фильмов: ${error.message}`);
        } else if (axios.isAxiosError(error)) {
            throw new Error(`Ошибка при поиске фильмов: ${error.response?.data?.message || error.message}`);
        } else {
            throw new Error('Неизвестная ошибка при поиске фильмов');
        }
    }
}