import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useEffect } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 1;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function MultipleSelectCheckmarksOfMBUforQRCode(props: any) {
  const { mbuList, newBName, qrBusinessName, setQrBusinessName } = props;
  // const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof qrBusinessName>) => {
    event.preventDefault();
    const {
      target: { value },
    } = event;
    setQrBusinessName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  useEffect(() => {
    newBName(qrBusinessName);
  }, [newBName, qrBusinessName]);

  return (
    <div>
      <FormControl sx={{ width: "90%", color: "#000000" }}>
        <InputLabel id="demo-multiple-checkbox-label">Select MBU</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={qrBusinessName}
          onChange={handleChange}
          input={<OutlinedInput label="Select MBU" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {mbuList.map((name: any, index: number) => (
            <MenuItem key={index} value={name}>
              <Checkbox
                checked={qrBusinessName.indexOf(name) > -1}
                style={{ color: "black" }}
                // color="default"
              />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
