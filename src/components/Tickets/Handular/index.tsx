import "./index.css";
import closeIcon from "../../../Assets/Icons/closeIcon.svg";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import Check from "../../../Assets/Icons/checkbox.png";
import BlankCheck from "../../../Assets/Icons/blank-check-box.png";
import { useEffect } from "react";

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

const Handular = (props: any) => {
  const { onclickhandulerFilter, handuler } = props;
  const {
    handulerList,
    newHandler,
    personName,
    setPersonName,
    checkShow,
    setCheckShow,
    // setHandulerData,
  } = props;

  useEffect(() => {
    newHandler(personName);
  }, [newHandler, personName]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;

    setPersonName(typeof value === "string" ? value.split(",") : value);
    const index = checkShow.indexOf(event.target.value);
    if (index === -1) {
      setCheckShow([...checkShow, event.target.value]);
    } else {
      setCheckShow(
        checkShow.filter((skill: any) => skill !== event.target.value)
      );
    }
  };
  const onClickHandulerClose = () => {
    onclickhandulerFilter(handuler);
  };

  // const getHandler = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   newHandler(personName);
  //   searchTickets();
  //   console.log("nibba");
  // };

  // const clearTheHanduler = () => {
  //   newHandler([]);
  //   searchTickets();
  // };
  return (
    <div>
      <form>
        <div className="mbu-drawer-container">
          <h4 className="mbu-drawer-heading">Handler</h4>
          <img
            src={closeIcon}
            alt="close icon"
            className="close-icon-size-in-form"
            onClick={onClickHandulerClose}
          />
        </div>
        <hr className="form-line" />
        <h4 className="mbu-drawer-heading1"> Select Handler</h4>

        <div className="mbu-drawer-heading1">
          <FormControl sx={{ width: "90%" }}>
            <InputLabel id="demo-multiple-checkbox-label">
              Select Handler
            </InputLabel>
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
              {handulerList?.map((name: any, index: number) => (
                <MenuItem key={index} value={name}>
                  {/* <Checkbox sx={{ color: "black" }} />
                  <ListItemText primary={name} /> */}

                  {checkShow[checkShow.length - 1]?.includes(name) ? (
                    <img
                      src={Check}
                      style={{
                        height: "18px",
                        margin: "0 3px 2px 0",
                        paddingRight: "10px",
                      }}
                      alt=""
                    />
                  ) : (
                    <img
                      src={BlankCheck}
                      style={{
                        height: "15px",
                        margin: "0 3px 2px 2px",
                        paddingRight: "10px",
                      }}
                      alt=""
                    />
                  )}
                  <label htmlFor={name}>{name}</label>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        {/* <div className="mbu-buttons-container">
          <button type="submit" className="save-button">
            SAVE
          </button>
          <button
            type="submit"
            className="cancel-button"
            onClick={clearTheHanduler}
          >
            CLEAR ALL
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default Handular;
