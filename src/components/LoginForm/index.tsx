import "./index.css";

import companyLogo from "../../Assets/Icons/CompanyLogo.svg";
import CarouselForLogin from "./CarouselForLogin";
import { useState } from "react";

import Box from "@mui/material/Box";

import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import React from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../App";

interface State {
  password: string;
  showPassword: boolean;
}

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const [values, setValues] = React.useState<State>({
    password: "",
    showPassword: false,
  });
  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const loginForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userDetails = {
      email: email,
      password: values.password,
    };

    const url = `${baseUrl}business/api/users/user-login`;
    console.log("url",url)
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };

    const response = await fetch(url, options);
    const responseData = await response.json();
    const token = responseData.data.token;
    if (responseData.status === true) {
      localStorage.setItem("jwtToken", token);
      navigate("/");
    }
  };

  return (
    <div className="login-form-main-container">
      <div className="login-form-left-container">
        <CarouselForLogin />
      </div>
      <div className="login-form-right-container">
        <div>
          <img
            src={companyLogo}
            alt="CompanyLogo"
            className="login-form-company-logo"
          />
        </div>
        <form onSubmit={loginForm}>
          <h1 className="login-heading">Login</h1>
          <p className="login-description">Sample description replace here</p>
          <div style={{ marginTop: "25px", width: "450px" }}>
            <Box
              sx={{
                width: 450,
                height: 64,
                maxWidth: "100%",
              }}
            >
              <TextField
                fullWidth
                label="Email*"
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <p style={{ fontWeight: "bold", paddingLeft: "10px" }}>
                        @
                      </p>
                    </InputAdornment>
                  ),
                }}
                id="fullWidth"
              />
            </Box>
          </div>
          <div>
            <FormControl
              sx={{ width: "450px", marginTop: "15px" }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                // onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                //   setPassword(event.target.value)
                // }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </div>
          <p className="forgot-password-in-login-form">Forgot Password?</p>
          <button type="submit" className="login-button">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
