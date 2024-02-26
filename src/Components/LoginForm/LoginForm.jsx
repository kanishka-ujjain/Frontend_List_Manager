import React, { useEffect, useState } from 'react'
import './LoginForm.css'
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { login } from '../../Services/UserService';

const LoginForm = () => {

    const [data,setData] = useState({
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
    
        login(data).then((resp)=>{
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
            <h1>Login</h1>
            <div className="input-box">
                <input type="email" value={data.emailid} id="email" placeholder="Username" required onChange={(e)=>handleChange(e,'emailid')} />
                <FaUser className='icon' />
            </div>
            <div className="input-box">
                <input type="password" value={data.pass} id="password" placeholder="Password" required onChange={(e)=>handleChange(e,'pass')} />
                <FaLock className='icon' />
            </div>

            <div className="remember-forgot">
                <label><input type="checkbox" />Remember me</label>
                <a href="#">Forgot password?</a>
            </div>
            <button type="submit">Login</button>
            <div className="register-link">
                <p>Don't have an account? <Link to="/register">Register</Link></p>
            </div>
        </form>
    </div>
  )
}

export default LoginForm