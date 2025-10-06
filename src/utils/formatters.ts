// Форматирование продолжительности
export const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours} ч ${mins} мин` : `${mins} мин`;
};

// Функция для получения класса рейтинга
export const getRatingClass = (rating: number) => {
    if (rating >= 8) return 'rating high';
    if (rating >= 6) return 'rating medium';
    return 'rating low';
};