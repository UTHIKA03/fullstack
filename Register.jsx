import './auth.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Register = () => {
  return (
    <div className='form-content'>
    <div className='wrapper'>
       <form>
        <h1>SignUp and Start Learning</h1>
        <div className="input-box">
          <input type='text' placeholder='Full Name' required/>
          <FaUser className='icon'/>
        </div>
        <div className="input-box">
          <input type='email' placeholder='Email' required/>
          <MdEmail className='icon'/>
        </div>
        <div className="input-box">
          <input type='password' placeholder='Password' required/>
          <FaLock className='icon'/>
        </div>
        <div className='radio-btn'>
          <input type='radio'/>Student
          <input type='radio'/>Admin
        </div>
        <div className="remember-text">
          <label><input type='checkbox'/>Remember me</label>
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
  )
}

export default Register
// import './auth.css'
// import { useState } from 'react';
// import { FaUser } from "react-icons/fa";
// import { FaLock } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//   });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//     // Clear error message when user starts typing
//     setErrors({
//       ...errors,
//       [name]: ''
//     });
//   };

//   const validateForm = () => {
//     let valid = true;
//     const newErrors = {};

//     // Validate full name
//     if (!formData.fullName.trim()) {
//       newErrors.fullName = "*Full Name is required.";
//       valid = false;
//     }

//     // Validate email
//     if (!formData.email.trim()) {
//       newErrors.email = "*Email is required.";
//       valid = false;
//     } else if (!isValidEmail(formData.email)) {
//       newErrors.email = "*Invalid email address.";
//       valid = false;
//     }

//     // Validate password
//     if (!formData.password.trim()) {
//       newErrors.password = "*Password is required.";
//       valid = false;
//     } else if (formData.password.length < 6) {
//       newErrors.password = "*Password must be at least 6 characters.";
//       valid = false;
//     } else if (!/(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z0-9])/.test(formData.password)) {
//       newErrors.password = "*Password must contain at least one alphabet, one digit, and one special character.";
//       valid = false;
//     }

//     setErrors(newErrors);
//     return valid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       // Proceed with form submission
//       console.log("Form submitted successfully:", formData);
//     } else {
//       // Form validation failed
//       console.log("Form validation failed.");
//     }
//   };

//   const isValidEmail = (email) => {
//     // Basic email validation regex
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   return (
//     <div className='form-content'>
//       <div className='wrapper'>
//         <form onSubmit={handleSubmit}>
//           <h1>SignUp and Start Learning</h1>
//           <div className="input-box">
//             <input 
//               type='text' 
//               name='fullName' 
//               placeholder='Full Name' 
//               value={formData.fullName} 
//               onChange={handleChange} 
//               required
//             />
//             <FaUser className='icon'/>
//           </div>
//           {errors.fullName && <span className="error-message">{errors.fullName}</span>}
//           <div className="input-box">
//             <input 
//               type='email' 
//               name='email' 
//               placeholder='Email' 
//               value={formData.email} 
//               onChange={handleChange} 
//               required
//             />
//             <MdEmail className='icon'/>
//           </div>
//           {errors.email && <span className="error-message">{errors.email}</span>}
//           <div className="input-box">
//             <input 
//               type='password' 
//               name='password' 
//               placeholder='Password' 
//               value={formData.password} 
//               onChange={handleChange} 
//               required
//             />
//             <FaLock className='icon'/>
//           </div>
//           {errors.password && <span className="error-message">{errors.password}</span>}
//           <div className='radio-btn'>
//             <input type='radio'/>Student
//             <input type='radio'/>Admin
//           </div>
//           <div className="remember-text">
//             <label><input type='checkbox'/>Remember me</label>
//             <a href='#'>Forgot Password?</a>
//           </div>
//           <div className="click-btn">
//             <button type='submit'>Sign Up</button>
//           </div>
//           <div className="register-link">
//             <p> Already have an Account? <a href='/bec-app/auth/login'>Login</a></p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Register;
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setUser } from '../../redux/userSlice';
// import { FaUser, FaLock } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import PropTypes from 'prop-types';

// const Register = ({ onRegisterSuccess }) => {
//   const dispatch = useDispatch();
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//   });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//     // Clear error message when user starts typing
//     setErrors({
//       ...errors,
//       [name]: ''
//     });
//   };

//   const validateForm = () => {
//     let valid = true;
//     const newErrors = {};

//     // Validate full name
//     if (!formData.fullName.trim()) {
//       newErrors.fullName = "*Full Name is required.";
//       valid = false;
//     }

//     // Validate email
//     if (!formData.email.trim()) {
//       newErrors.email = "*Email is required.";
//       valid = false;
//     } else if (!isValidEmail(formData.email)) {
//       newErrors.email = "*Invalid email address.";
//       valid = false;
//     }

//     // Validate password
//     if (!formData.password.trim()) {
//       newErrors.password = "*Password is required.";
//       valid = false;
//     } else if (formData.password.length < 6) {
//       newErrors.password = "*Password must be at least 6 characters.";
//       valid = false;
//     } else if (!/(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z0-9])/.test(formData.password)) {
//       newErrors.password = "*Password must contain at least one alphabet, one digit, and one special character.";
//       valid = false;
//     }

//     setErrors(newErrors);
//     return valid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       // Proceed with form submission
//       console.log("Form submitted successfully:", formData);
//       dispatch(setUser(formData));
//       onRegisterSuccess(); // Call the callback function to handle navigation
//     } else {
//       // Form validation failed
//       console.log("Form validation failed.");
//     }
//   };

//   const isValidEmail = (email) => {
//     // Basic email validation regex
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   return (
//     <div className='form-content'>
//       <div className='wrapper'>
//         <form onSubmit={handleSubmit}>
//           <h1>SignUp and Start Learning</h1>
//           <div className="input-box">
//             <input 
//               type='text' 
//               name='fullName' 
//               placeholder='Full Name' 
//               value={formData.fullName} 
//               onChange={handleChange} 
//               required
//             />
//             <FaUser className='icon'/>
//           </div>
//           {errors.fullName && <span className="error-message">{errors.fullName}</span>}
//           <div className="input-box">
//             <input 
//               type='email' 
//               name='email' 
//               placeholder='Email' 
//               value={formData.email} 
//               onChange={handleChange} 
//               required
//             />
//             <MdEmail className='icon'/>
//           </div>
//           {errors.email && <span className="error-message">{errors.email}</span>}
//           <div className="input-box">
//             <input 
//               type='password' 
//               name='password' 
//               placeholder='Password' 
//               value={formData.password} 
//               onChange={handleChange} 
//               required
//             />
//             <FaLock className='icon'/>
//           </div>
//           {errors.password && <span className="error-message">{errors.password}</span>}
//           <div className='radio-btn'>
//             <input type='radio'/>Student
//             <input type='radio'/>Admin
//           </div>
//           <div className="remember-text">
//             <label><input type='checkbox'/>Remember me</label>
//             <a href='#'>Forgot Password?</a>
//           </div>
//           <div className="click-btn">
//             <button type='submit'>Sign Up</button>
//           </div>
//           <div className="register-link">
//             <p> Already have an Account? <a href='/bec-app/auth/login'>Login</a></p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// Register.propTypes = {
//   onRegisterSuccess: PropTypes.func.isRequired // Callback function to handle navigation
// };

// export default Register;
