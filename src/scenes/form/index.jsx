// import { Box, Button, TextField } from '@mui/material';
// import { Formik } from 'formik';
// import * as yup from 'yup';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import Header from '../../components/Header';
// import {db} from '../../firebase'
// import { addDoc, collection } from 'firebase/firestore';

// const Form = () => {
//   const isNonMobile = useMediaQuery('(min-width:600px)');

//   const handleFormSubmit = async (values) => {
//     try {
//       const docRef = await addDoc(collection(db, 'users'), {
//         firstName: values.firstName,
//         lastName: values.lastName,
//         email: values.email,
//         contact: values.contact,
//         address1: values.address1,
//         address2: values.address2,
//       });
//       console.log('Document written with ID: ', docRef.id);
//     } catch (error) {
//       console.error('Error adding document: ', error);
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
//               gridTemplateColumns="repeat(4, minmax(0, 1fr))"
//               sx={{
//                 '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
//               }}
//             >
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="First Name"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.firstName}
//                 name="firstName"
//                 error={!!touched.firstName && !!errors.firstName}
//                 helperText={touched.firstName && errors.firstName}
//                 sx={{ gridColumn: 'span 2' }}
//               />
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="Last Name"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.lastName}
//                 name="lastName"
//                 error={!!touched.lastName && !!errors.lastName}
//                 helperText={touched.lastName && errors.lastName}
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
//                 sx={{ gridColumn: 'span 4' }}
//               />
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="Contact Number"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.contact}
//                 name="contact"
//                 error={!!touched.contact && !!errors.contact}
//                 helperText={touched.contact && errors.contact}
//                 sx={{ gridColumn: 'span 4' }}
//               />
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="Address 1"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.address1}
//                 name="address1"
//                 error={!!touched.address1 && !!errors.address1}
//                 helperText={touched.address1 && errors.address1}
//                 sx={{ gridColumn: 'span 4' }}
//               />
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="Address 2"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.address2}
//                 name="address2"
//                 error={!!touched.address2 && !!errors.address2}
//                 helperText={touched.address2 && errors.address2}
//                 sx={{ gridColumn: 'span 4' }}
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
//     </Box>
//   );
// };

// const phoneRegExp =
//   /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

// const checkoutSchema = yup.object().shape({
//   firstName: yup.string().required('required'),
//   lastName: yup.string().required('required'),
//   email: yup.string().email('invalid email').required('required'),
//   contact: yup
//     .string()
//     .matches(phoneRegExp, 'Phone number is not valid')
//     .required('required'),
//   address1: yup.string().required('required'),
//   address2: yup.string().required('required'),
// });

// const initialValues = {
//   firstName: '',
//   lastName: '',
//   email: '',
//   contact: '',
//   address1: '',
//   address2: '',
// };

// export default Form;

// import { Box, Button, TextField } from '@mui/material';
// import { Formik } from 'formik';
// import * as yup from 'yup';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import Header from '../../components/Header';
// import { db } from '../../firebase';
// import { addDoc, collection } from 'firebase/firestore';

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

// const Form = () => {
//   const isNonMobile = useMediaQuery('(min-width:600px)');

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

      
//       alert('Your data has been added.');

    
//       resetForm();

//     } catch (error) {
//       console.error('Error adding document: ', error);

   
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
//               gridTemplateColumns="repeat(4, minmax(0, 1fr))"
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
//     </Box>
//   );
// };

// export default Form;

import { Box, Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from '../../components/Header';
import { db } from '../../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  employeeID: yup.string().required('Employee ID is required'),
  fullName: yup.string().required('Full Name is required'),
  age: yup.number().integer().positive().required('Age is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  contact: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone number is required'),
  address: yup.string().required('Address is required'),
  city: yup.string().required('City is required'),
  zipcode: yup.string().required('Zipcode is required'),
});

const initialValues = {
  employeeID: '',
  fullName: '',
  age: '',
  email: '',
  contact: '',
  address: '',
  city: '',
  zipcode: '',
};

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
      });

      console.log('Document written with ID: ', docRef.id);

      // Show a success alert
      alert('Your data has been added.');

      // Reset the form after successful submission
      resetForm();
    } catch (error) {
      console.error('Error adding document: ', error);

      // Show an error alert
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
                sx={{ gridColumn: 'span 2' }}
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
