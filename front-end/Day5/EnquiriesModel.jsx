// import PropTypes from 'prop-types'; // Import PropTypes
// import '../../assets/css/adprofile.css'
// const EnquiriesModel = ({ enquiries, onClose }) => {
//   return (
//     <div className="enquiries-modal">
//       <div className="enquiries-modal-content">
//         <span className="close" onClick={onClose}>Close</span>
//         <h2>Enquiries</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Course Name</th>
//               <th>Description</th>
//               <th>Email</th>
//               <th>Enquiry Type</th>
//             </tr>
//           </thead>
//           <tbody>
//             {enquiries.map((enquiry, index) => (
//               <tr key={index}>
//                 <td>{enquiry.courseName}</td>
//                 <td>{enquiry.description}</td>
//                 <td>{enquiry.email}</td>
//                 <td>{enquiry.enquiryType}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// // PropTypes validation
// EnquiriesModel.propTypes = {
//   enquiries: PropTypes.arrayOf(PropTypes.shape({
//     courseName: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     enquiryType: PropTypes.string.isRequired,
//   })).isRequired,
//   onClose: PropTypes.func.isRequired,
// };

// export default EnquiriesModel;
import PropTypes from 'prop-types'; // Import PropTypes
import '../../assets/css/adprofile.css';

const EnquiriesModel = ({ enquiries }) => {
  return (
    <div className="enquiries-modal">
      <div className="enquiries-modal-content">
        <h2>Enquiries</h2>
        <table>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Description</th>
              <th>Email</th>
              <th>Enquiry Type</th>
              <th>Reply</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((enquiry, index) => (
              <tr key={index}>
                <td>{enquiry.courseName}</td>
                <td>{enquiry.description}</td>
                <td>{enquiry.email}</td>
                <td>{enquiry.enquiryType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// PropTypes validation
EnquiriesModel.propTypes = {
  enquiries: PropTypes.arrayOf(PropTypes.shape({
    courseName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    enquiryType: PropTypes.string.isRequired,
  })).isRequired,
};

export default EnquiriesModel;
