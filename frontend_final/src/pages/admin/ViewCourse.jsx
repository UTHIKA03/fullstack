// import PropTypes from 'prop-types'; // Import PropTypes
// import { FaEdit } from "react-icons/fa";
// import { RiDeleteBin6Line } from "react-icons/ri";
// const ViewCourse = ({ courses }) => {
//   return (
//     <div className="course-content">
//       <h2>Course Details</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Description</th>
//             <th>Cost</th>
//             <th>Enrollment Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {courses.map((course, index) => (
//             <tr key={index}>
//               <td>{course.title}</td>
//               <td>{course.description}</td>
//               <td>{course.cost}</td>
//               <td>{course.enrollmentDate}</td>
//               <td style={{display:"flex",flexDirection:"row"}}>
//                   <span><FaEdit /></span>
//                   <span><RiDeleteBin6Line /></span>
//                 </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// // PropTypes validation
// ViewCourse.propTypes = {
//   courses: PropTypes.arrayOf(PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     cost: PropTypes.string.isRequired,
//     enrollmentDate: PropTypes.string.isRequired,
//   })).isRequired,
// };

// // const ViewCourse = ({ courses, onClose }) => {
// //   return (
// //     <div className="course-viewer-modal">
// //       <div className="course-viewer-content">
// //         <span className="close" onClick={onClose}>Close</span>
// //         <h2>Course Details</h2>
// //         <table>
// //           <thead>
// //             <tr>
// //               <th>Title</th>
// //               <th>Description</th>
// //               <th>Cost</th>
// //               <th>Enrollment Date</th>
// //               <th>Actions</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {courses.map((course, index) => (
// //               <tr key={index}>
// //                 <td>{course.title}</td>
// //                 <td>{course.description}</td>
// //                 <td>{course.cost}</td>
// //                 <td>{course.enrollmentDate}</td>
// //                 <td style={{display:"flex",flexDirection:"row"}}>
// //                   <span><FaEdit /></span>
// //                   <span><RiDeleteBin6Line /></span>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // // PropTypes validation
// // ViewCourse.propTypes = {
// //   courses: PropTypes.arrayOf(PropTypes.shape({
// //     title: PropTypes.string.isRequired,
// //     description: PropTypes.string.isRequired,
// //     cost: PropTypes.string.isRequired,
// //     enrollmentDate: PropTypes.string.isRequired,
// //   })).isRequired,
// //   onClose: PropTypes.func.isRequired,
// // };

// export default ViewCourse;
// import { useState, useEffect } from 'react';
// import axios from 'axios'; // Import Axios library

// const ViewCourse = () => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     // Fetch data from backend when the component mounts
//     axios.get('http://localhost:8080/api/courses') // Replace with your backend URL
//       .then(response => {
//         setCourses(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching courses:', error);
//       });
//   }, []); // Empty dependency array ensures this effect runs only once

//   return (
//     <div className="course-content">
//       <h2>Course Details</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Description</th>
//             <th>Cost</th>
//             <th>Duration</th>
//           </tr>
//         </thead>
//         <tbody>
//           {courses.map((course, index) => (
//             <tr key={index}>
//               <td>{course.title}</td>
//               <td>{course.description}</td>
//               <td>{course.cost}</td>
//               <td>{course.duration}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ViewCourse;

// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const ViewCourse = () => {
//   const [courses, setCourses] = useState([]);
//   const [editCourse, setEditCourse] = useState(null);
//   const [formData, setFormData] = useState({
//     courseId: '', // Updated field name to match backend
//     title: '',
//     description: '',
//     duration: '',
//     cost: ''
//   });

//   useEffect(() => {
//     // Fetch data from backend when the component mounts
//     axios.get('http://localhost:8080/api/courses')
//       .then(response => {
//         setCourses(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching courses:', error);
//       });
//   }, []);

//   const handleEdit = (course) => {
//     setEditCourse(course);
//     setFormData({
//       courseId: course.courseId, // Updated field name to match backend
//       title: course.title,
//       description: course.description,
//       duration: course.duration,
//       cost: course.cost.toString() // Convert cost to string
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!editCourse || !editCourse.courseId) {
//       console.error('No course selected for editing');
//       return;
//     }

//     try {
//       const response = await axios.put(`http://localhost:8080/api/courses/${editCourse.courseId}`, {
//         ...formData,
//         cost: parseFloat(formData.cost)
//       });
//       const updatedCourses = courses.map(course => {
//         if (course.courseId === editCourse.courseId) {
//           return response.data;
//         }
//         return course;
//       });
//       setCourses(updatedCourses);
//       setEditCourse(null);
//       setFormData({
//         courseId: '', // Updated field name to match backend
//         title: '',
//         description: '',
//         duration: '',
//         cost: ''
//       });
//     } catch (error) {
//       console.error('Error updating course:', error.response.data.message);
//     }
//   };

//   return (
//     <div className="course-content">
//       <h2>Course Details</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Description</th>
//             <th>Cost</th>
//             <th>Duration</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {courses.map(course => (
//             <tr key={course.courseId}>
//               <td>{course.title}</td>
//               <td>{course.description}</td>
//               <td>{course.cost}</td>
//               <td>{course.duration}</td>
//               <td>
//                 <button onClick={() => handleEdit(course)}>Edit</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {editCourse && (
//         <div>
//           <h3>Edit Course</h3>
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="title">Title:</label>
//             <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
//             <label htmlFor="description">Description:</label>
//             <textarea id="description" name="description" value={formData.description} onChange={handleChange} required />
//             <label htmlFor="duration">Duration:</label>
//             <input type="text" id="duration" name="duration" value={formData.duration} onChange={handleChange} required />
//             <label htmlFor="cost">Cost:</label>
//             <input type="text" id="cost" name="cost" value={formData.cost} onChange={handleChange} required />
//             <button type="submit">Update</button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ViewCourse;
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';
import { MdCancel, MdSaveAs } from 'react-icons/md';

const ViewCourse = () => {
  const [courses, setCourses] = useState([]);
  const [editCourseId, setEditCourseId] = useState(null);

  useEffect(() => {
    // Fetch data from backend when the component mounts
    axios.get('http://localhost:8080/api/courses')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  const handleEdit = (courseId) => {
    setEditCourseId(courseId);
  };

  const handleSave = async (courseId) => {
    // Find the course by ID
    const editedCourse = courses.find(course => course.courseId === courseId);
    try {
      // Update the course details on the backend
      await axios.put(`http://localhost:8080/api/courses/${courseId}`, editedCourse);
      // Refresh the course list after successful update
      const updatedCourses = await axios.get('http://localhost:8080/api/courses');
      setCourses(updatedCourses.data);
      // Clear the editing state
      setEditCourseId(null);
    } catch (error) {
      console.error('Error updating course:', error.response.data.message);
    }
  };

  const handleCancel = () => {
    // Clear the editing state
    setEditCourseId(null);
  };

  const handleChange = (e, courseId, field) => {
    const { value } = e.target;
    setCourses(prevCourses => {
      return prevCourses.map(course => {
        if (course.courseId === courseId) {
          return { ...course, [field]: value };
        }
        return course;
      });
    });
  };

  return (
    <div className="course-content" style={{ height: '500px', overflowY: 'scroll',marginTop:"1rem" }}>
      <h2>Course Details</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Cost</th>
            <th>Duration</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.courseId}>
              <td>
                {editCourseId === course.courseId ? (
                  <input
                    type="text"
                    value={course.title}
                    onChange={(e) => handleChange(e, course.courseId, 'title')}
                  />
                ) : (
                  course.title
                )}
              </td>
              <td>
                {editCourseId === course.courseId ? (
                  <textarea
                    value={course.description}
                    onChange={(e) => handleChange(e, course.courseId, 'description')}
                  />
                ) : (
                  course.description
                )}
              </td>
              <td>
                {editCourseId === course.courseId ? (
                  <input
                    type="text"
                    value={course.cost}
                    onChange={(e) => handleChange(e, course.courseId, 'cost')}
                  />
                ) : (
                  course.cost
                )}
              </td>
              <td>
                {editCourseId === course.courseId ? (
                  <input
                    type="text"
                    value={course.duration}
                    onChange={(e) => handleChange(e, course.courseId, 'duration')}
                  />
                ) : (
                  course.duration
                )}
              </td>
              <td>
                {editCourseId === course.courseId ? (
                  <>
                    <button style={{marginRight:"0.5rem",fontSize:"1.5rem"}} onClick={() => handleSave(course.courseId)}><MdSaveAs /></button>
                    <button style={{fontSize:"1.5rem"}} onClick={handleCancel}><MdCancel /></button>
                  </>
                ) : (
                  <button style={{fontSize:"1.2rem"}}onClick={() => handleEdit(course.courseId)}><FaEdit /></button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewCourse;
