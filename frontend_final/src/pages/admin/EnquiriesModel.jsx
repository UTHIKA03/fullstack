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
// import PropTypes from 'prop-types'; // Import PropTypes
// import '../../assets/css/adprofile.css';

// const EnquiriesModel = ({ enquiries }) => {
//   return (
//     <div className="enquiries-modal">
//       <div className="enquiries-modal-content">
//         <h2>Enquiries</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Course Name</th>
//               <th>Description</th>
//               <th>Email</th>
//               <th>Enquiry Type</th>
//               <th>Reply</th>
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
// };

// export default EnquiriesModel;
// import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios'; // Import axios for making HTTP requests
// import '../../assets/css/adprofile.css';

// const EnquiriesModel = () => {
//   // State to store enquiries data
//   const [enquiries, setEnquiries] = useState([]);

//   // Function to fetch enquiries data from backend
//   const fetchEnquiries = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/api/enquiries');
//       setEnquiries(response.data); // Update enquiries state with fetched data
//     } catch (error) {
//       console.error('Error fetching enquiries:', error);
//     }
//   };

//   // useEffect hook to fetch data when component mounts
//   useEffect(() => {
//     fetchEnquiries();
//   }, []); // Empty dependency array ensures the effect runs only once after component mounts

//   return (
//     <div className="enquiries-modal" style={{ height: '500px', overflowY: 'scroll',marginTop:"1rem" }}>
//       <div className="enquiries-modal-content">
//         <h2>Enquiries</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Course Name</th>
//               <th>Description</th>
//               <th>Email</th>
//               <th>Enquiry Type</th>
//               <th>Reply</th>
//             </tr>
//           </thead>
//           <tbody>
//             {enquiries.map((enquiry, index) => (
//               <tr key={index}>
//                 <td>{enquiry.title}</td>
//                 <td>{enquiry.enquiryText}</td>
//                 <td>{enquiry.email}</td>
//                 <td>{enquiry.enquiryType}</td>
//                 <td>{enquiry.status}</td>
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
//   enquiries: PropTypes.arrayOf(
//     PropTypes.shape({
//       courseName: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//       email: PropTypes.string.isRequired,
//       enquiryType: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

// export default EnquiriesModel;
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';
import { MdCancel, MdSaveAs } from 'react-icons/md';

const EnquiriesModel = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [editEnquiryId, setEditEnquiryId] = useState(null);
  // const [editedEnquiries, setEditedEnquiries] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/enquiries')
      .then(response => {
        setEnquiries(response.data);
        // setEditedEnquiries(response.data.map(enquiry => ({ ...enquiry })));
      })
      .catch(error => {
        console.error('Error fetching enquiries:', error);
      });
  }, []);

  const handleEdit = (enquiryId) => {
    setEditEnquiryId(enquiryId);
  };

  // const handleSave = async (enquiryId) => {
  //   const editedEnquiry = enquiries.find(enquiry => enquiry.enquiryId === enquiryId);
  //   try {
  //     await axios.put(`http://localhost:8080/api/enquiries/${enquiryId}`, editedEnquiry);
  //     const updatedEnquiries = await axios.get('http://localhost:8080/api/enquiries');
  //     setEnquiries(updatedEnquiries.data);
  //     // setEditedEnquiries(updatedEnquiries.data.map(enquiry => ({ ...enquiry })));
  //     setEditEnquiryId(null);
  //   } catch (error) {
  //     console.error('Error updating enquiry:', error.response.data.message);
  //   }
  // };

  const handleCancel = () => {
    // setEditedEnquiries(enquiries.map(enquiry => ({ ...enquiry })));
    setEditEnquiryId(null);
  };
  const handleSave = async (enquiryId) => {
    const editedEnquiry = enquiries.find(enquiry => enquiry.enquiryId === enquiryId);
    try {
      const response = await axios.put(`http://localhost:8080/api/enquiries/${enquiryId}`, editedEnquiry);
      if (response.status === 200) {
        const updatedEnquiries = await axios.get('http://localhost:8080/api/enquiries');
        setEnquiries(updatedEnquiries.data);
        setEditEnquiryId(null);
      } else {
        console.error('Error updating enquiry:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating enquiry:', error.message);
    }
  };
  
  const handleChange = (e, enquiryId, field) => {
    const {value} = e.target;
    setEnquiries(prevEnquiries => {
      return prevEnquiries.map(enquiry => {
        if (enquiry.enquiryId === enquiryId) {
          return { ...enquiry, [field]: value }; // Update only the targeted field
        }
        return enquiry;
      });
    });
  };
  

  return (
    <div className="enquiries-modal" style={{ height: '500px', overflowY: 'scroll', marginTop: "1rem" }}>
      <div className="enquiries-modal-content">
        <h2>Enquiries</h2>
        <table>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Description</th>
              <th>Email</th>
              <th>Enquiry Type</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map(enquiry => (
              <tr key={enquiry.enquiryId}>
                <td>
                  {editEnquiryId === enquiry.enquiryId ? (
                    <input
                      type="text"
                      value={enquiry.title}
                      onChange={(e) => handleChange(e, enquiry.enquiryId, 'title')}
                    />
                  ) : (
                    enquiry.title
                  )}
                </td>
                <td>
                  {editEnquiryId === enquiry.enquiryId ? (
                    <textarea
                      value={enquiry.enquiryText}
                      onChange={(e) => handleChange(e, enquiry.enquiryId, 'enquiryText')}
                    />
                  ) : (
                    enquiry.enquiryText
                  )}
                </td>
                <td>
                  {editEnquiryId === enquiry.enquiryId ? (
                    <input
                      type="text"
                      value={enquiry.email}
                      onChange={(e) => handleChange(e, enquiry.enquiryId, 'email')}
                    />
                  ) : (
                    enquiry.email
                  )}
                </td>
                <td>
                  {editEnquiryId === enquiry.enquiryId ? (
                    <input
                      type="text"
                      value={enquiry.enquiryType}
                      onChange={(e) => handleChange(e, enquiry.enquiryId, 'enquiryType')}
                    />
                  ) : (
                    enquiry.enquiryType
                  )}
                </td>
                <td>
                  {editEnquiryId === enquiry.enquiryId ? (
                    <input
                      type="text"
                      value={enquiry.status}
                      onChange={(e) => handleChange(e, enquiry.enquiryId, 'status')}
                    />
                  ) : (
                    enquiry.status
                  )}
                </td>
                <td>
                  {editEnquiryId === enquiry.enquiryId ? (
                    <>
                      <button style={{ marginRight: "0.5rem", fontSize: "1.5rem" }} onClick={() => handleSave(enquiry.enquiryId)}><MdSaveAs /></button>
                      <button style={{ fontSize: "1.5rem" }} onClick={handleCancel}><MdCancel /></button>
                    </>
                  ) : (
                    <button style={{ fontSize: "1.2rem" }} onClick={() => handleEdit(enquiry.enquiryId)}><FaEdit /></button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnquiriesModel;
