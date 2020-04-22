import React from 'react';
import $ from 'jquery';

class Watched extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      watchedBool: 0
    };

    this.watch = this.watch.bind(this);
  }

  watch() {
    const { watchedBool } = this.state;
    const { watched } = this.props.movie;
    const { movie } = this.props;
    if (watchedBool === 0) {
      this.props.movie.watched = 1;
      $.ajax({
        url: '/movies',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(this.props.movie),
        success: () => {
          this.setState({
            watchedBool: 1
          })
        }
      })
      this.props.update();
    } else {
      this.props.movie.watched = 0;
      $.ajax({
        url: '/movies',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(this.props.movie),
        success: () => {
          this.setState({
            watchedBool: 0
          })
        }
      })
      this.props.update();
    }
  }

  render() {
    const { watched } = this.props.movie;
    if (watched) {
      return (
        <a href="#" className="watched"><i className="fas fa-eye-slash" onClick={this.watch}></i></a>
      )
    } else {
      return (
        <a href="#" className="watched"><i className="fas fa-eye" onClick={this.watch}></i></a>
      )
    }
  }
}

export default Watched;