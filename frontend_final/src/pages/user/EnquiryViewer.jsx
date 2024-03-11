// import PropTypes from 'prop-types';
// import { useState } from 'react';
// import { FaTimes } from 'react-icons/fa';
// // import '../../assets/css/enquiryviewer.css';

// const EnquiryViewer = ({ enquiries }) => {
//   const [isOpen, setIsOpen] = useState(true);

//   const handleClose = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className={`enquiry-viewer ${isOpen ? 'open' : 'closed'}`}>
//       {isOpen && (
//         <div className="enquiry-content">
//           <div className="enquiry-header">
//             <h3>Enquiries</h3>
//             <button className="close-button" onClick={handleClose}>
//               <FaTimes />
//             </button>
//           </div>
//           <table>
//             <thead>
//               <tr>
//                 <th>Course Name</th>
//                 <th>Description</th>
//                 <th>Email ID</th>
//                 <th>Enquiry Type</th>
//               </tr>
//             </thead>
//             <tbody>
//               {enquiries.map((enquiry, index) => (
//                 <tr key={index}>
//                   <td>{enquiry.courseName}</td>
//                   <td>{enquiry.description}</td>
//                   <td>{enquiry.email}</td>
//                   <td>{enquiry.enquiryType}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// EnquiryViewer.propTypes = {
//   enquiries: PropTypes.arrayOf(
//     PropTypes.shape({
//       courseName: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//       email: PropTypes.string.isRequired,
//       enquiryType: PropTypes.string.isRequired
//     })
//   ).isRequired
// };

// export default EnquiryViewer;
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
// import { FaTimes } from 'react-icons/fa';
import axios from 'axios';

const EnquiryViewer = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [allEnquiries, setAllEnquiries] = useState([]);

  useEffect(() => {
    // Fetch all enquiries when the component mounts
    axios.get('http://localhost:8080/api/enquiries')
      .then(response => {
        setAllEnquiries(response.data);
      })
      .catch(error => {
        console.error('Error fetching enquiries:', error);
      });
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDelete = async (enquiryId) => {
    try {
      await axios.delete(`http://localhost:8080/api/enquiries/${enquiryId}`);
      // Filter out the deleted enquiry from the list
      const updatedEnquiries = allEnquiries.filter(enquiry => enquiry.enquiryId !== enquiryId);
      setAllEnquiries(updatedEnquiries);
    } catch (error) {
      console.error('Error deleting enquiry:', error);
    }
  };

  return (
    <div className={`enquiry-viewer ${isOpen ? 'open' : 'closed'}`}>
      {isOpen && (
        <div className="enquiry-content">
          <div className="enquiry-header">
            <h3>Enquiries</h3>
            {/* <button className="close-button" onClick={handleClose}>
              <FaTimes />
            </button> */}
          </div>
          <table>
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Description</th>
                <th>Email ID</th>
                <th>Enquiry Type</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allEnquiries.map((enquiry, index) => (
                <tr key={index}>
                  <td>{enquiry.title}</td>
                  <td>{enquiry.enquiryText}</td>
                  <td>{enquiry.email}</td>
                  <td>{enquiry.enquiryType}</td>
                  <td>{enquiry.status}</td>
                  <td>
                    <button onClick={() => handleDelete(enquiry.enquiryId)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

EnquiryViewer.propTypes = {
  enquiries: PropTypes.arrayOf(
    PropTypes.shape({
      courseName: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      enquiryType: PropTypes.string.isRequired
    })
  ).isRequired
};

export default EnquiryViewer;
