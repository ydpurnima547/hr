
import './App.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Routes, Route } from "react-router-dom";
import Cl from "./practice/Cl";
import Ca from "./practice/Ca";
import Slider from "./practice/Slider";
function App() {
  return (
    <div className="App">
     
      <Routes>
<Route path ="/new1" element={<Slider/>}/>
      </Routes>
    <Cl/>
  
    <nav className="navbar navbar-expand-lg ">
      <div className="container">
        <a className="navbar-brand" href="#"><img src="img/sn.jpg"  className="rounded-circle h-25 w-25"/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"><i className="fa-solid fa-bars" style={{fontSize:"30px"}} ></i></span>
        </button> 
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active mx-4" aria-current="page" href="#">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active mx-4" href="#">ABOUT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active mx-4" href="#">SKILLS</a>
            </li>
            <li className="nav-item">
                <a className="nav-link active mx-4" href="#">MyWORK</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active mx-4" href="#">CONTACT</a>
              </li>
           
          </ul>
          <form>
            <button className="btn" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
 <section className="about m-5">
      <div className="container">
          <div className="row">
              <div className="col-md-6 col-sm-12">
                  <div className="home">
                      <h1 style={{color:"orange"}}> HI I'm</h1>
                      <h2 className="name" style={{color:"#f1f3f4"}}>Saurabh</h2>
                      <h3 style={{color: "pink"}}> I am a web developer.</h3>
                      <form>
                        <button  className="bt mt-4 mx-auto" type="submit">Hire Me </button>
                      </form>
                  </div>
              </div>
              
              <div className="col-md-6 col-sm-12">
                  <img src="./img/sn1-rem.png" className="img-fluid mx-auto" alt="..."/>
              </div>
          </div>
      </div>
      </section>
 <section> 
      <div className="container m-5"> <div className="text-center"><h1>Skills</h1></div></div>
    </section>
    
  <section className="service">
      <div className="container">
          <div className="row">
              <div className="col">
                <div className="card m-3" >
                  <i className="fa-solid fa-pen text-center mt-3"></i>
                   <div className="card-body">
                    <h5 className="card-title text-center text-white">App Design</h5>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btt">Read More</a>
                  </div>
                </div>
              </div>
               <div className="col">
                <div className="card m-3" >
                  <i className="fa-solid fa-code text-center mt-3"></i>
                  <div className="card-body">
                    <h5 className="card-title text-center text-white">Web Development</h5>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btt">Read More</a>
                  </div>
                </div>
              </div> 
              <div className="col">
                <div className="card m-3" >
                  <i className="fa-solid fa-user-tie text-center mt-3"></i>
                   <div className="card-body">
                    <h5 className="card-title text-center text-white">Freelancer</h5>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btt">Read More</a>
                  </div>
                </div>
              </div>
          </div>
         
      </div>
    </section> 
   
    <section> 
      <div className="container"> <div className="text-center"><h1>My Work</h1></div></div>
    </section>
    <section className="mywork">
      <div className="container">
          <div className="row">
          <OwlCarousel className='owl-theme' loop margin={10} nav>
      <div className="item">
              <div className="card m-4">
                 <img src="img/one.jpg" className="card-img-top" alt="..."/>
                   <div className="card-body">
                    <h5 className="card-title">One-page Layout</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btmw">View Project</a>
                   </div>
              </div>
            </div>
            <div className="item">
              <div className="card m-4">
                 <img src="img/ns.jpg" className="card-img-top" alt="..."/>
                   <div className="card-body">
                     <h5 className="card-title">NEWS Website</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btmw">View Project</a>
                   </div>
              </div>
            </div>
            <div className="item">
              <div className="card m-4">
                 <img src="img/rt.jpg" className="card-img-top" alt="..."/>
                   <div className="card-body">
                       <h5 className="card-title">Restaurant Website</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btmw">View Project</a>
       
                   </div>
              </div>
            </div>
            <div className="item">
              <div className="card m-4">
                 <img src="img/pr.png" className="card-img-top" alt="..."/>
                   <div className="card-body">
                    <h5 className="card-title">Product Landing Page</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btmw">View Project</a>
                
                   </div>
              </div>
            </div>
            <div className="item">
              <div className="card m-4">
                 <img src="img/bg.jpg" className="card-img-top" alt="..."/>
                   <div className="card-body">
                    <h5 className="card-title">Responsive Blog Website</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btmw">View Project</a>
                
                   </div>
              </div>
            </div>
            <div className="item">
              <div className="card m-4">
                 <img src="img/qu3.png" className="card-img-top" alt="..."/>
                   <div className="card-body">
                    <h5 className="card-title">Quiz App</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btmw">View Project</a>
                   </div>
              </div>
            </div>
          
           </OwlCarousel>  </div></div>
   </section> 
  <section> 
        <div className="container m-5"> <div className="text-center"><h1>Contact</h1></div></div>
      </section>
      <section className="contact">
      <div className="container d-flex justify-content-center">
        <div className="contact-box w-75"> 
       <div className="left">  
        <img src="img/frr.png" className="img-fluid mt-2" alt="..."/>
          <table>
            <tr>
              <td>Email</td>
              <td>contactus@example.com</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>+7987654322</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>Some quick example text to build on the
                    example text to build on the<br/>
                    example text to build
                  </td>
                  </tr>
            </table>
            <div className="footer d-flex justify-content-center m-5">
              <i className="fa-brands fa-instagram p-3"></i>
              <i className="fa-brands fa-github p-3"></i>
              <i className="fa-brands fa-facebook p-3"></i>
              <i className="fa-brands fa-linkedin p-3"></i>
              <i className="fa-brands fa-youtube p-3"></i>
            </div></div>
        <div className="right">
        <h2 className="m-3">Reach us</h2>
        <div className="p-4">
          <input type="text" className="field" placeholder="Name"/>
          <input type="email" className="field" placeholder="Email"/>
          <textarea className="field" >Message </textarea>
        </div>
          <button className="bt1 m-3">send</button>
        </div>
        </div>
      </div>
    </section> 
 
<Ca/>
 
 </div>
  );
}

export default App;
