import React, { Component } from 'react';
import RenderBlogList from '../../components/RenderBlogList'
import axios from 'axios';
import DisplayPost from '../../components/DisplayPost';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import './../../components/Landing/style.css';




class ViewPosts extends Component {
  state = {
    blogs: [],
    inputText: ''
  }

  async componentDidMount() {
    console.log("Inside componentDidMount");
    this.updateBlogs();
  }
  updateBlogs = async () => {
    try {
      const { data } = await axios.get('/api/blogs');
      this.setState({ blogs: data });
    } catch (e) {
      console.log(e);
    }
  }
  handleDeleteBlog = async id => {
    try {
      const { data } = await axios.delete(`/api/blogs/${id}`);
      this.setState({ blogs: data });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <div className="viewPostsImage">
          <Container fluid>
            <Row>
              <Col span={10} offset={1}>
                <RenderBlogList
                  test={this.state.sample}
                  items={this.state.blogs}
                  handleDelete={this.handleDeleteBlog}
                  handleUpdateBlog={this.handleUpdateText} />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default ViewPosts;