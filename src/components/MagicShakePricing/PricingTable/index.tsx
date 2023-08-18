import dropDownIcon from "../../../Assets/Icons/downArrowicon.svg";
import dropUpIcon from "../../../Assets/Icons/dropUpIcon.svg";
import { useNavigate } from "react-router-dom";

const bonousTableData = [
  {
    startDate: "June 25, 2022",
    reason: "General",
    mbu: "Graz, Austria",
    shakeOffer: "$5",
    spinwheel: "$13",
    owner: "David Smith",
  },
  {
    startDate: "June 25, 2022",
    reason: "General",
    mbu: "Graz, Austria",
    shakeOffer: "$5",
    spinwheel: "$13",
    owner: "David Smith",
  },
  {
    startDate: "June 25, 2022",
    reason: "General",
    mbu: "Graz, Austria",
    shakeOffer: "$5",
    spinwheel: "$13",
    owner: "David Smith",
  },
  {
    startDate: "June 25, 2022",
    reason: "General",
    mbu: "Graz, Austria",
    shakeOffer: "$5",
    spinwheel: "$13",
    owner: "David Smith",
  },
  {
    startDate: "June 25, 2022",
    reason: "General",
    mbu: "Graz, Austria",
    shakeOffer: "$5",
    spinwheel: "$13",
    owner: "David Smith",
  },
  {
    startDate: "June 25, 2022",
    reason: "General",
    mbu: "Graz, Austria",
    shakeOffer: "$5",
    spinwheel: "$13",
    owner: "David Smith",
  },
  {
    startDate: "June 25, 2022",
    reason: "General",
    mbu: "Graz, Austria",
    shakeOffer: "$5",
    spinwheel: "$13",
    owner: "David Smith",
  },
  {
    startDate: "June 25, 2022",
    reason: "General",
    mbu: "Graz, Austria",
    shakeOffer: "$5",
    spinwheel: "$13",
    owner: "David Smith",
  },
  {
    startDate: "June 25, 2022",
    reason: "General",
    mbu: "Graz, Austria",
    shakeOffer: "$5",
    spinwheel: "$13",
    owner: "David Smith",
  },
  {
    startDate: "June 25, 2022",
    reason: "General",
    mbu: "Graz, Austria",
    shakeOffer: "$5",
    spinwheel: "$13",
    owner: "David Smith",
  },
  {
    startDate: "June 25, 2022",
    reason: "General",
    mbu: "Graz, Austria",
    shakeOffer: "$5",
    spinwheel: "$13",
    owner: "David Smith",
  },
  {
    startDate: "June 25, 2022",
    reason: "General",
    mbu: "Graz, Austria",
    shakeOffer: "$5",
    spinwheel: "$13",
    owner: "David Smith",
  },
  {
    startDate: "June 25, 2022",
    reason: "General",
    mbu: "Graz, Austria",
    shakeOffer: "$5",
    spinwheel: "$13",
    owner: "David Smith",
  },
  {
    startDate: "June 25, 2022",
    reason: "General",
    mbu: "Graz, Austria",
    shakeOffer: "$5",
    spinwheel: "$13",
    owner: "David Smith",
  },
];

const PricingTable = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="business-table-container fixTableHead ">
        <table>
          <thead>
            <tr className="table-heading-bg-color">
              <th>
                <div className="table-head-container">
                  <p className="pricing-table-heading">Start Date</p>
                  <div className="up-and-down-arrow">
                    <img
                      src={dropUpIcon}
                      className="arrow-size-in-table"
                      alt="up arrow icon"
                    />
                    <img
                      src={dropDownIcon}
                      className="arrow-size-in-table"
                      alt="down arrow icon"
                    />
                  </div>
                </div>
              </th>
              <th>
                <div className="table-head-container">
                  <p className="pricing-table-heading">Reason</p>
                  <div className="up-and-down-arrow">
                    <img
                      src={dropUpIcon}
                      className="arrow-size-in-table"
                      alt="up arrow icon"
                    />
                    <img
                      src={dropDownIcon}
                      className="arrow-size-in-table"
                      alt="down arrow icon"
                    />
                  </div>
                </div>
              </th>
              <th>
                <div className="table-head-container">
                  <p className="pricing-table-heading">MBU</p>
                  <div className="up-and-down-arrow">
                    <img
                      src={dropUpIcon}
                      className="arrow-size-in-table"
                      alt="up arrow icon"
                    />
                    <img
                      src={dropDownIcon}
                      className="arrow-size-in-table"
                      alt="down arrow icon"
                    />
                  </div>
                </div>
              </th>
              <th>
                <div className="table-head-container">
                  <p className="pricing-table-heading">Shake offer</p>
                  <div className="up-and-down-arrow">
                    <img
                      src={dropUpIcon}
                      className="arrow-size-in-table"
                      alt="up arrow icon"
                    />
                    <img
                      src={dropDownIcon}
                      className="arrow-size-in-table"
                      alt="down arrow icon"
                    />
                  </div>
                </div>
              </th>
              <th>
                <div className="table-head-container">
                  <p className="pricing-table-heading">Spinwheel</p>
                  <div className="up-and-down-arrow">
                    <img
                      src={dropUpIcon}
                      className="arrow-size-in-table"
                      alt="up arrow icon"
                    />
                    <img
                      src={dropDownIcon}
                      className="arrow-size-in-table"
                      alt="down arrow icon"
                    />
                  </div>
                </div>
              </th>
              <th>
                <div className="table-head-container">
                  <p className="pricing-table-heading">Owner</p>
                  <div className="up-and-down-arrow">
                    <img
                      src={dropUpIcon}
                      className="arrow-size-in-table"
                      alt="up arrow icon"
                    />
                    <img
                      src={dropDownIcon}
                      className="arrow-size-in-table"
                      alt="down arrow icon"
                    />
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {bonousTableData.map((eachItem) => {
              return (
                <tr
                  onClick={() => navigate("/pricing/details")}
                  className="table-body-border"
                >
                  <td className="pricing-td">{eachItem.startDate}</td>

                  <td className="pricing-td">{eachItem.reason}</td>
                  <td className="pricing-td">{eachItem.mbu}</td>
                  <td className="pricing-td">{eachItem.shakeOffer}</td>
                  <td className="pricing-td">{eachItem.spinwheel}</td>
                  <td className="pricing-td">{eachItem.owner}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* <div className="pagination-container">
          <ThemeProvider theme={theme}>
            <Stack spacing={2}>
              <Pagination count={10} shape="rounded" color="primary" />
            </Stack>
          </ThemeProvider>
        </div> */}
      </div>
    </>
  );
};
export default PricingTable;
