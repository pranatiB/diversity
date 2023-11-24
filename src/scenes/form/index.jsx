

// import { Box, Button, TextField } from '@mui/material';
// import { Formik } from 'formik';
// import * as yup from 'yup';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import Header from '../../components/Header';
// import { db } from '../../firebase';
// import { addDoc, collection } from 'firebase/firestore';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react'
// import Topbar from "../global/Topbar";
// import Sidebar from "../global/Sidebar";

// const phoneRegExp =
//   /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

// const checkoutSchema = yup.object().shape({
//   employeeID: yup.string().required('Employee ID is required'),
//   fullName: yup.string().required('Full Name is required'),
//   age: yup.number().integer().positive().required('Age is required'),
//   email: yup.string().email('Invalid email').required('Email is required'),
//   contact: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone number is required'),
//   address: yup.string().required('Address is required'),
//   city: yup.string().required('City is required'),
//   zipcode: yup.string().required('Zipcode is required'),
// });

// const initialValues = {
//   employeeID: '',
//   fullName: '',
//   age: '',
//   email: '',
//   contact: '',
//   address: '',
//   city: '',
//   zipcode: '',
// };

// const Form = ({ user }) => {
//   const isNonMobile = useMediaQuery('(min-width:600px)');
//   const navigate = useNavigate();
// const [isSidebar, setIsSidebar] = useState(true);

//   if (user && user.role === 'HR') {
//     return <div>Sorry, you don't have access to this page.</div>;
//   }

//   const handleFormSubmit = async (values, { resetForm }) => {
//     try {
//       const docRef = await addDoc(collection(db, 'users'), {
//         employeeID: values.employeeID,
//         fullName: values.fullName,
//         age: values.age,
//         email: values.email,
//         contact: values.contact,
//         address: values.address,
//         city: values.city,
//         zipcode: values.zipcode,
//       });

//       console.log('Document written with ID: ', docRef.id);

//       // Show a success alert
//       alert('Your data has been added.');

//       // Reset the form after successful submission
//       resetForm();
//     } catch (error) {
//       console.error('Error adding document: ', error);

//       // Show an error alert
//       alert('An error occurred while adding your data. Please try again later.');
//     }
//   };

//   return (
//         <div className="app">
//           <Sidebar isSidebar={isSidebar} />
//           <main className="content">
//             <Topbar setIsSidebar={setIsSidebar} />
//     <Box m="20px">
//       <Header title="CREATE USER" subtitle="Create a New User Profile" />

//       <Formik
//         onSubmit={handleFormSubmit}
//         initialValues={initialValues}
//         validationSchema={checkoutSchema}
//       >
//         {({
//           values,
//           errors,
//           touched,
//           handleBlur,
//           handleChange,
//           handleSubmit,
//         }) => (
//           <form onSubmit={handleSubmit}>
//             <Box
//               display="grid"
//               gap="30px"
//               gridTemplateColumns="repeat(2, minmax(0, 1fr))"
//               sx={{
//                 '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
//               }}
//             >
              
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="Employee ID"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.employeeID}
//                 name="employeeID"
//                 error={!!touched.employeeID && !!errors.employeeID}
//                 helperText={touched.employeeID && errors.employeeID}
//                 sx={{ gridColumn: 'span 2' }}
//               />
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="Full Name"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.fullName}
//                 name="fullName"
//                 error={!!touched.fullName && !!errors.fullName}
//                 helperText={touched.fullName && errors.fullName}
//                 sx={{ gridColumn: 'span 4' }}
//               />
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="number"
//                 label="Age"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.age}
//                 name="age"
//                 error={!!touched.age && !!errors.age}
//                 helperText={touched.age && errors.age}
//                 sx={{ gridColumn: 'span 2' }}
//               />
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="Email"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.email}
//                 name="email"
//                 error={!!touched.email && !!errors.email}
//                 helperText={touched.email && errors.email}
//                 sx={{ gridColumn: 'span 2' }}
//               />
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="Phone Number"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.contact}
//                 name="contact"
//                 error={!!touched.contact && !!errors.contact}
//                 helperText={touched.contact && errors.contact}
//                 sx={{ gridColumn: 'span 2' }}
//               />
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="Address"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.address}
//                 name="address"
//                 error={!!touched.address && !!errors.address}
//                 helperText={touched.address && errors.address}
//                 sx={{ gridColumn: 'span 2' }}
//               />
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="City"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.city}
//                 name="city"
//                 error={!!touched.city && !!errors.city}
//                 helperText={touched.city && errors.city}
//                 sx={{ gridColumn: 'span 2' }}
//               />
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="Zipcode"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.zipcode}
//                 name="zipcode"
//                 error={!!touched.zipcode && !!errors.zipcode}
//                 helperText={touched.zipcode && errors.zipcode}
//                 sx={{ gridColumn: 'span 2' }}
//               />
//             </Box>
//             <Box display="flex" justifyContent="end" mt="20px">
//               <Button type="submit" color="secondary" variant="contained">
//                 Create New User
//               </Button>
//             </Box>
//           </form>
//         )}
//       </Formik>
//         </Box>
//       </main>
//       </div>
//   );
// };

// export default Form;



// import { Box, Button, TextField } from '@mui/material';
// import { Formik } from 'formik';
// import * as yup from 'yup';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import Header from '../../components/Header';
// import { db } from '../../firebase';
// import { addDoc, collection } from 'firebase/firestore';
// import { useNavigate } from 'react-router-dom';

// const phoneRegExp =
//   /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

// const checkoutSchema = yup.object().shape({
//   employeeID: yup.string().required('Employee ID is required'),
//   fullName: yup.string().required('Full Name is required'),
//   age: yup.number().integer().positive().required('Age is required'),
//   email: yup.string().email('Invalid email').required('Email is required'),
//   contact: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone number is required'),
//   address: yup.string().required('Address is required'),
//   city: yup.string().required('City is required'),
//   zipcode: yup.string().required('Zipcode is required'),
// });

// const initialValues = {
//   employeeID: '',
//   fullName: '',
//   age: '',
//   email: '',
//   contact: '',
//   address: '',
//   city: '',
//   zipcode: '',
// };

// const Form = ({ user }) => {
//   const isNonMobile = useMediaQuery('(min-width:600px)');
//   const navigate = useNavigate();

//   if (user) {
//     if (user.role === 'HR') {
//       return <div>Sorry, you don't have access to this page.</div>;
//     } else if (user.role !== 'Admin') {
//       return <div>Unauthorized access. Please contact the administrator.</div>;
//     }
//   } else {
//     // If user information is not available (user not logged in), you can redirect to the login page.
//     navigate('/'); // Change '/login' to the actual login page path.
//     return null; // You may also render a loading spinner or some other UI while checking the user role.
//   }

//   const handleFormSubmit = async (values, { resetForm }) => {
//     try {
//       const docRef = await addDoc(collection(db, 'users'), {
//         employeeID: values.employeeID,
//         fullName: values.fullName,
//         age: values.age,
//         email: values.email,
//         contact: values.contact,
//         address: values.address,
//         city: values.city,
//         zipcode: values.zipcode,
//       });

//       console.log('Document written with ID: ', docRef.id);

//       // Show a success alert
//       alert('Your data has been added.');

//       // Reset the form after successful submission
//       resetForm();
//     } catch (error) {
//       console.error('Error adding document: ', error);

//       // Show an error alert
//       alert('An error occurred while adding your data. Please try again later.');
//     }
//   };

//   return (
//     <Box m="20px">
//       <Header title="CREATE USER" subtitle="Create a New User Profile" />

//       <Formik
//         onSubmit={handleFormSubmit}
//         initialValues={initialValues}
//         validationSchema={checkoutSchema}
//       >
//         {({
//           values,
//           errors,
//           touched,
//           handleBlur,
//           handleChange,
//           handleSubmit,
//         }) => (
//           <form onSubmit={handleSubmit}>
//             <Box
//               display="grid"
//               gap="30px"
//               gridTemplateColumns="repeat(2, minmax(0, 1fr))"
//               sx={{
//                 '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
//               }}
//             >
//               {/* ... Your form fields go here */}
//             </Box>
//             <Box display="flex" justifyContent="end" mt="20px">
//               <Button type="submit" color="secondary" variant="contained">
//                 Create New User
//               </Button>
//             </Box>
//           </form>
//         )}
//       </Formik>
//     </Box>
//   );
// };

// export default Form;




//validation check

// import { Box, Button, TextField } from '@mui/material';
// import { Formik } from 'formik';
// import * as yup from 'yup';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import Header from '../../components/Header';
// import { db } from '../../firebase';
// import { addDoc, collection } from 'firebase/firestore';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react'
// import Topbar from "../global/Topbar";
// import Sidebar from "../global/Sidebar";

// const phoneRegExp =
//   /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;


// const cityZipcodeMapping = {
//   'Navi Mumbai': '400708',
//   'Thane':'400601',
//   'Mumbai': '400001',
//   'Delhi': '110001',
//   'Kolkata': '700001',
//   'Chennai': '600001',
//   'Bengaluru': '560001',
//   'Hyderabad': '500001',
//   'Ahmedabad': '380001',
//   'Pune': '411001',
//   'Jaipur': '302001',
//   // Add more metro cities and their corresponding PIN codes as needed
// };

// const checkoutSchema = yup.object().shape({
//   employeeID: yup.string().required('Employee ID is required'),
//   fullName: yup.string().required('Full Name is required').matches(/^[A-Za-z]+ [A-Za-z]+$/, 'Please enter both first name and last name'),
//   age: yup.number().integer().positive().required('Age is required'),
//   email: yup.string()
//     .email('Invalid email')
//     .required('Email is required')
//     .matches(/@gmail\.com$/, 'Email should be a Gmail address'),
//   contact: yup
//     .string()
//     .matches(phoneRegExp, 'Phone number is not valid')
//     .test('is-ten-digits', 'Phone number should be 10 digits', (value) => value && value.replace(/[^\d]/g, '').length === 10)
//     .required('Phone number is required'),
//   address: yup.string().required('Address is required'),
//   city: yup.string().required('City is required'),
//   zipcode: yup.string()
//     .required('Zipcode is required')
//     .test('is-matching-city', 'Not a valid combination of City and Zipcode', function (value) {
//       const city = this.parent.city; // Accessing the value of the 'city' field
//       const expectedZipcode = cityZipcodeMapping[city]; // Get the expected zipcode for the given city
//       return value && expectedZipcode && value === expectedZipcode;
//     }).matches(/^\d{6}$/, 'Zipcode should be exactly 6 digits'),
   
// });

// const initialValues = {
//   employeeID: '',
//   fullName: '',
//   age: '',
//   email: '',
//   contact: '',
//   address: '',
//   city: '',
//   zipcode: '',
// };

// const Form = ({ user }) => {
//   const isNonMobile = useMediaQuery('(min-width:600px)');
//   const navigate = useNavigate();
//   const [isSidebar, setIsSidebar] = useState(true);

//   if (user && user.role === 'HR') {
//     return <div>Sorry, you don't have access to this page.</div>;
//   }

//   const handleFormSubmit = async (values, { resetForm }) => {
//     try {
//       const docRef = await addDoc(collection(db, 'users'), {
//         employeeID: values.employeeID,
//         fullName: values.fullName,
//         age: values.age,
//         email: values.email,
//         contact: values.contact,
//         address: values.address,
//         city: values.city,
//         zipcode: values.zipcode,
//       });

//       console.log('Document written with ID: ', docRef.id);

//       // Show a success alert
//       alert('Your data has been added.');

//       // Reset the form after successful submission
//       resetForm();
//     } catch (error) {
//       console.error('Error adding document: ', error);

//       // Show an error alert
//       alert('An error occurred while adding your data. Please try again later.');
//     }
//   };

//   return (
//     <div className="app">
//       <Sidebar isSidebar={isSidebar} />
//       <main className="content">
//         <Topbar setIsSidebar={setIsSidebar} />
//         <Box m="20px">
//           <Header title="CREATE USER" subtitle="Create a New User Profile" />

//           <Formik
//             onSubmit={handleFormSubmit}
//             initialValues={initialValues}
//             validationSchema={checkoutSchema}
//           >
//             {({
//               values,
//               errors,
//               touched,
//               handleBlur,
//               handleChange,
//               handleSubmit,
//             }) => (
//               <form onSubmit={handleSubmit}>
//                 <Box
//                   display="grid"
//                   gap="30px"
//                   gridTemplateColumns="repeat(2, minmax(0, 1fr))"
//                   sx={{
//                     '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
//                   }}
//                 >
//                   <TextField
//                     fullWidth
//                     variant="filled"
//                     type="text"
//                     label="Employee ID"
//                     onBlur={handleBlur}
//                     onChange={handleChange}
//                     value={values.employeeID}
//                     name="employeeID"
//                     error={!!touched.employeeID && !!errors.employeeID}
//                     helperText={touched.employeeID && errors.employeeID}
//                     sx={{ gridColumn: 'span 4' }}
//                   />
//                   <TextField
//                     fullWidth
//                     variant="filled"
//                     type="text"
//                     label="Full Name"
//                     onBlur={handleBlur}
//                     onChange={handleChange}
//                     value={values.fullName}
//                     name="fullName"
//                     error={!!touched.fullName && !!errors.fullName}
//                     helperText={touched.fullName && errors.fullName}
//                     sx={{ gridColumn: 'span 4' }}
//                   />
//                   <TextField
//                     fullWidth
//                     variant="filled"
//                     type="number"
//                     label="Age"
//                     onBlur={handleBlur}
//                     onChange={handleChange}
//                     value={values.age}
//                     name="age"
//                     error={!!touched.age && !!errors.age}
//                     helperText={touched.age && errors.age}
//                     sx={{ gridColumn: 'span 2' }}
//                   />
//                   <TextField
//                     fullWidth
//                     variant="filled"
//                     type="text"
//                     label="Email"
//                     onBlur={handleBlur}
//                     onChange={handleChange}
//                     value={values.email}
//                     name="email"
//                     error={!!touched.email && !!errors.email}
//                     helperText={touched.email && errors.email}
//                     sx={{ gridColumn: 'span 2' }}
//                   />
//                   <TextField
//                     fullWidth
//                     variant="filled"
//                     type="text"
//                     label="Phone Number"
//                     onBlur={handleBlur}
//                     onChange={handleChange}
//                     value={values.contact}
//                     name="contact"
//                     error={!!touched.contact && !!errors.contact}
//                     helperText={touched.contact && errors.contact}
//                     sx={{ gridColumn: 'span 2' }}
//                   />
//                   <TextField
//                     fullWidth
//                     variant="filled"
//                     type="text"
//                     label="Address"
//                     onBlur={handleBlur}
//                     onChange={handleChange}
//                     value={values.address}
//                     name="address"
//                     error={!!touched.address && !!errors.address}
//                     helperText={touched.address && errors.address}
//                     sx={{ gridColumn: 'span 2' }}
//                   />
//                   <TextField
//                     fullWidth
//                     variant="filled"
//                     type="text"
//                     label="City"
//                     onBlur={handleBlur}
//                     onChange={handleChange}
//                     value={values.city}
//                     name="city"
//                     error={!!touched.city && !!errors.city}
//                     helperText={touched.city && errors.city}
//                     sx={{ gridColumn: 'span 2' }}
//                   />
//                   <TextField
//                     fullWidth
//                     variant="filled"
//                     type="text"
//                     label="Zipcode"
//                     onBlur={handleBlur}
//                     onChange={handleChange}
//                     value={values.zipcode}
//                     name="zipcode"
//                     error={!!touched.zipcode && !!errors.zipcode}
//                     helperText={touched.zipcode && errors.zipcode}
//                     sx={{ gridColumn: 'span 2' }}
//                   />
//                 </Box>
//                 <Box display="flex" justifyContent="end" mt="20px">
//                   <Button type="submit" color="secondary" variant="contained">
//                     Create New User
//                   </Button>
//                 </Box>
//               </form>
//             )}
//           </Formik>
//         </Box>
//       </main>
//     </div>
//   );
// };

// export default Form;


//validation check with new input field

import { Box, Button, TextField, MenuItem } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from '../../components/Header';
import { db } from '../../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Topbar from '../global/Topbar';
import Sidebar from '../global/Sidebar';

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const cityZipcodeMapping = {
  'Navi Mumbai': '400708',
  'Thane': '400601',
  'Mumbai': '400001',
  'Delhi': '110001',
  'Kolkata': '700001',
  'Chennai': '600001',
  'Bengaluru': '560001',
  'Hyderabad': '500001',
  'Ahmedabad': '380001',
  'Pune': '411001',
  'Jaipur': '302001',
};

const accessLevels = ['user', 'admin', 'manager'];

const initialValues = {
  employeeID: '',
  fullName: '',
  age: '',
  email: '',
  contact: '',
  address: '',
  city: '',
  zipcode: '',
  accessLevel: '',
};

const checkoutSchema = yup.object().shape({
  employeeID: yup.string().required('Employee ID is required'),
  fullName: yup.string().required('Full Name is required').matches(/^[A-Za-z]+ [A-Za-z]+$/, 'Please enter both first name and last name'),
  age: yup.number().integer().positive().required('Age is required'),
  email: yup.string()
    .email('Invalid email')
    .required('Email is required')
    .matches(/@gmail\.com$/, 'Email should be a Gmail address'),
  contact: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .test('is-ten-digits', 'Phone number should be 10 digits', (value) => value && value.replace(/[^\d]/g, '').length === 10)
    .required('Phone number is required'),
  address: yup.string().required('Address is required'),
  city: yup.string().required('City is required'),
  zipcode: yup.string()
    .required('Zipcode is required')
    .test('is-matching-city', 'Not a valid combination of City and Zipcode', function (value) {
      const city = this.parent.city;
      const expectedZipcode = cityZipcodeMapping[city];
      return value && expectedZipcode && value === expectedZipcode;
    }).matches(/^\d{6}$/, 'Zipcode should be exactly 6 digits'),
  accessLevel: yup.string().required('Access Level is required'),
});

const Form = ({ user }) => {
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const navigate = useNavigate();
  const [isSidebar, setIsSidebar] = useState(true);

  if (user && user.role === 'HR') {
    return <div>Sorry, you don't have access to this page.</div>;
  }

  const handleFormSubmit = async (values, { resetForm }) => {
    try {
      const docRef = await addDoc(collection(db, 'users'), {
        employeeID: values.employeeID,
        fullName: values.fullName,
        age: values.age,
        email: values.email,
        contact: values.contact,
        address: values.address,
        city: values.city,
        zipcode: values.zipcode,
        accessLevel: values.accessLevel,
      });

      alert('Your data has been added.');

      resetForm();
    } catch (error) {
      console.error('Error adding document: ', error);

      alert('An error occurred while adding your data. Please try again later.');
    }
  };

  return (
    <div className="app">
      <Sidebar isSidebar={isSidebar} />
      <main className="content">
        <Topbar setIsSidebar={setIsSidebar} />
        <Box m="20px">
          <Header title="CREATE USER" subtitle="Create a New User Profile" />

          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={checkoutSchema}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box
                  display="grid"
                  gap="30px"
                  gridTemplateColumns="repeat(2, minmax(0, 1fr))"
                  sx={{
                    '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
                  }}
                >
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Employee ID"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.employeeID}
                    name="employeeID"
                    error={!!touched.employeeID && !!errors.employeeID}
                    helperText={touched.employeeID && errors.employeeID}
                    sx={{ gridColumn: 'span 4' }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Full Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.fullName}
                    name="fullName"
                    error={!!touched.fullName && !!errors.fullName}
                    helperText={touched.fullName && errors.fullName}
                    sx={{ gridColumn: 'span 4' }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="number"
                    label="Age"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.age}
                    name="age"
                    error={!!touched.age && !!errors.age}
                    helperText={touched.age && errors.age}
                    sx={{ gridColumn: 'span 2' }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    sx={{ gridColumn: 'span 2' }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Phone Number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.contact}
                    name="contact"
                    error={!!touched.contact && !!errors.contact}
                    helperText={touched.contact && errors.contact}
                    sx={{ gridColumn: 'span 2' }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Address"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address}
                    name="address"
                    error={!!touched.address && !!errors.address}
                    helperText={touched.address && errors.address}
                    sx={{ gridColumn: 'span 2' }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="City"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.city}
                    name="city"
                    error={!!touched.city && !!errors.city}
                    helperText={touched.city && errors.city}
                    sx={{ gridColumn: 'span 2' }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Zipcode"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.zipcode}
                    name="zipcode"
                    error={!!touched.zipcode && !!errors.zipcode}
                    helperText={touched.zipcode && errors.zipcode}
                    sx={{ gridColumn: 'span 2' }}
                  />
                  <TextField
                    fullWidth
                    select
                    variant="filled"
                    label="Access Level"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.accessLevel}
                    name="accessLevel"
                    error={!!touched.accessLevel && !!errors.accessLevel}
                    helperText={touched.accessLevel && errors.accessLevel}
                    sx={{ gridColumn: 'span 4' }}
                  >
                    {accessLevels.map((level) => (
                      <MenuItem key={level} value={level}>
                        {level}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
                <Box display="flex" justifyContent="end" mt="20px">
                  <Button type="submit" color="secondary" variant="contained">
                    Create New User
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </main>
    </div>
  );
};

export default Form;
