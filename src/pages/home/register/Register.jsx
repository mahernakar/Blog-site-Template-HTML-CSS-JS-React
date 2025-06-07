import "./register.css"
import { Link } from "react-router-dom"

export default function Register() {
  return (
    <div className='register'>
        <soan className="registerTitle">Register</soan>
        <form action="" className="registerForm">
        <label>First.Name</label>
        <input className="registerInput" type="text" placeholder="Enter Your FirstName..."/>
        <label>Last.Name</label>
            <input className="registerInput" type="text" placeholder="Enter Your LastName..."/>
            <label>Email</label>
            <input className="registerInput" type="email" placeholder="Enter Your Email..."/>
            <label>Password</label>
            <input className="registerInput" type="password" placeholder="Enter Your Password..."/>
            <button className="registerButton">register</button>
        </form>
        <button className="registerRegisterButton">
        <Link to="/login" className="link">Login</Link>
        </button>
    </div>
  )
}
