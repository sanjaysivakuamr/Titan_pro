import React,{useState,useEffect} from "react";
import {useNavigate} from "react-router-dom"
import axios from 'axios'; 
import "../components/Update.css";
import {Link} from "react-router-dom";
import Home from "./Home.js"
import Read from "./Read.js"
import About from "./About.js"
//import {API_URL} from "../components/URL";
function Update(){
    const [descriptionValue,setDescriptionValue]=useState('');
    const [Part,setPart]=useState('');
    const [Mount,setMount]=useState(''); 
    const [id,setid]=useState(''); 
    const [Connector,setConnector]=useState(); 
    const [Make,setMake]=useState(); 
    const [Status,setStatus]=useState(); 
    const [Location,setLocation]=useState(); 
    const [isOpen, setIsOpen] = useState(false);

    const navigate=useNavigate();
    useEffect(() => {
      if (isOpen) {
        const timer = setTimeout(() => {
          setIsOpen(false);
        }, 3000);
        return () => clearTimeout(timer);
      }
    }, [isOpen]);

    const updateUser=async()=>{
        console.log(id)
        await axios.put("https://6410917bff89c2e2d4e27f7d.mockapi.io/api/comments/"+id,{
            descriptionValue,
            Part,
            Mount,Connector,Make,Status,Location
        });
        navigate('/Read');

    }
    function sendalert(){
      setIsOpen(true);
      
    };
  
   
return(
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
          <Link to="/Home" className="bolt">Home</Link>
          </li>
          <li class="nav-item" id="well">
          <Link to="/Read" className="bolt">Repository</Link>
          </li>
          
          <li class="nav-item" id="well">
          <Link to="/About" className="bolt">About</Link>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
    <form className="row g-3" id="hello">
        <div className="col-md-6">
          <label  className="form-label">DESCRIPTION OF COMPONENT LIST</label>
          <input type="text" className="form-control"  value={descriptionValue} onChange={event => setDescriptionValue
          (event.target.value)}/>
        </div>
        <div className="col-md-6">
          <label  className="form-label">PART NUMBER</label>
          <input type="text" className="form-control"   value={Part} onChange={event => setPart
          (event.target.value)}/>
        </div>
        <div className="col-md-6">
          <label  className="form-label">MOUNTING DETAILS</label>
          <input type="text" className="form-control"  value={Mount} placeholder="range,beam,dia" onChange={event => setMount
          (event.target.value)}/>
        </div>
        <div className="col-md-6 ">
          <label  className="form-label">CONNECTOR</label>
          <input type="text" placeholder='M8,4Pin,Angled' className="form-control"   value={Connector} onChange={event => setConnector
          (event.target.value)} required/>
        </div>
        <div className="col-md-6 ">
          <label  className="form-label">MAKE</label>
          <input type="text" placeholder='Keyence' className="form-control"   value={Make} onChange={event => setMake
          (event.target.value)} required/>
        </div>
        <div className="col-md-6 ">
          <label  className="form-label">CE STATUS</label>
          <input type="text" placeholder='Finalized' className="form-control"   value={Status} onChange={event => setStatus
          (event.target.value)} required/>
        </div>
        <div className="col-12 " >
          <label  className="form-label">2D AND 3D LOCATION</label>
          <input type="text"  className="form-control" id="location"  value={Location} onChange={event => setLocation
          (event.target.value)} required/>
        </div>
        
        <div className="col-12 ">
    <button onClick={(e)=>{
      e.preventDefault();
      updateUser()
      sendalert()
      
    }}type="submit" className="btn btn-primary " id="fine" >Update</button>
  </div>
  {isOpen && <div class="alert alert-success" role="alert">
  Registered in Repository Successfully
</div>}
      </form>
      </div>
)
}
export default Update