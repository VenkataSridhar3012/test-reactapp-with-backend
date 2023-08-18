/* eslint-disable react-hooks/exhaustive-deps */
import Sidebar from "../../Sidebar";
import FilterButton from "../../FilterButton";
import BusinessTable from "../BusinessTable";
import { FiSearch } from "react-icons/fi";
import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Drawer, Pagination, Stack } from "@mui/material";
// import { Pagination } from "@mui/material";
import closeIcon from "../../../Assets/Icons/closeIcon.svg";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import axios from "axios";
import "./index.css";
import MultipleSelectCheckmarksOfMBUInBusiness from "../MbuDropDownForBusiness";
import MultipleSelectCheckmarksOfMBUforQRCode from "../MbuDropDownForQrCode";
import MultipleSelectCheckmarksOfBusinessforQrCode from "../BusinessDropDownForQrCode";
// import MoreFilter from "../MoreFilter";
import { useCallback } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";

import { baseUrl } from "../../../App";

const activeId = "BUSINESS";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFF01",
    },
  },
});

const newtheme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});

const Business = () => {
  const [newCheckedValue, setNewCheckedValue] = useState([{}]);
  const [searchInput, setSearchInput] = useState("");
  const [openCampaignFilter, setOpenCampaignFilter] = useState(false);
  const [openSelectMBU, setOpenSelectMBU] = useState(false);
  const [openDownloadQrCode, setOpenDownloadQrCode] = useState(false);
  const [moreFilterforBusiness, setMoreFilterForBusiness] = useState(false);
  const [number, setNumber] = useState(0);
  const [campaign, setCampaign] = useState("");
  const [campaignUrlValue, setCampaignUrlValue] = useState("");
  const [claims, setClaims] = useState("");
  const [claimsUrlValue, setClaimsUrlValue] = useState("");

  const [bookmarks, setBookmarks] = useState("");
  const [bookmarksUrlValue, setBookmarksUrlValue] = useState("");

  const [cancels, setCancels] = useState("");
  const [cancelsUrlValue, setCancelsUrlValue] = useState("");

  const [spinwheelCampaigns, setSpinwheelCampaigns] = useState("");
  const [spinwheelCampaignsUrlValue, setspinwheelCampaignsUrlValue] =
    useState("");

  const [spinwheelClaims, setSpinwheelClaims] = useState("");
  const [spinwheelClaimsUrlValue, setspinwheelClaimsUrlValue] = useState("");

  const [spinwheelSpins, setSpinwheelSpins] = useState("");
  const [spinwheelSpinsUrlValue, setspinwheelSpinsUrlValue] = useState("");

  // const [spinwheelBookmarks, setSpinwheelBookmarks] = useState("");
  // const [spinwheelBookmarkslValue, setspinwheelBookmarksUrlValue] =
  // useState("");

  const [spinwheelPlays, setSpinwheelPlays] = useState("");
  const [spinwheelPlaysUrlValue, setspinwheelPlaysUrlValue] = useState("");

  const [totalCampaigns, setTotalCampaigns] = useState("");
  const [totalCampaignsUrlValue, setTotalCampaignsUrlValue] = useState("");

  const [totalAmountSpent, setTotalAmountspent] = useState("");
  const [totalAmountSpentUrlValue, setTotalAmountSpentUrlValue] = useState("");

  const [campaignSevenCampaignFilter, setCampaignSevenCampaignFilter] =
    useState("");
  const [campaignThirtyCampaignFilter, setCampaignThirtyCampaignFilter] =
    useState("");
  const [thirtyFilter, setThirtyFilter] = useState("");
  const [sevenFilter, setSevenFilter] = useState("");
  const [mbuList, setMBUList] = useState([]);
  const [mbu, setMbu] = useState([]);
  const [takeValue, setTakeValue] = useState([]);
  const [eachBusinessCode, setEachBusinessCode] = useState<any>({});
  const [qrMBU, setQrMBU] = useState([]);
  const [zippedUrl, setZippedUrl] = useState("");
  // const [newZippedUrl, setNewZippedUrl] = useState("");
  const [newBusinessNameData, setnewBusinessNameData] = useState([]);
  const [sevenDefault, setSevenDefault] = useState(false);
  const [thirtyDefault, setThirtyDefault] = useState(false);
  const [totalAmountSpentDefault, setTotalAmountSpentDefault] = useState(false);
  const [allCampaignsDefault, setAllCampaignsDefault] = useState(false);
  const [allSpinwheelPlaysDefault, setAllSpinwheelPlaysDefault] =
    useState(false);
  const [allSpinwheelSpinsDefault, setAllSpinwheelSpinsDefault] =
    useState(false);
  const [allSpinwheelClaimsDefault, setAllSpinwheelClaimsDefault] =
    useState(false);
  const [allSpinwheelCampaignsDefault, setALLSpinwheelCampaignsDefault] =
    useState(false);
  const [allshakeCancelsDefault, setAllshakeCancelsDefault] = useState(false);
  const [allShakeBookmarksDefault, setAllShakeBookmarksDefault] =
    useState(false);
  // console.log("shake bookmarks", allShakeBookmarksDefault);
  const [allShakeCampaignDefault, setAllShakeCampaignDefault] = useState(false);
  // console.log("shake campaigns", allShakeCampaignDefault);
  const [allShakeClaimsDefault, setAllShakeClaimsDefault] = useState(false);
  // console.log("allsshake claims", allShakeClaimsDefault);
  const [personName, setPersonName] = React.useState<string[]>([]);
  const [personNameforqr, setPersonNameforqr] = React.useState<string[]>([]);

  const [qrBusinessName, setQrBusinessName] = React.useState<string[]>([]);
  // const [eachBusinessQrCode, setEachBusenessQrCode] = useState("");

  const [checkShow, setCheckShow] = useState<string[]>([]);

  const onSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const [tableData, setTableData] = useState<any>([]);
  const [totalTableData, setTotalTableData] = useState("");

  const [page, setPage] = useState(1);
  // console.log("page", totalTableData);

  // const [page, setPage] = useState(1);
  const jwtToken: any = localStorage.getItem("jwtToken");
  // useEffect(() => {
  //   const value = mbu.join(",");
  //   setCityName(mbu.join(","));
  // }, [mbu]);

  // console.log("table", tableData);

  const url = `${baseUrl}business/api/business-owner/listWithStats?searchString=${searchInput}&filterByCityNames=${mbu}${spinwheelClaimsUrlValue}${bookmarksUrlValue}${cancelsUrlValue}${spinwheelCampaignsUrlValue}${spinwheelPlaysUrlValue}${spinwheelSpinsUrlValue}${campaignUrlValue}${totalCampaignsUrlValue}${totalAmountSpentUrlValue}${claimsUrlValue}${sevenFilter}${thirtyFilter}&perPage=20&pageNo=${page}`;

  const mbuUrl = `${baseUrl}business/api/business-owner/listWithStats?filterByCityNames=${qrMBU}`;

  const newEachBusinessCode = (business: any) => {
    setEachBusinessCode(business);
  };

  console.log(url);

  // const handleScroll = () => {
  //   console.log("height:", document.documentElement.scrollHeight);
  //   console.log("top:", document.documentElement.scrollTop);
  //   console.log("window:", window.innerHeight);
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop + 1 >=
  //     document.documentElement.scrollHeight
  //   ) {
  //     setPage((prev) => prev + 1);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [document.documentElement.scrollHeight]);

  // const setPageNumber=()=>{
  //   set
  // }

  // const businessCodes = businessQrCode = (qrCode) => {
  //   return qrCode
  // }

  // useEffect(() => {
  //     setEachBusinessCode(businessCodes);
  // }, [businessCodes])

  // const businessQrCode = (qrCode: any) => {
  //   return setEachBusinessCode(qrCode);
  // };

  const searchBusiness = useCallback(async () => {
    console.log("business");
    const newData = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-access-token": jwtToken,
      },
    });

    setTableData(newData.data.data.list);
    setTotalTableData(newData.data.data.total);
    setMBUList(newData.data.data.distinctCities);
    setNewCheckedValue(
      newData.data.data.distinctCities.map((each: any, index: number) => {
        return {
          id: index,
          cityName: each,
          isChecked: false,
        };
      })
    );
  }, [jwtToken, url]);

  const newMbulist = useCallback(async () => {
    const mbuData = await axios.get(mbuUrl, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-access-token": jwtToken,
      },
    });
    setnewBusinessNameData(mbuData.data.data.list);
  }, [jwtToken, mbuUrl]);

  // console.log("newvalue", newBusinessNameData);

  const mbuChangeFilter = (e: any, id: number) => {
    setNewCheckedValue([
      ...newCheckedValue?.map((obj: any, i: number) =>
        id === i ? { ...obj, isChecked: e.target.checked } : obj
      ),
    ]);

    // const mbuChangeFilterForQr = (e: any, id: number) => {
    //   setNewCheckedValueForQRBusiness([
    //     ...newCheckedValue.map((obj, i) =>
    //       id === i ? { ...obj, isChecked: e.target.checked } : obj
    //     ),
    //   ]);

    // const index = .indexOf(e.target.value)
    // if (index === -1) {
    //   setSkills([...skills, e.target.value])
    // } else {
    //   setSkills(skills.filter(skill => skill !== e.target.value))
    // }
  };

  const businessQrCopdeUrl =
    `${baseUrl}business/api/business-owner/download-qr-codes`;

  const qrCodesLength = Object.keys(eachBusinessCode).length;
  //step1 - wrap inside the useeffect
  // step 2 - use zippedUrl not qrcodeapifunction outside

  useEffect(() => {
    const qrBody = {
      dest_key: "string",
      image_links: { ...eachBusinessCode },
    };

    const qrCodeApifunction = async () => {
      const response = await axios({
        method: "POST",
        url: businessQrCopdeUrl,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-access-token": jwtToken,
        },
        data: qrBody,
      });

      setZippedUrl(response.data.data.zippedUrl);
    };
    qrCodeApifunction();
  }, [eachBusinessCode]);

  const qrCodeApifunction = () => {
    return zippedUrl;
  };

  const businessQrCode = (qrCode: any) => {
    return setEachBusinessCode(qrCode);
  };

  const newMbu = (newmbu: any) => {
    setTakeValue(newmbu);
  };
  const newBName = (name: any) => {
    setQrMBU(name);
  };
  const newhandleChangeTabs = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setNumber(newValue);
  };

  const handleClick = (e: React.KeyboardEvent<HTMLInputElement>) => {
    searchBusiness();
  };

  const allshakeCampaign = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClaims("");
    // setCampaign("");
    setCancels("");
    setBookmarks("");
    // setSpinwheelBookmarks("");
    setSpinwheelCampaigns("");
    setSpinwheelPlays("");
    setSpinwheelClaims("");
    setSpinwheelSpins("");
    setTotalAmountspent("");
    setTotalCampaigns("");
    setAllCampaignsDefault(false);
    setTotalAmountSpentDefault(false);
    setAllSpinwheelPlaysDefault(false);
    setAllSpinwheelSpinsDefault(false);
    setAllSpinwheelClaimsDefault(false);
    setALLSpinwheelCampaignsDefault(false);
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
    // setSpinwheelBookmarks("");
    setSpinwheelCampaigns("");
    setSpinwheelPlays("");
    setSpinwheelClaims("");
    setSpinwheelSpins("");
    setTotalAmountspent("");
    setTotalCampaigns("");
    setAllCampaignsDefault(false);
    setTotalAmountSpentDefault(false);
    setAllSpinwheelPlaysDefault(false);
    setAllSpinwheelSpinsDefault(false);
    setAllSpinwheelClaimsDefault(false);
    setALLSpinwheelCampaignsDefault(false);
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
    // setSpinwheelBookmarks("");
    setSpinwheelCampaigns("");
    setSpinwheelPlays("");
    setSpinwheelClaims("");
    setSpinwheelSpins("");
    setTotalAmountspent("");
    setTotalCampaigns("");
    setAllCampaignsDefault(false);
    setTotalAmountSpentDefault(false);
    setAllSpinwheelPlaysDefault(false);
    setAllSpinwheelSpinsDefault(false);
    setAllSpinwheelClaimsDefault(false);
    setALLSpinwheelCampaignsDefault(false);
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
    // setSpinwheelBookmarks("");
    setSpinwheelCampaigns("");
    setSpinwheelPlays("");
    setSpinwheelClaims("");
    setSpinwheelSpins("");
    setTotalAmountspent("");
    setTotalCampaigns("");
    setAllCampaignsDefault(false);
    setTotalAmountSpentDefault(false);
    setAllSpinwheelPlaysDefault(false);
    setAllSpinwheelSpinsDefault(false);
    setAllSpinwheelClaimsDefault(false);
    setALLSpinwheelCampaignsDefault(false);
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
    // setSpinwheelBookmarks("");
    // setSpinwheelCampaigns("");
    setSpinwheelPlays("");
    setSpinwheelClaims("");
    setSpinwheelSpins("");
    setTotalAmountspent("");
    setTotalCampaigns("");
    setAllCampaignsDefault(false);
    setTotalAmountSpentDefault(false);
    setAllSpinwheelPlaysDefault(false);
    setAllSpinwheelSpinsDefault(false);
    setAllSpinwheelClaimsDefault(false);
    // setALLSpinwheelCampaignsDefault(false);
    setAllshakeCancelsDefault(false);
    setAllShakeBookmarksDefault(false);
    setAllShakeCampaignDefault(false);
    setAllShakeClaimsDefault(false);
    setALLSpinwheelCampaignsDefault(true);
    setSpinwheelCampaigns(event.target.value);
  };

  const allSpinwheelClaims = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClaims("");
    setCampaign("");
    setCancels("");
    setBookmarks("");
    // setSpinwheelBookmarks("");
    setSpinwheelCampaigns("");
    setSpinwheelPlays("");
    // setSpinwheelClaims("");
    setSpinwheelSpins("");
    setTotalAmountspent("");
    setTotalCampaigns("");
    setAllCampaignsDefault(false);
    setTotalAmountSpentDefault(false);
    setAllSpinwheelPlaysDefault(false);
    setAllSpinwheelSpinsDefault(false);
    // setAllSpinwheelClaimsDefault(false);
    setALLSpinwheelCampaignsDefault(false);
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
    // setSpinwheelBookmarks("");
    setSpinwheelCampaigns("");
    setSpinwheelPlays("");
    setSpinwheelClaims("");
    // setSpinwheelSpins("");
    setTotalAmountspent("");
    setTotalCampaigns("");
    setAllCampaignsDefault(false);
    setTotalAmountSpentDefault(false);
    setAllSpinwheelPlaysDefault(false);
    // setAllSpinwheelSpinsDefault(false);
    setAllSpinwheelClaimsDefault(false);
    setALLSpinwheelCampaignsDefault(false);
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
    // setSpinwheelBookmarks("");
    setSpinwheelCampaigns("");
    // setSpinwheelPlays("");
    setSpinwheelClaims("");
    setSpinwheelSpins("");
    setTotalAmountspent("");
    setTotalCampaigns("");
    setAllCampaignsDefault(false);
    setTotalAmountSpentDefault(false);
    // setAllSpinwheelPlaysDefault(false);
    setAllSpinwheelSpinsDefault(false);
    setAllSpinwheelClaimsDefault(false);
    setALLSpinwheelCampaignsDefault(false);
    setAllshakeCancelsDefault(false);
    setAllShakeBookmarksDefault(false);
    setAllShakeCampaignDefault(false);
    setAllShakeClaimsDefault(false);
    setAllSpinwheelPlaysDefault(true);
    setSpinwheelPlays(event.target.value);
  };

  const allCampaigns = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClaims("");
    setCampaign("");
    setCancels("");
    setBookmarks("");
    // setSpinwheelBookmarks("");
    setSpinwheelCampaigns("");
    setSpinwheelPlays("");
    setSpinwheelClaims("");
    setSpinwheelSpins("");
    setTotalAmountspent("");
    // setTotalCampaigns("");
    // setAllCampaignsDefault(false);
    setTotalAmountSpentDefault(false);
    setAllSpinwheelPlaysDefault(false);
    setAllSpinwheelSpinsDefault(false);
    setAllSpinwheelClaimsDefault(false);
    setALLSpinwheelCampaignsDefault(false);
    setAllshakeCancelsDefault(false);
    setAllShakeBookmarksDefault(false);
    setAllShakeCampaignDefault(false);
    setAllShakeClaimsDefault(false);
    setAllCampaignsDefault(true);
    setTotalCampaigns(event.target.value);
  };
  const alltotalAmountSpent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClaims("");
    setCampaign("");
    setCancels("");
    setBookmarks("");
    // setSpinwheelBookmarks("");
    setSpinwheelCampaigns("");
    setSpinwheelPlays("");
    setSpinwheelClaims("");
    setSpinwheelSpins("");
    setTotalAmountspent("");
    setTotalCampaigns("");
    setAllCampaignsDefault(false);
    // setTotalAmountSpentDefault(false);
    setAllSpinwheelPlaysDefault(false);
    setAllSpinwheelSpinsDefault(false);
    setAllSpinwheelClaimsDefault(false);
    setALLSpinwheelCampaignsDefault(false);
    setAllshakeCancelsDefault(false);
    setAllShakeBookmarksDefault(false);
    setAllShakeCampaignDefault(false);
    setAllShakeClaimsDefault(false);
    setTotalAmountSpentDefault(true);
    setTotalAmountspent(event.target.value);
  };

  const getFilterSevenDays = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSevenDefault(true);
    setCampaignSevenCampaignFilter(event.target.value);
  };

  const getFilterThirtyDays = (event: React.ChangeEvent<HTMLInputElement>) => {
    setThirtyDefault(true);
    setCampaignThirtyCampaignFilter(event.target.value);
  };

  // console.log("claims", allSpinwheelClaimsDefault);
  // console.log("plays", allSpinwheelPlaysDefault);
  // console.log("claims", allSpinwheelClaimsDefault);
  // console.log("campaigns", allSpinwheelCampaignsDefault);

  const clearTheFiltersInAllCampaigns = () => {
    setClaims("");
    setCampaign("");
    setCancels("");
    setBookmarks("");
    // setSpinwheelBookmarks("");
    setSpinwheelCampaigns("");
    setSpinwheelPlays("");
    setSpinwheelClaims("");
    setSpinwheelSpins("");
    setTotalAmountspent("");
    setTotalCampaigns("");
    setAllCampaignsDefault(false);
    setTotalAmountSpentDefault(false);
    setAllSpinwheelPlaysDefault(false);
    setAllSpinwheelSpinsDefault(false);
    setAllSpinwheelClaimsDefault(false);
    setALLSpinwheelCampaignsDefault(false);
    setAllshakeCancelsDefault(false);
    setAllShakeBookmarksDefault(false);
    setAllShakeCampaignDefault(false);
    setAllShakeClaimsDefault(false);
  };

  const sortTheOrderInAllCampaigns = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    // setSpinwheelSpins(spinwheelSpins);
    setCampaignUrlValue(campaign);
    setClaimsUrlValue(claims);
    setBookmarksUrlValue(bookmarks);
    setCancelsUrlValue(cancels);
    setspinwheelCampaignsUrlValue(spinwheelCampaigns);
    setspinwheelClaimsUrlValue(spinwheelClaims);
    setspinwheelSpinsUrlValue(spinwheelSpins);
    // setspinwheelBookmarksUrlValue(spinwheelBookmarks);
    setspinwheelPlaysUrlValue(spinwheelPlays);
    setTotalCampaignsUrlValue(totalCampaigns);
    setTotalAmountSpentUrlValue(totalAmountSpent);
    // searchBusiness();
  };

  const selectMbuFilter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMbu(takeValue);
  };

  const getCampaignFilters = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setThirtyFilter(campaignThirtyCampaignFilter);
    setSevenFilter(campaignSevenCampaignFilter);
  };

  const clearCampaignFilter = () => {
    setCampaignThirtyCampaignFilter("");
    setCampaignSevenCampaignFilter("");
    setSevenDefault(false);
    setThirtyDefault(false);
  };

  const qrForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchBusiness();
  };

  const clearTheMbu = () => {
    setMbu([]);
    setPersonName([]);
    setCheckShow([]);
  };

  // console.log(qrCodesLength);
  const openDownLoadQR = () => {
    if (qrCodesLength === 1) {
      // console.log("hai");
      const qrString: any = Object.values(eachBusinessCode);
      setZippedUrl(qrString[0]);
    } else if (qrCodesLength > 1) {
      qrCodeApifunction();
      setOpenDownloadQrCode(false);
    } else {
      setOpenDownloadQrCode(true);
      qrCodeApifunction();
    }
  };

  const clearSelectedchecksInQR = (bussinessList: any) => {
    setPersonNameforqr([]);
    setQrBusinessName([]);
    setZippedUrl("");
  };

  useEffect(() => {
    searchBusiness();
    newMbulist();
  }, [searchBusiness, newMbulist]);

  useEffect(() => {
    if (qrCodesLength > 0) {
      qrCodeApifunction();
    }
  }, [eachBusinessCode, qrCodeApifunction]);

  // console.log(Object.values(eachBusinessCode));

  // console.log("sri", eachBusinessCode);

  // console.log("console", zippedUrl);

  const onChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  console.log("page", page);

  return (
    <>
      <div className="business-outer-container">
        <Sidebar activeId={activeId} />
        <div className="business-inner-container">
          <div className="business-heading-container">
            <div>
              <h2 className="business-heading">
                Business <span className="active-business">/ Offline</span>
              </h2>
              <p className="business-description">
                Sample description replace here
              </p>
            </div>
            <div className="search-input-container">
              <FiSearch color="#B5B5B5" size={20} />
              <input
                type="search"
                className="search-input"
                placeholder="Search"
                onChange={onSearchInput}
                onKeyDown={handleClick}
              />
            </div>

            <button type="button" className="qr-btn" onClick={openDownLoadQR}>
              <a href={zippedUrl} className="qr-button-link">
                Download QR Code
              </a>
            </button>

            <button
              className="filter-button"
              onClick={() => setOpenCampaignFilter(true)}
            >
              <FilterButton icon={false}>Campaign filter</FilterButton>
            </button>
            <button
              style={{ backgroundColor: "transparent", border: "none" }}
              onClick={() => setOpenSelectMBU(true)}
            >
              <FilterButton icon>MBU</FilterButton>
            </button>
            <button
              className="filter-button"
              onClick={() => setMoreFilterForBusiness(true)}
            >
              <FilterButton icon>More filters</FilterButton>
            </button>
          </div>
          <div>
            {/* <InfiniteScroll
              dataLength={tableData.length}
              next={() => setPage((prev: any) => prev + 1)}
              hasMore={!(totalTableData + 20 === tableData.length)}
              loader={
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    fontFamily: "avenir",
                  }}
                >
                  Loading....
                </p>
              }
              endMessage={<p>You Viewd all Businesses</p>}
            > */}
            <BusinessTable
              tableData={tableData}
              businessQrCode={businessQrCode}
              setPage={setPage}
              page={page}
              totalTableData={totalTableData}
            />
            {/* </InfiniteScroll> */}
            <div className="pagination-container ">
              <ThemeProvider theme={theme}>
                <Stack spacing={2}>
                  <Pagination
                    count={15}
                    shape="rounded"
                    color="primary"
                    page={page}
                    onChange={onChangePage}
                  />
                </Stack>
              </ThemeProvider>
            </div>
          </div>
        </div>
      </div>
      <Drawer anchor="right" open={openCampaignFilter}>
        <Box
          sx={{
            width: "450px",
          }}
        >
          <form onSubmit={getCampaignFilters} className="form-container">
            <div className="campaigns-container ">
              <div className="campaign-filter-heading-container">
                <h1 className="campaign-filter-heading">Campaigns Filter</h1>
                <img
                  src={closeIcon}
                  className="close-icon-size"
                  onClick={() => setOpenCampaignFilter(false)}
                  alt="close icon"
                />
              </div>
            </div>

            <hr className="campaigns-line" />
            <div className="campaigns-container">
              <p className="campaigns-description">Campaigns not created in</p>
              <div className="campaigns-radio-container">
                <label htmlFor="last-7-days" className="campaigns-label">
                  Last 7 days
                </label>
                <input
                  type="radio"
                  id="last-7-days"
                  name="campaigns"
                  value="&filterCampaignCreation=7"
                  onChange={getFilterSevenDays}
                  checked={sevenDefault}
                  className="radio-button-color"
                />
              </div>
              <div className="campaigns-radio-container last-30">
                <label htmlFor="last-30-days" className="campaigns-label">
                  Last 30 days
                </label>
                <input
                  type="radio"
                  id="last-30-days"
                  name="campaigns"
                  value="&filterCampaignCreation=30"
                  onChange={getFilterThirtyDays}
                  checked={thirtyDefault}
                  className="radio-button-color"
                />
              </div>
            </div>

            <div className="analytics-container4 to-get-end">
              <button className="clear" onClick={clearCampaignFilter}>
                Clear all
              </button>
              <button className="apply" type="submit">
                Apply
              </button>
            </div>
          </form>
        </Box>
      </Drawer>
      <Drawer anchor="right" open={openSelectMBU}>
        <Box
          sx={{
            width: "530px",
            height: "100vh",
          }}
        >
          <form onSubmit={selectMbuFilter}>
            <div className="campaigns-container">
              <div className="campaign-filter-heading-container">
                <h1 className="campaign-filter-heading">MBU</h1>
                <img
                  src={closeIcon}
                  className="close-icon-size"
                  onClick={() => setOpenSelectMBU(false)}
                  alt="close icon"
                />
              </div>
            </div>
            <hr />
            <div className="campaigns-container">
              <h1 className="select-mbu-heading">Select MBU</h1>
              <MultipleSelectCheckmarksOfMBUInBusiness
                mbuList={newCheckedValue}
                newMbu={newMbu}
                mbuChangeFilter={mbuChangeFilter}
                // saveMBU={saveMBU}
                personName={personName}
                setPersonName={setPersonName}
                checkShow={checkShow}
                setCheckShow={setCheckShow}
              />
              <div className="mbu-button-container">
                <button type="submit" className="save-button">
                  SAVE
                </button>

                <button
                  type="submit"
                  className="cancel-button"
                  onClick={clearTheMbu}
                >
                  CLEAR ALL
                </button>
              </div>
            </div>
          </form>
        </Box>
      </Drawer>
      <Drawer anchor="right" open={openDownloadQrCode}>
        <Box
          sx={{
            width: "530px",
          }}
        >
          <form onSubmit={qrForm} className="qr-form-Container">
            <div className="campaigns-container">
              <div className="campaign-filter-heading-container">
                <h1 className="campaign-filter-heading">MBU</h1>
                <img
                  src={closeIcon}
                  className="close-icon-size"
                  onClick={() => setOpenDownloadQrCode(false)}
                  alt="close icon"
                />
              </div>
            </div>
            <hr />
            <div className="campaigns-container">
              <h1 className="select-mbu-heading">Select MBU</h1>
              <MultipleSelectCheckmarksOfMBUforQRCode
                mbuList={mbuList}
                newBName={newBName}
                qrBusinessName={qrBusinessName}
                setQrBusinessName={setQrBusinessName}
              />
              <h1 className="select-mbu-heading">Select business</h1>
              <MultipleSelectCheckmarksOfBusinessforQrCode
                newBusinessNameData={newBusinessNameData}
                newEachBusinessCode={newEachBusinessCode}
                mbuList={mbuList}
                personNameforqr={personNameforqr}
                setPersonNameforqr={setPersonNameforqr}
              />
            </div>
            <div className="qr-button-container">
              <button type="button" className="qr-btn margin-adjust">
                <a href={zippedUrl} className="qr-button-link">
                  Download QR Code
                </a>
              </button>
              <button
                type="submit"
                className="cancel-button-qr margin-adjust"
                onClick={clearSelectedchecksInQR}
              >
                Clear All
              </button>
              {/* <button>
                <a href={newZippedUrl}>DownLoad</a>
              </button> */}
            </div>
          </form>
        </Box>
      </Drawer>
      <Drawer anchor="right" open={moreFilterforBusiness}>
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
              onClick={() => setMoreFilterForBusiness(false)}
              alt="close icon"
            />
          </div>
          <form onSubmit={sortTheOrderInAllCampaigns}>
            <div className="analytics-container">
              <ThemeProvider theme={newtheme}>
                <Box sx={{ width: "100%", bgcolor: "#FFFF04" }}>
                  <Tabs
                    value={number}
                    onChange={newhandleChangeTabs}
                    aria-label="secondary tabs example"
                    textColor={"primary"}
                    TabIndicatorProps={{
                      sx: {
                        bgcolor: "#000000",
                        height: "2px",
                        padding: "0px",
                      },
                    }}
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
                        color: "black",
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
                <div className="analytics-container3">
                  <label className="label1" htmlFor="totalCampaign">
                    Total Campaigns
                  </label>
                  <input
                    type="radio"
                    name="name"
                    className="input radio-button-color"
                    id="totalCampaign"
                    value={
                      number === 1 ? "&totalCampaigns=1" : "&totalCampaigns=-1"
                    }
                    onChange={allCampaigns}
                    checked={allCampaignsDefault}
                  />
                </div>
                <div className="analytics-container3">
                  <label className="label1" htmlFor="totalSpend">
                    Total Spend
                  </label>
                  <input
                    type="radio"
                    name="name"
                    className="input radio-button-color"
                    id="totalSpend"
                    value={
                      number === 1
                        ? "&totalAmountSpent=1"
                        : "&totalAmountSpent=-1"
                    }
                    onChange={alltotalAmountSpent}
                    checked={totalAmountSpentDefault}
                  />
                </div>
                <p className="shake-side-heading "> Shake</p>
                <div className="analytics-container3">
                  <label className="label1" htmlFor="campaign">
                    Campaigns
                  </label>
                  <input
                    type="radio"
                    name="name"
                    className="input radio-button-color"
                    id="campaign"
                    value={
                      number === 1
                        ? "&shakeOffer.campaigns=1"
                        : "&shakeOffer.campaigns=-1"
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
                        : "&shakeOffer.bookmarks=-1"
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
                  <label className="label1" htmlFor="spinwheelCampaign">
                    {" "}
                    Campaigns
                  </label>
                  <input
                    type="radio"
                    name="name"
                    className="input radio-button-color"
                    id="spinwheelCampaign"
                    value={
                      number === 1
                        ? "&spinWheel.campaigns=1"
                        : "&spinWheel.campaigns=-1"
                    }
                    onChange={allSpinwheelCampaigns}
                    checked={allSpinwheelCampaignsDefault}
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
                  <label className="label1" htmlFor="spinwheelBookmarks">
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
                  />
                </div> */}
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
                        ? "&spinWheel.plays=1"
                        : "&spinWheel.plays=-1"
                    }
                    onChange={allSpinwheelPlays}
                    checked={allSpinwheelPlaysDefault}
                  />
                </div>
                <div className="analytics-container3">
                  <label className="label1" htmlFor="spinwheelWins">
                    Wins
                  </label>
                  <input
                    type="radio"
                    name="name"
                    className="input radio-button-color"
                    id="spinwheelWins"
                    value={
                      number === 1 ? "&spinWheel.wins=1" : "&spinWheel.wins=-1"
                    }
                    onChange={allSpinwheelSpins}
                    checked={allSpinwheelSpinsDefault}
                  />
                </div>
              </div>

              <div className="analytics-container4" style={{ marginTop: "7%" }}>
                <button
                  className="clear"
                  type="submit"
                  onClick={clearTheFiltersInAllCampaigns}
                >
                  {" "}
                  Clear all
                </button>
                <button
                  className="apply"
                  type="submit"
                  // onClick={() => setMoreFilterForBusiness(false)}
                >
                  {" "}
                  Apply
                </button>
              </div>
            </div>
          </form>
        </Box>
      </Drawer>
    </>
  );
};

export default Business;
