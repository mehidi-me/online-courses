import React, { useRef, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GetCourses from './components/courses/GetCourses';

function App() {
 
  // toggle className
  const wrapper = useRef("wrapper")

  const menuToggle = (e) => {
    e.preventDefault(e);
    if(wrapper.current.className === "d-flex toggled"){
      wrapper.current.className = "d-flex"
    }else{
      wrapper.current.className = "d-flex toggled"
    }
  }

  const [cart, setCart] = useState([{}]);
  const totalPrice = cart.reduce((total, prd) => prd.price ? total + prd.price : 0, 0);

const addToCardEvent = (course) => {
  if(cart){
    cart.map((car) => {
      if(car.id === course.id){
       return alert("this course alrady added!")
      }else{
        const newCart = [...cart, course];
       return setCart(newCart);
      }
    })
  }   
}

  return (
    <div className="d-flex toggled" id="wrapper" ref={wrapper}>
  {/* Sidebar */}
  <div className="bg-light border-right" id="sidebar-wrapper">
  <div className="sidebar-heading">Online Courses </div>
    <div className="list-group list-group-flush">
      <ul>
        {
          cart ? cart.map((data,i) => { return <div key={i}><li>{data.title}</li><span>price : ${data.price}</span></div>}) : 'Loading...'
        }
        
      </ul>
      <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
      <button className="btn btn-primary" onClick={() => {alert(`You buy ${cart.length} item and total price $${totalPrice.toFixed(2)}.....Thank You`)}}>Chack Out</button>
    </div>
  </div>
  {/* /#sidebar-wrapper */}
  {/* Page Content */}
  <div id="page-content-wrapper">
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
  <button className="btn btn-primary" onClick={menuToggle} id="menu-toggle">View Card (<span style={{color:"red"}}>{cart.length - 1}</span>)</button>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <div className="container-fluid">
      <GetCourses addToCardEvent={addToCardEvent}/>
    </div>
  </div>
  {/* /#page-content-wrapper */}
</div>

  );
}

export default App;
