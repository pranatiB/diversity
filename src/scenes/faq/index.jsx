

import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import Sidebar from "../global/Sidebar";
import { useState } from 'react';

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
const [isSidebar, setIsSidebar] = useState(true);

  return (
    <div className="app">
          <Sidebar isSidebar={isSidebar} />
      <Box m="20px" style={{ width: '100%' }}>

      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What is the purpose of this dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          This dashboard aims to provide a comprehensive view of various diversity and inclusion metrics within our organization, including gender, ethnicity, age, disability, LGBTQ+ inclusion, and veteran diversity.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How often is the data on this dashboard updated?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The data on this dashboard is updated weekly, ensuring that you have access to the most current information.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What is the Inclusion Index and how is it calculated?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The Inclusion Index is a metric that quantifies the overall inclusivity of our organization. It takes into account various diversity factors and is calculated using a formula that weights each factor appropriately.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How can I interpret the bar charts on the dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The bar charts represent different diversity dimensions, such as gender, ethnicity, age, disability, LGBTQ+ inclusion, and veteran diversity. They provide a visual comparison of the distribution within our organization.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What do the line charts depict?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The line charts show trends over time for specific diversity dimensions. For example, you can track changes in gender representation or age distribution over a selected period.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How are the pie charts utilized in this dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The pie charts display the percentage breakdown of diversity categories, providing a clear snapshot of the distribution within each dimension
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Can I filter the data to view specific demographic groups or time periods?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, you have the option to apply filters to customize the view according to your preferences. This allows you to focus on specific segments or timeframes.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
    </div>
    
  );
};

export default FAQ;