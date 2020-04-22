import React from 'react';
import Watched from './Watched.jsx';

class MovieListEntry extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { update } = this.props;
    const { movie } = this.props;
    return (
      <div className="movie">
        <div>{movie.title}</div><Watched movie={movie} update={update}/>
      </div>
    )
  }
}

export default MovieListEntry;