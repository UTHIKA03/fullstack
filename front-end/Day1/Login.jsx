// import './auth.css'
// // import { FaUser } from "react-icons/fa";
// import { FaLock } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// const Login = () => {
//   return (
//     <div className='form-content'>
//     <div className='wrapper'>
//        <form>
//         <h1>Login</h1>
//         <div className="input-box">
//           <input type='email' placeholder='Email' required/>
//           <MdEmail className='icon'/>
//         </div>
//         <div className="input-box">
//           <input type='password' placeholder='Password' required/>
//           <FaLock className='icon'/>
//         </div>
//         <div className="remember-text">
//           <label><input type='checkbox'/>Remember me</label>
//           <a href='#'>Forgot Password?</a>
//         </div>
//         <div className="click-btn">
//           <button type='submit'>Login</button>
//         </div>
//         <div className="register-link">
//           <p> New User? <a href='/bec-app/auth/register'>Register</a></p>
//         </div>
//        </form>
//     </div>

//     </div>
//   )
// }

// export default Login
import './auth.css';
import { useState } from 'react';
import { FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error message when user starts typing
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
      valid = false;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email address.';
      valid = false;
    }

    // Validate password
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with form submission
      console.log('Form submitted successfully:', formData);
    } else {
      // Form validation failed
      console.log('Form validation failed.');
    }
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="form-content">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <MdEmail className="icon" />
          </div>
          {errors.email && <span className="error-message">{errors.email}</span>}
          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <FaLock className="icon" />
          </div>
          {errors.password && <span className="error-message">{errors.password}</span>}
          <div className="remember-text">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <div className="click-btn">
            <button type="submit">Login</button>
          </div>
          <div className="register-link">
            <p>
              New User? <a href="/bec-app/auth/register">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
