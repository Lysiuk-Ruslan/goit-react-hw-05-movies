import Home from 'pages/Home/Home';
import MovieDetails from 'pages/Movies/MovieDetails';
import Movies from 'pages/Movies/Movies';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Reviews } from './Reviews/Reviews';
import { Cast } from './Cast/Cast';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
}
