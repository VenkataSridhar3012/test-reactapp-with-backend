import StartDatePickerForBusiness from "../DatePickerForBonusCredits/StartDateForBusiness";
import EndDatePickerForBusiness from "../DatePickerForBonusCredits/EndDateForBusiness";
import DropdownForCategoryInBusiness from "../DropdownCategoryInBusiness";
import DropdownForBusinessInBonus from "../DropdownForBusiness";
import DropdownForMbuInBusiness from "../DropdownForMbuInBusiness";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../../App";

const ByBusiness = (props: any) => {
  const {
    distinctCityNames,
    category,
    businessNameList,
    selectedMbuFromBusiness,
    closeTheDrawer,
  } = props;
  const [businessStartDate, setBusinessStartDate] = useState("");
  const [businessEndDate, setBusinessEndDate] = useState("");
  const [titleInBusiness, setTitleInBusiness] = useState("");
  const [creditsInBusiness, setCreditsInBusiness] = useState("");
  const [mbuName, setMbuName] = useState("");
  const [businessId, setBusinessId] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [error, setError] = useState(null);
  // const [responseData, setResponseData] = useState("");

  const jwtToken: any = localStorage.getItem("jwtToken");

  console.log({
    businessStartDate,
    businessEndDate,
    titleInBusiness,
    creditsInBusiness,
    mbuName,
    businessId,
  });
  const bonuscreditsByBusinessUrl = `${baseUrl}business/api/bonus-credits/addCredits?businessOwnerIDs=${businessId}&creditsToAdd=${creditsInBusiness}&startDate=${businessStartDate}&validityDate=${businessEndDate}&message=${newTitle}`;

  // console.log(bonuscreditsByBusinessUrl);
  // const newFunction = () => {
  //   axios
  //     .post(bonuscreditsByBusinessUrl, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //         "x-access-token": jwtToken,
  //       },
  //     })
  //     .then(
  //       (response) => {
  //         console.log(response);
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  // };

  const addBonusCreditsByBusiness = useCallback(async () => {
    console.log("valueeeeee");
    try {
      const response = await axios({
        method: "POST",
        url: bonuscreditsByBusinessUrl,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-access-token": jwtToken,
        },
        data: [],
      });
      setError(response.data.msgs[0]);

      // console.log("newressss", response);
    } catch (error: any) {
      setError(error.response.data.msgs[0]);
    }
  }, [bonuscreditsByBusinessUrl, jwtToken]);
  useEffect(() => {
    addBonusCreditsByBusiness();
  }, [addBonusCreditsByBusiness, jwtToken]);

  // const addBonusCreditsByBusiness = async () => {
  //   // console.log("valueeeeee");
  //   // console.log("new friday");
  //   const responseData = await axios({
  //     method: "POST",
  //     url: bonuscreditsByBusinessUrl,
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //       "x-access-token": jwtToken,
  //     },
  //     data: [],
  //   });
  //   console.log("response", responseData);
  // };

  useEffect(() => {
    addBonusCreditsByBusiness();
  }, [addBonusCreditsByBusiness, bonuscreditsByBusinessUrl]);

  //   await axios
  //     .post(bonuscreditsByBusinessUrl)
  //     .then((response) => console.log(response))
  //     .catch((error) => {
  //       console.error("There was an error!", error);
  //     });

  //   // .catch(function (error) {
  //   //   if (error.response) {
  //   //     console.log(error.response.data);
  //   //     console.log(error.response.status);
  //   //     console.log(error.response.headers);
  //   //   }
  //   // });

  //   // setResponseData(responseData.data.status);
  //   // if (responseData.data.statusCode === 200) {
  //   //   console.log("msg", responseData.data.msgs);
  //   // }
  //   // if (responseData.status === 400) {
  //   //   console.log("unique");
  //   // }
  //   // console.log("new res", responseData);
  // }, [bonuscreditsByBusinessUrl, jwtToken]);

  // console.log("res", responseData);

  // if (responseData) {
  //   console.log("added successfully");
  // } else {
  //   console.log("new error");
  // }

  const startDateForBusiness = (startDate: any) => {
    setBusinessStartDate(startDate);
  };
  const businessNameInMbu = (mbu: any) => {
    setMbuName(mbu);
  };

  const endDateForBusiness = (startDate: any) => {
    setBusinessEndDate(startDate);
  };

  // console.log("biii", mbuName);
  const getBusinessId = (id: any) => {
    setBusinessId(id);
  };

  const getTitleInBusiness = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitleInBusiness(event.target.value);
  };
  const getCreditsInBusiness = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCreditsInBusiness(event.target.value);
  };
  const addBusinessCreditsByBusiness = (event: React.FormEvent) => {
    event.preventDefault();
    setNewTitle(titleInBusiness);
    addBonusCreditsByBusiness();
    // newFunction();
  };

  return (
    <form className="byBusiness-form" onSubmit={addBusinessCreditsByBusiness}>
      <input
        type="text"
        className=" business-input-element"
        placeholder="Title"
        onChange={getTitleInBusiness}
      />

      <input
        type="text"
        className="business-input-element"
        placeholder="Credits"
        onChange={getCreditsInBusiness}
      />

      <DropdownForMbuInBusiness
        distinctCityNames={distinctCityNames}
        selectedMbuFromBusiness={selectedMbuFromBusiness}
        businessNameInMbu={businessNameInMbu}
      />

      <DropdownForCategoryInBusiness category={category} />
      <DropdownForBusinessInBonus
        businessNameList={businessNameList}
        getBusinessId={getBusinessId}
      />

      {/* <div className="search-and-add-button">
          <div className="form-search-container">
            <input
              type="text"
              className="form-input-element"
              placeholder="Search"
            />
            <SearchIcon sx={{ width: "25px", height: "25px", ml: "10px" }} />
          </div>
          <button type="button" className="add-button-in-form">
            ADD
          </button>
        </div> */}
      <div className="date-picker-container">
        <StartDatePickerForBusiness
          startDateForBusiness={startDateForBusiness}
        />
        <EndDatePickerForBusiness endDateForBusiness={endDateForBusiness} />
      </div>
      {/* {error} */}
      <div className="business-button-container">
        <button type="submit" className="save-button">
          SAVE
        </button>
        <button
          type="submit"
          className="cancel-button"
          onClick={() => closeTheDrawer(false)}
        >
          CANCEL
        </button>
      </div>
      {/* {responseData ? "added succesfully" : "check the title"} */}
    </form>
  );
};

export default ByBusiness;
