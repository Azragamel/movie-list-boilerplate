import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { addMovie } = this.props;
    addMovie(this.state);
    this.setState({
      title: ''
    })
  }

  render() {
    const { title } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input className="search-bar" name="title" type="text" value={title} onChange={this.handleChange}/>
        <button className="btn">
          <i className="fas fa-play"></i>
        </button>
      </form>
    );
  }
}

export default AddMovie;