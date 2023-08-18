import React from "react";
import closeIcon from "../../../Assets/Icons/closeIcon.svg";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";
import "./index.css";
import { useEffect, useState } from "react";
import axios from "axios";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import { format } from "date-fns";

import { useParams } from "react-router-dom";
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

type chatprops = {
  onclickChat: any;
  chat: boolean;
};

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

const Chat = (props: chatprops) => {
  const [value, setValue] = React.useState(0);
  const { onclickChat, chat } = props;
  const onClickChatClose = () => {
    onclickChat(chat);
  };
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  // const [isDisabled, setIsDisabled] = useState(true);
  const { _id } = useParams();
  const [data, setData] = useState<any>([]);
  const jwtToken: any = localStorage.getItem("jwtToken");
  const [chatData, setChatData] = useState<any>([]);
  const [chatImg, setChatImg] = useState<any>([]);

  const url2 = `${baseUrl}business/api/tickets/get/${_id}`;
  useEffect(() => {
    axios
      .get(url2, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-access-token": jwtToken,
        },
      })
      .then(function (response) {
        setChatData(response.data.data);
        setData(response.data.data.chat);
        setChatImg(response.data.data.attachedFiles);
      });
  }, [_id, jwtToken, url2]);

  console.log("abcdeff", chatData);
  console.log("chat", data);
  console.log("img", chatImg);
  console.log("chat", data);

  return (
    <div className="chat-container1">
      <div className="chat-drawer-container">
        <div>
          <ThemeProvider theme={theme}>
            <Box sx={{ width: "500px" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                aria-label="secondary tabs example"
                TabIndicatorProps={{ sx: { height: "4px" } }}
                className="chat-tab"
              >
                <Tab
                  label="Chat"
                  sx={{
                    textTransform: "none",
                    fontFamily: "avenir",
                    fontSize: "24PX",
                    fontWeight: "bold",
                    marginRight: "50px",
                    textAlign: "center",
                  }}
                  {...a11yProps(0)}
                />
                <Tab
                  label="Images"
                  sx={{
                    textTransform: "none",
                    fontFamily: "avenir",
                    fontSize: "24PX",
                    fontWeight: "bold",
                    marginRight: "20px",
                  }}
                  {...a11yProps(1)}
                />
              </Tabs>
              <TabPanel value={value} index={0}>
                {data.map((eachChat: any) => (
                  <>
                    {eachChat.senderName === chatData.userName && (
                      <div className="chat-containers">
                        <div className="sender">
                          <p style={{ padding: "8px" }}>{eachChat.message}</p>
                          <p
                            style={{
                              padding: "8px",
                              marginTop: "30px",
                              fontSize: "10px",
                              color: "gray",
                            }}
                          >
                            {format(
                              new Date(eachChat.createdAt),
                              " yyyy-MM-dd,hh:mm aaaaa'm'"
                            )}
                          </p>
                        </div>
                        <div className="you">You</div>
                      </div>
                    )}
                    {eachChat.senderName === chatData.assigneeName && (
                      <div>
                        <div className="chat-containers">
                          <div className="res">521</div>
                          <div className="receiver">
                            <p style={{ padding: "8px" }}>{eachChat.message}</p>
                            <p
                              style={{
                                padding: "8px",
                                marginTop: "30px",
                                fontSize: "10px",
                                color: "gray",
                              }}
                            >
                              {format(
                                new Date(eachChat.createdAt),
                                "yyyy-MM-dd,hh:mm aaaaa'm'"
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ))}
              </TabPanel>
              <TabPanel value={value} index={1}>
                {chatImg.map((eachImg: any) => {
                  return (
                    <div style={{ margin: "50px" }}>
                      <img
                        src={eachImg.url}
                        alt="img"
                        className="chat-images"
                      />
                    </div>
                  );
                })}
              </TabPanel>
            </Box>
          </ThemeProvider>
        </div>
      </div>
      <img
        src={closeIcon}
        alt="close icon"
        className="close-icon-size-in-form1"
        onClick={onClickChatClose}
      />
      <div className="chat">
        <input
          type="text"
          className="chat-input"
          placeholder="Type your message here..."
          disabled={true}
          

        />
        <label htmlFor="icon">
          <AttachFileOutlinedIcon className="imageIcon" />
        </label>
        <input type="file" id="icon" />
        <button className="send-button">
          <SendIcon sx={{ color: "yellow" }} />
        </button>
      </div>
    </div>
  );
};

export default Chat;
