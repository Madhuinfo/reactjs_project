// import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Invite from './components/Invite';
// import Greet from './components/Greet';
import React, {useEffect, useState} from 'react'

function App() {

  // const [data,setData]=useState(null)
  // function getdata(val)
  // {
  //   setData(val.target.value)
  //   console.log(val.target.value)
  // }
  // return (
  //   <div className="App">
  
  //      <h1>{data}</h1>
  //     <input type="text" onChange={getdata}/>
     
  //   </div>
  // );


  const handleSubmit=(e)=>{
    e.preventDefault();
    const first =e.target.fname.value;
    const last =e.target.lname.value;
    const mobile =e.target.mobileno.value;
    const email =e.target.emailaddress.value;
    console.log("Firstname : " +first,"\n","Lastname: "+last,"\n","Mobile: "+mobile,"\n","Email: "+email);
  }
  
  return(
    <div className='container'>
    <br></br>
    <h2 className='text-center'>ReactJs</h2>
    <br></br>
    <form onSubmit={handleSubmit}>
    <div className='row'>
    <div className='col-md-6'>
    <input className='form-control' type="text" name="fname" placeholder="Enter Your First Name" required/><br/>
    </div>
    <div className='col-md-6'>
    <input className='form-control' type="text" name="lname" placeholder="Enter Your Last Name" required/><br/>
    </div>
    <div className='col-md-6'>
    <input className='form-control' type="number" name="mobileno" placeholder="Enter Your mobilenumber" required/><br/>
    </div>
    <div className='col-md-6'>
    <input className='form-control' type="email" name="emailaddress" placeholder="Enter Your emailaddress" required/><br/>
    </div>
    </div>
       <button type="submit" className="btn btn-success">Submit</button>
    </form>
    </div>
  );

}

export default App;
