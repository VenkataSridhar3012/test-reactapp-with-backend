import "./index.css";
import SearchIcon from "@mui/icons-material/Search";

import { useState } from "react";
import { Drawer, Box } from "@mui/material";
import closeIcon from "../../../Assets/Icons/closeIcon.svg";
import DatePicker from "../DatePickerForPricing";
import DropdownForMBUInPricing from "../DropDownForMBUInPricing";
// import { createTheme } from "@mui/material/styles";
// import Stack from "@mui/material/Stack";
// import Pagination from "@mui/material/Pagination";

import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";
import Sidebar from "../../Sidebar";
import PricingTable from "../PricingTable";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

const activeId = "PRICING";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#FFFF01",
//     },
//   },
// });

const Pricing = () => {
  const [pricing, setPricing] = useState(false);
  const [emptyCircle, setEmptyCircle] = useState(true);
  return (
    <div className="total-pricing-container">
      <Sidebar activeId={activeId} />
      <div className="pricing-container">
        <div className="heading-search-container">
          <div className="bonus-credits-side-heading-container">
            <p className="bonous-credits-side-heading">Pricing</p>
            <p className="bonus-description">Sample description replace here</p>
          </div>
          <div className="button-and-search-container">
            <div className="search-container-in-bonus-credits">
              <SearchIcon sx={{ marginLeft: "10px" }} />
              <input
                type="text"
                className="search-input-in-bonus-credits"
                placeholder="Search"
              />
            </div>
            <div>
              <button
                type="button"
                className="add-bonus-button"
                onClick={() => setPricing(true)}
              >
                Create new pricing
              </button>
            </div>
          </div>
        </div>
        <PricingTable />
        <Drawer anchor="right" open={pricing}>
          <Box sx={{ width: "525px" }}>
            <div className="form-heading-container">
              <h4 className="addbonus-form-heading">Create new pricing</h4>
              <img
                src={closeIcon}
                alt="close icon"
                className="close-icon-size-in-form"
                onClick={() => setPricing(false)}
              />
            </div>
            <hr className="form-line" />
            <form className="pricing-form">
              <input
                type="text"
                className="input-element"
                placeholder="Title"
              />
              <DropdownForMBUInPricing />

              <h4 className="pricing-form-side-heading">Campaign</h4>
              <div className="pricing-radios-container">
                <div className="pricing-radio-container">
                  {emptyCircle ? (
                    <CheckCircleSharpIcon
                      sx={{ fontSize: "21px", marginRight: "20px" }}
                    />
                  ) : (
                    // <input type="radio" className="pricing-radio" />
                    <CircleOutlinedIcon
                      sx={{ fontSize: "21px", marginRight: "20px" }}
                    />
                  )}
                  <label
                    htmlFor="shakeOffer"
                    className="pricing-label"
                    onClick={() => setEmptyCircle(true)}
                  >
                    Shake offer
                  </label>
                </div>
                <div className="pricing-radio-container">
                  {emptyCircle ? (
                    // <input type="radio" className="pricing-radio" />
                    <CircleOutlinedIcon
                      sx={{ fontSize: "21px", marginRight: "20px" }}
                    />
                  ) : (
                    <CheckCircleSharpIcon
                      sx={{ fontSize: "21px", marginRight: "20px" }}
                    />
                  )}

                  <label
                    htmlFor="spinOffer"
                    className="pricing-label"
                    onClick={() => setEmptyCircle(!emptyCircle)}
                  >
                    Spin offer
                  </label>
                </div>
              </div>
              <div>
                <h3 className="pricing-form-side-heading">Pricing</h3>
                <div className="price-container">
                  <select className="pricing-drop">
                    <option className="country-name">EUR</option>
                  </select>
                  <input type="text" className="pricing-input" />
                </div>
              </div>

              <DatePicker />
              <div className="pricing-buttons-container">
                <button type="submit" className="save-button">
                  SAVE
                </button>
                <button type="button" className="cancel-button">
                  CANCEL
                </button>
              </div>
            </form>
          </Box>
        </Drawer>
      </div>
    </div>
  );
};

export default Pricing;
