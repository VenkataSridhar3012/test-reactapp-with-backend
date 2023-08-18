import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Sidebar from "../../Sidebar";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import BonusCreditDetailedTable from "../BonusCreditDetailsTable";

import "./index.css";
import { useNavigate, useParams } from "react-router-dom";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BonusCreditsTabs() {
  const [value, setValue] = React.useState(0);
  const { title } = useParams();

  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="bonus-credit-details-container">
        <Sidebar activeId="BONUSCREDITS" />
        <div>
          {/* <Box sx={{ width: "100%" }}> */}
          <Box sx={{ width: "83vw", height: "117px" }}>
            <h1 className="offline-business-heading">
              <span
                className="show-cursor"
                onClick={() => navigate("/bonus-credits")}
              >
                Bonus Credits
              </span>
              /<span className="bold-heading">{title}</span>
            </h1>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={{
                boxShadow: "0px 1px 1px 0px #00000029",
                font: "normal normal bold 14px Avenir",
                marginBottom: "0px",
              }}
              TabIndicatorProps={{
                sx: {
                  bgcolor: "#000000",
                  height: "4px",
                  padding: "0px",
                },
              }}
            >
              <Tab label="All" {...a11yProps(0)} />
              {/* <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} /> */}
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div className="bonus-scroll">
              <BonusCreditDetailedTable />
            </div>
          </TabPanel>
          {/* <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}
          {/* </Box> */}
        </div>
      </div>
    </ThemeProvider>
  );
}
