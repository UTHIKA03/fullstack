// import {Navigate, Route, Routes} from 'react-router-dom'
// import LazyLayout from './components/LazyLayout'
// import UserLayout from './pages/user/UserLayout'
// import { lazy } from 'react'
// import "./App.css"
// import courseData from './courseData.json';
// const LazyLogin = lazy(() =>import("./pages/auth/Login"))
// const LazyRegister = lazy(() =>import("./pages/auth/Register"))
// const LazyHome = lazy(() => import("./pages/user/Home"))
// const LazyCourses = lazy(() => import("./pages/user/Courses"))
// const LazyUserProfile = lazy(() => import("./pages/user/UserProfile"))
// const LazyUserCourseDes = lazy(() => import("./pages/user/Coursedes"))

// const UserRoutes = () => {
//   return(
//     <UserLayout>
//     <Routes>
//       <Route path="/home" element={<LazyLayout component={LazyHome}/>}/>
//       <Route path="/courses" element={<LazyLayout component={LazyCourses}/>}/>
//       <Route path="/userpro" element={<LazyLayout component={LazyUserProfile}/>}/>
//       {courseData.map((course, index) => (
//         <Route
//           key={index}
//           path={`/coursedes/:slug${course.slug}`}
//           element={<LazyUserCourseDes title={course.title} image={course.image} description={course.description} cost={course.price} />}
//         />
//       ))}
   
//     </Routes>
//     </UserLayout>
//   )
// }
// function App() {
//   return (
//     <div> 
//       <Routes>
//       <Route exact path='/' element={<Navigate to="./bec-app/auth/login"/>}/>
//         <Route path='/bec-app/auth/login' element={<LazyLayout component={LazyLogin}/>}/>
//         <Route path='/bec-app/auth/register' element={<LazyLayout component={LazyRegister}/>}/> 
//         <Route path="/bec-app/user/*" element={<UserRoutes/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App
// App.js
// import { Navigate, Route, Routes } from 'react-router-dom';
// import LazyLayout from './components/LazyLayout';
// import UserLayout from './pages/user/UserLayout';
// import { lazy } from 'react';
// import courseData from './courseData.json';
// import AdminLayout from './pages/admin/AdminLayout';

// const LazyLogin = lazy(() => import("./pages/auth/Login"));
// const LazyRegister = lazy(() => import("./pages/auth/Register"));
// const LazyHome = lazy(() => import("./pages/user/Home"));
// const LazyCourses = lazy(() => import("./pages/user/Courses"));
// const LazyUserProfile = lazy(() => import("./pages/user/UserProfile"));
// const LazyUserCourseDes = lazy(() => import("./pages/user/Coursedes"));
// const LazyUserFAQ = lazy(() => import("./pages/user/Faq"));
// const LazyPaymentHistory = lazy(() => import("./pages/user/MakePaymentForm"));
// const LazyAdminProfile = lazy(() => import("./pages/admin/AdminProfile"));

// const UserRoutes = () => {
//   return(
//     <UserLayout>
//       <Routes>
//         <Route path="/home" element={<LazyLayout component={LazyHome}/>}/>
//         <Route path="/courses" element={<LazyLayout component={LazyCourses}/>}/>
//         <Route path="/userpro" element={<LazyLayout component={LazyUserProfile}/>}/>
//         <Route path="/faq" element={<LazyLayout component={LazyUserFAQ}/>}/>
//         {/* Render course details routes */}
//       </Routes>
//     </UserLayout>
//   );
// };
// const AdminRoutes = () => {
//   return(
//     <AdminLayout>
//       <Routes>
//         <Route path="/adminpro" element={<LazyLayout component={LazyAdminProfile}/>}/>
//         <Route path="/payment" element={<LazyLayout component={LazyPaymentHistory}/>}/>
//       </Routes>
//     </AdminLayout>
//   );
// };

// function App() {
//   return (
//     <div> 
//       <Routes>
//         <Route exact path='/' element={<Navigate to="/bec-app/auth/login"/>}/>
//         <Route path='/bec-app/auth/login' element={<LazyLayout component={LazyLogin}/>}/>
//         <Route path='/bec-app/auth/register' element={<LazyLayout component={LazyRegister}/>}/> 
//         <Route path="/bec-app/user/*" element={<UserRoutes/>}/>
//         <Route path="/bec-app/admin/*" element={<AdminRoutes/>}/>
//       {courseData.map((course, index) => (
//         <Route
//           key={index}
//           path={`/coursedes/:slug`}
//           element={<LazyLayout component={LazyUserCourseDes} />}
//         />
//       ))}
//       </Routes>
//     </div>
//   );
// }

// export default App;
// import { Navigate, Route, Routes } from 'react-router-dom';
// import LazyLayout from './components/LazyLayout';
// import UserLayout from './pages/user/UserLayout';
// import { lazy, useEffect, useState } from 'react';
// import axios from 'axios'; // Import axios for making HTTP requests to your backend API
// import AdminLayout from './pages/admin/AdminLayout';
// const LazyLogin = lazy(() => import("./pages/auth/Login"));
// const LazyRegister = lazy(() => import("./pages/auth/Register"));
// const LazyHome = lazy(() => import("./pages/user/Home"));
// const LazyCourses = lazy(() => import("./pages/user/Courses"));
// const LazyUserProfile = lazy(() => import("./pages/user/UserProfile"));
// const LazyUserCourseDes = lazy(() => import("./pages/user/Coursedes"));
// const LazyUserFAQ = lazy(() => import("./pages/user/Faq"));
// const LazyPaymentHistory = lazy(() => import("./pages/user/MakePaymentForm"));
// const LazyAdminProfile = lazy(() => import("./pages/admin/AdminProfile"));

// const UserRoutes = () => {
//   return(
//     <UserLayout>
//       <Routes>
//         <Route path="/home" element={<LazyLayout component={LazyHome}/>}/>
//         <Route path="/courses" element={<LazyLayout component={LazyCourses}/>}/>
//         <Route path="/userpro" element={<LazyLayout component={LazyUserProfile}/>}/>
//         <Route path="/faq" element={<LazyLayout component={LazyUserFAQ}/>}/>
//         {/* Render course details routes */}
//       </Routes>
//     </UserLayout>
//   );
// };
// const AdminRoutes = () => {
//   return(
//     <AdminLayout>
//       <Routes>
//         <Route path="/adminpro" element={<LazyLayout component={LazyAdminProfile}/>}/>
//         <Route path="/payment" element={<LazyLayout component={LazyPaymentHistory}/>}/>
//       </Routes>
//     </AdminLayout>
//   );
// };

// function App() {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8080/api/courses') // Replace the URL with your backend API endpoint for fetching courses
//       .then(response => {
//         setCourses(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching courses:', error);
//       });
//   }, []);

//   return (
//     <div> 
//       <Routes>
//         <Route exact path='/' element={<Navigate to="/bec-app/auth/login"/>}/>
//         <Route path='/bec-app/auth/login' element={<LazyLayout component={LazyLogin}/>}/>
//         <Route path='/bec-app/auth/register' element={<LazyLayout component={LazyRegister}/>}/> 
//         <Route path="/bec-app/user/*" element={<UserRoutes/>}/>
//         <Route path="/bec-app/admin/*" element={<AdminRoutes/>}/>
//         {courses.map(course => (
//           <Route
//             key={course.courseId} // Use courseId as the key
//             path={`/coursedes/:slug`}
//             element={<LazyLayout component={LazyUserCourseDes} />}
//           />
//         ))}
//       </Routes>
//     </div>
//   );
// }

// export default App;
// App.js

import { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LazyLayout from './components/LazyLayout';
import UserLayout from './pages/user/UserLayout';
import { lazy } from 'react';
import axios from 'axios';
import AdminLayout from './pages/admin/AdminLayout';
import Coursedes from './pages/user/Coursedes'; // Import the Coursedes component

const LazyLogin = lazy(() => import("./pages/auth/Login"));
const LazyRegister = lazy(() => import("./pages/auth/Register"));
const LazyHome = lazy(() => import("./pages/user/Home"));
const LazyCourses = lazy(() => import("./pages/user/Courses"));
const LazyUserProfile = lazy(() => import("./pages/user/UserProfile"));
const LazyUserFAQ = lazy(() => import("./pages/user/Faq"));
const LazyPaymentHistory = lazy(() => import("./pages/user/MakePaymentForm"));
const LazyAdminProfile = lazy(() => import("./pages/admin/AdminProfile"));

const UserRoutes = () => {
  return (
    <UserLayout>
      <Routes>
        <Route path="/home" element={<LazyLayout component={LazyHome} />} />
        <Route path="/courses" element={<LazyLayout component={LazyCourses} />} />
        <Route path="/userpro" element={<LazyLayout component={LazyUserProfile} />} />
        <Route path="/faq" element={<LazyLayout component={LazyUserFAQ} />} />
      </Routes>
    </UserLayout>
  );
};

const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/adminpro" element={<LazyLayout component={LazyAdminProfile} />} />
        <Route path="/payment" element={<LazyLayout component={LazyPaymentHistory} />} />
      </Routes>
    </AdminLayout>
  );
};

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/courses')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Navigate to="/bec-app/auth/login" />} />
        <Route path='/bec-app/auth/login' element={<LazyLayout component={LazyLogin} />} />
        <Route path='/bec-app/auth/register' element={<LazyLayout component={LazyRegister} />} />
        <Route path="/bec-app/user/*" element={<UserRoutes />} />
        <Route path="/bec-app/admin/*" element={<AdminRoutes />} />
        {courses.map(course => (
          <Route
            key={course.courseId}
            path={`/coursedes/${course.courseId}`} 
            element={<LazyLayout component={() => <Coursedes courseId={course.courseId} />} />} // Pass courseId as prop
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
