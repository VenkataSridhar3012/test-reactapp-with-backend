import BasicEndDatePickerForBonusCredits from "../DatePickerForBonusCredits/EndDateForMBU";
import DropdownForCategoryInMBU from "../DropdownForCategoryInMBU";
import { useState, useEffect } from "react";
import BasicStartDatePickerForBonusCredits from "../DatePickerForBonusCredits/StartDateForMBU";
import axios from "axios";
import { baseUrl } from "../../../App";

// import axios from "axios";

const ByMBU = (props: any) => {
  const { distinctCityNames, selectedMbuFromMbu, closeTheDrawer } = props;

  const [mBUName, setMBUName] = useState([]);
  const [mbuTitle, setMbuTitle] = useState("");
  const [mbuCredits, setMbuCredits] = useState("");
  const [startDateMbu, setStartDateMbu] = useState("");
  const [endDateMbu, setEndDateMbu] = useState("");
  // const [newMbuTitle, setNewMbuTitle] = useState("")
  const [newMbuTitle, setNewMbuTitle] = useState("");
  // const [businessIds, setBusinessIds] = useState([]);
  // console.log("mbu", mbuName);

  const jwtToken: any = localStorage.getItem("jwtToken");

  // setNewMbuTitle(mbuTitle);
  const mbuName = (name: any) => {
    setMBUName(name);
  };
  const getTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMbuTitle(event.target.value);
  };

  const getCredits = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMbuCredits(event.target.value);
  };
  const startDateForMbu = (startdate: any) => {
    setStartDateMbu(startdate);
  };

  const endDateForMbu = (startdate: any) => {
    setEndDateMbu(startdate);
  };

  selectedMbuFromMbu(mBUName);
  // const dateeeee = new Date(startDateMbu).toISOString();

  // console.log("dateeeee", startDateMbu);

  // }, [mBUName, selectedMbuFromMbu]);

  // eslint-disable-next-line array-callback-return
  // useEffect(() => {
  //   const business = () => {
  //     return businessNameList?.map((eachBusiness: any) => {
  //       return setBusinessIds(eachBusiness.businessOwnerId);
  //     });
  //   };
  //   business();
  // }, [businessNameList]);

  // eslint-disable-next-line no-lone-blocks
  // useEffect(() => {
  //   selectedMbuFromMbu(mBUName);

  //   // eslint-disable-next-line array-callback-return
  //   businessNameList?.map((each: any) => {
  //     setBusinessIds(each.businessOwnerId);
  //   });
  // }, [businessNameList, mBUName, selectedMbuFromMbu]);

  // const business = () => {
  // const startDate = new Date(startDateMbu).toISOString();
  // const endDate = new Date(endDateMbu).toISOString();

  // };

  // console.log("busi", jwtToken);

  // const addCreditsUrl =
  //   "http://go.magicshake.app/business/api/bonus-credits/addCredits?MBUNames=New%20York&creditsToAdd=3&startDate=2022-11-09T13%3A09%3A31.936Z&validityDate=2022-11-10T13%3A09%3A31.936Z&message=Test%20Meet";

  const addCreditsUrl = `${baseUrl}business/api/bonus-credits/addCredits?MBUNames=${mBUName}&creditsToAdd=${mbuCredits}&startDate=${startDateMbu}&validityDate=${endDateMbu}&message=${newMbuTitle}`;

  // https://localhost:3000/business/api/bonus-credits/addCredits?businessOwnerIDs=%5B'62d239119c104a46a88f7a43'%2C%20'62c598285f357d106c3e6b6f'%2C%20'62c1754f38f51a689d7f9107'%2C%20'62bb2abccaa7e135c1cd8a60'%5D&MBUNames=hyderabad&creditsToAdd=100&startDate=2022-11-09T10%3A11%3A29.523Z&validityDate=2022-11-11T10%3A11%3A29.523Z&message=black

  console.log(addCreditsUrl);

  // const creditsBody = [
  //   {
  //     businessIds,
  //     mbuTitle,
  //     mbuCredits,
  //     endDateMbu,
  //     startDateMbu,
  //     mBUName,
  //   },
  // ];

  // console.log("body", creditsBody);
  // useEffect(() => {
  // const creditsBody: any = [
  //   {
  //     businessIds,
  //     mbuTitle,
  //     mbuCredits,
  //     endDateMbu,
  //     startDateMbu,
  //   },
  // ];

  //   const qrCodeApifunction = async () => {
  //     const response = await axios({
  //       method: "POST",
  //       url: addCreditsUrl,
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //         "x-access-token": jwtToken,
  //       },
  //     });
  //     console.log("response", response);
  //   };
  //   qrCodeApifunction();
  // }, [addCreditsUrl, jwtToken]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const addBonusCreditsByMbu = async () => {
    // console.log("valueeeeee");
    try {
      const response = await axios({
        method: "POST",
        url: addCreditsUrl,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-access-token": jwtToken,
        },
        data: [],
      });

      // console.log("new ressss", response);
    } catch (error: any) {
      alert(error.response.data.msgs);
    }
  };
  useEffect(() => {
    addBonusCreditsByMbu();
  }, [addBonusCreditsByMbu, addCreditsUrl, jwtToken]);

  // console.log("vaalue", endDateMbu);

  const postBonusCreditsByMbu = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNewMbuTitle(mbuTitle);
    addBonusCreditsByMbu();
  };

  return (
    <form className="byMbu-form" onSubmit={postBonusCreditsByMbu}>
      <div>
        <DropdownForCategoryInMBU
          distinctCityNames={distinctCityNames}
          mbuName={mbuName}
        />
        <input
          type="text"
          className="input-element"
          placeholder="Title"
          onChange={getTitle}
        />
        <input
          type="text"
          className="input-element"
          placeholder="Credits"
          onChange={getCredits}
        />
        {/* <input type="date" placeholder="Start Date" /> */}
        <div className="date-picker-container">
          <BasicStartDatePickerForBonusCredits
            startDateForMbu={startDateForMbu}
          />
          <BasicEndDatePickerForBonusCredits endDateForMbu={endDateForMbu} />
        </div>
      </div>
      <div className="button-container">
        <button
          type="submit"
          className="save-button"
          // onClick={postBonusCreditsByMbu}
        >
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
    </form>
  );
};
export default ByMBU;
