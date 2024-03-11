// import PropTypes from 'prop-types';
// import '../../assets/css/adprofile.css';
// const PaymentHistory = ({ payments }) => {
//   return (
//     <div className="payment-history-modal">
//       <div className="payment-history-content">
//         {/* <span className="close" onClick={onClose}>×</span> */}
//         <h2>Payment History</h2>
//         <table className="payment-table">
//           <thead>
//             <tr>
//               <th>Payment ID</th>
//               <th>Student ID</th>
//               <th>Status</th>
//               <th>Total Amount</th>
//               <th>Payment Date</th>
//               <th>Mode of Payment</th>
//             </tr>
//           </thead>
//           <tbody>
//             {payments.map((payment) => (
//               <tr key={payment.paymentId}>
//                 <td>{payment.paymentId}</td>
//                 <td>{payment.studentId}</td>
//                 <td>{payment.status}</td>
//                 <td>{payment.totalAmount}</td>
//                 <td>{payment.paymentDate}</td>
//                 <td>{payment.modeOfPayment}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// PaymentHistory.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   payments: PropTypes.array.isRequired,
// };

// export default PaymentHistory;
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../../assets/css/adprofile.css';

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/payment');
        setPayments(response.data);
      } catch (error) {
        console.error('Error fetching payments:', error);
      }
    };

    fetchPayments();
  }, []);

  return (
    <div className="payment-history-modal" style={{ height: '500px', overflowY: 'scroll',marginTop:"1rem" }}>
      <div className="payment-history-content">
        <h2>Payment History</h2>
        <table className="payment-table">
          <thead>
            <tr>
              <th>Payment ID</th>
             
              <th>Status</th>
              <th>Total Amount</th>
              <th>Payment Date</th>
              <th>Mode of Payment</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.paymentId}>
                <td>{payment.paymentId}</td>
               
                <td>{payment.status}</td>
                <td>{payment.amount}</td>
                <td>{payment.paymentDate}</td>
                <td>{payment.modeOfPayment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

PaymentHistory.propTypes = {
  payments: PropTypes.arrayOf(
    PropTypes.shape({
      paymentId: PropTypes.number.isRequired,
      studentId: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
      totalAmount: PropTypes.number.isRequired,
      paymentDate: PropTypes.string.isRequired,
      modeOfPayment: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PaymentHistory;
