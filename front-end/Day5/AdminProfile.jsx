// // export default AdminProfile;
// import { useState } from 'react';
// import AddCourse from './AddCourse'; // Import AddCourse component
// import CourseViewer from './ViewCourse'; // Import CourseViewer component
// import PaymentHistory from './PaymentHistory'; // Import PaymentHistory component
// import Enquiries from './EnquiriesModel'; // Import Enquiries component
// import '../../assets/css/adprofile.css';
// import abc from '../../assets/images/profile.jpg';

// const AdminProfile = () => {
//   const user = {
//     username: 'john_doe',
//     email: 'john@example.com',
//     imageUrl: abc,
//   };

//   const [showCourseViewer, setShowCourseViewer] = useState(false); // State to toggle CourseViewer visibility
//   const [showPaymentHistory, setShowPaymentHistory] = useState(false); // State to toggle PaymentHistory visibility
//   const [showEnquiries, setShowEnquiries] = useState(false); // State to toggle Enquiries visibility

//   const { imageUrl } = user;

//   const courses = [
//     {
//       title: "BEC Certification: Business English Basics",
//       description: "Learn the fundamentals of business English with this comprehensive course, covering essential vocabulary, grammar, and communication skills necessary for professional success.",
//       cost: "$16.00",
//       enrollmentDate: "2024-02-15",
//     },
//     {
//       title: "Advanced Business Communication Strategies",
//       description: "Elevate your business communication skills to the next level with this advanced course. Explore nuanced strategies for effective communication in various professional contexts, including presentations, negotiations, and networking.",
//       cost: "$21.15",
//       enrollmentDate: "2024-02-15",
//     },
//     // Add more courses as needed
//   ];

//   const payments = [
//     {
//       paymentId: '1',
//       studentId: '1001',
//       status: 'Completed',
//       totalAmount: '$200',
//       paymentDate: '2024-02-20',
//       modeOfPayment: 'Credit Card',
//     },
//     {
//       paymentId: '2',
//       studentId: '1002',
//       status: 'Pending',
//       totalAmount: '$150',
//       paymentDate: '2024-02-21',
//       modeOfPayment: 'PayPal',
//     },
//     // Add more payments as needed
//   ];

//   // Sample enquiries data (replace with your actual data)
//   const enquiries = [
//     {
//       courseName: 'BEC Certification: Business English Basics',
//       description: 'I have some questions about the course content and duration.',
//       email: 'example@example.com',
//       enquiryType: 'General',
//     },
//     {
//       courseName: 'Advanced Business Communication Strategies',
//       description: 'Do you offer any discounts for group enrollments?',
//       email: 'test@test.com',
//       enquiryType: 'Discount Inquiry',
//     },
//     // Add more enquiries as needed
//   ];

//   return (
//     <div className="profile">
//       <div className="sidebar">
//         <div className="profile-image">
//           <img src={imageUrl} alt="Profile" />
//         </div>
//         <div className="sidebar-menu">
//           <ul>
//             <li><AddCourse /></li>
//             <li onClick={() => setShowCourseViewer(true)}>View Course</li>
//             <li onClick={() => setShowPaymentHistory(true)}>View Payment</li>
//             <li onClick={() => setShowEnquiries(true)}>View Enquiries</li>
//           </ul>
//         </div>
//       </div>
//       {/* Content to the right of the sidebar */}
//       <div className="content">
//         {/* Add your content here */}
//         <h2>Welcome, {user.username}!</h2>
//         <p>Email: {user.email}</p>
//         {/* You can add more content here */}
//       </div>
//       {/* Render the components based on the state */}
//       {showCourseViewer && <CourseViewer courses={courses} onClose={() => setShowCourseViewer(false)} />}
//       {showPaymentHistory && <PaymentHistory payments={payments} onClose={() => setShowPaymentHistory(false)} />}
//       {showEnquiries && <Enquiries enquiries={enquiries} onClose={() => setShowEnquiries(false)} />}
//     </div>
//   );
// };

// export default AdminProfile;
// import { useState } from 'react';
// import PropTypes from 'prop-types'; // Import PropTypes
// import AddCourse from './AddCourse';
// import CourseViewer from './ViewCourse';
// import PaymentHistory from './PaymentHistory';
// import Enquiries from './EnquiriesModel';
// import '../../assets/css/adprofile.css';
// import abc from '../../assets/images/profile.jpg';
// import ViewCourse from './ViewCourse';

// const AdminProfile = () => {
//   const user = {
//     username: 'john_doe',
//     email: 'john@example.com',
//     imageUrl: abc,
//   };

//   const [showCourseViewer, setShowCourseViewer] = useState(false);
//   const [showPaymentHistory, setShowPaymentHistory] = useState(false);
//   const [showEnquiries, setShowEnquiries] = useState(false);

//   const { imageUrl } = user;

//   const courses = [
//     {
//       title: "BEC Certification: Business English Basics",
//       description: "Learn the fundamentals of business English with this comprehensive course, covering essential vocabulary, grammar, and communication skills necessary for professional success.",
//       cost: "$16.00",
//       enrollmentDate: "2024-02-15",
//     },
//     {
//       title: "Advanced Business Communication Strategies",
//       description: "Elevate your business communication skills to the next level with this advanced course. Explore nuanced strategies for effective communication in various professional contexts, including presentations, negotiations, and networking.",
//       cost: "$21.15",
//       enrollmentDate: "2024-02-15",
//     },
//     // Add more courses as needed
//   ];

//   const payments = [
//     {
//       paymentId: '1',
//       studentId: '1001',
//       status: 'Completed',
//       totalAmount: '$200',
//       paymentDate: '2024-02-20',
//       modeOfPayment: 'Credit Card',
//     },
//     {
//       paymentId: '2',
//       studentId: '1002',
//       status: 'Pending',
//       totalAmount: '$150',
//       paymentDate: '2024-02-21',
//       modeOfPayment: 'PayPal',
//     },
//     // Add more payments as needed
//   ];

//   const enquiries = [
//     {
//       courseName: 'BEC Certification: Business English Basics',
//       description: 'I have some questions about the course content and duration.',
//       email: 'example@example.com',
//       enquiryType: 'General',
//     },
//     {
//       courseName: 'Advanced Business Communication Strategies',
//       description: 'Do you offer any discounts for group enrollments?',
//       email: 'test@test.com',
//       enquiryType: 'Discount Inquiry',
//     },
//     // Add more enquiries as needed
//   ];

//   return (
//     <div className="profile">
//       <div className="sidebar">
//         <div className="profile-image">
//           <img src={imageUrl} alt="Profile" />
//         </div>
//         <div className="sidebar-menu">
//           <ul>
//             <li><AddCourse onAddCourse={() => {}} /></li> {/* Add onAddCourse prop */}
//             <li onClick={() => setShowCourseViewer(true)}>View Course</li>
//             <li onClick={() => setShowPaymentHistory(true)}>View Payment</li>
//             <li onClick={() => setShowEnquiries(true)}>View Enquiries</li>
//           </ul>
//         </div>
//       </div>
//       <div className="content">
//         <h2>Welcome, {user.username}!</h2>
//         <p>Email: {user.email}</p>
//         {showCourseViewer && <ViewCourse courses={courses} />}
//       </div>
//       {showCourseViewer && <CourseViewer courses={courses} onClose={() => setShowCourseViewer(false)} />}
//       {showPaymentHistory && <PaymentHistory payments={payments} onClose={() => setShowPaymentHistory(false)} />}
//       {showEnquiries && <Enquiries enquiries={enquiries} onClose={() => setShowEnquiries(false)} />}
//     </div>
//   );
// };

// AddCourse.propTypes = {
//   onAddCourse: PropTypes.func.isRequired, // Validate onAddCourse prop
// };

// export default AdminProfile;
// import { useState } from 'react';
// import PropTypes from 'prop-types';
// import AddCourse from './AddCourse';
// import PaymentHistory from './PaymentHistory';
// import Enquiries from './EnquiriesModel';
// import '../../assets/css/adprofile.css';
// import abc from '../../assets/images/profile.jpg';
// import ViewCourse from './ViewCourse'; // Keep this import statement

// const AdminProfile = () => {
//   const user = {
//     username: 'john_doe',
//     email: 'john@example.com',
//     imageUrl: abc,
//   };

//   const [showCourseViewer, setShowCourseViewer] = useState(false);
//   const [showPaymentHistory, setShowPaymentHistory] = useState(false);
//   const [showEnquiries, setShowEnquiries] = useState(false);

//   const { imageUrl } = user;

//   const courses = [
//     {
//       title: "BEC Certification: Business English Basics",
//       description: "Learn the fundamentals of business English with this comprehensive course, covering essential vocabulary, grammar, and communication skills necessary for professional success.",
//       cost: "$16.00",
//       enrollmentDate: "2024-02-15",
//     },
//     {
//       title: "Advanced Business Communication Strategies",
//       description: "Elevate your business communication skills to the next level with this advanced course. Explore nuanced strategies for effective communication in various professional contexts, including presentations, negotiations, and networking.",
//       cost: "$21.15",
//       enrollmentDate: "2024-02-15",
//     },
//     // Add more courses as needed
//   ];

//   const payments = [
//     {
//       paymentId: '1',
//       studentId: '1001',
//       status: 'Completed',
//       totalAmount: '$200',
//       paymentDate: '2024-02-20',
//       modeOfPayment: 'Credit Card',
//     },
//     {
//       paymentId: '2',
//       studentId: '1002',
//       status: 'Pending',
//       totalAmount: '$150',
//       paymentDate: '2024-02-21',
//       modeOfPayment: 'PayPal',
//     },
//     // Add more payments as needed
//   ];

//   const enquiries = [
//     {
//       courseName: 'BEC Certification: Business English Basics',
//       description: 'I have some questions about the course content and duration.',
//       email: 'example@example.com',
//       enquiryType: 'General',
//     },
//     {
//       courseName: 'Advanced Business Communication Strategies',
//       description: 'Do you offer any discounts for group enrollments?',
//       email: 'test@test.com',
//       enquiryType: 'Discount Inquiry',
//     },
//     // Add more enquiries as needed
//   ];

//   return (
//     <div className="admin-profile">
//       <div className="admin-sidebar">
//         <div className="admin-profile-image">
//           <img src={imageUrl} alt="admin-Profile" />
//         </div>
//         <div className="admin-sidebar-menu">
//           <ul>
//             <li><AddCourse onAddCourse={() => {}} /></li>
//             <li onClick={() => setShowCourseViewer(true)}>View Course</li>
//             <li onClick={() => setShowPaymentHistory(true)}>View Payment</li>
//             <li onClick={() => setShowEnquiries(true)}>View Enquiries</li>
//           </ul>
//         </div>
//       </div>
//       <div className="admin-content">
//         <h2>Welcome, {user.username}!</h2>
//         <p>Email: {user.email}</p>
//         {showCourseViewer && <ViewCourse courses={courses} />}
//         {showPaymentHistory && <PaymentHistory payments={payments} onClose={() => setShowPaymentHistory(false)} />}
//         {showEnquiries && <Enquiries enquiries={enquiries} onClose={() => setShowEnquiries(false)} />}
//       </div>
//     </div>
//   );
// };

// AddCourse.propTypes = {
//   onAddCourse: PropTypes.func.isRequired,
// };

// export default AdminProfile;
import { useState } from 'react';
import PropTypes from 'prop-types';
import AddCourse from './AddCourse';
import PaymentHistory from './PaymentHistory';
import Enquiries from './EnquiriesModel';
import '../../assets/css/adprofile.css';
import abc from '../../assets/images/profile.jpg';
import ViewCourse from './ViewCourse'; // Keep this import statement

const AdminProfile = () => {
  const user = {
    username: 'john_doe',
    email: 'john@example.com',
    imageUrl: abc,
  };

  const [showCourseViewer, setShowCourseViewer] = useState(false);
  const [showPaymentHistory, setShowPaymentHistory] = useState(false);
  const [showEnquiries, setShowEnquiries] = useState(false);

  const { imageUrl } = user;
  const courses = [
    {
      title: "BEC Certification: Business English Basics",
      description: "Learn the fundamentals of business English with this comprehensive course, covering essential vocabulary, grammar, and communication skills necessary for professional success.",
      cost: "$16.00",
      enrollmentDate: "2024-02-15",
    },
    {
      title: "Advanced Business Communication Strategies",
      description: "Elevate your business communication skills to the next level with this advanced course. Explore nuanced strategies for effective communication in various professional contexts, including presentations, negotiations, and networking.",
      cost: "$21.15",
      enrollmentDate: "2024-02-15",
    },
    // Add more courses as needed
  ];

  const payments = [
    {
      paymentId: '1',
      studentId: '1001',
      status: 'Completed',
      totalAmount: '$200',
      paymentDate: '2024-02-20',
      modeOfPayment: 'Credit Card',
    },
    {
      paymentId: '2',
      studentId: '1002',
      status: 'Pending',
      totalAmount: '$150',
      paymentDate: '2024-02-21',
      modeOfPayment: 'PayPal',
    },
    // Add more payments as needed
  ];

  const enquiries = [
    {
      courseName: 'BEC Certification: Business English Basics',
      description: 'I have some questions about the course content and duration.',
      email: 'example@example.com',
      enquiryType: 'General',
    },
    {
      courseName: 'Advanced Business Communication Strategies',
      description: 'Do you offer any discounts for group enrollments?',
      email: 'test@test.com',
      enquiryType: 'Discount Inquiry',
    },
    // Add more enquiries as needed
  ];
  const handleShowContent = (content) => {
    setShowCourseViewer(content === 'course');
    setShowPaymentHistory(content === 'payment');
    setShowEnquiries(content === 'enquiries');
  };

  return (
    <div className="admin-profile">
      <div className="admin-sidebar">
        <div className="admin-profile-image">
          <img src={imageUrl} alt="admin-Profile" />
        </div>
        <div className="admin-sidebar-menu">
          <ul>
            <li><AddCourse onAddCourse={() => {}} /></li>
            <li onClick={() => handleShowContent('course')}>View Course</li>
            <li onClick={() => handleShowContent('payment')}>View Payment</li>
            <li onClick={() => handleShowContent('enquiries')}>View Enquiries</li>
          </ul>
        </div>
      </div>
      <div className="admin-content">
        <h2>Welcome, {user.username}!</h2>
        <p>Email: {user.email}</p>
        {showCourseViewer && <ViewCourse courses={courses} />}
        {showPaymentHistory && <PaymentHistory payments={payments} onClose={() => setShowPaymentHistory(false)} />}
        {showEnquiries && <Enquiries enquiries={enquiries} onClose={() => setShowEnquiries(false)} />}
      </div>
    </div>
  );
};

AddCourse.propTypes = {
  onAddCourse: PropTypes.func.isRequired,
};

export default AdminProfile;
