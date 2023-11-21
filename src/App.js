// import { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import Topbar from "./scenes/global/Topbar";
// import Sidebar from "./scenes/global/Sidebar";
// import Dashboard from "./scenes/dashboard";
// import Team from "./scenes/team";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { ColorModeContext, useMode } from "./theme";
// import Calendar from "./scenes/calendar/calendar";
// import CandidateHire from "./scenes/CandidateHire/CandidateHire";
// import userContext from "./scenes/userContext/userContext";
// import SignIn from "./scenes/SignIn";
// import Form from "./scenes/form/index";
// import Admin from "./scenes/Admin";
// function App() {
//   const [theme, colorMode] = useMode();
//   const [isSidebar, setIsSidebar] = useState(true);

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <div className="app">
//           <Sidebar isSidebar={isSidebar} />
//           <main className="content">
//             <Topbar setIsSidebar={setIsSidebar} />
//             <Routes>
//               <Route path="/dashboard" element={<Dashboard />} />
//               <Route path="/team" element={<Team />} />
//               <Route path="/contacts" element={<Contacts />} />
//               <Route path="/invoices" element={<Invoices />} />
              
//               <Route path="/form" element={<Form />} />
//               <Route path="/" element={<SignIn />} />
//               <Route path="/Admin" element={<Admin />} />
              
//               <Route path="/calendar" element={<Calendar />} />
//               <Route path="/hire" element={<CandidateHire />} />
//             </Routes>
//           </main>
//         </div>
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }

// export default App;


import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import Topbar from "./scenes/global/Topbar";
// import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import CandidateHire from "./scenes/CandidateHire/CandidateHire";
import userContext from "./scenes/userContext/userContext";
import SignIn from "./scenes/SignIn";
import Form from "./scenes/form/index";
import Admin from "./scenes/Admin";
import EmpChurn from "./scenes/EmpChurn/EmpChurn";
function App() {
  const [theme, colorMode] = useMode();
  // const [isSidebar, setIsSidebar] = useState(true);
  const [user, setUser] = useState(null); // State to store user data

  // Function to set user data after successful login
  const handleLogin = (userData) => {
    setUser(userData);
  };
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {/* <Sidebar isSidebar={isSidebar} /> */}
          <main className="content">
            {/* <Topbar setIsSidebar={setIsSidebar} /> */}
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              
              <Route
          path="/form"
          element={<Form user={user} />} // Pass the user object/role to Form component
        />
              <Route path="/" element={<SignIn />} />
              <Route path="/Admin" element={<Admin />} />
              <Route path ="/EmpChurn" element={<EmpChurn />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/hire" element={<CandidateHire />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;


// import * as React from 'react';
// import { useState } from 'react';
// import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
// import Topbar from './scenes/global/Topbar';
// import Sidebar from './scenes/global/Sidebar';
// import Dashboard from './scenes/dashboard';
// import Team from './scenes/team';
// import Invoices from './scenes/invoices';
// import Contacts from './scenes/contacts';
// import { CssBaseline, ThemeProvider } from '@mui/material';
// import { ColorModeContext, useMode } from './theme';
// import Calendar from './scenes/calendar/calendar';
// import CandidateHire from './scenes/CandidateHire/CandidateHire';
// import SignIn from './scenes/SignIn';
// import Form from './scenes/form/index';
// import Admin from './scenes/Admin';

// function App() {
//   const [theme, colorMode] = useMode();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     navigate('/');
//   };

//   const isLoginPage = location.pathname === '/';

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <div className="app">
//           {isLoggedIn && !isLoginPage && <Sidebar />}
//           {isLoggedIn && !isLoginPage && <Topbar onLogout={handleLogout} />}
//           <main className="content">
//             <Routes>
//               <Route path="/dashboard" element={<Dashboard />} />
//               <Route path="/team" element={<Team />} />
//               <Route path="/contacts" element={<Contacts />} />
//               <Route path="/invoices" element={<Invoices />} />
//               <Route path="/form" element={<Form />} />
//               <Route
//                 path="/"
//                 element={
//                   <SignIn
//                     onLogin={handleLogin}
//                     isLoggedIn={isLoggedIn}
//                   />
//                 }
//               />
//               <Route path="/Admin" element={<Admin />} />
//               <Route path="/calendar" element={<Calendar />} />
//               <Route path="/hire" element={<CandidateHire />} />
//             </Routes>
//           </main>
//         </div>
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }

// export default App;
