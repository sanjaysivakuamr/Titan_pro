import React,{useState,useEffect} from 'react'
import axios from 'axios'; 
import {Table,Button} from 'semantic-ui-react';
import {API_URL} from "../components/URL";
import {useNavigate} from "react-router-dom"
import "../components/Read.css";
 function Read(){
    const[apiData,setAPIData]=useState([]);
    //const[query,setQuery]=useState("");
   const navigate=useNavigate();
   const [search,setSearch]=useState("")
    console.log(search)
   //console.log(apiData.filter(apiData=>apiData.descriptionValue.toLowerCase().includes(query)) );
    const updateUser=({descriptionValue,Part,Mount,id})=>{
      localStorage.setItem("id",id)
      localStorage.setItem("descriptionValue",descriptionValue)

      localStorage.setItem("Part",Part)

      localStorage.setItem("Mount",Mount)

         navigate('/Update')
         
    }
    ///const search=(data)=>{
      //console.log("--")
      //return data.filter(item => item.descriptionValue.toLowerCase().includes(query))
    //};
    const deleteUser= async(id) =>{

      await axios.delete("https://6410917bff89c2e2d4e27f7d.mockapi.io/api/comments/"+id)
      //console.log(id)
      callGetAPI()
    }
    
    const callGetAPI =async(req,res) =>{
        const resp=await axios.get(API_URL);
        setAPIData(resp.data);
       
    }
    
    useEffect(() =>
    {
        callGetAPI();
    },[]);
    return (
        <div>
          <div className="container-fluid">
          <form class="d-flex" role="search">
              <input class="form-control " type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)}/>
            </form>
          </div>
          <div sytle="overflow-x:auto;" className="fulltable">
        <table className="table table-striped table-info" >
  <thead>
    <tr>
      
      <th scope="col">Description</th>
      <th scope="col">Part Number</th>
      <th scope="col">Mounting Details</th>
      <th scope="col">Connector</th>
      <th scope="col">Make</th>
      <th scope="col">Status</th>
      <th scope="col">Location</th>
      <th scope='col' className="delete">Delete</th>
      <th scope="col" className="update">Update</th>

      
    </tr>
  </thead>
  <tbody>
    {
        apiData.filter((item) =>{
          return search.toLowerCase()===""
          ? item:item.descriptionValue.toLowerCase().includes(search);
        }).map(data =>(
    
    <tr >
      
      <td>{data.descriptionValue}</td>
      <td>{data.Part}</td>
      <td>{data.Mount}</td>
      <td>{data.Connector}</td>
      <td>{data.Make}</td>
      <td>{data.Status}</td>
      <td>{data.Location}</td>
      
      <Table.Cell>
        <Button className='btn btn-danger' onClick={()=>
      
      deleteUser(data.id)
      }>Delete</Button>
      </Table.Cell>
      <Table.Cell>
        <Button className='btn btn-warning' onClick={()=>
      
      updateUser(data)
      }>Update</Button>
      </Table.Cell>    </tr>))
 }
    
  </tbody>
</table>
</div>

        </div>
    );
 }

 export default Read