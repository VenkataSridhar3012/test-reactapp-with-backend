import Sidebar from "../Sidebar";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import "./index.css"
import {Drawer,Box} from "@mui/material"
import closeIcon from "../../Assets/Icons/closeIcon.svg"
import MultipleSelectCheckmarksInPartner from "../Partners/SelectCategoryInPartner"

const activeId = "PARTNERS";

const PartnerForm=()=>{
  return(
    <form className="partner-form">
        <h1 className="partner-form-heading">Select MBU</h1>
        <div className="select-category-drop-in-partner">
          <div className="partner-form-inner-container">
            <MultipleSelectCheckmarksInPartner/>
            <input type="text" className="partner-input" placeholder="Name"/>
          </div>


          <div className="phonenumber-email-container">
            <div>
               <input className="left-side-input-element" type="text" placeholder="Email id"/>
            </div>
            <div className="phone-container">
                 <select className="phonenumber-dropdown">
                  <option>+91</option>
                 </select>
                 <input type="text" className="phoneNumberInput-input" placeholder="Phone number"/>
            </div>

          </div>
        
        </div>

    </form>
  )
}

const Partners = () => {
  const[onboardPartner,setOnboardPartner]=useState(false)
  return (
    <div style={{ display: "flex" }}>
      <Sidebar activeId={activeId} />
      <div className="partner-container">
          <div className="partner-head-container">        
        <div className="bonus-credits-side-heading-container">
          <p className="bonous-credits-side-heading">Partners</p>
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
              onClick={() =>setOnboardPartner(true)}
            >
              Onboard a Partner
            </button>
          </div>
        </div>
          </div>


          <Drawer anchor="right" open={onboardPartner}>
            <Box sx={{width:"654px",height:"822px"}}>
            <div className="form-heading-container">
            <h4 className="addbonus-form-heading">Add a partner</h4>
            <img
              src={closeIcon}
              alt="close icon"
              className="close-icon-size-in-form"
              onClick={() => setOnboardPartner(false)}
            />
          </div>
          <hr className="form-line" />
          <PartnerForm/>
           

            </Box>

          </Drawer>
      </div>
    </div>
  );
};

export default Partners;
