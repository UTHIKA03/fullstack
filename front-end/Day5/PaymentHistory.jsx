import PropTypes from 'prop-types';
import '../../assets/css/adprofile.css';
const PaymentHistory = ({ payments }) => {
  return (
    <div className="payment-history-modal">
      <div className="payment-history-content">
        {/* <span className="close" onClick={onClose}>×</span> */}
        <h2>Payment History</h2>
        <table className="payment-table">
          <thead>
            <tr>
              <th>Payment ID</th>
              <th>Student ID</th>
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
                <td>{payment.studentId}</td>
                <td>{payment.status}</td>
                <td>{payment.totalAmount}</td>
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
  onClose: PropTypes.func.isRequired,
  payments: PropTypes.array.isRequired,
};

export default PaymentHistory;
