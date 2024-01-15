import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Nproduct from "./Nproduct";
import {productData,responsive} from "./data";

function Slider() {

const product =productData.map((item)=>(<Nproduct 
name={item.name} 
src={item.src}
price={item.price}
description={item.description}/>));   
  return (
    <><Carousel showDots={true}  transitionDuration={500} responsive={responsive}>{product} 
  </Carousel>;
  </>
  )
}
/*<div className="card">
    <img src="./img/dw.jpg" style={{width:"200px"}} alt=""/>
    <h2>sport </h2>
    <p className="para">paragraph</p>
    <p>
    <button>Add to cart</button>    
    </p>
    </div>
  
     <div className="card">
    <img src="./img/dw.jpg" style={{width:"200px"}}alt=""/>
    <h2>sport </h2>
    <p className="para">paragraph</p>
    <p>
    <button>Add to cart</button>    
    </p>
    </div>
     <div className="card">
    <img src="./img/dw.jpg" style={{width:"200px"}}alt=""/>
    <h2>sport </h2>
    <p className="para">paragraph</p>
    <p>
    <button>Add to cart</button>    
    </p>
    </div>
     <div className="card">
    <img src="./img/dw.jpg" style={{width:"200px"}}alt=""/>
    <h2>sport </h2>
    <p className="para">paragraph</p>
    <p>
    <button>Add to cart</button>    
    </p>
    </div>*/


export default Slider;