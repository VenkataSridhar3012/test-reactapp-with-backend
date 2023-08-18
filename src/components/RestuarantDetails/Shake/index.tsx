import "./index.css";

import endDateIcon from "../../../Assets/Icons/enddateicon.svg";
import bookmarkicon from "../../../Assets/Icons/bookmarkicon.svg";
import claimsicon from "../../../Assets/Icons/claimsicon.svg";
import cancelsicon from "../../../Assets/Icons/cancelsicon.svg";
import DateContainer from "../../ReusableComponents/DateContainer";
import BookmarkContainer from "../../ReusableComponents/BookmarkContainer";
import { format } from "date-fns";
import startDateIconNew from "../../../Assets/Icons/startDateIconNew.svg";
// import ToggleOffIcon from "@mui/icons-material/ToggleOff";
// import { useEffect, useState } from "react";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import Tooltip from "@mui/material/Tooltip";

const Shake = (props: any) => {
  const { newShakeOfferData } = props;
  // const [toggle, setToggle] = useState("");

  // console.log(newShakeOfferData);

  // switch (apiStatus) {
  //   case apiStatusConstants.success:
  //     return this.renderPrimeDealsSuccessView();
  //   case apiStatusConstants.failure:
  //     return this.renderPrimeDealsFailureView();
  //   case apiStatusConstants.inProgress:
  //     return this.renderLoader();
  //   default:
  //     return null;
  return (
    <>
      {newShakeOfferData?.map((eachItem: any) => {
        const startDate = format(new Date(eachItem.startDate), "MMM dd, yyyy");
        const endDate = format(new Date(eachItem.endDate), "MMM dd, yyyy");
        const offerValidTill = format(
          new Date(eachItem.offerValidTill),
          "MMM dd, yyyy"
        );

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
                  // style={{ backgroundColor: "yellow", color: "black" }}
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
                  Upcoming
                </span>
              );
            case "expired":
              return (
                <div
                  // style={{
                  //   backgroundColor: "black",
                  //   color: "yellow",
                  //   paddingLeft: "10px",

                  // }}
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
                  <p> Completed</p>
                </div>
              );
          }
        };

        // const status = eachItem.status;
        // console.log("status", status);
        // console.log("shake data", newShakeOfferData);

        return (
          <div className="shake-container">
            <div className="left-container">
              <div>
                <Tooltip title={eachItem.title} placement="top-start">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <h1 className="active-business" key={eachItem._id}>
                      {eachItem.shakeOfferId} |{" "}
                      {eachItem.title.length > 25
                        ? eachItem.title.substring(0, 26) + "..."
                        : eachItem.title}
                      {/* {checkStatus(
                    newShakeOfferData.map((data: any) => data.status)
                  )} */}
                    </h1>
                    <div
                      style={{
                        marginLeft: "35px",
                        marginTop: "10px",
                      }}
                    >
                      {checkStatus(eachItem.status)}
                    </div>
                  </div>
                </Tooltip>
                <div>
                  {/* {eachItem.status === "expired"
                    ? <p style={{backgroundColor:"black"}}>Completed<p/>
                    : eachItem.status === "draft"
                    ? "Drafted"
                    : eachItem.status === "live"
                    ? "Toggle"
                    : eachItem.status === "upcoming"
                    ? "Upcoming"
                    : null} */}
                </div>
                <p className="heading-description">{eachItem.description}</p>
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
                  icon={bookmarkicon}
                  title="Bookmarks"
                  value={eachItem.bookmarks}
                />
                <BookmarkContainer
                  icon={claimsicon}
                  title="Claims"
                  value={eachItem.claims}
                />
                <BookmarkContainer
                  icon={cancelsicon}
                  title="Cancels"
                  value={eachItem.cancels}
                />
              </div>

              <div className="two-boxes">
                <div className="amount">
                  <h1 className="amount-text">
                    Amount{" "}
                    <span className="dollers">
                      ₹ {eachItem.pricing.totalAmount}
                    </span>{" "}
                    (₹ {eachItem.pricing.periodicPrice}/24hrs)
                  </h1>
                </div>
                {/* <p className="upcoming-box">Upcoming</p> */}
                <span style={{ marginLeft: "5px" }}>
                  {checkStatusText(eachItem.status)}
                </span>
              </div>
            </div>
            <div className="shake-right-container">
              {eachItem.uploadImages.map((each: any, index: number) => {
                return (
                  <div className="image-container">
                    <img
                      src={each.url}
                      className="image-size"
                      alt={`Images ${index + 1}`}
                    />
                    <p className="image-title">image {index + 1}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Shake;
