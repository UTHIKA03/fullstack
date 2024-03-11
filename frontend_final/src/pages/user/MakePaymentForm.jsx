// import { useState } from 'react';
// import PropTypes from 'prop-types';
// import '../../assets/css/enquiryForm.css';

// const MakePaymentForm = ({ totalAmount, onClose }) => {
//   const [paymentInfo, setPaymentInfo] = useState({
//     studentId: '',
//     modeOfPayment: '',
//     paymentDate: '',
//     // Add more fields as needed
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setPaymentInfo({ ...paymentInfo, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     // For example, you can send the paymentInfo to an API endpoint
//     onClose(); // Close the form after submission
//   };

//   return (
//     <div className="payment-form-modal">
//       <div className="payment-form-modal-content">
//         <span className="close" onClick={onClose}>Close</span>
//         <h2>Make Payment</h2>
//         <p>Total Amount: {totalAmount}</p> {/* Display total amount */}
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="studentId">Student ID</label>
//             <input type="text" id="studentId" name="studentId" value={paymentInfo.studentId} onChange={handleInputChange} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="modeOfPayment">Mode of Payment</label>
//             <input type="text" id="modeOfPayment" name="modeOfPayment" value={paymentInfo.modeOfPayment} onChange={handleInputChange} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="paymentDate">Payment Date</label>
//             <input type="date" id="paymentDate" name="paymentDate" value={paymentInfo.paymentDate} onChange={handleInputChange} />
//           </div>
//           {/* Add more input fields for other payment details */}
//           <button type="submit">Submit Payment</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// MakePaymentForm.propTypes = {
//   totalAmount: PropTypes.string.isRequired,
//   onClose: PropTypes.func.isRequired,
// };

// export default MakePaymentForm;
import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../../assets/css/enquiryForm.css';

const MakePaymentForm = ({ totalAmount, onClose }) => {
  const [paymentInfo, setPaymentInfo] = useState({
    studentId: '',
    modeOfPayment: '',
    paymentDate: '',
    amount: totalAmount // Set the amount to the totalAmount prop passed from the parent component
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/payment', paymentInfo) // Send paymentInfo to the backend
      .then(response => {
        console.log('Payment successful:', response.data);
        onClose(); // Close the form after successful payment
      })
      .catch(error => {
        console.error('Error making payment:', error);
        // Handle error scenario
      });
  };

  return (
    <div className="payment-form-modal">
      <div className="payment-form-modal-content">
        <span className="close" onClick={onClose}>Close</span>
        <h2>Make Payment</h2>
        <p>Total Amount: ${totalAmount}</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="studentId">Student ID</label>
            <input type="text" id="studentId" name="studentId" value={paymentInfo.student} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="modeOfPayment">Mode of Payment</label>
            <input type="text" id="modeOfPayment" name="modeOfPayment" value={paymentInfo.modeOfPayment} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="paymentDate">Payment Date</label>
            <input type="date" id="paymentDate" name="paymentDate" value={paymentInfo.paymentDate} onChange={handleInputChange} required />
          </div>
          {/* Add more input fields for other payment details */}
          <button type="submit">Submit Payment</button>
        </form>
      </div>
    </div>
  );
};

MakePaymentForm.propTypes = {
  totalAmount: PropTypes.number.isRequired, // Change prop type to number for totalAmount
  onClose: PropTypes.func.isRequired,
};

export default MakePaymentForm;
