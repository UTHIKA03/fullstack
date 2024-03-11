// // import PropTypes from 'prop-types';
// // import { useParams } from 'react-router-dom';
// // import courseData from '../../courseData.json';
// // import Header from '../../components/common/Header';
// // import Footer from '../../components/common/Footer';

// // const Coursedes = () => {
// //   const { slug } = useParams();

// //   // Find the course that matches the slug
// //   const course = courseData.find(course => encodeURIComponent(course.slug) === slug);

// //   if (!course) {
// //     return <div>Course not found</div>;
// //   }

// //   const { title, image, description, price } = course;

// //   return (
// //     <div>
// //       <Header/> 
// //     <section className="text-gray-600 body-font overflow-hidden">
// //       <div className="container px-5 py-24 mx-auto">
// //         <div className="lg:w-4/5 mx-auto flex flex-wrap">
// //           <img alt="Course" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={image} />
// //           <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">

// //             <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{title}</h1>
// //             <div className="flex mb-4">
// //               <span className="flex items-center">
// //                 <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
// //                   <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
// //                 </svg>
// //                 <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
// //                   <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
// //                 </svg>
// //                 <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
// //                   <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
// //                 </svg>
// //                 <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
// //                   <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
// //                 </svg>
// //                 <span className="text-gray-600 ml-3">4 Reviews</span>
// //               </span>
// //             </div>
// //             <p className="leading-relaxed">{description}</p>
// //             <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              
// //             </div>
// //             <div className="flex">
// //               <span className="title-font font-medium text-2xl text-gray-900">{price}</span>
// //               <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Enroll Now</button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //     <Footer/>
// //     </div>
// //   );
// // };
// // Coursedes.propTypes = {
// //   title: PropTypes.string.isRequired,
// //   image: PropTypes.string.isRequired,
// //   description: PropTypes.string.isRequired,
// //   price: PropTypes.string.isRequired,
// // };
// // export default Coursedes;

// // import { useState } from 'react';
// // import PropTypes from 'prop-types';
// // import { useParams } from 'react-router-dom';
// // import courseData from '../../courseData.json';
// // import Header from '../../components/common/Header';
// // import Footer from '../../components/common/Footer';
// // import MakePaymentForm from './MakePaymentForm'; // Import the MakePaymentForm component

// // const Coursedes = () => {
// //   const { slug } = useParams();
// //   const [showPaymentForm, setShowPaymentForm] = useState(false); // State to manage visibility of payment form

// //   // Find the course that matches the slug
// //   const course = courseData.find(course => encodeURIComponent(course.slug) === slug);

// //   if (!course) {
// //     return <div>Course not found</div>;
// //   }

// //   const { title, image, description, price } = course;

// //   const handleEnrollClick = () => {
// //     setShowPaymentForm(true); // Show payment form when enroll button is clicked
// //   };

// //   const handleClosePaymentForm = () => {
// //     setShowPaymentForm(false); // Close payment form
// //   };

// //   return (
// //     <div>
// //       <Header/> 
// //       <section className="text-gray-600 body-font overflow-hidden">
// //         <div className="container px-5 py-24 mx-auto">
// //           <div className="lg:w-4/5 mx-auto flex flex-wrap">
// //             <img alt="Course" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={image} />
// //             <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
// //               <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{title}</h1>
// //               <div className="flex mb-4">
// //               <span className="flex items-center">
// //                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
// //                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
// //                  </svg>
// //                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
// //                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
// //                  </svg>
// //                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
// //                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
// //                  </svg>
// //                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
// //                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
// //                  </svg>
// //                  <span className="text-gray-600 ml-3">4 Reviews</span>
// //                </span>
// //               </div>
// //               <p className="leading-relaxed">{description}</p>
// //               <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
// //                 {/* Additional content */}
// //               </div>
// //               <div className="flex">
// //                 <span className="title-font font-medium text-2xl text-gray-900">{price}</span>
// //                 <button onClick={handleEnrollClick} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Enroll Now</button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //       <Footer/>

// //       {/* Conditionally render payment form */}
// //       {showPaymentForm && <MakePaymentForm totalAmount={price} onClose={handleClosePaymentForm} />}
// //     </div>
// //   );
// // };

// // Coursedes.propTypes = {
// //   title: PropTypes.string.isRequired,
// //   image: PropTypes.string.isRequired,
// //   description: PropTypes.string.isRequired,
// //   price: PropTypes.string.isRequired,
// // };

// // export default Coursedes;
// // import { useState, useEffect } from 'react';
// // import { useParams } from 'react-router-dom';
// // import axios from 'axios';

// // const Coursedes = () => {
// //   const { courseId } = useParams();
// //   const [course, setCourse] = useState(null);

// //   useEffect(() => {
// //     axios.get(`http://localhost:8080/api/courses/getbyid/${courseId}`)
// //       .then(response => {
// //         setCourse(response.data);
// //       })
// //       .catch(error => {
// //         console.error('Error fetching course details:', error);
// //       });
// //   }, [courseId]);

// //   return (
// //     <div>
// //       {course && (
// //         <div>
// //           <h1>{course.title}</h1>
// //           <p>{course.description}</p>
// //           {/* Render other course details */}
// //           <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Enroll Now</button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Coursedes;
// // Coursedes.jsx

// // import { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import PropTypes from 'prop-types'; // Import PropTypes

// // const Coursedes = ({ courseId }) => {
// //   const [course, setCourse] = useState(null);

// //   useEffect(() => {
// //     axios.get(`http://localhost:8080/api/courses/getbyid/${courseId}`)
// //       .then(response => {
// //         setCourse(response.data);
// //       })
// //       .catch(error => {
// //         console.error('Error fetching course details:', error);
// //       });
// //   }, [courseId]);

// //   return (
// //     <div>
// //       {course && (
// //         <div>
// //           <h1>{course.title}</h1>
// //           <p>{course.description}</p>
// //           {/* Render other course details */}
// //           <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Enroll Now</button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // // Add PropTypes validation
// // Coursedes.propTypes = {
// //   courseId: PropTypes.number.isRequired, // Define courseId prop type
// // };

// // export default Coursedes;
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import PropTypes from 'prop-types'; // Import PropTypes
// import Header from '../../components/common/Header';
// import Footer from '../../components/common/Footer';

// const Coursedes = ({ courseId }) => {
//   const [course, setCourse] = useState(null);

//   useEffect(() => {
//     axios.get(`http://localhost:8080/api/courses/getbyid/${courseId}`)
//       .then(response => {
//         setCourse(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching course details:', error);
//       });
//   }, [courseId]);

//   return (
//     <div>
//       <Header />
//       {course && (
//         <section className="text-gray-600 body-font overflow-hidden">
//           <div className="container px-5 py-24 mx-auto">
//             <div className="lg:w-4/5 mx-auto flex flex-wrap">
//               <img alt="Course" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={course.image} />
//               <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//                 <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{course.title}</h1>
//                 <div className="flex mb-4">
//                   <span className="flex items-center">
//                     <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
//                       <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
//                     </svg>
//                     <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
//                       <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
//                     </svg>
//                     <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
//                       <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
//                     </svg>
//                     <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
//                       <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
//                     </svg>
//                     <span className="text-gray-600 ml-3">4 Reviews</span>
//                   </span>
//                 </div>
//                 <p className="leading-relaxed">{course.description}</p>
//                 <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
//                   {/* Additional content */}
//                 </div>
//                 <div className="flex">
//                   <span className="title-font font-medium text-2xl text-gray-900">$ {course.cost}</span>
//                   <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Pay Now</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       )}
//       <Footer />
//     </div>
//   );
// };

// // Add PropTypes validation
// Coursedes.propTypes = {
//   courseId: PropTypes.number.isRequired, // Define courseId prop type
// };

// export default Coursedes;
import { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import MakePaymentForm from './MakePaymentForm';


const Coursedes = ({ courseId }) => {
  const [course, setCourse] = useState(null);
  const [showPaymentForm, setShowPaymentForm] = useState(false); // State to manage visibility of payment form

  const handleEnrollClick = () => {
    setShowPaymentForm(true); // Show payment form when enroll button is clicked
  };

  const handleClosePaymentForm = () => {
    setShowPaymentForm(false); // Close payment form
  };

  useEffect(() => {
    axios.get(`http://localhost:8080/api/courses/getbyid/${courseId}`)
      .then(response => {
        setCourse(response.data);
      })
      .catch(error => {
        console.error('Error fetching course details:', error);
      });
  }, [courseId]);

  return (
    <div>
      <Header />
      {course && (
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img alt="Course" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={course.image} />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{course.title}</h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    {/* Star icons */}
                  </span>
                </div>
                <p className="leading-relaxed">{course.description}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  {/* Additional content */}
                </div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">$ {course.cost}</span>
                  <button onClick={handleEnrollClick} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Pay Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <Footer />

      {/* Conditionally render payment form */}
      {showPaymentForm && <MakePaymentForm totalAmount={course.cost} onClose={handleClosePaymentForm} />}
    </div>
  );
};

Coursedes.propTypes = {
  courseId: PropTypes.number.isRequired,
};

export default Coursedes;
