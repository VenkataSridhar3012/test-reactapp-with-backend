import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Shake from "../Shake";
import RestaurantDetails from "../RestaurantInfo";
import Spinwheel from "../Spinwheel";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import dropDownIcon from "../../../Assets/Icons/downArrowicon.svg";
import { Drawer } from "@mui/material";

import "./index.css";
import Analytics from "../Analytics";
import AllCampaigns from "../AllCampaigns";
import BonusCreditsTable from "../BonusCreditsTableForBusinessDetails";
import closeIcon from "../../../Assets/Icons/closeIcon.svg";
import axios from "axios";
import { useEffect, useCallback, useState } from "react";

import Sidebar from "../../Sidebar";
import { useNavigate, useParams } from "react-router-dom";
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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [moreFilter, setMoreFilter] = React.useState(false);
  const [shakeFilter, setShakeFilter] = React.useState(false);
  const [spinwheelFilter, setSpinwheelFilter] = React.useState(false);
  const [number, setNumber] = React.useState(0);
  const [campaign, setCampaign] = React.useState("");
  const [claims, setClaims] = React.useState("");
  const [bookmarks, setBookmarks] = React.useState("");
  const [cancels, setCancels] = React.useState("");
  const [spinwheelCampaigns, setSpinwheelCampaigns] = React.useState("");
  const [spinwheelClaims, setSpinwheelClaims] = React.useState("");
  const [spinwheelSpins, setSpinwheelSpins] = React.useState("");
  // const [spinwheelBookmarks, setSpinwheelBookmarks] = React.useState("");
  const [spinwheelPlays, setSpinwheelPlays] = React.useState("");

  const [newShakeOfferData, setNewShakeOfferData] = React.useState([]);
  const [spinwheelData, setSpinwheelData] = React.useState([]);
  const [allCampaignsData, setAllCampaignsData] = React.useState([]);
  // const [alltotalAmountSpentDefault, setALLAmountSpentDefault] = useState(false);
  // const [allCampaignsDefault, setAllCampaignsDefault] = useState(false);
  const [allSpinwheelPlaysDefault, setAllSpinwheelPlaysDefault] =
    useState(false);
  const [allSpinwheelSpinsDefault, setAllSpinwheelSpinsDefault] =
    useState(false);
  const [allSpinwheelClaimsDefault, setAllSpinwheelClaimsDefault] =
    useState(false);
  const [spinwheelCampaignsDefault, setSpinwheelCampaignsDefault] =
    useState(false);
  const [allshakeCancelsDefault, setAllshakeCancelsDefault] = useState(false);
  const [allShakeBookmarksDefault, setAllShakeBookmarksDefault] =
    useState(false);
  const [allShakeCampaignDefault, setAllShakeCampaignDefault] = useState(false);
  const [allShakeClaimsDefault, setAllShakeClaimsDefault] = useState(false);
  const [shakeCampaignDefault, setShakeCampaignDefault] = useState(false);
  const [shakeClaimsDefault, setShakeClaimsDefault] = useState(false);
  const [shakeBookmarksDefault, setShakeBookmarksDefault] = useState(false);
  const [shakeCancelsDefault, setShakeCancelsDefault] = useState(false);
  const [newSpinwheelCampaignsDefault, setNewSpinwheelCampaignsDefault] =
    useState(false);
  const [spinwheelClaimsDefault, setSpinwheelClaimsDefault] = useState(false);
  const [spinwheelPlaysDefault, setSpinwheelPlaysDefault] = useState(false);
  const [spinwheelSpinsDefault, setSpinwheelSpinsDefault] = useState(false);
  const [newSpinWheelPlays, setNewAllSpinWheelPlays] = useState("");
  const [newAllShakeCamapign, setNewAllShakeCamapign] = useState("");
  const [newAllShakeClaims, setNewAllShakeClaims] = useState("");
  const [newAllShakeBookmarks, setNewAllShakeBookmarks] = useState("");
  const [newAllShakeCancels, setNewAllShakeCancels] = useState("");
  const [newAllSpinWheelCampaign, setNewAllSpinWheelCampaign] = useState("");
  const [newAllSpinWheelClaims, setNewAllSpinWheelClaims] = useState("");
  const [newAllSpinWheelSpins, setNewAllSpinWheelSpins] = useState("");
  const [newShakeCampaign, setNewShakeCampaign] = useState("");
  const [newShakeClaims, setNewShakeClaims] = useState("");
  const [newShakeBookmarks, setNewShakeBookmarks] = useState("");
  const [newShakeCancels, setNewShakeCancels] = useState("");
  const [newSpinwheelPlays, setNewSpinwheelPlays] = useState("");
  const [newSpinwheelCampaigns, setNewSpinwheelCampaigns] = useState("");
  const [newSpinwheelSpins, setNewSpinwheelSpins] = useState("");
  const [newSpinwheelClaims, setNewSpinwheelClaims] = useState("");
  const navigate = useNavigate();
  const { name } = useParams();

  const { id } = useParams();

  const shakeUrl = `${baseUrl}business/api/campaigns/list?businessOwnerId=${id}&campaignType=shakeOffer${newShakeClaims}${newShakeBookmarks}${newShakeCancels}${newShakeCampaign}`;
  const spinwheelUrl = `${baseUrl}business/api/campaigns/list?businessOwnerId=${id}&campaignType=spinWheel${newSpinwheelCampaigns}${newSpinwheelClaims}${newSpinwheelSpins}${newSpinwheelPlays}`;

  const allCampaignUrl = `${baseUrl}business/api/campaigns/list?businessOwnerId=${id}${newAllShakeClaims}${newAllShakeBookmarks}${newAllShakeCancels}${newAllShakeCamapign}${newAllSpinWheelCampaign}${newAllSpinWheelClaims}${newSpinWheelPlays}${newAllSpinWheelSpins}`;

  const jwtToken: any = localStorage.getItem("jwtToken");

  const allCampaignsList = useCallback(async () => {
    // console.log("all campaigns api is running");
    const campaigns = await axios.get(allCampaignUrl, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-access-token": jwtToken,
      },
    });
    setAllCampaignsData(campaigns.data.data.list);
  }, [allCampaignUrl, jwtToken]);

  useEffect(() => {
    allCampaignsList();
  }, [allCampaignsList]);

  const newShakeData = useCallback(async () => {
    // console.log("shake api is running");
    const shakeData = await axios.get(shakeUrl, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-access-token": jwtToken,
      },
    });
    setNewShakeOfferData(shakeData.data.data.list);
  }, [jwtToken, shakeUrl]);

  useEffect(() => {
    newShakeData();
  }, [newShakeData]);

  const newSpinwheelData = useCallback(async () => {
    // console.log("spinwheeel api is running");
    const shakeData = await axios.get(spinwheelUrl, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-access-token": jwtToken,
      },
    });
    setSpinwheelData(shakeData.data.data.list);
  }, [jwtToken, spinwheelUrl]);

  useEffect(() => {
    newSpinwheelData();
  }, [newSpinwheelData]);

  // useEffect(() => {
  //   newShakeData();
  // }, [newShakeData]);

  // useEffect(() => {
  //   new
  // }, [third])

  const newhandleChange = (event: React.SyntheticEvent, newValue: number) => {
    setNumber(newValue);
  };
  const shakeCampaign = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClaims("");
    // setCampaign("");
    setCancels("");
    setBookmarks("");
    // setShakeCampaignDefault(false);
    setShakeClaimsDefault(false);
    setShakeBookmarksDefault(false);
    setShakeCancelsDefault(false);
    setShakeCampaignDefault(true);
    setCampaign(event.target.value);
  };

  const shakeClaims = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setClaims("");
    setCampaign("");
    setCancels("");
    setBookmarks("");
    setShakeCampaignDefault(false);
    // setShakeClaimsDefault(false);
    setShakeBookmarksDefault(false);
    setShakeCancelsDefault(false);
    setShakeClaimsDefault(true);
    setClaims(event.target.value);
  };

  const shakeBookmarks = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClaims("");
    setCampaign("");
    setCancels("");
    // setBookmarks("");
    setShakeCampaignDefault(false);
    setShakeClaimsDefault(false);
    // setShakeBookmarksDefault(false);
    setShakeCancelsDefault(false);
    setShakeBookmarksDefault(true);
    setBookmarks(event.target.value);
  };

  const shakeCancels = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClaims("");
    setCampaign("");
    // setCancels("");
    setBookmarks("");
    setShakeCampaignDefault(false);
    setShakeClaimsDefault(false);
    setShakeBookmarksDefault(false);
    // setShakeCancelsDefault(false);
    setShakeCancelsDefault(true);
    setCancels(event.target.value);
  };
  const SpinwheelCampaigns = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setSpinwheelCampaigns("");
    setSpinwheelPlays("");
    setSpinwheelClaims("");
    setSpinwheelSpins("");
    // setNewSpinwheelCampaignsDefault(false);
    setSpinwheelClaimsDefault(false);
    setSpinwheelPlaysDefault(false);
    setSpinwheelSpinsDefault(false);
    setNewSpinwheelCampaignsDefault(true);
    setSpinwheelCampaigns(event.target.value);
  };
  const SpinwheelClaims = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpinwheelCampaigns("");
    setSpinwheelPlays("");
    // setSpinwheelClaims("");
    setSpinwheelSpins("");
    setNewSpinwheelCampaignsDefault(false);
    // setSpinwheelClaimsDefault(false);
    setSpinwheelPlaysDefault(false);
    setSpinwheelSpinsDefault(false);
    setSpinwheelClaimsDefault(true);
    setSpinwheelClaims(event.target.value);
  };
  // const SpinwheelBookmarks = (event: React.ChangeEvent<HTMLInputElement>) => {
  // setSpinwheelBookmarks(event.target.value);
  // };
  const SpinwheelSpins = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpinwheelCampaigns("");
    setSpinwheelPlays("");
    setSpinwheelClaims("");
    // setSpinwheelSpins("");
    setNewSpinwheelCampaignsDefault(false);
    setSpinwheelClaimsDefault(false);
    setSpinwheelPlaysDefault(false);
    // setSpinwheelSpinsDefault(false);
    setSpinwheelSpinsDefault(true);
    setSpinwheelSpins(event.target.value);
  };
  const SpinwheelPlays = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpinwheelCampaigns("");
    // setSpinwheelPlays("");
    setSpinwheelClaims("");
    setSpinwheelSpins("");
    setNewSpinwheelCampaignsDefault(false);
    setSpinwheelClaimsDefault(false);
    // setSpinwheelPlaysDefault(false);
    setSpinwheelSpinsDefault(false);
    setSpinwheelPlaysDefault(true);
    setSpinwheelPlays(event.target.value);
  };

  const allshakeCampaign = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClaims("");
    // setCampaign("");
    setCancels("");
    setBookmarks("");
    setSpinwheelCampaigns("");
    setSpinwheelPlays("");
    setSpinwheelClaims("");
    setSpinwheelSpins("");
    setAllSpinwheelPlaysDefault(false);
    setAllSpinwheelSpinsDefault(false);
    setAllSpinwheelClaimsDefault(false);
    setSpinwheelCampaignsDefault(false);
    setAllshakeCancelsDefault(false);
    setAllShakeBookmarksDefault(false);
    // setAllShakeCampaignDefault(false);
    setAllShakeClaimsDefault(false);
    setAllShakeCampaignDefault(true);
    setCampaign(event.target.value);
  };

  const allshakeClaims = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setClaims("");
    setCampaign("");
    setCancels("");
    setBookmarks("");
    setSpinwheelCampaigns("");
    setSpinwheelPlays("");
    setSpinwheelClaims("");
    setSpinwheelSpins("");
    setAllSpinwheelPlaysDefault(false);
    setAllSpinwheelSpinsDefault(false);
    setAllSpinwheelClaimsDefault(false);
    setSpinwheelCampaignsDefault(false);
    setAllshakeCancelsDefault(false);
    setAllShakeBookmarksDefault(false);
    setAllShakeCampaignDefault(false);
    // setAllShakeClaimsDefault(false);
    setAllShakeClaimsDefault(true);
    setClaims(event.target.value);
  };
  const allshakeBookmarks = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClaims("");
    setCampaign("");
    setCancels("");
    // setBookmarks("");
    setSpinwheelCampaigns("");
    setSpinwheelPlays("");
    setSpinwheelClaims("");
    setSpinwheelSpins("");
    setAllSpinwheelPlaysDefault(false);
    setAllSpinwheelSpinsDefault(false);
    setAllSpinwheelClaimsDefault(false);
    setSpinwheelCampaignsDefault(false);
    setAllshakeCancelsDefault(false);
    // setAllShakeBookmarksDefault(false);
    setAllShakeCampaignDefault(false);
    setAllShakeClaimsDefault(false);
    setAllShakeBookmarksDefault(true);
    setBookmarks(event.target.value);
  };

  const allshakeCancels = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClaims("");
    setCampaign("");
    // setCancels("");
    setBookmarks("");
    setSpinwheelCampaigns("");
    setSpinwheelPlays("");
    setSpinwheelClaims("");
    setSpinwheelSpins("");
    setAllSpinwheelPlaysDefault(false);
    setAllSpinwheelSpinsDefault(false);
    setAllSpinwheelClaimsDefault(false);
    setSpinwheelCampaignsDefault(false);
    // setAllshakeCancelsDefault(false);
    setAllShakeBookmarksDefault(false);
    setAllShakeCampaignDefault(false);
    setAllShakeClaimsDefault(false);
    setAllshakeCancelsDefault(true);
    setCancels(event.target.value);
  };
  const allSpinwheelCampaigns = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setClaims("");
    setCampaign("");
    setCancels("");
    setBookmarks("");
    // setSpinwheelCampaigns("");
    setSpinwheelPlays("");
    setSpinwheelClaims("");
    setSpinwheelSpins("");
    setAllSpinwheelPlaysDefault(false);
    setAllSpinwheelSpinsDefault(false);
    setAllSpinwheelClaimsDefault(false);
    // setSpinwheelCampaignsDefault(false);
    setAllshakeCancelsDefault(false);
    setAllShakeBookmarksDefault(false);
    setAllShakeCampaignDefault(false);
    setAllShakeClaimsDefault(false);
    setSpinwheelCampaignsDefault(true);
    setSpinwheelCampaigns(event.target.value);
  };
  const allSpinwheelClaims = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClaims("");
    setCampaign("");
    setCancels("");
    setBookmarks("");
    setSpinwheelCampaigns("");
    setSpinwheelPlays("");
    // setSpinwheelClaims("");
    setSpinwheelSpins("");
    setAllSpinwheelPlaysDefault(false);
    setAllSpinwheelSpinsDefault(false);
    // setAllSpinwheelClaimsDefault(false);
    setSpinwheelCampaignsDefault(false);
    setAllshakeCancelsDefault(false);
    setAllShakeBookmarksDefault(false);
    setAllShakeCampaignDefault(false);
    setAllShakeClaimsDefault(false);
    setAllSpinwheelClaimsDefault(true);
    setSpinwheelClaims(event.target.value);
  };
  // const allSpinwheelBookmarks = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   setSpinwheelBookmarks(event.target.value);
  // };
  const allSpinwheelSpins = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClaims("");
    setCampaign("");
    setCancels("");
    setBookmarks("");
    setSpinwheelCampaigns("");
    setSpinwheelPlays("");
    setSpinwheelClaims("");
    // setSpinwheelSpins("");
    setAllSpinwheelPlaysDefault(false);
    // setAllSpinwheelSpinsDefault(false);
    setAllSpinwheelClaimsDefault(false);
    setSpinwheelCampaignsDefault(false);
    setAllshakeCancelsDefault(false);
    setAllShakeBookmarksDefault(false);
    setAllShakeCampaignDefault(false);
    setAllShakeClaimsDefault(false);
    setAllSpinwheelSpinsDefault(true);
    setSpinwheelSpins(event.target.value);
  };
  const allSpinwheelPlays = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClaims("");
    setCampaign("");
    setCancels("");
    setBookmarks("");
    setSpinwheelCampaigns("");
    // setSpinwheelPlays("");
    setSpinwheelClaims("");
    setSpinwheelSpins("");
    // setAllSpinwheelPlaysDefault(false);
    setAllSpinwheelSpinsDefault(false);
    setAllSpinwheelClaimsDefault(false);
    setSpinwheelCampaignsDefault(false);
    setAllshakeCancelsDefault(false);
    setAllShakeBookmarksDefault(false);
    setAllShakeCampaignDefault(false);
    setAllShakeClaimsDefault(false);
    setAllSpinwheelPlaysDefault(true);
    setSpinwheelPlays(event.target.value);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const onMoreFilter = () => {
    setMoreFilter(!moreFilter);
  };

  const sortTheOrderInShake = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNewShakeCampaign(campaign);
    setNewShakeClaims(claims);
    setNewShakeBookmarks(bookmarks);
    setNewShakeCancels(cancels);
  };

  const sortTheOrderInSpinwheel = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNewSpinwheelPlays(spinwheelPlays);
    setNewSpinwheelCampaigns(spinwheelCampaigns);
    setNewSpinwheelSpins(spinwheelSpins);
    setNewSpinwheelClaims(spinwheelClaims);
  };
  const sortTheOrderInAllCampaigns = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setNewAllSpinWheelPlays(spinwheelPlays);
    setNewAllShakeCamapign(campaign);
    setNewAllShakeClaims(claims);
    setNewAllShakeBookmarks(bookmarks);
    setNewAllShakeCancels(cancels);
    setNewAllSpinWheelCampaign(spinwheelCampaigns);
    setNewAllSpinWheelClaims(spinwheelClaims);
    setNewAllSpinWheelSpins(spinwheelSpins);
  };
  const clearTheFiltersInAllCampaigns = () => {
    setClaims("");
    setCampaign("");
    setCancels("");
    setBookmarks("");
    setSpinwheelCampaigns("");
    setSpinwheelPlays("");
    setSpinwheelClaims("");
    setSpinwheelSpins("");
    setAllSpinwheelPlaysDefault(false);
    setAllSpinwheelSpinsDefault(false);
    setAllSpinwheelClaimsDefault(false);
    setSpinwheelCampaignsDefault(false);
    setAllshakeCancelsDefault(false);
    setAllShakeBookmarksDefault(false);
    setAllShakeCampaignDefault(false);
    setAllShakeClaimsDefault(false);
  };

  const clearTheFiltersInShake = () => {
    setClaims("");
    setCampaign("");
    setCancels("");
    setBookmarks("");
    setShakeCampaignDefault(false);
    setShakeClaimsDefault(false);
    setShakeBookmarksDefault(false);
    setShakeCancelsDefault(false);
  };

  const clearTheFilterInSpinwheel = () => {
    // setSpinwheelBookmarks("");
    setSpinwheelCampaigns("");
    setSpinwheelPlays("");
    setSpinwheelClaims("");
    setSpinwheelSpins("");
    setNewSpinwheelCampaignsDefault(false);
    setSpinwheelClaimsDefault(false);
    setSpinwheelPlaysDefault(false);
    setSpinwheelSpinsDefault(false);
  };

  // useEffect(() => {
  //   // newSpinwheelData();
  //   allCampaignsList();
  //   // newShakeData();
  // }, [allCampaignsList, newShakeData, newSpinwheelData]);

  // useEffect(() => {
  //   allCampaignsList();
  //   newShakeData();
  //   newSpinwheelData();
  // }, []);

  return (
    <>
      <div className="entire-restaurant-details">
        <Sidebar activeId="BUSINESS" />
        <div>
          <ThemeProvider theme={theme}>
            <Box sx={{ width: "58vw", height: "130px" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <h1 className="offline-business-heading">
                  <span
                    className="show-cursor"
                    onClick={() => navigate("/business")}
                  >
                    Business
                  </span>
                  /Offline/
                  <span className="bold-heading">{name}</span>
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
                  <Tab
                    sx={{
                      textTransform: "none",
                      fontWeight: "600",
                      marginRight: "50px",
                      marginBottom: "10px",
                    }}
                    label="All"
                    {...a11yProps(0)}
                  />
                  <Tab
                    sx={{
                      textTransform: "none",
                      fontWeight: "600",
                      marginRight: "50px",
                      marginBottom: "10px",
                    }}
                    label="Shake"
                    {...a11yProps(1)}
                  />
                  <Tab
                    sx={{
                      textTransform: "none",
                      fontWeight: "600",
                      marginRight: "50px",
                      marginBottom: "10px",
                    }}
                    label="Spinweel"
                    {...a11yProps(2)}
                  />
                  <Tab
                    sx={{
                      textTransform: "none",
                      fontWeight: "600",
                      marginRight: "50px",
                      marginBottom: "10px",
                    }}
                    label="Analytics"
                    {...a11yProps(3)}
                  />
                  <Tab
                    sx={{
                      textTransform: "none",
                      fontWeight: "600",
                      marginRight: "120px",
                      marginBottom: "10px",
                    }}
                    label="Bonus credits"
                    {...a11yProps(4)}
                  />
                  {/* <MoreFilterContainer
                    icon={dropDownIcon}
                    title="More Filter"
                  /> */}
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <div className="button-container-new">
                  <button
                    className="morefilter-with-icon"
                    onClick={onMoreFilter}
                  >
                    <span className="more-filter-heading">More Filter</span>
                    <img
                      src={dropDownIcon}
                      alt="drop down icon"
                      className="down-arrow-icon"
                    />
                  </button>
                </div>

                <div className="scroll">
                  <AllCampaigns
                    allCampaignsList={allCampaignsList}
                    allCampaignsData={allCampaignsData}
                  />
                </div>
                <Drawer anchor="right" open={moreFilter}>
                  <Box
                    sx={{
                      width: "450px",
                    }}
                  >
                    <div className="more-filter-heading">
                      <div>
                        <h1 className="sort-by-heading">Sort by</h1>
                        <p className="sort-by-description">
                          You can select only one option at a time{" "}
                        </p>
                      </div>
                      <img
                        src={closeIcon}
                        className="close-icon-size"
                        onClick={() => setMoreFilter(!moreFilter)}
                        alt="close icon"
                      />
                    </div>
                    <form onSubmit={sortTheOrderInAllCampaigns}>
                      <div className="analytics-container">
                        <ThemeProvider theme={theme}>
                          <Box sx={{ width: "100%", bgcolor: "#FFFF04" }}>
                            <Tabs
                              value={number}
                              onChange={newhandleChange}
                              indicatorColor="primary"
                              aria-label="secondary tabs example"
                            >
                              <Tab
                                label="Most to least"
                                sx={{
                                  textTransform: "none",
                                  fontFamily: "avenir",
                                  fontSize: "16PX",
                                  fontWeight: "bold",
                                  textAlign: "center",
                                  width: "50%",
                                }}
                              />
                              <Tab
                                label="Least to most"
                                sx={{
                                  textTransform: "none",
                                  fontFamily: "avenir",
                                  fontSize: "16PX",
                                  fontWeight: "bold",
                                  width: "50%",
                                }}
                              />
                            </Tabs>
                          </Box>
                        </ThemeProvider>

                        <div className="analytics-container2">
                          <p className="shake-side-heading "> Shake</p>
                          <div className="analytics-container3">
                            <label className="label1" htmlFor="campaign">
                              Amount Spend
                            </label>
                            <input
                              type="radio"
                              name="name"
                              className="input radio-button-color"
                              id="campaign"
                              value={
                                number === 1
                                  ? "&shakeOffer.amount=1"
                                  : "&shakeOffer.amount=-1"
                              }
                              onChange={allshakeCampaign}
                              checked={allShakeCampaignDefault}
                            />
                          </div>
                          <div className="analytics-container3">
                            <label className="label1" htmlFor="claims">
                              Claims
                            </label>
                            <input
                              type="radio"
                              name="name"
                              className="input radio-button-color"
                              id="claims"
                              value={
                                number === 1
                                  ? "&shakeOffer.claims=1"
                                  : "&shakeOffer.claims=-1"
                              }
                              onChange={allshakeClaims}
                              checked={allShakeClaimsDefault}
                            />
                          </div>
                          <div className="analytics-container3">
                            <label className="label1" htmlFor="bookmarks">
                              Bookmarks
                            </label>
                            <input
                              type="radio"
                              name="name"
                              className="input radio-button-color"
                              id="bookmarks"
                              value={
                                number === 1
                                  ? "&shakeOffer.bookmarks=1"
                                  : "&shakeOffer.bookmarks=1"
                              }
                              onChange={allshakeBookmarks}
                              checked={allShakeBookmarksDefault}
                            />
                          </div>
                          <div className="analytics-container3">
                            <label className="label1" htmlFor="cancels">
                              Cancles
                            </label>
                            <input
                              type="radio"
                              name="name"
                              className="input radio-button-color"
                              id="cancels"
                              value={
                                number === 1
                                  ? "&shakeOffer.cancels=1"
                                  : "&shakeOffer.cancels=1"
                              }
                              onChange={allshakeCancels}
                              checked={allshakeCancelsDefault}
                            />
                          </div>
                          <p className="shake-side-heading "> Spin Wheel</p>

                          <div className="analytics-container3">
                            <label
                              className="label1"
                              htmlFor="spinwheelCampaign"
                            >
                              {" "}
                              Amount Spend
                            </label>
                            <input
                              type="radio"
                              name="name"
                              className="input radio-button-color"
                              id="spinwheelCampaign"
                              value={
                                number === 1
                                  ? "&spinWheel.amount=1"
                                  : "&spinWheel.amount=-1"
                              }
                              onChange={allSpinwheelCampaigns}
                              checked={spinwheelCampaignsDefault}
                            />
                          </div>
                          <div className="analytics-container3">
                            <label className="label1" htmlFor="spinwheelClaims">
                              Claims
                            </label>
                            <input
                              type="radio"
                              name="name"
                              className="input radio-button-color"
                              id="spinwheelClaims"
                              value={
                                number === 1
                                  ? "&spinWheel.claims=1"
                                  : "&spinWheel.claims=-1"
                              }
                              onChange={allSpinwheelClaims}
                              checked={allSpinwheelClaimsDefault}
                            />
                          </div>
                          {/* <div className="analytics-container3">
                            <label
                              className="label1"
                              htmlFor="spinwheelBookmarks"
                            >
                              Bookmarks
                            </label>
                            <input
                              type="radio"
                              name="name"
                              className="input"
                              id="spinwheelBookmarks"
                              value={
                                number === 1
                                  ? "&spinWheel.bookmarks=1"
                                  : "&spinWheel.bookmarks=-1"
                              }
                              onChange={allSpinwheelBookmarks}
                              checked={allSpinwheelSpinsDefault}
                            />
                          </div> */}
                          <div className="analytics-container3">
                            <label className="label1" htmlFor="spinwheelPlays">
                              Plays
                            </label>
                            <input
                              type="radio"
                              name="name"
                              className="input radio-button-color"
                              id="spinwheelPlays"
                              value={
                                number === 1
                                  ? "&spinWheel.plays=1"
                                  : "&spinWheel.plays=-1"
                              }
                              onChange={allSpinwheelPlays}
                              checked={allSpinwheelPlaysDefault}
                            />
                          </div>
                          <div className="analytics-container3">
                            <label className="label1" htmlFor="spinwheelSpins">
                              Spins
                            </label>
                            <input
                              type="radio"
                              name="name"
                              className="input radio-button-color"
                              id="spinwheelSpins"
                              value={
                                number === 1
                                  ? "&spinWheel.spins=1"
                                  : "&spinWheel.spins=-1"
                              }
                              onChange={allSpinwheelSpins}
                              checked={allSpinwheelSpinsDefault}
                            />
                          </div>
                        </div>
                        <div
                          className="analytics-container4"
                          style={{ marginTop: "26%" }}
                        >
                          <button
                            className="clear"
                            onClick={clearTheFiltersInAllCampaigns}
                          >
                            {" "}
                            Clear all
                          </button>
                          <button
                            className="apply"
                            type="submit"
                            // onClick={() => setMoreFilter(false)}
                          >
                            {" "}
                            Apply
                          </button>
                        </div>
                      </div>
                    </form>
                  </Box>
                </Drawer>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <div className="button-container-new">
                  <button
                    className="morefilter-with-icon"
                    onClick={() => setShakeFilter(true)}
                  >
                    <span className="more-filter-heading">More Filter</span>
                    <img
                      src={dropDownIcon}
                      alt="drop down icon"
                      className="down-arrow-icon"
                    />
                  </button>
                </div>
                <div className="scroll">
                  <Shake
                    newShakeData={newShakeData}
                    newShakeOfferData={newShakeOfferData}
                  />
                </div>
                <Drawer anchor="right" open={shakeFilter}>
                  <Box
                    sx={{
                      width: "450px",
                      height: "100vh",
                    }}
                  >
                    <div className="more-filter-heading">
                      <div>
                        <h1 className="sort-by-heading">Sort by</h1>
                        <p className="sort-by-description">
                          You can select only one option at a time{" "}
                        </p>
                      </div>
                      <img
                        src={closeIcon}
                        className="close-icon-size"
                        onClick={() => setShakeFilter(false)}
                        alt="close icon"
                      />
                    </div>
                    <form onSubmit={sortTheOrderInShake}>
                      <div className="analytics-container">
                        <ThemeProvider theme={theme}>
                          <Box sx={{ width: "100%", bgcolor: "#FFFF04" }}>
                            <Tabs
                              value={number}
                              onChange={newhandleChange}
                              indicatorColor="primary"
                              aria-label="secondary tabs example"
                            >
                              <Tab
                                label="Most to least"
                                sx={{
                                  textTransform: "none",
                                  fontFamily: "avenir",
                                  fontSize: "16PX",
                                  fontWeight: "bold",
                                  textAlign: "center",
                                  width: "50%",
                                }}
                              />
                              <Tab
                                label="Least to most"
                                sx={{
                                  textTransform: "none",
                                  fontFamily: "avenir",
                                  fontSize: "16PX",
                                  fontWeight: "bold",
                                  width: "50%",
                                }}
                              />
                            </Tabs>
                          </Box>
                        </ThemeProvider>

                        <div className="analytics-container2">
                          <p className="shake-side-heading "> Shake</p>
                          <div className="analytics-container3">
                            <label className="label1" htmlFor="campaign">
                              Amount Spend
                            </label>
                            <input
                              type="radio"
                              name="name"
                              className="input radio-button-color"
                              id="campaign"
                              value={
                                number === 1
                                  ? "&shakeOffer.amount=1"
                                  : "&shakeOffer.amount=-1"
                              }
                              onChange={shakeCampaign}
                              checked={shakeCampaignDefault}
                            />
                          </div>
                          <div className="analytics-container3">
                            <label className="label1" htmlFor="claims">
                              Claims
                            </label>
                            <input
                              radio-button-color
                              type="radio"
                              name="name"
                              className="input radio-button-color"
                              id="claims"
                              value={
                                number === 1
                                  ? "&shakeOffer.claims=1"
                                  : "&shakeOffer.claims=-1"
                              }
                              onChange={shakeClaims}
                              checked={shakeClaimsDefault}
                            />
                          </div>
                          <div className="analytics-container3">
                            <label className="label1" htmlFor="bookmarks">
                              Bookmarks
                            </label>
                            <input
                              type="radio"
                              name="name"
                              className="input radio-button-color"
                              id="bookmarks"
                              value={
                                number === 0
                                  ? "&shakeOffer.bookmarks=1"
                                  : "&shakeOffer.bookmarks=1"
                              }
                              onChange={shakeBookmarks}
                              checked={shakeBookmarksDefault}
                            />
                          </div>
                          <div className="analytics-container3">
                            <label className="label1" htmlFor="cancels">
                              Cancles
                            </label>
                            <input
                              type="radio"
                              name="name"
                              className="input radio-button-color"
                              id="cancels"
                              value={
                                number === 0
                                  ? "&shakeOffer.cancels=1"
                                  : "&shakeOffer.cancels=1"
                              }
                              onChange={shakeCancels}
                              checked={shakeCancelsDefault}
                            />
                          </div>

                          <div
                            className="analytics-container4"
                            style={{ marginTop: "74%" }}
                          >
                            <button
                              className="clear"
                              onClick={clearTheFiltersInShake}
                            >
                              {" "}
                              Clear all
                            </button>
                            <button className="apply" type="submit">
                              {" "}
                              Apply
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </Box>
                </Drawer>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <div className="button-container-new">
                  <button
                    className="morefilter-with-icon"
                    onClick={() => setSpinwheelFilter(true)}
                  >
                    <span className="more-filter-heading">More Filter</span>
                    <img
                      src={dropDownIcon}
                      alt="drop down icon"
                      className="down-arrow-icon"
                    />
                  </button>
                </div>
                <div className="scroll">
                  <Spinwheel
                    newSpinwheelData={newSpinwheelData}
                    spinwheelData={spinwheelData}
                  />
                </div>
                <Drawer anchor="right" open={spinwheelFilter}>
                  <Box
                    sx={{
                      width: "450px",
                      height: "100vh",
                    }}
                  >
                    <div className="more-filter-heading">
                      <div>
                        <h1 className="sort-by-heading">Sort by</h1>
                        <p className="sort-by-description">
                          You can select only one option at a time{" "}
                        </p>
                      </div>
                      <img
                        src={closeIcon}
                        className="close-icon-size"
                        onClick={() => setSpinwheelFilter(false)}
                        alt="close icon"
                      />
                    </div>
                    <form onSubmit={sortTheOrderInSpinwheel}>
                      <div className="analytics-container">
                        <ThemeProvider theme={theme}>
                          <Box sx={{ width: "100%", bgcolor: "#FFFF04" }}>
                            <Tabs
                              value={number}
                              onChange={newhandleChange}
                              indicatorColor="primary"
                              aria-label="secondary tabs example"
                            >
                              <Tab
                                label="Most to least"
                                sx={{
                                  textTransform: "none",
                                  fontFamily: "avenir",
                                  fontSize: "16PX",
                                  fontWeight: "bold",
                                  textAlign: "center",
                                  width: "50%",
                                }}
                              />
                              <Tab
                                label="Least to most"
                                sx={{
                                  textTransform: "none",
                                  fontFamily: "avenir",
                                  fontSize: "16PX",
                                  fontWeight: "bold",
                                  width: "50%",
                                }}
                              />
                            </Tabs>
                          </Box>
                        </ThemeProvider>

                        <div className="analytics-container2">
                          <p className="shake-side-heading "> Spin Wheel</p>

                          <div className="analytics-container3">
                            <label
                              className="label1"
                              htmlFor="spinwheelCampaign"
                            >
                              {" "}
                              Amount Spend
                            </label>
                            <input
                              radio-button-color
                              type="radio"
                              name="name"
                              className="input radio-button-color"
                              id="spinwheelCampaign"
                              value={
                                number === 1
                                  ? "&spinWheel.amount=1"
                                  : "&spinWheel.amount=-1"
                              }
                              onChange={SpinwheelCampaigns}
                              checked={newSpinwheelCampaignsDefault}
                            />
                          </div>
                          <div className="analytics-container3">
                            <label className="label1" htmlFor="spinwheelClaims">
                              Claims
                            </label>
                            <input
                              radio-button-color
                              type="radio"
                              name="name"
                              className="input radio-button-color"
                              id="spinwheelClaims"
                              value={
                                number === 1
                                  ? "&spinWheel.claims=1"
                                  : "&spinWheel.claims=-1"
                              }
                              onChange={SpinwheelClaims}
                              checked={spinwheelClaimsDefault}
                            />
                          </div>
                          {/* <div className="analytics-container3">
                            <label
                              className="label1"
                              htmlFor="spinwheelBookmarks"
                            >
                              Bookmarks
                            </label>
                            <input
                              type="radio"
                              name="name"
                              className="input"
                              id="spinwheelBookmarks"
                              value={
                                number === 1
                                  ? "&spinWheel.bookmarks=1"
                                  : "&spinWheel.bookmarks=-1"
                              }
                              onChange={SpinwheelBookmarks}
                            />
                          </div> */}
                          <div className="analytics-container3">
                            <label className="label1" htmlFor="spinwheelPlays">
                              Plays
                            </label>
                            <input
                              radio-button-color
                              type="radio"
                              name="name"
                              className="input radio-button-color"
                              id="spinwheelPlays"
                              value={
                                number === 1
                                  ? "&spinWheel.plays=1"
                                  : "&spinWheel.plays=-1"
                              }
                              onChange={SpinwheelPlays}
                              checked={spinwheelPlaysDefault}
                            />
                          </div>
                          <div className="analytics-container3">
                            <label className="label1" htmlFor="spinwheelSpins">
                              Spins
                            </label>
                            <input
                              type="radio"
                              name="name"
                              className="input radio-button-color"
                              id="spinwheelSpins"
                              value={
                                number === 1
                                  ? "&spinWheel.spins=1"
                                  : "&spinWheel.spins=-1"
                              }
                              onChange={SpinwheelSpins}
                              checked={spinwheelSpinsDefault}
                            />
                          </div>
                        </div>

                        <div
                          className="analytics-container4"
                          style={{ marginTop: "74%" }}
                        >
                          <button
                            className="clear"
                            onClick={clearTheFilterInSpinwheel}
                          >
                            {" "}
                            Clear all
                          </button>
                          <button
                            className="apply"
                            type="submit"
                            // onClick={() => setSpinwheelFilter(false)}
                          >
                            {" "}
                            Apply
                          </button>
                        </div>
                      </div>
                    </form>
                  </Box>
                </Drawer>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <div className="scroll">
                  <Analytics />
                </div>
              </TabPanel>
              <TabPanel value={value} index={4}>
                <BonusCreditsTable />
              </TabPanel>
            </Box>
          </ThemeProvider>
        </div>
        <RestaurantDetails />
      </div>
    </>
  );
}
