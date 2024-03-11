// import { useState } from 'react';
// import '../../assets/css/enquiryForm.css'; // Import CSS file for styling

// const EnquiryForm = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const togglePopup = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = {
//       title: e.target.courseName.value,
//       enquiryText: e.target.description.value,
//       email: e.target.email.value,
//       enquiryType: e.target.enquiryType.value
//       // Add other fields as needed
//     };
  
//     try {
//       const response = await fetch('http://localhost:8080/api/enquiries', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });
  
//       if (response.ok) {
//         console.log('Enquiry submitted successfully');
//         // Close the popup after form submission
//         togglePopup();
//       } else {
//         console.error('Failed to submit enquiry');
//         // Handle error scenario
//       }
//     } catch (error) {
//       console.error('Error submitting enquiry:', error);
//       // Handle error scenario
//     }
//   };
  

//   return (
//     <div>
//       <button className="open-button" onClick={togglePopup}>
//         Add Enquiry
//       </button>
//       {isOpen && (
//         <div className="enquiry-popup">
//           <form onSubmit={handleSubmit} className="enquiry-form">
//             <h2>Add Enquiry</h2>
//             <label htmlFor="courseName">Course Name:</label>
//             <input type="text" id="courseName" name="courseName" required />

//             <label htmlFor="description">Description:</label>
//             <textarea id="description" name="description" required></textarea>

//             <label htmlFor="email">Email ID:</label>
//             <input type="email" id="email" name="email" required />

//             <label htmlFor="enquiryType">Enquiry Type:</label>
//             <select id="enquiryType" name="enquiryType" required>
//               <option value="general">General</option>
//               <option value="technical">Complaint</option>
//               <option value="technical">Content Inquiry</option>
//               <option value="technical">Technical</option>
//               <option value="technical">Feature Request</option>
//               <option value="technical">Billing and Payment</option>
//               {/* Add more options as needed */}
//             </select>

//             <button type="submit" className="submit-button">
//               Submit
//             </button>
//             <button type="button" className="close-button" onClick={togglePopup}>
//               Close
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EnquiryForm;
import { useState } from 'react';
import '../../assets/css/enquiryForm.css'; // Import CSS file for styling

const EnquiryForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [studentId, setStudentId] = useState(null); // State to store student ID

  // useEffect(() => {
  //   // Fetch student ID from backend upon component mount
  //   const fetchStudentId = async () => {
  //     try {
  //       const response = await fetch('http://localhost:8080/api/getStudentId', {
  //         method: 'GET',
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem('token')}`, // Send JWT token in the request headers
  //         },
  //       });
        
  //       if (response.ok) {
  //         const data = await response.json();
  //         setStudentId(data.studentId);
  //       } else {
  //         console.error('Failed to fetch student ID');
  //         // Handle error scenario
  //       }
  //     } catch (error) {
  //       console.error('Error fetching student ID:', error);
  //       // Handle error scenario
  //     }
  //   };

  //   fetchStudentId();
  // }, []); // Run once on component mount

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      title: e.target.courseName.value,
      enquiryText: e.target.description.value,
      email: e.target.email.value,
      enquiryType: e.target.enquiryType.value,
      // Include student ID in the form data
    };
  
    try {
      const response = await fetch('http://localhost:8080/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        console.log('Enquiry submitted successfully');
        // Close the popup after form submission
        togglePopup();
      } else {
        console.error('Failed to submit enquiry');
        // Handle error scenario
      }
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      // Handle error scenario
    }
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
