import "./index.css";

import * as React from "react";
// import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { format } from "date-fns";
import { useEffect } from "react";
import { Dayjs } from "dayjs";

const theme = createTheme({
  typography: {
    fontFamily: "Avenir",
  },
});

export default function BasicEndDatePickerForBonusCredits(props: any) {
  const { endDateForMbu } = props;
  const [value, setValue] = React.useState(null);
  // const endDate = format(new Date(value), "MMM dd, yyyy");

  // const newEndDate = new Date(value).toISOString();
  // console.log("end", newEndDate);

  React.useEffect(() => {
    if (value !== null) {
      const newValue = new Date(value).toISOString();
      endDateForMbu(newValue);

      // console.log("newvalueee", newValue);
    }
  }, [endDateForMbu, value]);

  // useEffect(() => {
  //   endDateForMbu(newEndDate);
  // }, [endDateForMbu, newEndDate]);

  // // console.log("date", endDate);

  return (
    <ThemeProvider theme={theme}>
      <div className="date-picker">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="End Date"
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
