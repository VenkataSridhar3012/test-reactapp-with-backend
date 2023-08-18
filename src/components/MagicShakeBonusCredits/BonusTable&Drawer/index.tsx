import "./index.css";
import React, { useCallback, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Drawer, Box, Stack, Pagination } from "@mui/material";
import closeIcon from "../../../Assets/Icons/closeIcon.svg";
// import MultipleSelectCheckmarks from "../DropdownForCategoryInMBU";
// import MultipleSelectCheckmarksOfBusiness from "../DropdownForBusiness";
// import MultipleSelectCheckmarksOfMBU from "../DropdownForMbuInBusiness";
// import BasicDatePickerForBonusCredits from "../DatePickerForBonusCredits/StartDateForMBU";
// import BasicEndDatePickerForBonusCredits from "../DatePickerForBonusCredits/EndDateForMBU";
// import StartDatePickerForBusiness from "../DatePickerForBonusCredits/StartDateForBusiness";
// import EndDatePickerForBusiness from "../DatePickerForBonusCredits/EndDateForBusiness";
// import DropdownForCategoryInBusiness from "../DropdownCategoryInBusiness";
// import DropdownForCategoryInMBU from "../DropdownForCategoryInMBU";
// import DropdownForBusinessInBonus from "../DropdownForBusiness";
// import DropdownForMbuInBusiness from "../DropdownForMbuInBusiness";
import BonusTable from "../BonusTable";
// import { createTheme } from '@mui/material/styles';
// import Stack from '@mui/material/Stack';
// import Pagination from '@mui/material/Pagination';
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";

import Sidebar from "../../Sidebar";
import ByMBU from "../AddBonusByMBU";
import ByBusiness from "../AddBonusByBusiness";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import axios from "axios";
import { baseUrl } from "../../../App";

const activeId = "BONUSCREDITS";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFF01",
    },
  },
});

// const BonusTable = () => {
//   return (
//     // <div className="bonous-credits-container">
//     <>
//       <div className="business-table-container fixTableHead ">
//         <table>
//           <thead>
//             <tr className="table-heading-bg-color">
//               <th className="padding-to-head">S.No</th>
//               <th className="padding-to-head">Title</th>
//               <th className="padding-to-head">Credits</th>

//               <th className="padding-to-head">No of Biz</th>

//               {/* <th className="padding-to-head">Businesses</th> */}
//               <th className="padding-to-head">Start Date</th>
//               <th className="padding-to-head">End Date</th>
//               <th className="padding-to-head table-head-margin">
//                 % of Businesses <br />
//                 Utilized
//               </th>
//               <th className="padding-to-head table-head-margin">
//                 % & of amount
//                 <br /> Utilized
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {bonousTableData.map((eachItem) => {
//               return (
//                 <tr className="table-body-border" key={eachItem.id}>
//                   <td className="bonus-table">{eachItem.id}</td>
//                   <td className="bonus-table">{eachItem.title}</td>
//                   <td className="bonus-table">{eachItem.credits}</td>
//                   <td className="bonus-table">{eachItem.NoofBiz}</td>
//                   <td className="bonus-table">{eachItem.startDate}</td>
//                   <td className="bonus-table">{eachItem.endDate}</td>
//                   <td className="bonus-table">{eachItem.percentUtilized}</td>
//                   <td className="bonus-table">
//                     {eachItem.percentUtilzedAmount}
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>

//       {/* <div className="pagination-container">
//         <ThemeProvider theme={theme}>
//           <Stack spacing={2}>
//             <Pagination count={10} shape="rounded" color="primary" />
//           </Stack>
//         </ThemeProvider>
//       </div> */}
//       {/* </div> */}
//     </>
//   );
// };

const BonusCredits = () => {
  const [addBonous, setAddBonus] = React.useState(false);
  const [myform, setMyForm] = React.useState(true);
  const [bonusTableData, setBonusTableData] = useState([]);
  const [businessNameList, setBusinessNameList] = useState([]);
  const [distinctCityNames, setDistinctCityNames] = useState([]);
  const [selectedmbu, setSelectedmbu] = useState([]);
  const [businessIds, setBusinessIds] = useState([]);
  const [category, setCategory] = useState([]);
  const jwtToken: any = localStorage.getItem("jwtToken");
  const [page, setPage] = useState(1);

  const bonusCreditsUrl = `${baseUrl}business/api/bonus-credits/listwithstats?perPage=10&pageNo=${page}`;

  const mbuUrl = `${baseUrl}business/api/business-owner/listWithStats?filterByCityNames=${selectedmbu}`;

  const bonusCreditList = useCallback(async () => {
    const bonusData = await axios.get(bonusCreditsUrl, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-access-token": jwtToken,
      },
    });
    // setBonusTableData(bonusData.data.data.list);

    setBonusTableData(bonusData.data.data.bonusCreditStats);
    setDistinctCityNames(bonusData.data.data.distinctCities);
    setCategory(bonusData.data.data.distinctCategories);
  }, [jwtToken, bonusCreditsUrl]);

  // console.log("bonus", category);
  const closeTheDrawer = (value: boolean) => {
    setAddBonus(value);
  };

  const selectedMbuFromMbu = (mbu: any) => {
    setSelectedmbu(mbu);
  };

  const selectedMbuFromBusiness = (BusinessMbu: any) => {
    setSelectedmbu(BusinessMbu);
  };

  // useEffect(() => {
  //   bonusCreditList();
  // }, [bonusCreditList]);

  const businessList = useCallback(async () => {
    const businessData = await axios.get(mbuUrl, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-access-token": jwtToken,
      },
    });
    setBusinessNameList(businessData.data.data.list);
    setBusinessIds(
      businessData.data.data.list.map((each: any) => {
        return each.businessOwnerId;
      })
    );
  }, [jwtToken, mbuUrl]);

  useEffect(() => {
    businessList();
    bonusCreditList();
  }, [bonusCreditList, businessList]);

  // console.log("cities", businessIds);
  const onChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div className="bonus-credit-container">
      <Sidebar activeId={activeId} />
      <div className="bonus-container">
        <div className="heading-search-container">
          <div className="bonus-credits-side-heading-container">
            <p className="bonous-credits-side-heading">Bonus credits</p>
            <p className="bonus-description">Sample description replace here</p>
          </div>
          <div className="button-and-search-container">
            <div className="search-container-in-bonus-credits">
              <SearchIcon sx={{ marginLeft: "10px" }} />
              <input
                type="search"
                className="search-input-in-bonus-credits"
                placeholder="Search"
              />
            </div>
            <div>
              <button
                type="button"
                className="add-bonus-button"
                onClick={() => setAddBonus(true)}
              >
                Add bonus credits
              </button>
            </div>
          </div>
        </div>
        <BonusTable bonusTableData={bonusTableData} />
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
        <Drawer anchor="right" open={addBonous}>
          <Box
            sx={{
              width: "525px",
              height: "768px",
              boxShadow: "0px 0px 20px #00000029",
            }}
          >
            <div className="form-heading-container">
              <h4 className="addbonus-form-heading">Add bonus credits</h4>
              <img
                src={closeIcon}
                alt="close icon"
                className="close-icon-size-in-form"
                onClick={() => setAddBonus(false)}
              />
            </div>
            <hr className="form-line" />

            <div className="radios-container">
              <div className="radio-container">
                {myform ? (
                  <CheckCircleSharpIcon />
                ) : (
                  <input
                    type="radio"
                    className="radio-button-size"
                    onClick={() => setMyForm(true)}
                  />
                )}
                <label
                  htmlFor="byMBU"
                  className="label"
                  onClick={() => setMyForm(true)}
                >
                  By MBU
                </label>
              </div>
              <div className="radio-container">
                {myform ? (
                  <input
                    type="radio"
                    className="radio-button-size"
                    onClick={() => setMyForm(false)}
                  />
                ) : (
                  <CheckCircleSharpIcon />
                )}
                <label
                  onClick={() => setMyForm(false)}
                  htmlFor="byBusiness"
                  className="label"
                >
                  By Business
                </label>
              </div>
              {/* <div className="radio-container">
                <input
                  type="radio"
                  className="radio-button-size"
                  id="moreFilters"
                  name="radioButton"
                />
                <label htmlFor="moreFilters" className="label">
                  More Filters
                </label>
              </div> */}
            </div>

            <div>
              {myform ? (
                <ByMBU
                  distinctCityNames={distinctCityNames}
                  selectedMbuFromMbu={selectedMbuFromMbu}
                  // businessNameList={businessNameList}
                  businessIds={businessIds}
                  closeTheDrawer={closeTheDrawer}
                />
              ) : (
                <ByBusiness
                  distinctCityNames={distinctCityNames}
                  category={category}
                  businessNameList={businessNameList}
                  selectedMbuFromBusiness={selectedMbuFromBusiness}
                  closeTheDrawer={closeTheDrawer}
                />
              )}
            </div>
          </Box>
        </Drawer>
      </div>
    </div>
  );
};

export default BonusCredits;
