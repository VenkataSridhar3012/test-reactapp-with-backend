import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

export default function EmailInputForForgotPassword() {
  return (
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
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <p style={{ fontWeight: "600", paddingTop: "15px" }}>@</p>
            </InputAdornment>
          ),
        }}
        id="fullWidth"
      />
    </Box>
  );
}
