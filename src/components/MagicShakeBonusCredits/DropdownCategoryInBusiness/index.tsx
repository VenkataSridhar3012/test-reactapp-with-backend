import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import CheckboxIcon from "@mui/material/Checkbox";

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

const names = ["All", "Graz", "Vienna", "Linz", "Seizburg"];

export default function DropdownForCategoryInBusiness(props: any) {
  const { category } = props;
  const [personName, setPersonName] = React.useState<string[]>([]);

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
          width: 444,
          marginTop: "15px",
          marginBottom: "10px",
          height: "54px",
          color: "#000000",
        }}
      >
        <InputLabel
          id="demo-multiple-checkbox-label"
          sx={{
            pl: "10px",
            fontFamily: "avenir",
            fontWeight: "400",
            color: "#000000",
          }}
        >
          Select Category
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" placeholder="Select" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {category?.map((name: any) => (
            <MenuItem key={name} value={name}>
              <CheckboxIcon
                checked={personName.indexOf(name) > -1}
                sx={{ color: "black", fontWeight: "bold" }}
                style={{ color: "black" }}
              />
              <ListItemText primary={name} sx={{ fontFamily: "avenir" }} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
