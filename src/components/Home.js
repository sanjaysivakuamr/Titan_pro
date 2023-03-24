import react,{Component} from "react";
import "../components/Home.css";
import Create from "../components/Create.js";
import Read from "../components/Read.js";
import Update from "../components/Update.js";
import {Link} from "react-router-dom";
import {useState} from 'react';
import axios from 'axios';
import {API_UR} from "../components/URL";


var show;
export class Home extends Component{
  constructor(props){
    super(props)
    this.state={
      Email:"",
      Password:"",
      data:[],
      flag:true,
      flag1:false,
      checkMail:"",
      name:"",
      checkPass:"",
      Name:"",
      apiData:[],disp:false,
      hello:"",
      showAlert: false,
      help:""

    }
    
   
  }
  register =(event)=>{
    
     axios.post(API_UR,
      {Email:this.state.Email,Password:this.state.Password,Name:this.state.Name}
    )
    this.setState({      flag:true,flag1:false
    })

    //alert("Creditials are registered Successfully")
   // window.location.reload(false);
  }
  have=(event)=>{
    console.log("mew");
    this.setState({      flag:false,flag1:true
    })
  }
  base=(event)=>{
   
    event.preventDefault();
    fetch (API_UR)
    .then((resp)=>resp.json())
    .then((data)=>{
      const user =data.find((user)=>
      user.Email===this.state.checkMail &&
      user.Password===this.state.checkPass);
      if(user){
        
        this.setState({
         help:`${user.Name}`,
        });
        //console.log(help)
      this.setState({      flag:false,flag1:false,disp:true
      })

      }
      else{
        console.log("hi");
        this.setState({ showAlert: true });
       setTimeout(() => {
         this.setState({ showAlert: false });
      }, 4000);
      }
    });
  

  }


    render(){
      if(this.state.flag)
      {
        
       show=( <div className="video-container">
        <video autoPlay="autoPlay" loop="loop" muted>
          <source src="./assests/titan1vid.mp4" type="video/mp4" />
        </video>
        <nav className="navbar ">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src="./assests/Titan_logo.png" alt="Bootstrap" width="24" height="24" className="titanimg"/>
    </a>
    
  </div>
  
</nav>

<div className="content">
{this.state.showAlert && <div className="alert alert-danger" id="invalid" role="alert">
  Invalid Email or Password
</div>}

 <div className="text">Login</div>
  <form action="#">
    <div className="field">
      <span className="fa fa-user"></span>
      <input type="text" placeholder="Email Id" value={this.state.checkMail} onChange={(event)=>{this.setState({checkMail:event.target.value})}}required/>
   
    </div>
    <div className="field">
      <span className="fa fa-lock"></span>
      <input type="password" placeholder="Password" value={this.state.checkPass} onChange={(event)=>{this.setState({checkPass:event.target.value})}}/>
      
    </div>
    <div className="login">
    <button className="log" onClick={this.base}>Log in</button>
    <button onClick={this.have}>Sign up</button>
    </div>

    <div className="or">Or</div>
    <div className="icon-button"> 
        
      <span className="facebook">Facebook</span>

      <span>  Google</span>


    </div>
  </form>
</div>
</div>)


      }
else if(this.state.flag1){
  show=(
    <div className="video-container" >
        <video autoPlay="autoPlay" loop="loop" muted>
          <source src="./assests/titan1vid.mp4" type="video/mp4" />
        </video>
        <nav className="navbar ">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src="./assests/tit .png" alt="Bootstrap" width="30" height="24" className="titanimg"/>
    </a>
    
  </div>
  
</nav>

<div className="content">
 <div className="text">Sign Up</div>
  <form action="#">
  <div className="field">
      <span className="fa fa-user"></span>
      <input type="text" placeholder="Username" value={this.state.Name} onChange={(event)=>{this.setState({Name:event.target.value})}}required/>
   
    </div>

    <div className="field">
      <span className="fa fa-user"></span>
      <input type="email" placeholder="Email Id" value={this.state.Email} onChange={(event)=>{this.setState({Email:event.target.value})}}required/>
   
    </div>
    <br></br>
    <div className="field">
      <span className="fa fa-lock"></span>
      <input type="password" placeholder="Password" value={this.state.Password} onChange={(event)=>{this.setState({Password:event.target.value})}}/>
      
    </div>
    
    <div className="login">
    <button onClick={this.register}>Sign up</button>
    </div>
   

    
  </form>
</div>
</div>)
  
}
else if(this.state.disp){
  show=( <div className="video-container" style={{backgroundImage:"url(./assests/titanbg.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}>
        
        <nav className="navbar ">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src="./assests/tit .png" alt="Bootstrap" width="30" height="24" className="titanimg"/>
    </a>
    <ul className="nav justify-content-center">
  <li className="nav-item">
    <Link to="/Create" className="innernav">Create</Link>
  </li>
  <li className="nav-item">
  <Link to="/Read" className="innernav">Read</Link>
  </li>
  <li className="nav-item">
  <Link to="/Update" className="innernav">Update</Link>
  </li>
 
</ul>

<div className="con">
  <form action="#">
  <div className="profile_view" ><i className='fas fa-user-alt' style={{color:"white",paddingTop:"15px"}}></i>
<h5 style={{color:"white",paddingTop:"10px"}}>Hi {this.state.help}</h5>
  </div>
  
  </form>
</div>
  </div>
</nav>

<div id="card" className="animated fadeIn">
    <div id="upper-side">
       
       
         
        <h3 id="status">Success</h3>
    </div>
    <div id="lower-side">
        <p id="message">
            Congratulations, you are logged in Successfully.
        </p>
        
    </div>
</div>

</div>)
}
      return(<>{show}</>)
           
    
    
      
        
        
    }


}
export default Home;
