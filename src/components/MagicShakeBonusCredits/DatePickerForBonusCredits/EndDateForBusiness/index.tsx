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

export default function EndDatePickerForBusiness(props: any) {
  const { endDateForBusiness } = props;
  const [value, setValue] = React.useState(null);
  // const newValue = new Date(value).toISOString();

  // React.useEffect(() => {
  //   endDateForBusiness(newValue);
  // }, [endDateForBusiness, newValue]);

  React.useEffect(() => {
    if (value !== null) {
      const newValue = new Date(value).toISOString();
      endDateForBusiness(newValue);

      // console.log("newvalueee", newValue);
    }
  }, [endDateForBusiness, value]);

  //   console.log("date", value);

  return (
    <ThemeProvider theme={theme}>
      <div className="date-picker">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="End Date"
            className="date-label-color"
            value={value}
            onChange={(newValue: any) => {
              setValue(newValue.$d);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>
    </ThemeProvider>
  );
}
