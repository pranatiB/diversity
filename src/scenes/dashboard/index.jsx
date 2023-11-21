import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import IosShareIcon from '@mui/icons-material/IosShare';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AccessibleIcon from '@mui/icons-material/Accessible';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import { useState } from 'react'
import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
const [isSidebar, setIsSidebar] = useState(true);

  return (
    <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
  <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
  <Box>
    <a
      href="https://app.powerbi.com/groups/me/reports/de9cdccc-d407-4d18-8602-bf2628edb739/ReportSectiond5c5d64acdcc017bfa1c?experience=power-bi"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        sx={{
          backgroundColor: colors.blueAccent[700],
          color: colors.grey[100],
          fontSize: "14px",
          fontWeight: "bold",
          padding: "10px 20px",
        }}
      >
        <IosShareIcon sx={{ mr: "10px" }} />
        Go to PowerBI
      </Button>
    </a>
  </Box>
</Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,230"
            subtitle="New Hires"
            progress="0.55"
            increase="+14%"
            icon={
              <AccessibilityIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="68:32"
            subtitle="Gender Diversity"
            progress="0.59"
            increase="+21%"
            icon={
              <Diversity1Icon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="59"
            subtitle="LGBTQ+ Inclusion"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="124"
            subtitle="Specially-Abled Hires"
            progress="0.80"
            increase="+23%"
            icon={
              <AccessibleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Diversity Hiring
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                11,045
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <IosShareIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
      
            <Box
  gridColumn="span 4"
  gridRow="span 2"
  backgroundColor={colors.primary[400]}
  overflow="auto"
>
  {/* Diversity Metrics Title */}
  <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    borderBottom={`4px solid ${colors.primary[500]}`}
    colors={colors.grey[100]}
    p="15px"
  >
    <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
      Diversity Metrics
    </Typography>
  </Box>

  {/* Display Diversity Metrics */}
  {mockTransactions.map((metric, i) => (
    <Box
      key={`${metric.name}-${i}`}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderBottom={`4px solid ${colors.primary[500]}`}
      p="15px"
    >
      <Box>
        <Typography
          color={colors.greenAccent[500]}
          variant="h5"
          fontWeight="600"
        >
          {metric.name}
        </Typography>
        <Typography color={colors.grey[100]}>
          {metric.description}
        </Typography>
      </Box>
      <Box>
        <Typography color={colors.grey[100]} fontWeight="600">
          {metric.value}
        </Typography>
        {/* Add margin between value and status */}
        <Box m="5px 0"> 
          <Box
            backgroundColor={colors.greenAccent[500]}
            p="2px 10px"  
            borderRadius="4px"
          >
            {metric.status}
          </Box>
        </Box>
      </Box>
    </Box>
  ))}
</Box>



        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Type of Hire
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h6"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              60% direct hires and 40% lateral hires
            </Typography>
            <Typography>Direct hires dominate, plus lateral</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Department Diversity 
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Diversity
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
        </Box>
      </main>
      </div>
  );
};

export default Dashboard;
