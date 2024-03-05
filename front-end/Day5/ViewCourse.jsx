import PropTypes from 'prop-types'; // Import PropTypes
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
const ViewCourse = ({ courses }) => {
  return (
    <div className="course-content">
      <h2>Course Details</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Cost</th>
            <th>Enrollment Date</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.title}</td>
              <td>{course.description}</td>
              <td>{course.cost}</td>
              <td>{course.enrollmentDate}</td>
              <td style={{display:"flex",flexDirection:"row"}}>
                  <span><FaEdit /></span>
                  <span><RiDeleteBin6Line /></span>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// PropTypes validation
ViewCourse.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    cost: PropTypes.string.isRequired,
    enrollmentDate: PropTypes.string.isRequired,
  })).isRequired,
};

// const ViewCourse = ({ courses, onClose }) => {
//   return (
//     <div className="course-viewer-modal">
//       <div className="course-viewer-content">
//         <span className="close" onClick={onClose}>Close</span>
//         <h2>Course Details</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Description</th>
//               <th>Cost</th>
//               <th>Enrollment Date</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {courses.map((course, index) => (
//               <tr key={index}>
//                 <td>{course.title}</td>
//                 <td>{course.description}</td>
//                 <td>{course.cost}</td>
//                 <td>{course.enrollmentDate}</td>
//                 <td style={{display:"flex",flexDirection:"row"}}>
//                   <span><FaEdit /></span>
//                   <span><RiDeleteBin6Line /></span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
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
//   onClose: PropTypes.func.isRequired,
// };

export default ViewCourse;
