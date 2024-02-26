import React, { useEffect, useState } from 'react'
import './RegisterForm.css'
import { Link } from "react-router-dom";
import { signUp } from '../../Services/UserService';

const RegisterForm = () => {

  const [data,setData] = useState({
    fname: '',
    lname: '',
    emailid: '',
    pass: '',
  })
  
  const [error,setError] = useState({
    errors:{},
    isError:false
  })

  const handleChange=(event,property)=>{

    //dynamic setting the values
    setData({...data,[property]:event.target.value})
  }

  useEffect(()=>{
    console.log(data);
  },[data])

  const handleSubmit = (event) => {
    event.preventDefault();

    signUp(data).then((resp)=>{
        console.log(resp);
        console.log("Success log");
    }).catch((error)=>{
        console.log(error);
        console.log("Error log");
    })
  };

  return (
    <div className='wrapper'>
        <form action="" onSubmit={handleSubmit} >
            <h1>Register</h1>
            <div className="input-box">
                <input type="text" value={data.fname} id="firstName" placeholder="First Name" required onChange={(e)=>handleChange(e,'fname')} />
            </div>
            <div className="input-box">
                <input type="text" value={data.lname} id="lastName" placeholder="Last Name" required onChange={(e)=>handleChange(e,'lname')} />
            </div>
            <div className="input-box">
                <input type="email" value={data.emailid} id="email" placeholder="Email" required onChange={(e)=>handleChange(e,'emailid')} />
            </div>
            <div className="input-box">
                <input type="password" value={data.pass} id="password" placeholder="Password" required onChange={(e)=>handleChange(e,'pass')} />
            </div>
            <button type="submit">Submit</button>   
        </form>
        <div className="login-link">
                <p>Already registered? <Link to="/login">Login</Link></p>
        </div>
    </div>
  )
}

export default RegisterForm