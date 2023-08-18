import "./index.css";
import locationicon from "../../Assets/Icons/locationicon.svg";
import mailicon from "../../Assets/Icons/mailicon.svg";
import callicon from "../../Assets/Icons/callicon.svg";
import personicon from "../../Assets/Icons/personicon.svg";
import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";

import axios from "axios";
import Chat from "../Tickets/Chat";
import { Drawer, Box } from "@mui/material";
import { baseUrl } from "../../App";
type contactinfoProps = {
  icon: string;
  altname: string;
  title: string;
  detail: string;
};

type restaurantDetailsComponentProps = {
  restaurantImage: string;
  availableFoodType: string;
  restaurantName: string;
  restaurantLocation: string;
  mail: string;
  phone: string;
};

const ContactInfo = (props: contactinfoProps) => {
  const { icon, altname, title, detail } = props;
  return (
    <>
      <div className="icon-contact-info">
        <img src={icon} className="restaurant-page-icon-size" alt={altname} />
        <div className="contact-info">
          <p className="restaurant-title">{title}</p>
          <p className="restaurant-title">{detail}</p>
        </div>
      </div>
    </>
  );
};

const RestaurantDetailsComponent = (props: restaurantDetailsComponentProps) => {
  const {
    restaurantImage,
    availableFoodType,
    restaurantName,
    restaurantLocation,
    mail,
    phone,
  } = props;

  return (
    <div>
      <div className="pic-tag-line-container">
        <img
          src={restaurantImage}
          className="restaurant-img"
          alt="restaurant"
        />
        <p className="tag-line">{availableFoodType}</p>
      </div>

      <div className="restaurant-name-container">
        <span className="restaurant-name">{restaurantName}</span>
        <div className="location-container">
          <img
            src={locationicon}
            className="location-icon-size"
            alt="location icon"
          />
          <p className="location">{restaurantLocation}</p>
        </div>
      </div>

      <div className="mail-container">
        <img
          src={mailicon}
          className="restaurant-page-icon-size"
          alt="mail icon"
        />
        <p className="Rmail">{mail}</p>
      </div>

      <div className="phone-container">
        <img
          src={callicon}
          className="restaurant-page-icon-size"
          alt="mail icon"
        />
        <p className="Rmail">{phone}</p>
      </div>
    </div>
  );
};

const RestaurantDetails = () => {
  const jwtToken: any = localStorage.getItem("jwtToken");
  const { id } = useParams();
  const url = `${baseUrl}business/api/business-owner/get/${id}`;
  const [resData, setResData] = useState<any>([]);

  const [chat, SetChat] = useState(false);
  const onclickChat = (value: any) => {
    SetChat(!value);
  };

  const onClickChat = () => {
    SetChat(!chat);
  };

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-access-token": jwtToken,
        },
      })
      .then((response) => {
        setResData(response.data.data);
      });
  }, [id, jwtToken, url]);

  console.log("resdata", resData);

  return (
    <div className="details-container">
      <RestaurantDetailsComponent
        restaurantImage={resData.profilePhotoUrl}
        availableFoodType={resData.category}
        restaurantName={resData.name}
        restaurantLocation={`${resData.city}, ${resData.countryCode}`}
        mail={resData.email}
        phone={`${resData.contact?.countryCode}${resData.contact?.number}`}
      />
      <hr className="line" />
      <h1 className="sub-heading">Point of contact</h1>
      <div>
        <ContactInfo
          icon={personicon}
          altname="person icon"
          title="Name"
          detail={resData.createdByName}
        />
        <ContactInfo
          icon={callicon}
          altname="person icon"
          title="Phone"
          detail={`${resData.contact?.countryCode}${resData.contact?.number}`}
        />
        <ContactInfo
          icon={mailicon}
          altname="person icon"
          title="Email"
          detail={resData.email}
        />
      </div>
      <div className="chat-button" onClick={onClickChat}>
        <SmsOutlinedIcon className="chat-icon" style={{ color: "#FFFE37" }} />
        <div style={{ paddingLeft: "4px", paddingBottom: "2px" }}> Chat</div>
      </div>
      <Drawer anchor="right" open={chat}>
        <Box sx={{ width: "525px" }}>
          <Chat onclickChat={onclickChat} chat={chat} />
        </Box>
      </Drawer>
    </div>
  );
};

export default RestaurantDetails;
