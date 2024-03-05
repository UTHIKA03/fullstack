import { useState } from 'react';
import '../../assets/css/enquiryForm.css'; // Import CSS file for styling

const EnquiryForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted!');
    // Close the popup after form submission
    togglePopup();
  };

  return (
    <div>
      <button className="open-button" onClick={togglePopup}>
        Add Enquiry
      </button>
      {isOpen && (
        <div className="enquiry-popup">
          <form onSubmit={handleSubmit} className="enquiry-form">
            <h2>Add Enquiry</h2>
            <label htmlFor="courseName">Course Name:</label>
            <input type="text" id="courseName" name="courseName" required />

            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" required></textarea>

            <label htmlFor="email">Email ID:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="enquiryType">Enquiry Type:</label>
            <select id="enquiryType" name="enquiryType" required>
              <option value="general">General</option>
              <option value="technical">Complaint</option>
              <option value="technical">Content Inquiry</option>
              <option value="technical">Technical</option>
              <option value="technical">Feature Request</option>
              <option value="technical">Billing and Payment</option>
              {/* Add more options as needed */}
            </select>

            <button type="submit" className="submit-button">
              Submit
            </button>
            <button type="button" className="close-button" onClick={togglePopup}>
              Close
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default EnquiryForm;
