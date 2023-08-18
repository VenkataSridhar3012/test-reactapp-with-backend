import "./index.css";

import endDateIcon from "../../../Assets/Icons/enddateicon.svg";
import winsicon from "../../../Assets/Icons/winsicon.svg";
import spinicon from "../../../Assets/Icons/spinicon.svg";
import claimsicon from "../../../Assets/Icons/claimsicon.svg";
import spinwheelimage from "../../../Assets/Icons/spinwheelimage.svg";
import startDateIconNew from "../../../Assets/Icons/startDateIconNew.svg";

import DateContainer from "../../ReusableComponents/DateContainer";
import BookmarkContainer from "../../ReusableComponents/BookmarkContainer";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
// import Tooltip from "@mui/material/Tooltip";

import { format } from "date-fns";

const Spinwheel = (props: any) => {
  const { spinwheelData } = props;

  // console.log("spin", spinwheelData);

  return (
    <>
      {spinwheelData?.map((eachItem: any) => {
        const startDate = format(new Date(eachItem.startDate), "MMM dd, yyyy");
        const endDate = format(new Date(eachItem.endDate), "MMM dd, yyyy");
        const offerValidTill = format(
          new Date(eachItem.offerValidTill),
          "MMM dd, yyyy"
        );
        // const checkStatus = (value: any) => {
        //   switch (value) {
        //     case "active":
        //       return <ToggleOnIcon />;
        //     case "inActive":
        //       return <ToggleOffIcon />;
        //   }
        // };
        const checkStatus = (value: any) => {
          switch (value) {
            case "active":
              return (
                <ToggleOnIcon style={{ color: "#2AA589", fontSize: "40px" }} />
              );
            case "inActive":
              return (
                <ToggleOffIcon style={{ color: "#A1A1A1", fontSize: "40px" }} />
              );
          }
        };
        const checkStatusText = (value: any) => {
          switch (value) {
            case "draft":
              return (
                <span
                  style={{
                    height: "31px",
                    width: "97px",
                    backgroundColor: "#ffff01",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "black",
                    fontFamily: "avenir",
                    fontSize: "12px",
                  }}
                >
                  upcoming
                </span>
              );
            case "expired":
              return (
                <span
                  style={{
                    height: "31px",
                    width: "97px",
                    backgroundColor: "#000000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    color: "#ffff01",
                  }}
                >
                  completed
                </span>
              );
          }
        };

        return (
          <div className="spinwheel-container">
            <div className="left-container">
              <div className="spinwheel-heading-toggle">
                <h1
                  className="spinwheel-heading"
                  style={{ fontFamily: "Avenir" }}
                >
                  {eachItem.spinWheelOfferId}
                </h1>
                
                  {checkStatus(eachItem.status)}
            
              </div>

              <div className="top-container">
                <DateContainer
                  icon={startDateIconNew}
                  title="Start date"
                  date={startDate}
                />
                <DateContainer
                  icon={endDateIcon}
                  title="End date"
                  date={endDate}
                />
                <DateContainer
                  icon={startDateIconNew}
                  title="Offer valid till"
                  date={offerValidTill}
                />
              </div>
              <div className="top-container">
                <BookmarkContainer
                  icon={winsicon}
                  title="Wins"
                  value={`$ ${eachItem.wins}`}
                />
                <BookmarkContainer
                  icon={spinicon}
                  title="Spins"
                  value={eachItem.plays}
                />
                <BookmarkContainer
                  icon={claimsicon}
                  title="Claims"
                  value={eachItem.claims}
                />
              </div>

              <div className="two-boxes">
                <div className="amount">
                  <h1 className="amount-text">
                    Amount <span className="dollers">₹ {eachItem.amount}</span>{" "}
                    (₹ {eachItem.costPerDay}/24hrs)
                  </h1>
                </div>
                <div>
                  {/* <p className="upcoming-box">Upcoming</p> */}
                  <div style={{ marginLeft: "5px" }}>
                    {checkStatusText(eachItem.status)}
                  </div>
                </div>
              </div>
            </div>
            <div className="rightside-container">
              <img
                src={spinwheelimage}
                className="spinwheel-size"
                alt="spinwheel"
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Spinwheel;
