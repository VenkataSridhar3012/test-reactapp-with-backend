import "./index.css";

import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

import loginFormImage1 from "../../../Assets/images/loginformImage.png";
import loginFormImage2 from "../../../Assets/images/loginformImage1.png";
import loginFormImage3 from "../../../Assets/images/loginFormImage2.png";
import HorizontalRuleRoundedIcon from "@mui/icons-material/HorizontalRuleRounded";

type itemProps = {
  src: string;
  description: string;
};

const Item = (props: itemProps) => {
  const { src, description } = props;
  return (
    <Paper sx={{ backgroundColor: "#000000" }}>
      <img src={src} className="login-form-carousel-image-size" alt="" />
      <div>
        <h1
          style={{
            color: "white",
            fontFamily: "avenir",
            paddingLeft: "30px",
            paddingTop: "30px",
            fontSize: "20px",
            marginBottom: "20px",
          }}
        >
          Our Mission
        </h1>
        <p
          style={{
            color: "white",
            fontFamily: "avenir",
            paddingLeft: "30px",
            fontSize: "28px",
            width: "92%",
          }}
        >
          {description}
        </p>
      </div>
    </Paper>
  );
};

const CarouselForLogin = () => {
  const description =
    "To bring innovation & growth to every entrepreneur in the world.";

  return (
    <Carousel
      IndicatorIcon={
        <HorizontalRuleRoundedIcon sx={{ width: "40px", height: "60px" }} />
      }
      indicatorIconButtonProps={{
        style: {
          fontSize: "50px",
          fontWeight: "bold",

          color: "#808080",
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          color: "#FFFE37",
          width: "60px",
        },
      }}
      indicatorContainerProps={{
        style: {
          textAlign: "left", // 4
          marginLeft: "30px",
        },
      }}
    >
      <Item src={loginFormImage1} description={description} />
      <Item src={loginFormImage2} description={description} />
      <Item src={loginFormImage3} description={description} />
    </Carousel>
  );
};

export default CarouselForLogin;
