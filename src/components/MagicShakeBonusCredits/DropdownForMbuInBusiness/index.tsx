import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

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

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

export default function DropdownForMbuInBusiness(props: any) {
  const { distinctCityNames, selectedMbuFromBusiness, businessNameInMbu } =
    props;
  const [personName, setPersonName] = React.useState<string[]>([]);
  selectedMbuFromBusiness(personName);
  businessNameInMbu(personName);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl
        sx={{
          pl: "10px",
          width: "444px",
          marginTop: "15px",
          marginBottom: "10px",
          height: "54px",
        }}
      >
        <InputLabel
          id="demo-multiple-checkbox-label"
          sx={{ pl: "10px", fontFamily: "avenir", color: "#000000" }}
        >
          Select MBU
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {distinctCityNames?.map((name: any) => (
            <MenuItem key={name} value={name}>
              <Checkbox
                checked={personName.indexOf(name) > -1}
                style={{ color: "black" }}
              />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
