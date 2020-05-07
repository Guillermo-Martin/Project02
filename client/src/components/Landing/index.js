import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom';
import './../Landing/style.css';
import NewPostModal from '../NewPostModal';
import NewPostToggle from '../NewPostToggle';
import EditPostModal from '../EditPostModal';
import EditPostToggle from '../EditPostToggle';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Landing extends Component {


  render() {
    return (
      <div>
        <div className="hero-image">
          <div className="hero-text">
            <h1 className="animated fadeIn" id="animated-example">Hi Im a new blog site </h1>
            <p className="animated fadeIn" id="animated-example">and I'm a paragraph tag</p>
        <Container>
          <Row>
            <Col>
            <div>
           <div>
             in side another div
           </div>
            </div>
            </Col>
            <Col>
            I am another column
            </Col>
          </Row>
        </Container>
            <NewPostToggle>
              {({ show, toggle, handleSubmit, handleChange, author, textbox }) => (
                <NewPostModal show={show} toggle={toggle} handleSubmit={handleSubmit} handleChange={handleChange} author={author} textbox={textbox} />
              )}
            </NewPostToggle>

            <EditPostToggle>
              {({ show, toggle, handleSubmit, handleChange, deletePost, author, textbox }) => (
                <EditPostModal show={show} toggle={toggle} handleSubmit={handleSubmit} handleChange={handleChange} deletePost={deletePost} author={author} textbox={textbox} />
              )}
            </EditPostToggle>

            <Link to="/view" className="btn btn-primary btn-lg ml-3" role="button">View</Link>
          </div>
        </div>
      </div>

    )
  }
}

export default withRouter(Landing);