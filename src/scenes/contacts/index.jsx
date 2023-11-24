// import React, { useState, useEffect } from 'react';
// import { Box } from "@mui/material";
// import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import Header from "../../components/Header";
// import { db } from '../../firebase';
// import { collection, getDocs } from 'firebase/firestore';
// import Sidebar from "../global/Sidebar";

// const Contacts = () => {
//   const [contacts, setContacts] = useState([]); // State to store contacts data
//   const [isSidebar, setIsSidebar] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, 'users'));
//         const fetchedContacts = querySnapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setContacts(fetchedContacts);
//       } catch (error) {
//         console.error('Error fetching contacts: ', error);
//       }
//     };
  
//     fetchData();
//   }, []);
  
//   const columns = [
//     { field: "employeeID", headerName: "Employee ID", align: 'center' },
//     { field: "fullName", headerName: "Full Name", flex: 1, align: 'center' },
//     { field: "age", headerName: "Age", type: "number", align: 'center' },
//     { field: "email", headerName: "Email", flex: 1, align: 'center' },
//     { field: "contact", headerName: "Phone Number", flex: 1, align: 'center' },
//     { field: "address", headerName: "Address", flex: 1, align: 'center' },
//     { field: "city", headerName: "City", flex: 1, align: 'center' },
//     { field: "zipcode", headerName: "Zip Code", flex: 1, align: 'center' },
//   ];

//   return (
//     <div className='app' >
//           <Sidebar isSidebar={isSidebar} />
//       <Box m="50px" style={{ width: '100%' }}>
//       <Header
//         title="CONTACTS"
//         subtitle="List of Contacts from Firestore"
//       />
//       <Box
//         m="40px 0 0 0"
//         height="75vh"
//       >
//         <DataGrid
//           rows={contacts}
//           columns={columns}
//           components={{ Toolbar: GridToolbar }}
//         />
//       </Box>
//     </Box>
//     </div>
    
//   );
// };

// export default Contacts;


//access level-->working fine

// import React, { useState, useEffect } from 'react';
// import { Box, IconButton,Typography,useTheme } from "@mui/material";
// import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import DeleteIcon from '@mui/icons-material/Delete';
// import Header from "../../components/Header";
// import { db } from '../../firebase';
// import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
// import Sidebar from "../global/Sidebar";
// import { tokens } from "../../theme";
// import { mockDataTeam } from "../../data/mockData";
// import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
// import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
// import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
// const Contacts = () => {
//   const theme = useTheme();
//   const [contacts, setContacts] = useState([]);
//   const [isSidebar, setIsSidebar] = useState(true);
//   const colors = tokens(theme.palette.mode);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, 'users'));
//         const fetchedContacts = querySnapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setContacts(fetchedContacts);
//       } catch (error) {
//         console.error('Error fetching contacts: ', error);
//         // Handle error fetching data
//       }
//     };
  
//     fetchData();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       // Delete the document from Firestore
//       await deleteDoc(doc(db, 'users', id));

//       // Update the contacts state after deletion
//       setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
//     } catch (error) {
//       console.error('Error deleting contact: ', error);
//       // Handle error deleting data
//     }
//   };

//   const columns = [
//     { field: "employeeID", headerName: "Employee ID", align: 'center' },
//     { field: "fullName", headerName: "Full Name", flex: 1, align: 'center' },
//     { field: "age", headerName: "Age", type: "number", align: 'center' },
//     { field: "email", headerName: "Email", flex: 1, align: 'center' },
//     { field: "contact", headerName: "Phone Number", flex: 1, align: 'center' },
//     { field: "address", headerName: "Address", flex: 1, align: 'center' },
//     { field: "city", headerName: "City", flex: 1, align: 'center' },
//     { field: "zipcode", headerName: "Zip Code", flex: 1, align: 'center' },
//     {
//       field: "accessLevel",
//       headerName: "Access Level",
//       flex: 1,
//       renderCell: ({ row: { access } }) => {
//         return (
//           <Box
//             width="60%"
//             m="0 auto"
//             p="5px"
//             display="flex"
//             justifyContent="center"
//             backgroundColor={
//               access === "admin"
//                 ? colors.greenAccent[600]
//                 : access === "manager"
//                 ? colors.greenAccent[700]
//                 : colors.greenAccent[700]
//             }
//             borderRadius="4px"
//           >
//             {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
//             {access === "manager" && <SecurityOutlinedIcon />}
//             {access === "user" && <LockOpenOutlinedIcon />}
//             <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
//               {access}
//             </Typography>
//           </Box>
//         );
//       },
//     },
//     {
//       field: "actions",
//       headerName: "Actions",
//       align: 'center',
//       renderCell: (params) => (
//         <IconButton color="error" onClick={() => handleDelete(params.row.id)}>
//           <DeleteIcon />
//         </IconButton>
//       ),
//     },

//   ];

//   return (
//     <div className='app'>
//       <Sidebar isSidebar={isSidebar} />
//       <Box m="50px" style={{ width: '100%' }}>
//         <Header title="CONTACTS" subtitle="List of Contacts from Firestore" />
//         <Box m="40px 0 0 0" height="75vh">
//           <DataGrid
//             rows={contacts}
//             columns={columns}
//             components={{ Toolbar: GridToolbar }}
//             getRowId={(row) => row.id}
//           />
//         </Box>
//       </Box>
//     </div>
//   );
// };

// export default Contacts;


import React, { useState, useEffect } from 'react';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/Delete';
import Header from "../../components/Header";
import { db } from '../../firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import Sidebar from "../global/Sidebar";
import { tokens } from "../../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

const Contacts = () => {
  const theme = useTheme();
  const [contacts, setContacts] = useState([]);
  const [isSidebar, setIsSidebar] = useState(true);
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const fetchedContacts = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setContacts(fetchedContacts);
      } catch (error) {
        console.error('Error fetching contacts: ', error);
        // Handle error fetching data
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      // Delete the document from Firestore
      await deleteDoc(doc(db, 'users', id));

      // Update the contacts state after deletion
      setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
    } catch (error) {
      console.error('Error deleting contact: ', error);
      // Handle error deleting data
    }
  };

  const columns = [
    { field: "employeeID", headerName: "Employee ID", align: 'center' },
    { field: "fullName", headerName: "Full Name", flex: 1, align: 'center' },
    { field: "age", headerName: "Age", type: "number", align: 'center' },
    { field: "email", headerName: "Email", flex: 1, align: 'center' },
    { field: "contact", headerName: "Phone Number", flex: 1, align: 'center' },
    { field: "address", headerName: "Address", flex: 1, align: 'center' },
    { field: "city", headerName: "City", flex: 1, align: 'center' },
    { field: "zipcode", headerName: "Zip Code", flex: 1, align: 'center' },
    { field: "accessLevel", headerName: "Access Level", flex: 1, align: 'center' },
    
    {
      field: "actions",
      headerName: "Actions",
      align: 'center',
      renderCell: (params) => (
        <IconButton color="error" onClick={() => handleDelete(params.row.id)}>
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <div className='app'>
      <Sidebar isSidebar={isSidebar} />
      <Box m="50px" style={{ width: '100%' }}>
        <Header title="CONTACTS" subtitle="List of Contacts from Firestore" />
        <Box m="40px 0 0 0" height="75vh">
          <DataGrid
            rows={contacts}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
            getRowId={(row) => row.id}
          />
        </Box>
      </Box>
    </div>
  );
};

export default Contacts;


// Contacts.js
// import { Box } from '@mui/material';
// import { DataGrid, GridToolbar } from '@mui/x-data-grid';
// import Header from '../../components/Header';
// import { useTheme } from '@mui/material';
// import { useUser } from '../userContext/userContext'; // Update the path

// const Contacts = () => {
  // const { userData } = useUser(); // Use the context hook
  // const theme = useTheme();

  // const columns = [
  //   { field: "id", headerName: "ID", flex: 0.5 },
  //   { field: "registrarId", headerName: "Employee ID" },
  //   {
  //     field: "name",
  //     headerName: "Name",
  //     flex: 1,
  //     cellClassName: "name-column--cell",
  //   },
  //   {
  //     field: "age",
  //     headerName: "Age",
  //     type: "number",
  //     headerAlign: "left",
  //     align: "left",
  //   },
  //   {
  //     field: "phone",
  //     headerName: "Phone Number",
  //     flex: 1,
  //   },
  //   {
  //     field: "email",
  //     headerName: "Email",
  //     flex: 1,
  //   },
  //   {
  //     field: "address",
  //     headerName: "Address",
  //     flex: 1,
  //   },
  //   {
  //     field: "city",
  //     headerName: "City",
  //     flex: 1,
  //   },
  //   {
  //     field: "zipCode",
  //     headerName: "Zip Code",
  //     flex: 1,
  //   },
  // ];

//   return (
//     <Box m="20px">
//       <Header title="CONTACTS" subtitle="List of Contacts for Future Reference" />
//       <Box
//         m="40px 0 0 0"
//         height="75vh"
//       >
//         <DataGrid
//           rows={userData ? [userData] : []}
//           columns={columns}
//           components={{ Toolbar: GridToolbar }}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default Contacts;
