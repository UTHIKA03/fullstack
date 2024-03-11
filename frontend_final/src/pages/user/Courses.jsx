// const Courses = () => {
//   // Define course data directly within the component
//   const coursesData = [
//     {
//       title: "BEC Certification: Business English Basics",
//       image: "https://img.freepik.com/free-vector/english-teacher-concept-illustration_114360-7477.jpg?size=626&ext=jpg&ga=GA1.1.596685132.1708444749&semt=ais",
//       price: "$16.00"
//     },
//     {
//       title: "Advanced Business Communication Strategies",
//       image: "https://img.freepik.com/free-vector/english-lessons-sale-banner-template_23-2151085645.jpg?size=626&ext=jpg",
//       price: "$21.15"
//     },
//     {
//       title: "Legal English and Contract Drafting",
//       image: "https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg?size=626&ext=jpg&ga=GA1.1.596685132.1708444749&semt=sph",
//       price: "$12.00"
//     },
//     {
//       title: "Effective Business Writing Workshop",
//       image: "https://img.freepik.com/free-vector/gradient-english-lessons-social-media-post-template_23-2149264812.jpg?w=1060&t=st=1708586642~exp=1708587242~hmac=de5a0441fad03bf5afdc8039e714438bf7389eeb207707b4a8a539c84f461672",
//       price: "$18.40"
//     },
//     {
//       title: "Business English for Sales and Marketing Professionals",
//       image: "https://img.freepik.com/free-vector/english-school-landing-page-design-template_23-2149483592.jpg?w=1380&t=st=1708586711~exp=1708587311~hmac=4fcb050500db9c00096eac735de165d879e8a1def48289a4cd601e8959ed1c90",
//       price: "$24.99"
//     },
//     {
//       title: "Leadership Communication and Team Collaboration",
//       image: "https://img.freepik.com/free-vector/english-lessons-facebook-template_23-2151085609.jpg?size=626&ext=jpg&ga=GA1.1.596685132.1708444749&semt=ais",
//       price: "$19.99"
//     },
//     {
//         title: "English Language Proficiency Test Preparation",
//         image: "https://img.freepik.com/free-vector/english-school-landing-page-design-template_23-2149483594.jpg?w=1380&t=st=1708586731~exp=1708587331~hmac=c531db0ce55e582fb208cd0b65a0e81e23e25b6dcf48bf8d18a6081963a31a72",
//         price: "$15.75"
//     },
//     {
//       title: "Digital Communication and Social Media Marketing",
//       image: "https://img.freepik.com/free-vector/english-lessons-webinar-template_23-2151085640.jpg?size=626&ext=jpg",
//       price: "$22.50"
//     },
//   ];

//   return (
//     <section className="text-gray-600 body-font">
//       <div className="container px-5 py-24 mx-auto">
//         <div className="flex flex-wrap -m-4">
//           {coursesData.map((course, index) => (
//             <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={index}>
//               <a className="block relative h-48 rounded overflow-hidden">
//                 <img alt="Course" className="object-cover object-center w-full h-full block" src={course.image} />
//               </a>
//               <div className="mt-4">
//                 <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//                 <h2 className="text-gray-900 title-font text-lg font-medium">{course.title}</h2>
//                 <p className="mt-1">{course.price}</p>
//                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"><a href="/bec-app/user/coursedes">Enroll now</a></button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Courses;
// Courses.js

// import { Link } from "react-router-dom";
// import courseData from '../../courseData.json';

// const Courses = () => {
//   return (
//     <section className="text-gray-600 body-font" style={{ backgroundColor: '#DFD7BF' }}>
//       <div className="container px-5 py-24 mx-auto">
//         <div className="flex flex-wrap -m-4">
//           {courseData.map((course, index) => (
//             <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={index}>
//               <div>
//                 <Link to={`/coursedes/${course.slug}`}> {/* Updated Link to pass the slug */}
//                   <div className="block relative h-48 rounded overflow-hidden">
//                     <img alt="Course" className="object-cover object-center w-full h-full block" src={course.image} />
//                   </div>
//                   <div className="mt-4">
//                     <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//                     <h2 className="text-gray-900 title-font text-lg font-medium">{course.title}</h2>
//                     <p className="mt-1">{course.price}</p>
//                     <button className="bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">Enroll now</button>
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Courses;

// import { Link } from "react-router-dom";
// import courseData from '../../courseData.json';

// const Courses = () => {
//   return (
//     <section className="text-gray-600 body-font" style={{ backgroundColor: '#DFD7BF' }}>
//       <div className="container px-5 py-24 mx-auto">
//         <div className="flex flex-wrap -m-4">
//           {courseData.map((course, index) => (
//             <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={index}>
//               <div>
//                 <Link to={`/coursedes/${course.slug}`}> {/* Updated Link to pass the slug */}
//                   <div className="block relative h-48 rounded overflow-hidden">
//                     <img alt="Course" className="object-cover object-center w-full h-full block" src={course.image} />
//                   </div>
//                   <div className="mt-4">
//                     <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//                     <h2 className="text-gray-900 title-font text-lg font-medium">{course.title}</h2>
//                     <p className="mt-1">{course.price}</p>
//                     <button className="bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">Enroll now</button>
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Courses;

// import { Link } from "react-router-dom";
// import courseData from '../../courseData.json';

// const Courses = () => {
//   return (
//     <section className="text-gray-600 body-font" style={{ backgroundColor: '#DFD7BF' }}>
//       <div className="container px-5 py-24 mx-auto">
//         <div className="flex flex-wrap -m-4">
//           {courseData.map((course, index) => (
//             <div className="lg:w-1/4 md:w-1/2 p-4" key={index}>
//               <Link to={`/coursedes/${course.slug}`} className="block w-full h-full">
//                 <div className="h-full border border-gray-300 rounded-lg overflow-hidden">
//                   <img alt="Course" className="object-cover object-center w-full h-48" src={course.image} />
//                   <div className="p-6">
//                     <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
//                     <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{course.title}</h1>
//                     <div className="flex items-center flex-wrap">
//                       <span className="text-lg font-bold text-gray-900">{course.price}</span>
//                       <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Enroll Now</button>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Courses;
// import { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
// import axios from 'axios';

// const Courses = () => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     // Fetch course data from the backend when the component mounts
//     axios.get('http://localhost:8080/api/courses')
//       .then(response => {
//         setCourses(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching courses:', error);
//       });
//   }, []);

//   return (
//     <section className="text-gray-600 body-font" style={{ backgroundColor: '#DFD7BF' }}>
//       <div className="container px-5 py-24 mx-auto">
//         <div className="flex flex-wrap -m-4">
//           {courses.map((course, index) => (
//             <div className="lg:w-1/4 md:w-1/2 p-4" key={index}>
//               <Link to={`/coursedes/${course.slug}`} className="block w-full h-full">
//                 <div className="h-full border border-gray-300 rounded-lg overflow-hidden">
//                   <img alt="Course" className="object-cover object-center w-full h-48" src={course.image} />
//                   <div className="p-6">
//                     <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
//                     <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{course.title}</h1>
//                     <div className="flex items-center flex-wrap">
//                       <span className="text-lg font-bold text-gray-900">{course.price}</span>
//                       <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Enroll Now</button>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Courses;
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const Courses = () => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8080/api/courses')
//       .then(response => {
//         setCourses(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching courses:', error);
//       });
//   }, []);

//   const handleEnrollClick = async (courseId) => {
//     try {
//       const response = await axios.post(`http://localhost:8080/api/courses/getbyid/${courseId}`);
//       console.log('Enrolled in course:', response.data);
//     } catch (error) {
//       console.error('Error enrolling in course:', error.response.data.message);
//     }
//   };

//   return (
//     <section className="text-gray-600 body-font" style={{ backgroundColor: '#DFD7BF' }}>
//       <div className="container px-5 py-24 mx-auto">
//         <div className="flex flex-wrap -m-4">
//           {courses.map((course, index) => (
//             <div className="lg:w-1/4 md:w-1/2 p-4" key={index}>
//               <Link to={`/coursedes/${course.id}`} className="block w-full h-full">
//                 <div className="h-full border border-gray-300 rounded-lg overflow-hidden">
//                   <img alt="Course" className="object-cover object-center w-full h-48" src={course.image} />
//                   <div className="p-6">
//                     <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
//                     <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{course.title}</h1>
//                     <div className="flex items-center flex-wrap">
//                       <span className="text-lg font-bold text-gray-900">{course.price}</span>
//                       <button onClick={() => handleEnrollClick(course.courseId)} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Enroll Now</button>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Courses;
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const Courses = () => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8080/api/courses')
//       .then(response => {
//         setCourses(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching courses:', error);
//       });
//   }, []);

//   return (
//     <section className="text-gray-600 body-font" style={{ backgroundColor: '#DFD7BF' }}>
//       <div className="container px-5 py-24 mx-auto">
//         <div className="flex flex-wrap -m-4">
//           {courses.map(course => (
//             <div className="lg:w-1/4 md:w-1/2 p-4" key={course.courseId}>
//               <Link to={`/coursedes/${course.courseId}`} className="block w-full h-full">
//                 <div className="h-full border border-gray-300 rounded-lg overflow-hidden">
//                   <img alt="Course" className="object-cover object-center w-full h-48" src={course.image} />
//                   <div className="p-6">
//                     <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
//                     <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{course.title}</h1>
//                     <div className="flex items-center flex-wrap">
//                       <span className="text-lg font-bold text-gray-900">$ {course.cost}</span>
//                       <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Enroll Now</button>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Courses;
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const Courses = () => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8080/api/courses')
//       .then(response => {
//         setCourses(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching courses:', error);
//       });
//   }, []);

//   // Array of image URLs
//   const courseImages = [
//     "https://img.freepik.com/free-vector/english-teacher-concept-illustration_114360-7477.jpg?size=626&ext=jpg&ga=GA1.1.596685132.1708444749&semt=ais",
//     "https://img.freepik.com/free-vector/english-lessons-sale-banner-template_23-2151085645.jpg?size=626&ext=jpg",
//     "https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg?size=626&ext=jpg&ga=GA1.1.596685132.1708444749&semt=sph",
//     "https://img.freepik.com/free-vector/gradient-english-lessons-social-media-post-template_23-2149264812.jpg?w=1060&t=st=1708586642~exp=1708587242~hmac=de5a0441fad03bf5afdc8039e714438bf7389eeb207707b4a8a539c84f461672",
//     "https://img.freepik.com/free-vector/english-school-landing-page-design-template_23-2149483592.jpg?w=1380&t=st=1708586711~exp=1708587311~hmac=4fcb050500db9c00096eac735de165d879e8a1def48289a4cd601e8959ed1c90",
//     "https://img.freepik.com/free-vector/english-lessons-facebook-template_23-2151085609.jpg?size=626&ext=jpg&ga=GA1.1.596685132.1708444749&semt=ais",
//     "https://img.freepik.com/free-vector/english-school-landing-page-design-template_23-2149483594.jpg?w=1380&t=st=1708586731~exp=1708587331~hmac=c531db0ce55e582fb208cd0b65a0e81e23e25b6dcf48bf8d18a6081963a31a72",
//     "https://img.freepik.com/free-vector/english-lessons-webinar-template_23-2151085640.jpg?size=626&ext=jpg",
//     // Add more image URLs as needed
//   ];

//   return (
//     <section className="text-gray-600 body-font" style={{ backgroundColor: '#DFD7BF' }}>
//       <div className="container px-5 py-24 mx-auto">
//         <div className="flex flex-wrap -m-4">
//           {courses.map((course, index) => (
//             <div className="lg:w-1/4 md:w-1/2 p-4" key={course.courseId}>
//               <Link to={`/coursedes/${course.courseId}`} className="block w-full h-full">
//                 <div className="h-full border border-gray-300 rounded-lg overflow-hidden">
//                   <img alt="Course" className="object-cover object-center w-full h-48" src={courseImages[index % courseImages.length]} />
//                   <div className="p-6">
//                     <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
//                     <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{course.title}</h1>
//                     <div className="flex items-center flex-wrap">
//                       <span className="text-lg font-bold text-gray-900">$ {course.cost}</span>
//                       <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Enroll Now</button>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Courses;
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const Courses = () => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8080/api/courses')
//       .then(response => {
//         setCourses(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching courses:', error);
//       });
//   }, []);

//   const courseImages = [
//     "https://img.freepik.com/free-vector/english-teacher-concept-illustration_114360-7477.jpg?size=626&ext=jpg&ga=GA1.1.596685132.1708444749&semt=ais",
//     "https://img.freepik.com/free-vector/english-lessons-sale-banner-template_23-2151085645.jpg?size=626&ext=jpg",
//     "https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg?size=626&ext=jpg&ga=GA1.1.596685132.1708444749&semt=sph",
//     "https://img.freepik.com/free-vector/gradient-english-lessons-social-media-post-template_23-2149264812.jpg?w=1060&t=st=1708586642~exp=1708587242~hmac=de5a0441fad03bf5afdc8039e714438bf7389eeb207707b4a8a539c84f461672",
//     "https://img.freepik.com/free-vector/english-school-landing-page-design-template_23-2149483592.jpg?w=1380&t=st=1708586711~exp=1708587311~hmac=4fcb050500db9c00096eac735de165d879e8a1def48289a4cd601e8959ed1c90",
//     "https://img.freepik.com/free-vector/english-lessons-facebook-template_23-2151085609.jpg?size=626&ext=jpg&ga=GA1.1.596685132.1708444749&semt=ais",
//     "https://img.freepik.com/free-vector/english-school-landing-page-design-template_23-2149483594.jpg?w=1380&t=st=1708586731~exp=1708587331~hmac=c531db0ce55e582fb208cd0b65a0e81e23e25b6dcf48bf8d18a6081963a31a72",
//     "https://img.freepik.com/free-vector/english-lessons-webinar-template_23-2151085640.jpg?size=626&ext=jpg",
//   ];

//   return (
//     <section className="text-gray-600 body-font" style={{ backgroundColor: '#DFD7BF' }}>
//       <div className="container px-5 py-24 mx-auto">
//         <div className="flex flex-wrap -m-4">
//           {courses.map((course, index) => (
//             <div className="lg:w-1/4 md:w-1/2 p-4" key={course.courseId}>
//               <Link to={`/coursedes/${course.courseId}`} className="block w-full h-full">
//                 <div className="h-full border border-gray-300 rounded-lg overflow-hidden flex flex-col justify-between">
//                   <img alt="Course" className="object-cover object-center w-full h-48" src={courseImages[index % courseImages.length]} />
//                   <div className="p-6">
//                     <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
//                     <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{course.title}</h1>
//                     <div className="flex items-center flex-wrap">
//                       <span className="text-lg font-bold text-gray-900">$ {course.cost}</span>
//                       <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Enroll Now</button>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Courses;
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const Courses = () => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8080/api/courses')
//       .then(response => {
//         setCourses(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching courses:', error);
//       });
//   }, []);

//   const courseImages = [
//     "https://img.freepik.com/free-vector/english-teacher-concept-illustration_114360-7477.jpg?size=626&ext=jpg&ga=GA1.1.596685132.1708444749&semt=ais",
//     "https://img.freepik.com/free-vector/english-lessons-sale-banner-template_23-2151085645.jpg?size=626&ext=jpg",
//     "https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg?size=626&ext=jpg&ga=GA1.1.596685132.1708444749&semt=sph",
//     "https://img.freepik.com/free-vector/gradient-english-lessons-social-media-post-template_23-2149264812.jpg?w=1060&t=st=1708586642~exp=1708587242~hmac=de5a0441fad03bf5afdc8039e714438bf7389eeb207707b4a8a539c84f461672",
//     "https://img.freepik.com/free-vector/english-school-landing-page-design-template_23-2149483592.jpg?w=1380&t=st=1708586711~exp=1708587311~hmac=4fcb050500db9c00096eac735de165d879e8a1def48289a4cd601e8959ed1c90",
//     "https://img.freepik.com/free-vector/english-lessons-facebook-template_23-2151085609.jpg?size=626&ext=jpg&ga=GA1.1.596685132.1708444749&semt=ais",
//     "https://img.freepik.com/free-vector/english-school-landing-page-design-template_23-2149483594.jpg?w=1380&t=st=1708586731~exp=1708587331~hmac=c531db0ce55e582fb208cd0b65a0e81e23e25b6dcf48bf8d18a6081963a31a72",
//     "https://img.freepik.com/free-vector/english-lessons-webinar-template_23-2151085640.jpg?size=626&ext=jpg",
//   ];

//   return (
//     <section className="text-gray-600 body-font" style={{ backgroundColor: '#DFD7BF' }}>
//       <div className="container px-5 py-24 mx-auto">
//         <div className="flex flex-wrap -m-4">
//           {courses.map((course, index) => (
//             <div className="lg:w-1/4 md:w-1/2 p-4" key={course.courseId}>
//               <Link to={`/coursedes/${course.courseId}`} className="block w-full h-full">
//                 <div className="h-full border border-gray-300 rounded-lg overflow-hidden flex flex-col justify-between">
//                   <img alt="Course" className="object-cover object-center w-full h-48 sm:h-64" src={courseImages[index % courseImages.length]} />
//                   <div className="p-6">
//                     <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
//                     <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{course.title}</h1>
//                     <div className="flex items-center flex-wrap">
//                       <span className="text-lg font-bold text-gray-900">$ {course.cost}</span>
//                       <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Enroll Now</button>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Courses;
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/courses')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  const courseImages = [
    "https://img.freepik.com/free-vector/english-teacher-concept-illustration_114360-7477.jpg?size=626&ext=jpg&ga=GA1.1.596685132.1708444749&semt=ais",
    "https://img.freepik.com/free-vector/english-lessons-sale-banner-template_23-2151085645.jpg?size=626&ext=jpg",
    "https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg?size=626&ext=jpg&ga=GA1.1.596685132.1708444749&semt=sph",
    "https://img.freepik.com/free-vector/gradient-english-lessons-social-media-post-template_23-2149264812.jpg?w=1060&t=st=1708586642~exp=1708587242~hmac=de5a0441fad03bf5afdc8039e714438bf7389eeb207707b4a8a539c84f461672",
    "https://img.freepik.com/free-vector/english-school-landing-page-design-template_23-2149483592.jpg?w=1380&t=st=1708586711~exp=1708587311~hmac=4fcb050500db9c00096eac735de165d879e8a1def48289a4cd601e8959ed1c90",
    "https://img.freepik.com/free-vector/english-lessons-facebook-template_23-2151085609.jpg?size=626&ext=jpg&ga=GA1.1.596685132.1708444749&semt=ais",
    "https://img.freepik.com/free-vector/english-school-landing-page-design-template_23-2149483594.jpg?w=1380&t=st=1708586731~exp=1708587331~hmac=c531db0ce55e582fb208cd0b65a0e81e23e25b6dcf48bf8d18a6081963a31a72",
    "https://img.freepik.com/free-vector/english-lessons-webinar-template_23-2151085640.jpg?size=626&ext=jpg",
  ];

  return (
    <section className="text-gray-600 body-font" style={{ backgroundColor: '#DFD7BF' }}>
      <div className="container px-5 py-24 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {courses.map((course, index) => (
            <div className="flex flex-col border border-gray-300 rounded-lg overflow-hidden" key={course.courseId}>
              <Link to={`/coursedes/${course.courseId}`}>
                <img alt="Course" className="object-cover object-center w-full h-48 sm:h-64" src={courseImages[index % courseImages.length]} />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{course.title}</h1>
                  <div className="flex items-center flex-wrap">
                    <span className="text-lg font-bold text-gray-900">$ {course.cost}</span>
                    <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Enroll Now</button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
