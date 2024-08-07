import { useEffect, useState } from 'react';
import './App.css';
import { getMovieList, searchMovie } from './api';

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    }).catch(error => {
      console.error("Error fetching movies: ", error);
    });
  }, []);

  const popularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="movie-wrapper" key={i}>
          <div className="movie-title">{movie.title}</div>
          <img className="movie-image" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <div className="movie-date">📅 {movie.release_date}</div>
          <div className="movie-rate">⭐ {movie.vote_average}</div>
        </div>
      );
    });
  };

  const search =async (q) => {
    if (q.length > 3){
      const query =await searchMovie(q)
      setPopularMovies(query.result)
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Zav Movie Lister</h1>
        <input className='movie-research' placeholder='Search film...'
          onChange={({ target }) => search(target.value)}
        />
        <div className="movie-container">
          {popularMovieList()}
        </div>
      </header>
    </div>
  );
}

export default App;
