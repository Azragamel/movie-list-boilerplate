import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

class WatchedList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { movies } = this.props;
    const { update } = this.props;
    let watched = [];
    movies.forEach((movie) => {
      if (movie.watched === 1) {
        watched.push(movie);
      }
    });
    return (
      <div id="movie-list">
        {watched.map((movie, i) =>
          <MovieListEntry
            key={movie + i}
            movie={movie}
            update={update}
          />
        )}
      </div>
    );
  }
}

export default WatchedList;