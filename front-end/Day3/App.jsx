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
import { Navigate, Route, Routes } from 'react-router-dom';
import LazyLayout from './components/LazyLayout';
import UserLayout from './pages/user/UserLayout';
import { lazy } from 'react';
import courseData from './courseData.json';
import AdminLayout from './pages/admin/AdminLayout';

const LazyLogin = lazy(() => import("./pages/auth/Login"));
const LazyRegister = lazy(() => import("./pages/auth/Register"));
const LazyHome = lazy(() => import("./pages/user/Home"));
const LazyCourses = lazy(() => import("./pages/user/Courses"));
const LazyUserProfile = lazy(() => import("./pages/user/UserProfile"));
const LazyUserCourseDes = lazy(() => import("./pages/user/Coursedes"));
const LazyUserFAQ = lazy(() => import("./pages/user/Faq"));
const LazyPaymentHistory = lazy(() => import("./pages/user/MakePaymentForm"));
const LazyAdminProfile = lazy(() => import("./pages/admin/AdminProfile"));

const UserRoutes = () => {
  return(
    <UserLayout>
      <Routes>
        <Route path="/home" element={<LazyLayout component={LazyHome}/>}/>
        <Route path="/courses" element={<LazyLayout component={LazyCourses}/>}/>
        <Route path="/userpro" element={<LazyLayout component={LazyUserProfile}/>}/>
        <Route path="/faq" element={<LazyLayout component={LazyUserFAQ}/>}/>
        {/* Render course details routes */}
      </Routes>
    </UserLayout>
  );
};
const AdminRoutes = () => {
  return(
    <AdminLayout>
      <Routes>
        <Route path="/adminpro" element={<LazyLayout component={LazyAdminProfile}/>}/>
        <Route path="/payment" element={<LazyLayout component={LazyPaymentHistory}/>}/>
      </Routes>
    </AdminLayout>
  );
};

function App() {
  return (
    <div> 
      <Routes>
        <Route exact path='/' element={<Navigate to="/bec-app/auth/login"/>}/>
        <Route path='/bec-app/auth/login' element={<LazyLayout component={LazyLogin}/>}/>
        <Route path='/bec-app/auth/register' element={<LazyLayout component={LazyRegister}/>}/> 
        <Route path="/bec-app/user/*" element={<UserRoutes/>}/>
        <Route path="/bec-app/admin/*" element={<AdminRoutes/>}/>
      {courseData.map((course, index) => (
        <Route
          key={index}
          path={`/coursedes/:slug`}
          element={<LazyLayout component={LazyUserCourseDes} />}
        />
      ))}
      </Routes>
    </div>
  );
}

export default App;
