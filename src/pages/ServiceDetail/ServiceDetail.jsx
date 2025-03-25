import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Nav, NavLink, Button } from 'react-bootstrap';
import './ServiceDetail.css'

const ServiceDetail = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center py-5">
        <Col xs="auto mt-5">
          <h1 className='title-head' >REBAR DETAILING</h1>
        </Col>
      </Row>
      <Row className="justify-content-center py-1">
        <Col xs="auto">
          <Nav className="justify-content-center">
            <NavLink href="/" className="nav-link-hover">HOME</NavLink>
            <NavLink href="#link2" className="nav-link-hover">OUR SERVICE</NavLink>
            <NavLink href="./ServiceEsti" className="nav-link-hover">REBAR ESTIMATION</NavLink>
          </Nav>
        </Col>
      </Row>

      <Row className="justify-content-center py-2">
        <Col xs={12} className="text-center">
          <hr style={{ width: '500px', margin: 'auto' }} />
        </Col>
      </Row>

      <Row className="justify-content-center py-5">
        <Col xs="auto">
          <h1 >Rebar Estimation is a talent which requires experiences !</h1>
        </Col>
      </Row>

      <Row className="py-1">
        <Col sm={6}>
          <Row>
            <Col className=''>
              <p className=''>Rebar is a steel reinforcing rod which supports and strengthens the concrete, it is cast into the concrete as part of the construction process.</p>
              <p className=''>We have a dedicated rebar estimating team in our office. We can send you a customized estimate for your project on schedule.</p>
              <p className=''>At Pramoda Rebar, we provide fast and accurate quotes for our clients. Our estimate includes:</p>
            </Col>
          </Row>
        </Col>

        <Col sm={6} className="text-center">
          <img src="./rebar-detailing.webp" alt="Example" className="img-fluid" />
        </Col>
      </Row>

      <Row className="justify-content-center py-3">
        <Col xs="auto">
          <Button variant="primary">View Page</Button>
        </Col>
      </Row>
      <div className='setback'>
      <Row className="py-5">
        <Col md={4} className="d-flex flex-column text-center ">
          <h1 className='par'>USA Address</h1>
          <div className='pp'>
          <p className='paraobo'>PRAMODA REBAR LLC</p>
          <p className='paraobo'>Mailing Address: 3031 Prado Verde.</p>
          <p className='paraobo'>New Braunfels, TX 78130</p>
          </div>
        </Col>

        <Col md={4} className="d-flex flex-column text-center ">
          <h1 className='par'>India Address</h1>
          <div className='pp'>
          <p className='paraobo'>PRAMODA REBAR (P)Ltd.</p>
          <p className='paraobo'>Address: 18-21, 2nd floor,</p>
          <p className='paraobo'>Molasiar Maligai,</p>
          <p className='paraobo'>West Muniappan Kovil Street,</p>
          <p className='paraobo'>Trichengode(TK), Namakkal (DT),</p>
          <p className='paraobo'>Tamil Nadu - 637211 </p>
          </div>
        </Col>
        <Col md={4} className="d-flex flex-column text-center ">
          <h1 className='par'>Connect with us</h1>
          <div className='pp'>
          <p className='paraobo'>USA: +1 830 730 2573</p>
          <p className='paraobo'>INDIA: +91-915 999 0008</p>
          <p className='paraobo'>
            Having a question?Visit our <Link to="/somewhere">contact us</Link>page.
          </p>
          </div>
        </Col>
        
      </Row>
      </div>

    </Container>
  );
};

export default ServiceDetail;
