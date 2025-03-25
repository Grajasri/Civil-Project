import React, { useState } from "react";
import {  Row, Col, Form, Button, Alert} from "react-bootstrap";
import { Link } from 'react-router-dom';

import './SmartCon.css'

function SmartCon() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !emailRegex.test(email)) {
      setError("Please enter a valid name and email.");
      return;
    }
    
    setError("");
    console.log("Form Submitted: ", { name, email });
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center hole-divs" style={{ minHeight: "45vh" }}>
      <h1 className="text-center mb-5 titles">Save upto 50% on the first Project or no cost service upto 10 tons</h1>

      <Row className="w-100 justify-content-around ">
        <Col xs={12} md={4} className="mb-3">
          <Form.Control 
            type="text" 
            placeholder="Name" 
            value={name}
            onChange={(e) => setName(e.target.value)} 
          />
        </Col>
        <Col xs={12} md={4} className="mb-3">
          <Form.Control 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
      <p style={{'width':'400px'}}>{error && <Alert variant="danger">{error}</Alert>}</p>

        </Col>

        <Col xs={12} md={4} className="mb-3">

          <Button variant="primary" onClick={handleSubmit} className="button" >Submit</Button>
        </Col>
      </Row>
      <p style={{'color':'gray'}}>Visit our <span><Link>Contact Us</Link></span> Page</p>
    </div>
  );
}

export default SmartCon;
