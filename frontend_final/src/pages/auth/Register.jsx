// import './auth.css'
// import { FaUser } from "react-icons/fa";
// import { FaLock } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// const Register = () => {
//   return (
//     <div className='form-content'>
//     <div className='wrapper'>
//        <form>
//         <h1>SignUp and Start Learning</h1>
//         <div className="input-box">
//           <input type='text' placeholder='Full Name' required/>
//           <FaUser className='icon'/>
//         </div>
//         <div className="input-box">
//           <input type='email' placeholder='Email' required/>
//           <MdEmail className='icon'/>
//         </div>
//         <div className="input-box">
//           <input type='password' placeholder='Password' required/>
//           <FaLock className='icon'/>
//         </div>
//         <div className='radio-btn'>
//           <input type='radio'/>Student
//           <input type='radio'/>Admin
//         </div>
//         <div className="remember-text">
//           <label><input type='checkbox'/>Remember me</label>
//           <a href='#'>Forgot Password?</a>
//         </div>
//         <div className="click-btn">
//           <button type='submit'>Sign Up</button>
//         </div>
//         <div className="register-link">
//           <p> Already have an Account? <a href='/bec-app/auth/login'>Login</a></p>
//         </div>
//        </form>
//     </div>

//     </div>
//   )
// }

import { useState } from 'react';
import axios from 'axios';
import './authform.css';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/new', {
        name: fullName,
        email: email,
        password: password,
        roles: role.toUpperCase() // Convert role to uppercase
      });
      console.log(response.data);
      window.location.href = '/bec-app/auth/login';
      // Handle successful registration
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle registration error
    }
  };

  return (
    <div className='form-content'>
      <div className='wrapper'>
        <form onSubmit={handleSubmit}>
          <h1>SignUp and Start Learning</h1>
          <div className="input-box">
            <input type='text' placeholder='Full Name' required value={fullName} onChange={(e) => setFullName(e.target.value)} />
            <FaUser className='icon' />
          </div>
          <div className="input-box">
            <input type='email' placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
            <MdEmail className='icon' />
          </div>
          <div className="input-box">
            <input type='password' placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)} />
            <FaLock className='icon' />
          </div>
          <div className='radio-btn'>
            <label>
              <input type='radio' value='Student' checked={role === 'Student'} onChange={() => setRole('Student')} />
              Student
            </label>
            <label>
              <input type='radio' value='Admin' checked={role === 'Admin'} onChange={() => setRole('Admin')} />
              Admin
            </label>
          </div>
          <div className="remember-text">
            <label><input type='checkbox' />Remember me</label>
            <a href='#'>Forgot Password?</a>
          </div>
          <div className="click-btn">
            <button type='submit'>Sign Up</button>
          </div>
          <div className="register-link">
            <p> Already have an Account? <a href='/bec-app/auth/login'>Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
