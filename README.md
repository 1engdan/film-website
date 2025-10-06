<h1 align="center">🎬 Cinex</h1>

<p align="center">
  <em>Элегантный каталог фильмов с минималистичным дизайном</em>
</p>

## 📋 О проекте

**Cinex** — современный веб-каталог фильмов, разработанный с акцентом на удобство пользователя и чистый визуальный стиль. Проект представляет собой тестовое задание для компании Effective Mobile.

## 🚀 Быстрый старт

### Доступные адреса:
> [!IMPORTANT]
> - **🌐 Frontend**: http://localhost:3333/
> - **📊 Backend (API)**: http://localhost:3334/films

## 🛠 Технологический стек

- **Frontend**: React + TypeScript
- **Backend**: json-server
- **Стилизация**: CSS3
- **Сборка**: Vite

## ⚡ Установка и запуск

### 1. Клонирование репозитория
```shell
git clone https://github.com/1engdan/film-website.git
cd film-website
```

## 2. Запуск приложения

- **🍎 macOS / 🐧 Linux**
   ```shell
   make build-app
   ```
   Если зависимости уже установлены:
   ```shell
   start-app
   ```
   
- **🪟 Windows**
  - При наличии утилиты **make** от **chocolatey**:
   ```shell
   build-app
   ```
  - Если зависимости уже установлены:
   ```shell
   start-app
   ```

   - Без утилиты make:
   ```shell
   npm start
   ```
   Или раздельный запуск:
   - Терминал 1 (backend):
   ```shell
   json-server --port 3334 -w public/data.json
   ```
   - Терминал 2 (frontend):
   ```shell
   npm run dev
   ```

После выполнения всех вышеперечисленных шагов вы сможете получить доступ к:
   - Backend - http://localhost:3334/films
   - Frontend - http://localhost:3333/


<div align="center"> <sub>Разработано для Effective Mobile🚀</sub></div>