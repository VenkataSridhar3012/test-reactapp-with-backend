import "./index.css";

import * as React from "react";
import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Avenir",
  },
});

export default function StartDatePickerForBusiness(props: any) {
  const { startDateForBusiness } = props;
  const [value, setValue] = React.useState(null);
  // const newValue = new Date(value).toISOString();

  React.useEffect(() => {
    if (value !== null) {
      const newValue = new Date(value).toISOString();
      // startDateForMbu(newValue);
      startDateForBusiness(newValue);

      // console.log("newvalueee", newValue);
    }
  }, [startDateForBusiness, value]);

  // React.useEffect(() => {
  //   startDateForBusiness(newValue);
  // }, [newValue, startDateForBusiness]);

  return (
    <ThemeProvider theme={theme}>
      <div className="date-picker">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Start Date"
            value={value}
            onChange={(event: any) => {
              setValue(event.$d);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>
    </ThemeProvider>
  );
}
