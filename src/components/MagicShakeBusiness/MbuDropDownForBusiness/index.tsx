import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useEffect } from "react";
import Check from "../../../Assets/Icons/checkbox.png";
import BlankCheck from "../../../Assets/Icons/blank-check-box.png";

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

// type ChangeType = {
//   cityName: string;
//   isChecked: boolean;
// };

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

export default function MultipleSelectCheckmarksOfMBUInBusiness(props: any) {
  const {
    mbuList,
    newMbu,
    // mbuChangeFilter,
    personName,
    setPersonName,
    checkShow,
    setCheckShow,
  } = props;
  // const [mbuSelectedList, setMbuSelectedList] = React.useState("");

  // const [data, setData] = React.useState(newCheckedValue);

  useEffect(() => {
    newMbu(personName);
  }, [newMbu, personName]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    const index = checkShow.indexOf(event.target.value);
    if (index === -1) {
      setCheckShow([...checkShow, event.target.value]);
    } else {
      setCheckShow(
        checkShow.filter((skill: any) => skill !== event.target.value)
      );
    }
  };

  useEffect(() => {
    // const gettingData = async () => {
    //   const response = await axios({
    //     method: "get",
    //     url: "https://go.magicshake.app/business/api/business-owner/listWithStats?",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //       "x-access-token": jwtToken,
    //     },
    //   });
    //   if (response.data.status) {
    // setNewCheckedValue(
    //   mbuList.map((each: any, index: number) => {
    //     return {
    //       id: index,
    //       cityName: each,
    //       isChecked: false,
    //     };
    //   })
    // );
    // };
    // gettingData();
    // console.log("red", mbuList);
  }, []);

  // console.log("valu", newCheckedValue);

  // const newFunction = (index: number) => (event: React.ChangeEvent) => {
  //   const newArray: any = data.map((item: any) => {
  //     if (index === item.id) {
  //       return { ...item, isChecked: true };
  //     } else {
  //       return item;
  //     }
  //   });
  //   setData(newArray);
  // };

  // console.log("data", data);
  // const newChecked = (value: any) => {
  //   console.log("neww", { value, istrue: true });
  //   const newObject = {
  //     value,
  //     isTrue: false,
  //   };
  //   setNewCheckedValue(newObject.isTrue);
  // };

  // const MbuInputs = (event: React.ChangeEvent) => {
  //   setMbuSelectedList(event.target.value);
  // };
  return (
    <div>
      <form>
        <FormControl sx={{ width: "90%" }}>
          <InputLabel id="demo-multiple-checkbox-label">Select MBU</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="Select MBU" />}
            renderValue={(selected) => selected.join(",")}
            MenuProps={MenuProps}
            // onChange={MbuInputs}
          >
            {mbuList?.map((name: any, index: number) => (
              <MenuItem key={index} value={name.cityName}>
                {/* <Checkbox
                  checked={checkShow[checkShow.length - 1]?.includes(
                    name.cityName
                  )}
                  // checked={name.isChecked}
                  // onChange={(e) => {
                  //   mbuChangeFilter(e, index);
                  // }}
                  // onChange={handleChange}
                  id={name.cityName}
                  color="default"
                /> */}
                <div style={{ display: "flex", alignItems: "center" }}>
                  {checkShow[checkShow.length - 1]?.includes(name.cityName) ? (
                    <img
                      src={Check}
                      style={{ height: "20px", marginTop: "10px" }}
                      alt=""
                    />
                  ) : (
                    <img
                      src={BlankCheck}
                      style={{ height: "20px", marginTop: "10px" }}
                      alt=""
                    />
                  )}
                  <label
                    htmlFor={name.cityName}
                    style={{
                      marginLeft: "10px",
                      fontSize: "16px",
                      marginTop: "10px",
                    }}
                  >
                    {name.cityName}
                  </label>
                </div>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </form>
    </div>
  );
}
