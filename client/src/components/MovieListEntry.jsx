import React from 'react';
import Watched from './Watched.jsx';

class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      movie: this.props.movie
    }
  }

  render() {
    const { movie } = this.state;
    return (
      <div className="movie">
        <div>{movie.title}</div><Watched/>
      </div>
    )
  }
}

export default MovieListEntry