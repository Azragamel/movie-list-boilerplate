import React from 'react';

const MovieListEntry = ({ movie }) => (
  <div className="movie">
    <div>{movie.title}</div>
  </div>
);

export default MovieListEntry