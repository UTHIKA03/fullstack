// import { useState } from 'react';
// import '../../assets/css/enquiryForm.css'; // Import CSS file for styling

// const AddCourse = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     courseName: '',
//     description: '',
//     duration: '',
//     cost: '',
//     email: ''
//   });

//   const togglePopup = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your form submission logic here
//     console.log('Form submitted with data:', formData);
//     // Close the popup after form submission
//     togglePopup();
//     // Reset form fields after submission if needed
//     setFormData({
//       courseName: '',
//       description: '',
//       duration: '',
//       cost: '',
//       email: ''
//     });
//   };

//   return (
//     <div>
//       <button className="open-button" onClick={togglePopup}>
//         Add Course
//       </button>
//       {isOpen && (
//         <div className="enquiry-popup">
//           <form onSubmit={handleSubmit} className="enquiry-form">
//             <h2>Add Course</h2>
//             <label htmlFor="courseName">Course Name:</label>
//             <input
//               type="text"
//               id="courseName"
//               name="courseName"
//               value={formData.courseName}
//               onChange={handleChange}
//               required
//             />

//             <label htmlFor="description">Description:</label>
//             <textarea
//               id="description"
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               required
//             ></textarea>

//             <label htmlFor="duration">Duration:</label>
//             <input
//               type="text"
//               id="duration"
//               name="duration"
//               value={formData.duration}
//               onChange={handleChange}
//               required
//             />

//             <label htmlFor="cost">Cost:</label>
//             <input
//               type="text"
//               id="cost"
//               name="cost"
//               value={formData.cost}
//               onChange={handleChange}
//               required
//             />

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

// export default AddCourse;
// import { useState } from 'react';
// import PropTypes from 'prop-types'; // Import PropTypes
// import '../../assets/css/enquiryForm.css';
// const AddCourse = ({ onAddCourse }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     courseName: '',
//     description: '',
//     duration: '',
//     cost: '',
//     email: ''
//   });

//   const togglePopup = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your form submission logic here
//     console.log('Form submitted with data:', formData);
//     // Call the onAddCourse function with the form data
//     onAddCourse(formData);
//     // Close the popup after form submission
//     togglePopup();
//     // Reset form fields after submission if needed
//     setFormData({
//       courseName: '',
//       description: '',
//       duration: '',
//       cost: '',
//       email: ''
//     });
//   };

//   return (
//     <div>
//       <button className="open-button" onClick={togglePopup}>
//         Add Course
//       </button>
//       {isOpen && (
//         <div className="enquiry-popup">
//           <form onSubmit={handleSubmit} className="enquiry-form">
//             <h2>Add Course</h2>
//             <label htmlFor="courseName">Course Name:</label>
//             <input
//               type="text"
//               id="courseName"
//               name="courseName"
//               value={formData.courseName}
//               onChange={handleChange}
//               required
//             />

//             <label htmlFor="description">Description:</label>
//             <textarea
//               id="description"
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               required
//             ></textarea>

//             <label htmlFor="duration">Duration:</label>
//             <input
//               type="text"
//               id="duration"
//               name="duration"
//               value={formData.duration}
//               onChange={handleChange}
//               required
//             />

//             <label htmlFor="cost">Cost:</label>
//             <input
//               type="text"
//               id="cost"
//               name="cost"
//               value={formData.cost}
//               onChange={handleChange}
//               required
//             />

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

// // Define prop types
// AddCourse.propTypes = {
//   onAddCourse: PropTypes.func.isRequired, // onAddCourse prop is a required function
// };

// export default AddCourse;
import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../../assets/css/enquiryForm.css';

const AddCourse = ({ onAddCourse }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    duration: '',
    cost: ''
  });

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/courses/addcourse', formData);
      onAddCourse(response.data);
      togglePopup();
      setFormData({
        title: '',
        description: '',
        duration: '',
        cost: ''
      });
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  return (
    <div>
      <button className="open-button" onClick={togglePopup}>
        Add Course
      </button>
      {isOpen && (
        <div className="enquiry-popup">
          <form onSubmit={handleSubmit} className="enquiry-form">
            <h2>Add Course</h2>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />

            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>

            <label htmlFor="duration">Duration:</label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
            />

            <label htmlFor="cost">Cost:</label>
            <input
              type="text"
              id="cost"
              name="cost"
              value={formData.cost}
              onChange={handleChange}
              required
            />

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

AddCourse.propTypes = {
  onAddCourse: PropTypes.func.isRequired,
};

export default AddCourse;
