import React from 'react';
import MovieListEntry from './MovieListEntry.jsx'
class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { movies } = this.props;
    return (
      <div id="movie-list">
        {movies.map((movie, i) =>
          <MovieListEntry
            key={movie + i}
            movie={movie}
          />
        )}
      </div>
    );
  }
}

export default MovieList;