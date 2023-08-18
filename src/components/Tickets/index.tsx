import "./index.css";
import Sidebar from "../Sidebar";
import FilterButton from "../FilterButton";
import { FiSearch } from "react-icons/fi";
import MBU from "./../Tickets/MBU";
import TicketsTable from "../TicketsTable";
import axios from "axios";
import { Drawer, Box } from "@mui/material";
import { useState, useEffect } from "react";
import Handular from "./Handular";
import * as React from "react";
import { useCallback } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { baseUrl } from "../../App";
const activeId = "TICKETS";

const Tickets = () => {
  const [age, setAge] = React.useState("");
  const [value, setValue] = useState([]);
  const [newCheckedMbuValue, setNewCheckedMbuValue] = useState([{}]);
  const [newCheckedHandlerValue, setNewCheckedHandlerValue] = useState([{}]);
  const [searchInput, setSearchInput] = useState("");
  const [drawer, setDrawer] = useState(false);
  const [handuler, SetHanduler] = useState(false);
  const [handulerData, setHandulerData] = useState([]);
  const [handulerList, setHandulerList] = useState([]);
  const [mbuData, setmbuData] = useState([]);
  const [mbuList, setmbuList] = useState([]);
  const [tableData, setTableData] = useState([]);
  const jwtToken: any = localStorage.getItem("jwtToken");
  const [cityName, setCityName] = useState([]);
  const [personName, setPersonName] = useState([]);
  const [checkShow, setCheckShow] = useState<string[]>([]);

  const url = `${baseUrl}business/api/tickets/list?searchString=${searchInput}&filterByCityNames=${mbuData}&filterByHandlerName=${value}&all=true`;
  console.log(url);
  console.log("handler", handulerData);
  const url1 = `${baseUrl}business/api/tickets/list?status=${age}&all=true`;
  console.log(url);
  console.log("age", age);

  const searchTickets = useCallback(async () => {
    const newData = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-access-token": jwtToken,
      },
    });
    setHandulerList(newData.data.data.distinctHandlers);
    setmbuList(newData.data.data.distinctCities);
    setTableData(newData.data.data.list);

    setNewCheckedHandlerValue(
      newData.data.data.distinctHandlers.map((each: any, index: number) => {
        return {
          id: index,
          handulerName: each,
          isChecked: false,
        };
      })
    );
    setNewCheckedMbuValue(
      newData.data.data.distinctCities.map((each: any, index: number) => {
        return {
          id: index,
          handulerName: each,
          isChecked: false,
        };
      })
    );
  }, [jwtToken, url]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const searchStatus = useCallback(async () => {
    console.log("abccccccccc");
    const newData = await axios.get(url1, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-access-token": jwtToken,
      },
    });
    setTableData(newData.data.data.list);
    console.log(newData.data.data.list);
  }, [jwtToken, url1]);
  useEffect(() => {
    searchStatus();
  }, [searchStatus]);

  const handulerChangeFilter = (e: any, id: number) => {
    setNewCheckedHandlerValue([
      ...newCheckedHandlerValue.map((item, i) =>
        id === i ? { ...item, isChecked: e.target.checked } : item
      ),
    ]);
  };

  const mbuChangeFilter = (e: any, id: number) => {
    setNewCheckedMbuValue([
      ...newCheckedMbuValue.map((item, i) =>
        id === i ? { ...item, isChecked: e.target.checked } : item
      ),
    ]);
  };

  useEffect(() => {
    searchTickets();
  }, [searchTickets]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAge(event.target.value);
  };

  const newHandler = (newhandler: any) => {
    setHandulerData(newhandler);
  };
  const newMbu = (newmbu: any) => {
    setmbuData(newmbu);
  };

  const onclickFilter = (value: any) => {
    setDrawer(!value);
  };

  const onclickhandulerFilter = (value: any) => {
    SetHanduler(!value);
  };

  const onClickFilter = () => {
    setDrawer(!handuler);
  };

  const onClickHandulerFilter = () => {
    SetHanduler(!handuler);
  };

  const onSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleClick = (e: React.KeyboardEvent<HTMLInputElement>) => {
    searchTickets();
  };

  const clearTheHanduler = () => {
    setPersonName([]);
    setCheckShow([]);
    searchTickets();
  };

  const selectHandlerFilter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValue(handulerData);
    searchTickets();
    setHandulerData(handulerList);
  };

  const clearTheMBU = () => {
    setPersonName([]);
    setCheckShow([]);
    searchTickets();
  };

  const selectMBUFilter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValue(handulerData);
    searchTickets();
    setHandulerData(handulerList);
  };

  return (
    <div className="ticket-outer-container">
      <Sidebar activeId={activeId} />
      <div className="ticket-inner-container">
        <div className="align-container">
          <div>
            <h1 className="active-tickets">Tickets</h1>
            {/* <p className="ticket-description">
              Sample description replace here
            </p> */}
          </div>
          <div className="ticket-heading-container">
            <div className="ticket-search-input-container">
              <FiSearch color="#B5B5B5" size={20} />
              <input
                type="search"
                className="search-input"
                placeholder="Search"
                onChange={onSearchInput}
                onKeyDown={handleClick}
              />
            </div>
            <button className="filter-button" onClick={onClickFilter}>
              <FilterButton icon>MBU</FilterButton>
            </button>
            <button className="filter-button" onClick={onClickHandulerFilter}>
              <FilterButton icon>Handler</FilterButton>
            </button>
            <button className="filter-button">
              <form>
                <select
                  value={age}
                  onChange={handleChange}
                  className="status-button"
                  id="select"
                >
                  <option className="vall" value="">
                    Status
                  </option>
                  <option className="vall" value="open">
                    Open
                  </option>
                  <option className="vall" value="closed">
                    Closed
                  </option>
                </select>
                <MdArrowDropDown className="status-drop" size="35" />
              </form>
            </button>
          </div>
        </div>
        <TicketsTable tableData={tableData} searchTickets={searchTickets} />

        <Drawer anchor="right" open={drawer}>
          <Box sx={{ width: "525px" }}>
            <MBU
              onclickFilter={onclickFilter}
              drawer={drawer}
              newMbu={newMbu}
              searchTickets={searchTickets}
              mbuList={mbuList}
              mbuChangeFilter={mbuChangeFilter}
              checkShow={checkShow}
              setCheckShow={setCheckShow}
              cityName={cityName}
              setCityName={setCityName}
              setmbuData={setmbuData}
            />
          </Box>
          <form onSubmit={selectMBUFilter}>
            <div className="mbu-buttons-container">
              <button type="submit" className="Tsave-button">
                SAVE
              </button>

              <button
                type="submit"
                className="Tcancel-button"
                onClick={clearTheMBU}
              >
                CLEAR ALL
              </button>
            </div>
          </form>
        </Drawer>
        <Drawer anchor="right" open={handuler}>
          <Box sx={{ width: "525px" }}>
            <Handular
              onclickhandulerFilter={onclickhandulerFilter}
              handuler={handuler}
              newHandler={newHandler}
              searchTickets={searchTickets}
              handulerList={handulerList}
              checkShow={checkShow}
              setCheckShow={setCheckShow}
              handulerChangeFilter={handulerChangeFilter}
              personName={personName}
              setPersonName={setPersonName}
              setHandulerData={setHandulerData}
            />
          </Box>
          <form onSubmit={selectHandlerFilter}>
            <div className="mbu-buttons-container">
              <button type="submit" className="Tsave-button">
                SAVE
              </button>

              <button
                type="submit"
                className="Tcancel-button"
                onClick={clearTheHanduler}
              >
                CLEAR ALL
              </button>
            </div>
          </form>
        </Drawer>
      </div>
    </div>
  );
};
export default Tickets;
