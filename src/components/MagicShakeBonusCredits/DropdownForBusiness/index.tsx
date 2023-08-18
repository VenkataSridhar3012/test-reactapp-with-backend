import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

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

// const names = [
//   "Oliver Hansen",
//   "Van Henry",
//   "April Tucker",
//   "Ralph Hubbard",
//   "Omar Alexander",
//   "Carlos Abbott",
//   "Miriam Wagner",
//   "Bradley Wilkerson",
//   "Virginia Andrews",
//   "Kelly Snyder",
// ];

export default function DropdownForBusinessInBonus(props: any) {
  const { businessNameList, getBusinessId } = props;
  const [personName, setPersonName] = useState<string[]>([]);
  const [newbusinessOwnerId, setNewBusinessOwnerId] = useState<any>([]);
  React.useEffect(() => {
    getBusinessId(newbusinessOwnerId);
  }, [getBusinessId, newbusinessOwnerId]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  console.log("each", newbusinessOwnerId);
  const getBusinessOwnerId = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewBusinessOwnerId((prev: any) => [...prev, event.target.value]);
  };

  return (
    <div>
      <FormControl
        sx={{
          pl: "10px",
          width: 444,
          marginTop: "15px",
          marginBottom: "20px",
          height: "54px",
        }}
      >
        <InputLabel
          id="demo-multiple-checkbox-label"
          sx={{ pl: "10px", fontFamily: "avenir", color: "#000000" }}
        >
          Select Business
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
          {businessNameList?.map((name: any) => (
            <MenuItem key={name._id} value={name.name}>
              <Checkbox
                checked={personName.indexOf(name.name) > -1}
                style={{ color: "black" }}
                value={name.businessOwnerId}
                onChange={getBusinessOwnerId}
              />
              <ListItemText primary={name.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
