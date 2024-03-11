// import { useState } from 'react';
// import EnquiryForm from './EnquiryForm';
// import { FaEdit } from "react-icons/fa";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import '../../assets/css/profile.css';
// import abc from '../../assets/images/profile.jpg';
// import EnquiryViewer from './EnquiryViewer';

// const UserProfile = () => {
//   const user = {
//     username: 'john_doe',
//     email: 'john@example.com',
//     imageUrl: abc,
//     courses: [
//       {
//         title: 'Course 1',
//         description: 'Description for Course 1',
//         cost: '$100',
//         enrollmentDate: '2024-02-21',
//       },
//       {
//         title: 'Course 2',
//         description: 'Description for Course 2',
//         cost: '$150',
//         enrollmentDate: '2024-02-22',
//       },
//     ],
//   };

//   const [enquiries, setEnquiries] = useState([]);
//   const [showEnquiries, setShowEnquiries] = useState(false); // State to toggle EnquiryViewer visibility

//   const { username, email, imageUrl, courses } = user;

//   const handleAddEnquiry = (enquiry) => {
//     setEnquiries([...enquiries, enquiry]);
//   };

//   return (
//     <div className="profile">
//       <div className="sidebar">
//         <div className="profile-image">
//           <img src={imageUrl} alt="Profile" />
//         </div>
//         <div className="sidebar-menu">
//           <ul>
//             <li>View Course</li>
//             <li><EnquiryForm onAddEnquiry={handleAddEnquiry} /></li>
//             <li onClick={() => setShowEnquiries(!showEnquiries)}>View Enquiry</li>
//           </ul>
//         </div>
//       </div>
//       <div className="content">
//         <div className="profile-details">
//           <div className="profile-header">
//             <h2 className="profile-username">Name: {username}</h2>
//           </div>
//           <div className="profile-email">Email: {email}</div>
//           <div className="edit-profile">
//             <button>Edit Profile</button>
//           </div>
//           <div className="courses-table">
//             <h3>Enrolled Courses</h3>
//             <table>
//               <thead>
//                 <tr>
//                   <th>Title</th>
//                   <th>Description</th>
//                   <th>Cost</th>
//                   <th>Enrollment Date</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {courses.map((course, index) => (
//                   <tr key={index}>
//                     <td>{course.title}</td>
//                     <td>{course.description}</td>
//                     <td>{course.cost}</td>
//                     <td>{course.enrollmentDate}</td>
//                     <td>
//                       <span><FaEdit /></span>
//                       <span><RiDeleteBin6Line /></span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//       {showEnquiries && (
//         <div className="enquiry-modal">
//           <div className="enquiry-modal-content">
//             <span className="close" onClick={() => setShowEnquiries(false)} style={{color:"whitesmoke"}}>Close</span>
//             <EnquiryViewer enquiries={enquiries} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserProfile;

// import { useState } from 'react';
// import EnquiryForm from './EnquiryForm';
// // import { FaEdit } from "react-icons/fa";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import '../../assets/css/profile.css';
// import abc from '../../assets/images/profile.jpg';
// import EnquiryViewer from './EnquiryViewer';

// const UserProfile = () => {
//   const user = {
//     username: 'john_doe',
//     email: 'john@example.com',
//     imageUrl: abc,
//     courses: [
//       {
//         title: 'Course 1',
//         description: 'Description for Course 1',
//         cost: '$100',
//         enrollmentDate: '2024-02-21',
//       },
//       {
//         title: 'Course 2',
//         description: 'Description for Course 2',
//         cost: '$150',
//         enrollmentDate: '2024-02-22',
//       },
//       {
//         title: 'Course 3',
//         description: 'Description for Course 3',
//         cost: '$180',
//         enrollmentDate: '2024-02-22',
//       },
//       {
//         title: 'Course 4',
//         description: 'Description for Course 4',
//         cost: '$120',
//         enrollmentDate: '2024-02-22',
//       },
//     ],
//   };

//   // Sample enquiries
//   const initialEnquiries = [
//     {
//       courseName: 'Course 1',
//       description: 'Enquiry about Course 1',
//       email: 'example1@example.com',
//       enquiryType: 'General'
//     },
//     {
//       courseName: 'Course 2',
//       description: 'Enquiry about Course 2',
//       email: 'example2@example.com',
//       enquiryType: 'Technical'
//     },
//     {
//       courseName: 'Course 2',
//       description: 'Enquiry about Course 2',
//       email: 'example2@example.com',
//       enquiryType: 'Technical'
//     },
//     {
//       courseName: 'Course 2',
//       description: 'Enquiry about Course 2',
//       email: 'example2@example.com',
//       enquiryType: 'Technical'
//     },
//   ];

//   const [enquiries, setEnquiries] = useState(initialEnquiries);
//   const [showEnquiries, setShowEnquiries] = useState(false);

//   const { username, email, imageUrl, courses } = user;

//   const handleAddEnquiry = (enquiry) => {
//     setEnquiries([...enquiries, enquiry]);
//   };

//   return (
//     <div className="profile">
//       {/* Sidebar */}
//       <div className="sidebar">
//         <div className="profile-image">
//           <img src={imageUrl} alt="Profile" />
//         </div>
//         <div className="sidebar-menu">
//           <ul>
//             <li>View Course</li>
//             <li><EnquiryForm onAddEnquiry={handleAddEnquiry} /></li>
//             <li onClick={() => setShowEnquiries(!showEnquiries)}>View Enquiry</li>
//           </ul>
//         </div>
//       </div>
//       {/* Content */}
//       <div className="content">
//         <div className="profile-details">
//           <div className="profile-header">
//             <h2 className="profile-username">Name: {username}</h2>
//           </div>
//           <div className="profile-email">Email: {email}</div>
//           <div className="edit-profile">
//             {/* <button>Edit Profile</button> */}
//           </div>
//           <div className="courses-table">
//             <h3>Enrolled Courses</h3>
//             <table>
//               <thead>
//                 <tr>
//                   <th>Title</th>
//                   <th>Description</th>
//                   <th>Cost</th>
//                   <th>Enrollment Date</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {courses.map((course, index) => (
//                   <tr key={index}>
//                     <td>{course.title}</td>
//                     <td>{course.description}</td>
//                     <td>{course.cost}</td>
//                     <td>{course.enrollmentDate}</td>
//                     <td>
//                       {/* <span><FaEdit /></span> */}
//                       <span><RiDeleteBin6Line /></span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//       {/* Enquiry Viewer */}
//       {showEnquiries && (
//         <div className="enquiry-modal">
//           <div className="enquiry-modal-content">
//             <span className="close" onClick={() => setShowEnquiries(false)} style={{color:"whitesmoke"}}>Close</span>
//             {/* Pass enquiries to EnquiryViewer component */}
//             <EnquiryViewer enquiries={enquiries} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserProfile;
import { useEffect, useState } from 'react';
import EnquiryForm from './EnquiryForm';
import { RiDeleteBin6Line } from "react-icons/ri";
import '../../assets/css/profile.css';
import abc from '../../assets/images/profile.jpg';
import EnquiryViewer from './EnquiryViewer';
// import instance from '../../redux/axios';
import axios from 'axios';

const UserProfile = () => {
  const user = {
    username: 'john_doe',
    email: 'john@example.com',
    imageUrl: abc,
    courses: [
      {
        title: 'Course 1',
        description: 'Description for Course 1',
        cost: '$100',
        enrollmentDate: '2024-02-21',
      },
      {
        title: 'Course 2',
        description: 'Description for Course 2',
        cost: '$150',
        enrollmentDate: '2024-02-22',
      },
      {
        title: 'Course 3',
        description: 'Description for Course 3',
        cost: '$180',
        enrollmentDate: '2024-02-22',
      },
      {
        title: 'Course 4',
        description: 'Description for Course 4',
        cost: '$120',
        enrollmentDate: '2024-02-22',
      },
    ],
  };

  
  const [userDetails, setUserDetails] = useState(null);
  const [showCourses, setShowCourses] = useState(false);
  const [showEnquiries, setShowEnquiries] = useState(false);
  // const [error, setError] = useState(null);

  const { imageUrl, courses } = user;

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (!token) {
        throw new Error('Token not found');
    }
    axios.get('http://localhost:8080/api/userDetails', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => {
        setUserDetails(response.data);
    })
    .catch(error => {
        console.error('Error fetching user details:', error);
    });
}, []);

  return (
    <div className="profile">
      <div className="sidebar">
        <div className="profile-image">
          <img src={imageUrl} alt="Profile" />
        </div>
        <div className="sidebar-menu">
          <ul>
            <li><EnquiryForm /></li>
            <li onClick={() => {setShowEnquiries(true); setShowCourses(false);}}>View Enquiry</li>
            <li onClick={() => {setShowCourses(true); setShowEnquiries(false);}}>View Payment</li>
          </ul>
        </div>
      </div>
      <div className="content">
      {userDetails ? (
        <div>
          <h2>Welcome, {userDetails.name}!</h2>
          <p>Email: {userDetails.email}</p>
          
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
        {showCourses && (
          <div className="profile-details">
            <div className="courses-table">
              <h3>Enrolled Courses</h3>
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Cost</th>
                    <th>Enrollment Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course, index) => (
                    <tr key={index}>
                      <td>{course.title}</td>
                      <td>{course.description}</td>
                      <td>{course.cost}</td>
                      <td>{course.enrollmentDate}</td>
                      <td>
                        <span><RiDeleteBin6Line /></span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {showEnquiries && (
          <div className="enquiry-modal">
            <div className="enquiry-modal-content">
              <span className="close" onClick={() => setShowEnquiries(false)} style={{color:"whitesmoke"}}>Close</span>
              <EnquiryViewer  />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
