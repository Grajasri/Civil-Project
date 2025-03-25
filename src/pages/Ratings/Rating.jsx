import React from 'react';
import './Rating.css'
import { Row, Col, Container } from 'react-bootstrap';
import { FaHandshake, FaStar, FaUserFriends      } from 'react-icons/fa'; // Import new icons

const Rating = () => {
  return (
    <Container>
      <h1 className="text-center my-4 head">RATINGS OVERVIEW</h1> {/* Added H1 heading */}
      <Row className="text-center">
        <Col sm={12} md={4}>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <FaHandshake className='icon-size' /> {/* Handshake icon */}
            <div className="mt-3 count">1500+</div>
            <hr className='custom-line'/> 
            <h1 className='cont'>Projects Completed</h1>
          </div>
        </Col>
        <Col sm={12} md={4}>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <FaStar className='icon-size' /> {/* Star icon */}
            <div className="mt-3 count">15+</div>
            <hr className='custom-line'/> 
            <h1 className='cont'>Years Experience</h1>
          </div>
        </Col>
        <Col sm={12} md={4}>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <FaUserFriends className='icon-size' /> {/* Users icon */}
            <div className="mt-3 count">10+</div>
            <hr className='custom-line'/>
            <h1 className='cont'>Happy Team</h1>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Rating;
