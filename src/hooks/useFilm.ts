/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from 'react';
import { getFilms, searchFilmsByTitle } from '../app/api';
import type { Film } from '../interfaces/Card';

let allFilmsCache: Film[] | null = null;

export const useFilms = (searchQuery: string = '') => {
    const [films, setFilms] = useState<Film[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const abortControllerRef = useRef<AbortController | null>(null);

    useEffect(() => {
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }

        abortControllerRef.current = new AbortController();
        const signal = abortControllerRef.current.signal;

        const fetchFilms = async () => {
            try {
                setLoading(true);
                setError(null);
                
                let data;
                
                if (searchQuery.trim()) {
                    data = await searchFilmsByTitle(searchQuery);
                } else {
                    if (allFilmsCache) {
                        data = allFilmsCache;
                    } else {
                        data = await getFilms();
                        allFilmsCache = data; // Сохраняем в кэш
                    }
                }
                
                if (!signal.aborted) {
                    setFilms(data);
                }
                
            } catch (err: any) {
                if (err.name !== 'AbortError' && !signal.aborted) {
                    console.error('Error fetching films:', err);
                    setError(err instanceof Error ? err.message : 'Ошибка загрузки фильмов');
                }
            } finally {
                if (!signal.aborted) {
                    setLoading(false);
                }
            }
        };

        fetchFilms();

        return () => {
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
        };
    }, [searchQuery]);

    return { films, loading, error };
};