import "./index.css";

import locationicon from "../../../Assets/Icons/locationicon.svg";
import mailicon from "../../../Assets/Icons/mailicon.svg";
import callicon from "../../../Assets/Icons/callicon.svg";
import personicon from "../../../Assets/Icons/personicon.svg";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { baseUrl } from "../../../App";

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
  countryCode: string;
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
    countryCode,
  } = props;
  return (
    <div>
      <div className="pic-tag-line-container">
        <img
          src={restaurantImage}
          className="restaurant-img "
          alt="restaurant "
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
        <p className="Rmail">
          {countryCode} {phone}
        </p>
      </div>
    </div>
  );
};

// type MyType = {
//   url: string;
//   fileName: string;
//   _id: string;
//   originalFileName: string;
//   category: string;
// };y

const RestaurantDetails = () => {
  const { id } = useParams();
  const [restuarntData, setRestuarntData] = useState<any>([]);
  const jwtToken: any = localStorage.getItem("jwtToken");

  const restaurantDetailsUrl = `${baseUrl}business/api/business-owner/get/${id}`;

  const getBonusDetailsOfBusiness = useCallback(async () => {
    const responseData = await axios.get(restaurantDetailsUrl, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-access-token": jwtToken,
      },
    });
    setRestuarntData(responseData.data.data);
  }, [jwtToken, restaurantDetailsUrl]);

  useEffect(() => {
    getBonusDetailsOfBusiness();
  }, [getBonusDetailsOfBusiness]);

  return (
    <div className="details-container">
      <RestaurantDetailsComponent
        restaurantImage={restuarntData.profilePhotoUrl}
        availableFoodType={restuarntData.category}
        restaurantName={restuarntData.name}
        restaurantLocation={`${restuarntData.city}, ${restuarntData.countryCode}`}
        mail={restuarntData.email}
        countryCode={restuarntData.contact?.countryCode}
        phone={restuarntData.contact?.number}
      />
      <hr className="line" />
      <h1 className="sub-heading">Point of contact</h1>

      <ContactInfo
        icon={personicon}
        altname="person icon"
        title="Name"
        detail={restuarntData.createdByName}
      />
      <ContactInfo
        icon={callicon}
        altname="person icon"
        title="Phone"
        detail={`${restuarntData.contact?.countryCode} ${restuarntData.contact?.number}`}
      />
      <ContactInfo
        icon={mailicon}
        altname="person icon"
        title="Email"
        detail={restuarntData.email}
      />
    </div>
  );
};

export default RestaurantDetails;
