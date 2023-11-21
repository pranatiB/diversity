import React, { useState, useEffect } from 'react';
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { db } from '../../firebase'; // Adjust the path to match your project structure
import { collection, getDocs } from 'firebase/firestore';

const Contacts = () => {
  const [contacts, setContacts] = useState([]); // State to store contacts data

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
  
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5, align: 'center' },
    { field: "employeeID", headerName: "Employee ID", align: 'center' },
    { field: "fullName", headerName: "Full Name", flex: 1, align: 'center' },
    { field: "age", headerName: "Age", type: "number", align: 'center' },
    { field: "email", headerName: "Email", flex: 1, align: 'center' },
    { field: "contact", headerName: "Phone Number", flex: 1, align: 'center' },
    { field: "address", headerName: "Address", flex: 1, align: 'center' },
    { field: "city", headerName: "City", flex: 1, align: 'center' },
    { field: "zipcode", headerName: "Zip Code", flex: 1, align: 'center' },
  ];

  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="List of Contacts from Firestore"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
      >
        <DataGrid
          rows={contacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
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
