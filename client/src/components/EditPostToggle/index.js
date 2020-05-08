import React, { Component } from 'react';
import axios from 'axios';

class EditPostToggle extends Component {

  state = {
    author: '',
    content: '',
    show: false
  }

  toggle = () => {
    if (this.state.show) {
      this.setState({
        show: !this.state.show,
        content: '', 
        author: ''
      })
    } else {
      this.setState({
        show: !this.state.show,
      })
    }
  }

  // componentDidMount() {
  //   // make an axios call to get blog post by id
  //   // save author to name and bodytext to textbox inside this.state
  // }
  

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  handleFormSubmit = async event => {
    event.preventDefault();
    console.log("You clicked the button!");
    try {
      const { data } = await axios.post('/api/blogs', { content: this.state.content, author: this.state.author });
      // axios.patch request to update blog entry in database
      console.log(data)
      this.toggle();
    } catch (e) {
      console.log(e);
    }
  }

  deletePost = event => {
    // axios call to delete blog entry from db by its id
    console.log(event);
  }

  render() {
    return (
      <div>
        <button onClick={this.toggle} className="btn btn-primary btn-lg ml-3 cardBtn">Edit Post</button>
        {this.props.children({
          show: this.state.show,
          toggle: this.toggle,
          handleSubmit: this.handleFormSubmit,
          handleChange: this.handleInputChange,
          deletePost: this.deletePost,
          author: this.state.author,
          content: this.state.content
        })}
      </div>
    )
  }
}


export default EditPostToggle;