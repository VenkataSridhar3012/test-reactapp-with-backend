import "./index.css";

import * as React from "react";
// import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { format } from "date-fns";
import { Dayjs } from "dayjs";

const theme = createTheme({
  typography: {
    fontFamily: "Avenir",
  },
});

export default function BasicStartDatePickerForBonusCredits(props: any) {
  const { startDateForMbu } = props;
  const [value, setValue] = React.useState(null);

  // console.log("dattttttt", new Date(value).toISOString());
  React.useEffect(() => {
    if (value !== null) {
      const newValue = new Date(value).toISOString();
      startDateForMbu(newValue);
      // console.log("newvalueee", newValue);
    }
  }, [startDateForMbu, value]);

  // console.log("new", newValue);

  // const formattedDate = moment(value);

  // const date = value?.toString();
  // const date = new Date(value);
  // const finaldate =
  //   date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
  // const startDate = format(new Date(value), "MMM dd, yyyy");
  // React.useEffect(() => {
  //   startDateForMbu(newValue);
  // }, [newValue, startDateForMbu]);

  // console.log("nnnndate", value);

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
