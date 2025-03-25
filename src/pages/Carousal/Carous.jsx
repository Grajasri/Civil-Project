import Carousel from 'react-bootstrap/Carousel';
import './Carous.css'; 

function Carous() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item className="custom-carousel-item">
        <div className="custom-background" style={{ backgroundImage: 'url(Civil-img-home-one.jpg)' }} />
        <Carousel.Caption className="custom-caption">
          <h5 className='captionh5'>Our Team Can Create an</h5>
          <p className='captionpara'>EFFICIENT AND COST EFFECTIVE REPORTS. </p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item className="custom-carousel-item">
        <div className="custom-background" style={{ backgroundImage: 'url(Civil-img-home-two.jpg)' }} />
        <Carousel.Caption className="custom-caption">
        </Carousel.Caption>
      </Carousel.Item> */}
      <Carousel.Item className="custom-carousel-item">
        <div className="custom-background" style={{ backgroundImage: 'url(Civil-img-home-three.jpg)' }} />
        <Carousel.Caption className="custom-caption">
          <h5 className='captionh5'>Start YOur Project with the</h5>
          <p className='captionpara'>BEST WORLDWIDE DETAILING SERVICES</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carous;
