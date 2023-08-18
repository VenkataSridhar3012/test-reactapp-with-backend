import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from "axios";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import "./index.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { baseUrl } from "../../../App";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

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

export default function BasicTabsForTickets() {
  const [value, setValue] = React.useState(0);
  const location = useLocation();
  const data = location.state;
  console.log("bubu", data);
  const { id, userName } = useParams();
  const [sepData, setSepData] = useState<any>([]);
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const jwtToken: any = localStorage.getItem("jwtToken");

  const url = `${baseUrl}business/api/tickets/list?&businessOwnerId=${id}`;
  console.log(url);
  React.useEffect(() => {
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-access-token": jwtToken,
        },
      })
      .then(function (response) {
        setSepData(response.data.data.list);
      });
  }, [id, jwtToken, url]);
  const passingChatItems =
    (userId: string, userName: number, id: any) => (event: any) => {
      navigate(`/Tickets/details/${userName}/${userId}/${id}`);
    };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "63%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <div className="ticketArrowIcon" onClick={() => navigate(`/Tickets`)}>
            <ArrowBackIcon className="ticketName" />
            <span className="ticket-heading1">{userName}</span>
          </div>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{
              sx: {
                bgcolor: "#000000",
                height: "4px",
                padding: "0px",
              },
            }}
          >
            <Tab
              label="Tickets"
              {...a11yProps(0)}
              sx={{ textTransform: "none", fontWeight: "bold" }}
            />
            {/* <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} /> */}
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <div className="ticket-table-container1">
            <table>
              <thead>
                <tr className="table-heading-bg-color">
                  <th style={{ paddingLeft: "20px" }}>Ticket No</th>
                  <th>Subject</th>
                  <th>MBU</th>
                  <th>Handler</th>
                  <th>Created on</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {sepData?.map((eachItem: any) => {
                  return (
                    <tr
                      className="ticket-table-body-border"
                      key={eachItem._id}
                      onClick={passingChatItems(
                        eachItem.ticketNumber,
                        eachItem.userId,
                        eachItem._id
                      )}
                    >
                      <td style={{paddingLeft: "20px" }}>
                        {eachItem.ticketNumber}
                      </td>
                      <td>{eachItem.subject}</td>
                      <td>{eachItem.city}</td>
                      <td>
                        {eachItem.assigneeName}
                      </td>
                      <td >
                        {new Date(eachItem.createdAt)
                          .toDateString()
                          .split(" ")
                          .slice(1)
                          .join(" ")}
                      </td>
                      <td style={{ color: "red", textTransform: "capitalize" }}>
                        {eachItem.status}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </TabPanel>
        {/* <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}
      </Box>{" "}
    </ThemeProvider>
  );
}
