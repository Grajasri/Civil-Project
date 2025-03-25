import React from 'react';
import './Service.css'; 
import { Link } from 'react-router-dom';


const Service = () => {
  return (
    <>
    <div className='setbackgrounds'>
    <div class="grid-containerss">
    <div class="grid-itemss">

        <h1 className='title-left'>THE FRONT RUNNERS IN THE <span style={{'color':'white'}}>REBAR DETAILING</span></h1>
        <h1  className='title-left'>BUSINESS FOR MORE THAN A <span style={{'color':'white'}}> DECADE </span></h1>
    </div>
    <div class="grid-itemss">
        <p className='content-right'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptatibus cumque, velit debitis nobis nisi harum. Veniam blanditiis quam facilis libero labore pariatur dignissimos totam quaerat id! Obcaecati, et aspernatur.</p>
    </div>
    </div>
    <div className="grid-containers">
      <div className="grid-items item1 ">
          <img
              src="budget.png"
              alt="Image 1"
              className="d-block  custom-images"
            />
            <h1 className='detail'>REBAR ESTIMATION</h1>
            <hr className="custom-lines" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia earum nemo porro corporis?</p>
            <Link className='linktopage'>Find out More</Link>
        </div>
      <div className="grid-items item2 ">
            <img
              src="Detailing.png"
              alt="Image 1"
              className="d-block  custom-images"
            />
            <h1 className='detail'>REBAR DETAILING</h1>
            <hr className="custom-lines" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia earum nemo porro corporis?</p>
            <Link className='linktopage'>Find out More</Link>
        </div>
      <div className="grid-items item3">

          <img
              src="3d-img.png"
              alt="Image 1"
              className="d-block  custom-images"
            />
            <h1 className='detail'>3D DETAILING</h1>
            <hr className="custom-lines" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia earum nemo porro corporis?</p>
            <Link className='linktopage'>Find out More</Link>
        </div>
    </div>
    </div>

    </>
  );
};

export default Service;
