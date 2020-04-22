import React from 'react';
import Watched from './Watched.jsx';

class MovieListEntry extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { movie } = this.props;
    return (
      <div className="movie">
        <div>{movie.title}</div><Watched movie={movie}/>
      </div>
    )
  }
}

export default MovieListEntry;