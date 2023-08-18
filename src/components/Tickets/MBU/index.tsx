import React from "react";
import "./index.css";
import closeIcon from "../../../Assets/Icons/closeIcon.svg";
import Checkbox from "@mui/material/Checkbox";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
// import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";
// import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
// import CheckBoxIcon from "@mui/icons-material/CheckBox";
// const icon = <CheckBoxOutlineBlankIcon fontSize="medium" />;
// const checkedIcon = (
//   <CheckBoxIcon fontSize="medium" style={{ color: "black" }} />
// );

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
// type mbuprops = {
//   onclickFilter: any;
//   drawer: boolean;
// };
// const mbu = [
//   { title: "All" },
//   { title: "Graz" },
//   { title: "Vienna" },
//   { title: "Linz" },
//   { title: "SalzBurg" },
// ];

const MBU = (props: any) => {
  const { onclickFilter, drawer } = props;
  const {
    mbuList,
    newMbu,
    searchTickets,
    cityName,
    setCityName,
    checkShow,
    setCheckShow,
  } = props;
  // const [cityName, setCityName] = React.useState<string[]>([]);

  const onClickClose = () => {
    onclickFilter(drawer);
  };

  const handleChange = (event: SelectChangeEvent<typeof cityName>) => {
    const {
      target: { value },
    } = event;

    setCityName(typeof value === "string" ? value.split(",") : value);

    const index = checkShow.indexOf(event.target.value);
    if (index === -1) {
      setCheckShow([...checkShow, event.target.value]);
    } else {
      setCheckShow(
        checkShow.filter((skill: any) => skill !== event.target.value)
      );
    }
  };

  const getMbu = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    newMbu(cityName);
    searchTickets();
    console.log("nibba");
  };
  return (
    <div>
      <form onSubmit={getMbu}>
        <div className="mbu-drawer-container">
          <h4 className="mbu-drawer-heading">MBU</h4>
          <img
            src={closeIcon}
            alt="close icon"
            className="close-icon-size-in-form"
            onClick={onClickClose}
          />
        </div>
        <hr className="form-line" />
        <h4 className="mbu-drawer-heading1"> Select MBU</h4>

        <div className="mbu-drawer-heading1">
          <FormControl sx={{ width: "90%" }}>
            <InputLabel id="demo-multiple-checkbox-label">
              Select MBU
            </InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={cityName}
              onChange={handleChange}
              input={<OutlinedInput label="Select MBU" />}
              renderValue={(selected) => selected.join(",")}
              MenuProps={MenuProps}
            >
              {mbuList.map((name: any) => (
                <MenuItem key={name} value={name}>
                  <Checkbox sx={{ color: "black" }} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        {/* <div className="mbu-buttons-container">
          <button type="submit" className="save-button">
            SAVE
          </button>
          <button type="button" className="cancel-button">
            CANCEL
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default MBU;
