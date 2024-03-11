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
// import './auth.css';
// import { useState } from 'react';
// import { FaLock } from 'react-icons/fa';
// import { MdEmail } from 'react-icons/md';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//     // Clear error message when user starts typing
//     setErrors({
//       ...errors,
//       [name]: '',
//     });
//   };

//   const validateForm = () => {
//     let valid = true;
//     const newErrors = {};

//     // Validate email
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required.';
//       valid = false;
//     } else if (!isValidEmail(formData.email)) {
//       newErrors.email = 'Invalid email address.';
//       valid = false;
//     }

//     // Validate password
//     if (!formData.password.trim()) {
//       newErrors.password = 'Password is required.';
//       valid = false;
//     }

//     setErrors(newErrors);
//     return valid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       // Proceed with form submission
//       console.log('Form submitted successfully:', formData);
//     } else {
//       // Form validation failed
//       console.log('Form validation failed.');
//     }
//   };

//   const isValidEmail = (email) => {
//     // Basic email validation regex
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   return (
//     <div className="form-content">
//       <div className="wrapper">
//         <form onSubmit={handleSubmit}>
//           <h1>Login</h1>
//           <div className="input-box">
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//             <MdEmail className="icon" />
//           </div>
//           {errors.email && <span className="error-message">{errors.email}</span>}
//           <div className="input-box">
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//             <FaLock className="icon" />
//           </div>
//           {errors.password && <span className="error-message">{errors.password}</span>}
//           <div className="remember-text">
//             <label>
//               <input type="checkbox" /> Remember me
//             </label>
//             <a href="#">Forgot Password?</a>
//           </div>
//           <div className="click-btn">
//             <button type="submit">Login</button>
//           </div>
//           <div className="register-link">
//             <p>
//               New User? <a href="/bec-app/auth/register">Register</a>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
// Login.jsx
// import { useState } from 'react';
// import axios from 'axios';
// import './auth.css';
// import { FaLock } from 'react-icons/fa';
// import { MdEmail } from 'react-icons/md';
// import { jwtDecode } from 'jwt-decode';
// // import { useDispatch} from 'react-redux';
// // import { loginUser } from '../../redux/userSlice';

// const Login = () => {
//   // const dispatch = useDispatch();
//   // const userRole = useSelector(state => state.user.user?.role);
//   const [formData, setFormData] = useState({ username: '', password: '' });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setErrors({ ...errors, [name]: '' }); // Clear error message
//   };

//   const validateForm = () => {
//     let valid = true;
//     const newErrors = {};

//     // Validate username
//     if (!formData.username.trim()) {
//       newErrors.username = 'Username is required.';
//       valid = false;
//     }

//     // Validate password
//     if (!formData.password.trim()) {
//       newErrors.password = 'Password is required.';
//       valid = false;
//     }

//     setErrors(newErrors);
//     return valid;
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   if (validateForm()) {
//   //     try {
//   //       const response = await axios.post('http://localhost:8080/api/authenticate', formData);
//   //       const token = response.data; // Assuming backend returns JWT token
//   //       localStorage.setItem('token', token); // Store token in local storage
//   //       // Redirect user to the home page or desired route
//   //       window.location.href = '/bec-app/user/home';
//   //     } catch (error) {
//   //       console.error('Login failed:', error);
//   //       // Handle login error
//   //     }
//   //   }
//   // };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       try {
//         const response = await axios.post('http://localhost:8080/api/authenticate', formData);
//         const token = response.data; // Assuming backend returns JWT token
  
//         // Decode the token to get user role
//         const decodedToken = jwtDecode(token);
//         const userRole = decodedToken.roles; // Assuming roles are stored in the token
  
//         localStorage.setItem('token', token); // Store token in local storage
  
//         // Redirect user based on role
//         if (userRole === 'ADMIN') {
//           window.location.href = '/bec-app/admin/adminpro'; // Redirect to admin profile
//         } else if (userRole === 'STUDENT') {
//           window.location.href = '/bec-app/user/userpro'; // Redirect to student profile
//         } else {
//           // Handle unknown role
//         }
//       } catch (error) {
//         console.error('Login failed:', error);
//         // Handle login error
//       }
//     }
//   };
  
//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   if (validateForm()) {
//   //     try {
//   //       const response = await axios.post('http://localhost:8080/api/authenticate', formData);
//   //       const token = response.data; // Assuming backend returns JWT token
        
//   //       // Dispatch the loginUser action with the obtained token
//   //       dispatch(loginUser(token));
//   //     } catch (error) {
//   //       console.error('Login failed:', error);
//   //       // Handle login error
//   //     }
//   //   }
//   // };
  
  

//   return (
//     <div className="form-content">
//       <div className="wrapper">
//         <form onSubmit={handleSubmit}>
//           <h1>Login</h1>
//           <div className="input-box">
//             <input
//               type="text"
//               name="username"
//               placeholder="Username"
//               value={formData.username}
//               onChange={handleChange}
//               required
//             />
//             <MdEmail className="icon" /> {/* Use MdEmail icon for consistency */}
//           </div>
//           {errors.username && <span className="error-message">{errors.username}</span>}
//           <div className="input-box">
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//             <FaLock className="icon" />
//           </div>
//           {errors.password && <span className="error-message">{errors.password}</span>}
//           <div className="remember-text">
//             <label>
//               <input type="checkbox" /> Remember me
//             </label>
//             <a href="#">Forgot Password?</a>
//           </div>
//           <div className="click-btn">
//             <button type="submit">Login</button>
//           </div>
//           <div className="register-link">
//             <p>
//               New User? <a href="/bec-app/auth/register">Register</a>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
// import { useState } from 'react';
// import axios from 'axios';
// import './auth.css';
// import { FaLock } from 'react-icons/fa';
// import { MdEmail } from 'react-icons/md';
// import { jwtDecode } from 'jwt-decode';

// const Login = () => {
//   const [formData, setFormData] = useState({ username: '', password: '' });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setErrors({ ...errors, [name]: '' }); // Clear error message
//   };

//   const validateForm = () => {
//     let valid = true;
//     const newErrors = {};

//     if (!formData.username.trim()) {
//       newErrors.username = 'Username is required.';
//       valid = false;
//     }

//     if (!formData.password.trim()) {
//       newErrors.password = 'Password is required.';
//       valid = false;
//     }

//     setErrors(newErrors);
//     return valid;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       try {
//         const response = await axios.post('http://localhost:8080/api/authenticate', formData);
//         const token = response.data;
  
//         const decodedToken = jwtDecode(token);
//         let userRoles = decodedToken.roles;
  
//         // If userRoles is an array, take the first role
//         if (Array.isArray(userRoles)) {
//           userRoles = userRoles[0];
//         }
  
//         localStorage.setItem('token', token);
  
//         if (userRoles === 'ADMIN') {
//           window.location.href = '/bec-app/admin/adminpro';
//         } else if (userRoles === 'STUDENT') {
//           window.location.href = '/bec-app/user/userpro';
//         } else {
//           console.error('Unknown user role:', userRoles);
//           // Handle unknown role
//         }
//       } catch (error) {
//         console.error('Login failed:', error);
//         // Handle login error
//       }
//     }
//   };
  

//   return (
//     <div className="form-content">
//       <div className="wrapper">
//         <form onSubmit={handleSubmit}>
//           <h1>Login</h1>
//           <div className="input-box">
//             <input
//               type="text"
//               name="username"
//               placeholder="Username"
//               value={formData.username}
//               onChange={handleChange}
//               required
//             />
//             <MdEmail className="icon" />
//           </div>
//           {errors.username && <span className="error-message">{errors.username}</span>}
//           <div className="input-box">
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//             <FaLock className="icon" />
//           </div>
//           {errors.password && <span className="error-message">{errors.password}</span>}
//           <div className="click-btn">
//             <button type="submit">Login</button>
//           </div>
//           <div className="register-link">
//             <p>
//               New User? <a href="/bec-app/auth/register">Register</a>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
// import { useState } from 'react';
// import axios from 'axios';
// import './auth.css';
// import { FaLock } from 'react-icons/fa';
// import { MdEmail } from 'react-icons/md';
// import { useDispatch } from 'react-redux';
// import { loginUser } from '../../redux/userSlice';

// const Login = () => {
//   const dispatch = useDispatch();
//   const [formData, setFormData] = useState({ username: '', password: '' });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setErrors({ ...errors, [name]: '' }); // Clear error message
//   };

//   const validateForm = () => {
//     let valid = true;
//     const newErrors = {};

//     if (!formData.username.trim()) {
//       newErrors.username = 'Username is required.';
//       valid = false;
//     }

//     if (!formData.password.trim()) {
//       newErrors.password = 'Password is required.';
//       valid = false;
//     }

//     setErrors(newErrors);
//     return valid;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       try {
//         const response = await axios.post('http://localhost:8080/api/authenticate', formData);
//         const token = response.data;
        
//         // Dispatch the loginUser action with the token
//         dispatch(loginUser(token));
        
//       } catch (error) {
//         console.error('Login failed:', error);
//         // Handle login error
//       }
//     }
//   };

//   return (
//     <div className="form-content">
//       <div className="wrapper">
//         <form onSubmit={handleSubmit}>
//           <h1>Login</h1>
//           <div className="input-box">
//             <input
//               type="text"
//               name="username"
//               placeholder="Username"
//               value={formData.username}
//               onChange={handleChange}
//               required
//             />
//             <MdEmail className="icon" />
//           </div>
//           {errors.username && <span className="error-message">{errors.username}</span>}
//           <div className="input-box">
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//             <FaLock className="icon" />
//           </div>
//           {errors.password && <span className="error-message">{errors.password}</span>}
//           <div className="click-btn">
//             <button type="submit">Login</button>
//           </div>
//           <div className="register-link">
//             <p>
//               New User? <a href="/bec-app/auth/register">Register</a>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth';
import './login.css'
import { setAuthentication, setRole, setToken } from "../../redux/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const { username, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login(data);
      console.log(res.data);
      console.log('Response:', res.data);
      
      // Access the token property from the response
      const token = res.data.token;
      console.log('Token:', token);
      sessionStorage.setItem('token',res.data.token);
      const decodeToken = jwtDecode(token);
      //console.log(res.data);
      dispatch(setAuthentication(true));
      dispatch(setToken(token));
      const roles = res.data.roles;
      dispatch(setRole(roles));
      console.log('Roles:', roles);
      // Role-based navigation logic
      navigate(roles[0] === "ADMIN" ? "/bec-app/admin/adminpro" : "/bec-app/user/userpro");

      setIsSubmitted(true);
    } catch (error) {
      setError("Invalid username or password");
      console.error('Login failed:', error);
    }
  };

  const renderForm = (
    <div className="Form">
      <form onSubmit={submitHandler}>
        <div className="input">
          <label>Username: </label>
          <input type="text" name="username" value={username} onChange={changeHandler} required />
        </div>
        <div className="input">
          <label>Password: </label>
          <input type="password" name="password" value={password} onChange={changeHandler} required />
        </div>
        <div className="button">
          <input type="submit" />
        </div>
        <div className="signup-link">
          <p>
            Not registered? <Link to="/bec-app/auth/register">Sign Up</Link>
          </p>
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Login</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
};

export default Login;