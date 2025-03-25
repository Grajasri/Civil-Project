import React from 'react';
import { Container, Row, Col, Nav, NavLink, Button, Image } from 'react-bootstrap';
import SmartCon from '../SmartCon/SmartCon';
import './AboutUs.css';

const AboutUS = () => {
  return (
    <Container fluid>
      {/* WHO WE ARE Section */}
      <Row className="justify-content-center py-3">
        <Col xs="auto" className="mt-5">
          <h1 className="title-heads">WHO WE ARE</h1>
        </Col>
      </Row>

      {/* Navigation Links */}
      <Row className="justify-content-center py-2">
        <Col xs="auto">
          <Nav className="justify-content-center">
            <NavLink href="/" className="nav-link-hover linklink">HOME</NavLink>
            <NavLink href="#link2" className="nav-link-hover linklink">WHO WE ARE</NavLink>
          </Nav>
        </Col>
      </Row>

      {/* Horizontal Line */}
      <Row className="justify-content-center py-2">
        <Col xs={12} className="text-center">
          <hr style={{ width: '500px', margin: 'auto' }} />
        </Col>
      </Row>

      {/* Image and Content Section */}
      <Row className="g-0 py-5">
        {/* First Column (3/4 width) with Image */}
        <Col xs={12} md={9}>
          <Image src="Civil-img-home-three.jpg" fluid alt="Image on the left"  />
        </Col>

        {/* Second Column (1/4 width) with two nested columns */}
        <Col xs={12} md={3}>
          <Row className="g-0 ">
            {/* First nested Column (Text Content) */}
            <Col xs={12}>
              <div className="oi">
                <h3>Text Content</h3>
                <p>This is some text content in the first nested column.</p>
              </div>
            </Col>

            {/* Second nested Column (Image aligned to the right) */}
            <Col xs={12} className="d-flex justify-content-end align-items-center">
              <Image src="./human-one.jpg"  alt="Image on the right"  height={200} width={200}/>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* Additional Description */}
      <Row className="justify-content-center py-3">
        <Col xs="auto">
          <h1 className="title-paras">
            Pramoda Rebar is an innovative rebar service firm that specializes in estimating and detailing.
            We are a group of professionals with experience in this field for more than 15+ years.
          </h1>
        </Col>
      </Row>

      {/* Rebar Description and Image */}
      <Row className="py-1">
        <Col sm={6}>
          <Row>
            <Col className="firstdivs">
              <p className="paras">
                Rebar is a steel reinforcing rod which supports and strengthens the concrete, it is cast into
                the concrete as part of the construction process.
              </p>
              <p className="paras">
                We have a dedicated rebar estimating team in our office. We can send you a customized estimate for
                your project on schedule.
              </p>
              <p className="paras">
                At Pramoda Rebar, we provide fast and accurate quotes for our clients. Our estimate includes:
              </p>
            </Col>
          </Row>
        </Col>

        <Col sm={6} className="text-center">
          <img src="./about-img-two.webp" alt="Rebar Example" className="hie" height={400} />
        </Col>
      </Row>

      {/* View Page Button */}
      <Row className="justify-content-center py-3">
        <Col xs="auto">
          <Button variant="primary">View Page</Button>
        </Col>
      </Row>

      {/* SmartCon Component */}
      <SmartCon />
    </Container>
  );
};

export default AboutUS;
