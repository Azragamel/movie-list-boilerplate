import React from 'react';
import MovieListEntry from './MovieListEntry.jsx'
const MovieList = ({ movies }) => (
  <div id="movie-list">
    {movies.map((movie, i) =>
      <MovieListEntry
        key={movie + i}
        movie={movie}
      />
    )}
  </div>
);

export default MovieList;