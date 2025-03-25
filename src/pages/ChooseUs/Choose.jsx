import { Row, Col } from 'react-bootstrap';
import './Choose.css'; 

function Choose() {
  return (
    <div className="container">
      <div className="center-content">
        <h1 className='custom-head'>BENEFITS CHOOSING US</h1>
      </div>
      <Row className="" style={{"gap":"55px"}}>
        <Col xs={12} md={4} lg={2} className="custom-col">
          <div className="custom-item">
            <img
              src="img-one.svg"
              alt="Image 1"
              className="d-block w-100 custom-image"
            />
            <h1 className="custom-title">QUALIFIED RESOURCES</h1>
          </div>
        </Col>
        <Col xs={12} md={4} lg={2} className="custom-col">
          <div className="custom-item">
            <img
              src="img-two.svg"
              alt="Image 2"
              className="d-block w-100 custom-image"
            />
            <h1 className="custom-title">PROFICIENT COSTING</h1>
          </div>
        </Col>
        <Col xs={12} md={4} lg={2} className="custom-col">
          <div className="custom-item">
            <img
              src="img-three.svg"
              alt="Image 3"
              className="d-block w-100 custom-image"
            />
            <h1 className="custom-title">SAVING TIME</h1>
          </div>
        </Col>
        <Col xs={12} md={4} lg={2} className="custom-col">
          <div className="custom-item">
            <img
              src="img-four.svg"
              alt="Image 4"
              className="d-block w-100 custom-image"
            />
            <h1 className="custom-title">ITEMIZED REPORT</h1>
          </div>
        </Col>
        <Col xs={12} md={4} lg={2} className="custom-col">
          <div className="custom-item">
            <img
              src="img-five.svg"
              alt="Image 5"
              className="d-block w-100 custom-image"
            />
            <h1 className="custom-title">SATISFACTION QUARANTEED</h1>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Choose;
