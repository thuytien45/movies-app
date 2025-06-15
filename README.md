# Project - _Movies_

**Movies** is a movies app using the [The Movie Database API](https://developers.themoviedb.org/3).

- Total time: 72 hours (please no more!)

## User Stories

The following **required** functionality is completed:

- [ ] User can view a list of movies currently playing in theaters. Poster images load asynchronously.
- [ ] Add a tab bar for **Now Playing** and **Top Rated** movies.
- [ ] Add a search bar.
- [ ] User can view movie details by tapping on a cell.
- [ ] User sees loading state while waiting for the API.
- [ ] User sees an error message when there is a network error.
- [ ] Simple responsive.

The following **optional** features are implemented:

- [ ] Implement segmented control to switch between list view and grid view.
- [ ] All images fade in.
- [ ] Implement lazy load image.
- [ ] Customize the highlight and selection effect of the cell.
- [ ] Improve UX loading by skeleton loading.
- [ ] Enhance responsive.

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app functionality!

## Requirements

- Please use ReactJS with typescript
- Please use SCSS
- Please do not use any CSS/SCSS framework or UI library

## Video Walkthrough

Here's a walkthrough of implemented user stories:

> Please record screen to a GIF file and attach (link here)[/home/phucsaiyan/Documents/workspace/movies-app/Screencast from 2025-06-15 20-10-52.webm]

## Introduction

## 🔧 Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/movies-app.git
   cd movies-app
   ```

````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` file**

   ```
   VITE_TMDB_API_KEY=your_tmdb_api_key_here
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

---

## 🗂️ Project Structure

```
src/
├── components/       # Shared UI: MovieCard, SearchBar, ToggleView, etc.
├── pages/            # Page views: NowPlaying, TopRated, MovieDetail
├── services/         # TMDb API service functions
├── styles/           # SCSS modules and global styles
├── App.tsx           # Router and layout wrapper
└── main.tsx          # Entry point
```
---
## 📌 TODO / Future Enhancements

- Add infinite scroll or pagination
- Implement favorites/watchlist using localStorage
- Add tests (Jest + React Testing Library)
- Dark mode toggle
- Better accessibility (a11y labels and focus outlines)
````
