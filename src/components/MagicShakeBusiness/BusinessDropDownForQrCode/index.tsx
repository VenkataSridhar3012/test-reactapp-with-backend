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

export default function MultipleSelectCheckmarksOfBusinessforQrCode(
  props: any
) {
  const {
    newBusinessNameData,
    newEachBusinessCode,
    setPersonNameforqr,
    personNameforqr,
  } = props;
  const [newQrCodeList, setNewQrCodeList] = useState({});
  // const [qrCodeObject, setqrCodeObject] = React.useState({});
  const handleChange = (event: SelectChangeEvent<typeof personNameforqr>) => {
    event.preventDefault();
    const {
      target: { value },
    } = event;

    setPersonNameforqr(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  // const getOnChangeData = (name: any) => {
  //   setNewQrCodeList((prev: any) => ({
  //     ...prev,
  //     [name.name]: name.htmlQrCodeUrl,
  //   }));
  // };

  const getOnChangeData = (
    e: React.ChangeEvent<HTMLInputElement>,
    eachItem: any,
    index: number
  ) => {
    const newThing = e.target.checked;
    if (newThing) {
      return setNewQrCodeList((prev: any) => ({
        ...prev,
        [eachItem.name]: eachItem.htmlQrCodeUrl,
      }));
    } else if (!newThing) {
      // delete prev[eachItem.name]
      return setNewQrCodeList((prev: any) => {
        const asArray = Object.entries(newQrCodeList);
        const filtered = asArray.filter(
          ([key, value]) => key !== eachItem.name
        );
        return Object.fromEntries(filtered);
      });
    }
  };
  // setEachBusenessQrCode(newQrCodeList);

  // useEffect(() => {
  newEachBusinessCode(newQrCodeList);
  // }, [newEachBusinessCode, newQrCodeList]);
  // newEachBusinessCode(newQrCodeList);

  return (
    <div>
      <FormControl sx={{ width: "90%" }}>
        <InputLabel id="demo-multiple-checkbox-label">
          Select business
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personNameforqr}
          onChange={handleChange}
          input={<OutlinedInput label="Select MBU" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {newBusinessNameData.map((name: any, index: number) => (
            <MenuItem key={name._id} value={name.name}>
              <Checkbox
                checked={personNameforqr.indexOf(name.name) > -1}
                onChange={(e) => getOnChangeData(e, name, index)}
                style={{ color: "black" }}
              />
              <ListItemText primary={name.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
