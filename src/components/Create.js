import React from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios';

//import {Link} from "react-router-dom";
import {API_URL} from "../components/URL";
import "../components/Create.css";
import {Link} from "react-router-dom";
import Home from "./Home.js"
import Read from "./Read.js"
import About from "./About.js"


//import Read from "//components/Read.js";

function Create(){
  const [descriptionValue,setDescriptionValue]=useState();
  const [Part,setPart]=useState();
  const [Mount,setMount]=useState(); 
  const [Connector,setConnector]=useState(); 
  const [Make,setMake]=useState(); 
  const [Status,setStatus]=useState(); 
  const [Location,setLocation]=useState(); 
  const [isOpen, setIsOpen] = useState(false);
 



  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsOpen(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const postData = async()=>{
    console.log(Part);
    console.log(Mount);
    await axios.post(API_URL,{
      descriptionValue,Part,Mount,Connector,Make,Status,Location
    })

    document.getElementsByClassName("btn").innerHTML="I HAVE CHANGED";
  }
function sendalert(){
  setIsOpen(true);
  
};


  
    return (
      <div className="first" style={{backgroundImage:"url(./assests/Create_bg.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}>
         <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" id="well">
          <Link to="/Home" className="bolt" id="ginger">Home</Link>
          </li>
          <li  id="well">
          <Link to="/Read" className="bolt" id="ginger">Repository</Link>
          </li>
          
          <li  id="well">
          <Link to="/About" className="bolt" id="ginger">About</Link>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
        <form className="row g-3" id="void" >
        <div className="col-md-6">
          <label for="validationCustom01" className="form-label">DESCRIPTION OF COMPONENT LIST</label>
          <input type="text" className="form-control" id="validationCustom01" placeholder="Solenoid Actuator Front 1" value={descriptionValue} onChange={event => setDescriptionValue
          (event.target.value)} />
        </div>
        <div className="col-md-6">
          <label  className="form-label">PART NUMBER</label>
          <input type="text" className="form-control" placeholder='LRQ-250CP'  value={Part} onChange={event => setPart
          (event.target.value)} />
        </div>
        <div className="col-md-6">
          <label  className="form-label">MOUNTING DETAILS</label>
          <input type="text" className="form-control"  value={Mount} placeholder="Fixed Mounting" onChange={event => setMount
          (event.target.value)} />
        </div>
        <div className="col-md-6 ">
          <label  className="form-label">CONNECTOR</label>
          <input type="text" placeholder='M8,4Pin,Angled' className="form-control"   value={Connector} onChange={event => setConnector
          (event.target.value)} />
        </div>
        <div className="col-md-6 ">
          <label  className="form-label">MAKE</label>
          <input type="text" placeholder='Keyence' className="form-control"   value={Make} onChange={event => setMake
          (event.target.value)} />
        </div>
        <div className="col-md-6 ">
          <label  className="form-label">CE STATUS</label>
          <input type="text" placeholder='Finalized' className="form-control"   value={Status} onChange={event => setStatus
          (event.target.value)} />
        </div>
        <div className="col-12 " >
          <label  className="form-label">2D AND 3D LOCATION</label>
          <input type="text"  className="form-control" id="location"  value={Location} onChange={event => setLocation
          (event.target.value)} />
        </div>
        
       
         
    <button onClick={(e)=>{
      e.preventDefault();
      postData();
      sendalert();
      setDescriptionValue('');
      setMount('');
      setPart('');
      setConnector('');
      setMake('');
      setStatus('');
      setLocation('');
    }}type="submit" className="btn btn-primary " id="fine" >Submit</button>
    
    {isOpen && <div class="alert alert-success" role="alert">
  Registered in Repository Successfully
</div>}
      </form>
      

      
      </div>
      
      
    )
        }
export default  Create;