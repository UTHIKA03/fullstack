import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
// import '../../assets/css/enquiryviewer.css';

const EnquiryViewer = ({ enquiries }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={`enquiry-viewer ${isOpen ? 'open' : 'closed'}`}>
      {isOpen && (
        <div className="enquiry-content">
          <div className="enquiry-header">
            <h3>Enquiries</h3>
            <button className="close-button" onClick={handleClose}>
              <FaTimes />
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Description</th>
                <th>Email ID</th>
                <th>Enquiry Type</th>
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
