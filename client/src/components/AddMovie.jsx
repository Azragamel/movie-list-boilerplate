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
  }

  render() {
    const { title } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input className="search-bar" name="title" type="text" value={title} onChange={this.handleChange}/>
        <button className="btn">
          <span>Add Movie</span>
        </button>
      </form>
    );
  }
}

export default AddMovie;